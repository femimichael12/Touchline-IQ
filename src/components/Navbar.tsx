import React, { useState } from 'react';
import { Search, Menu, X, Moon, User } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string, params?: any) => void;
  onSearch: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      setIsMobileMenuOpen(false);
      setShowSearchInput(false);
    }
  };

  const navItems = [
    { name: 'Predictions', path: '/predictions' },
    { name: 'Matches', path: '/matches' },
    { name: 'Competitions', path: '/competitions' },
    { name: 'Results', path: '/results' },
    { name: 'Performance', path: '/performance' },
  ];

  const handleNavItemClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 bg-[#07111F]/95 backdrop-blur-sm border-b border-[#1A2A3E] h-16 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavItemClick('/')}
            className="flex items-center gap-2.5 cursor-pointer focus:outline-none group text-left"
          >
            {/* Minimal football-inspired emblem: clean geometric football pentagon outline with small green dot */}
            <div className="w-7 h-7 rounded bg-[#111F31] border border-[#22354D] flex items-center justify-center relative overflow-hidden group-hover:border-[#19C37D]/50 transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#F0F4F8]" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7l3 2v3.5l-3 2-3-2V9l3-2z" fill="#142437" stroke="#8FA0B5" strokeWidth="1.2" />
                <path d="M12 3v4M20 9l-5 0M17 19l-2-3.5M7 19l2-3.5M4 9l5 0" stroke="#8FA0B5" strokeWidth="1.2" />
              </svg>
              {/* Subtle green dot indicator */}
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
            </div>
            <div className="flex items-baseline tracking-tight">
              <span className="font-extrabold text-base tracking-wider text-[#F0F4F8]">
                TOUCHLINE <span className="text-[#19C37D]">IQ</span>
              </span>
            </div>
          </button>
        </div>

        {/* Center: Clean sports navigation links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavItemClick(item.path)}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wide rounded transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#19C37D] bg-[#111F31]'
                    : 'text-[#8FA0B5] hover:text-[#F0F4F8] hover:bg-[#111F31]/60'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Right: Search, Theme Toggle, Sign In */}
        <div className="hidden md:flex items-center gap-3">
          {/* Search bar */}
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            {showSearchInput ? (
              <div className="flex items-center gap-1.5 bg-[#111F31] border border-[#1E334D] rounded px-2.5 py-1.5 w-56 transition-all">
                <Search className="w-3.5 h-3.5 text-[#8FA0B5] shrink-0" />
                <input
                  type="text"
                  placeholder="Teams, matches, leagues..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs text-[#F0F4F8] placeholder-[#64748B] focus:outline-none w-full"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowSearchInput(false)}
                  className="text-[#64748B] hover:text-[#F0F4F8]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowSearchInput(true)}
                className="flex items-center gap-2 px-2.5 py-1.5 text-xs text-[#8FA0B5] hover:text-[#F0F4F8] hover:bg-[#111F31] rounded transition-colors border border-transparent hover:border-[#1E334D]"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden lg:inline text-[11px]">Search</span>
              </button>
            )}
          </form>

          {/* Theme Indicator/Toggle (clean, subtle dark sports aesthetic) */}
          <button
            type="button"
            className="w-8 h-8 rounded-full border border-[#1E334D] hover:border-[#2B4769] bg-[#0B1624] hover:bg-[#111F31] flex items-center justify-center text-[#8FA0B5] hover:text-[#F0F4F8] transition-all cursor-pointer shadow-xs"
            title="Dark mode active"
          >
            <Moon className="w-3.5 h-3.5" />
          </button>

          {/* Refined Sign In Button */}
          <button
            onClick={() => handleNavItemClick('/login')}
            className="group h-8 px-4 bg-gradient-to-b from-[#132236] to-[#0E1A29] hover:from-[#182C46] hover:to-[#122236] border border-[#203652] hover:border-[#2D4E75] text-[#F0F4F8] hover:text-white text-xs font-semibold rounded-full transition-all duration-150 flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <User className="w-3.5 h-3.5 text-[#19C37D] transition-transform duration-150 group-hover:scale-110" />
            <span className="tracking-wide">Sign In</span>
          </button>
        </div>

        {/* Mobile triggers */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setShowSearchInput(!showSearchInput)}
            className="p-2 text-[#8FA0B5] hover:text-[#F0F4F8] rounded border border-[#1A2A3E] bg-[#111F31]"
            aria-label="Toggle search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#8FA0B5] hover:text-[#F0F4F8] rounded border border-[#1A2A3E] bg-[#111F31]"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Input dropdown */}
      {showSearchInput && (
        <div className="md:hidden bg-[#0B1624] border-b border-[#1A2A3E] p-3">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <input
              type="text"
              placeholder="Search teams, competitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#111F31] border border-[#1E334D] text-xs text-[#F0F4F8] placeholder-[#64748B] rounded px-3 py-2 flex-grow focus:outline-none focus:border-[#19C37D]"
              autoFocus
            />
            <button
              type="submit"
              className="px-3.5 py-2 bg-[#142437] border border-[#223B5A] text-xs font-semibold text-[#F0F4F8] rounded"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-[#07111F]/98 backdrop-blur z-50 p-5 flex flex-col justify-between border-t border-[#1A2A3E]">
          <div className="space-y-3">
            <div className="text-[10px] font-bold text-[#8FA0B5] uppercase tracking-wider px-2">
              Navigation
            </div>
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavItemClick(item.path)}
                    className={`w-full text-left py-2.5 px-3 rounded text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#111F31] text-[#19C37D] border-l-2 border-[#19C37D]'
                        : 'text-[#8FA0B5] hover:text-[#F0F4F8] hover:bg-[#111F31]/60'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-[#1A2A3E] space-y-3">
            <button
              onClick={() => handleNavItemClick('/login')}
              className="w-full py-2.5 bg-gradient-to-b from-[#132236] to-[#0E1A29] hover:from-[#182C46] hover:to-[#122236] border border-[#203652] hover:border-[#2D4E75] text-center font-semibold text-xs text-[#F0F4F8] rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <User className="w-3.5 h-3.5 text-[#19C37D]" />
              <span className="tracking-wide">Sign In</span>
            </button>
            <p className="text-[11px] text-center text-[#64748B]">
              Statistical projections are mathematical estimates, not guarantees.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
