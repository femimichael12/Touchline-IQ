import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { Predictions } from './pages/Predictions';
import { Matches } from './pages/Matches';
import { MatchDetail } from './pages/MatchDetail';
import { Competitions } from './pages/Competitions';
import { CompetitionDetail } from './pages/CompetitionDetail';
import { Results } from './pages/Results';
import { Performance } from './pages/Performance';
import { Search } from './pages/Search';
import { Auth } from './pages/Auth';

// Mock Data
import { getMatchById } from './data/mockFootball';

interface RouteState {
  path: string;
  params?: Record<string, any>;
}

export default function App() {
  // Simple state router: matches path and query parameters
  const [route, setRoute] = useState<RouteState>({ path: '/' });
  const [history, setHistory] = useState<RouteState[]>([{ path: '/' }]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const handleNavigate = (path: string, params?: Record<string, any>) => {
    const newRoute = { path, params };
    setRoute(newRoute);
    setHistory((prev) => [...prev, newRoute]);
  };

  const handleBack = () => {
    if (history.length > 1) {
      const nextHistory = [...history];
      nextHistory.pop(); // Remove current
      const lastRoute = nextHistory[nextHistory.length - 1];
      setRoute(lastRoute);
      setHistory(nextHistory);
    } else {
      setRoute({ path: '/' });
    }
  };

  const handleSearch = (query: string) => {
    handleNavigate('/search', { query });
  };

  return (
    <div id="touchline-iq-application" className="min-h-screen flex flex-col bg-[#07111F] text-[#F0F4F8] font-sans selection:bg-[#19C37D] selection:text-[#07111F]">
      {/* Global Navigation Bar */}
      <Navbar
        currentPath={route.path}
        onNavigate={handleNavigate}
        onSearch={handleSearch}
      />

      {/* Main Content Layout */}
      <main className="flex-grow z-10 pt-20 md:pt-22 pb-16 px-4 md:px-8 max-w-7xl w-full mx-auto">
        {/* State-Based Router Switch */}
        {(() => {
          switch (route.path) {
            case '/':
              return <Home onNavigate={handleNavigate} />;
            
            case '/predictions':
              return <Predictions onNavigate={handleNavigate} />;
            
            case '/matches':
              // If match details ID is requested, route directly to details
              if (route.params?.id) {
                const activeMatch = getMatchById(route.params.id);
                return (
                  <MatchDetail
                    match={activeMatch}
                    onBack={handleBack}
                    onNavigate={handleNavigate}
                  />
                );
              }
              return <Matches onNavigate={handleNavigate} />;
            
            case '/competitions':
              return <Competitions onNavigate={handleNavigate} />;
            
            case '/results':
              return <Results onNavigate={handleNavigate} />;
            
            case '/performance':
              return <Performance onNavigate={handleNavigate} />;
            
            case '/search':
              return (
                <Search
                  query={route.params?.query || ''}
                  onNavigate={handleNavigate}
                />
              );
            
            case '/login':
              return <Auth initialMode="signin" onNavigate={handleNavigate} />;
            
            case '/signup':
              return <Auth initialMode="signup" onNavigate={handleNavigate} />;
            
            default:
              // Custom route parameters for subpages e.g. /competitions/:id
              if (route.path.startsWith('/competitions/')) {
                const compId = route.params?.id;
                return (
                  <CompetitionDetail
                    id={compId}
                    onBack={handleBack}
                    onNavigate={handleNavigate}
                  />
                );
              }
              // Fallback Home
              return <Home onNavigate={handleNavigate} />;
          }
        })()}
      </main>

      {/* Global Slogan & Disclaimer Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
