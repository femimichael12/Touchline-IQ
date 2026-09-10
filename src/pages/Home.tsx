import React, { useState } from 'react';
import { MATCHES, COMPETITIONS } from '../data/mockFootball';
import { MatchCard } from '../components/MatchCard';
import { TeamLogo } from '../components/TeamLogo';
import { CompetitionLogo } from '../components/CompetitionLogo';
import { EmptyState } from '../components/EmptyState';
import stadiumHeroBg from '../assets/images/stadium_hero_bg_1789049795005.jpg';
import { 
  ArrowRight, 
  Calendar, 
  TrendingUp, 
  ShieldCheck, 
  Activity, 
  Target, 
  BarChart2, 
  Layers 
} from 'lucide-react';

interface HomeProps {
  onNavigate: (path: string, params?: any) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [selectedComp, setSelectedComp] = useState<string>('all');
  const [selectedDate, setSelectedDate] = useState<string>('Today');

  // Filtered matches (grid displays upcoming fixtures for the selected date)
  const filteredMatches = MATCHES.filter(m => {
    const compMatches = selectedComp === 'all' ? true : m.competitionId === selectedComp;
    const dateMatches = m.kickoffDate === selectedDate;
    const isUpcoming = m.status === 'upcoming';
    return compMatches && dateMatches && isUpcoming;
  });

  // Model Highlights (3-4 strongest statistical predictions)
  const modelHighlights = [
    {
      id: 'up_01',
      team: 'Manchester City',
      market: 'Home Win',
      confidence: 82,
      fixture: 'vs Real Madrid',
      competition: 'UEFA Champions League'
    },
    {
      id: 'up_02',
      team: 'Real Madrid',
      market: 'Over 1.5 Goals',
      confidence: 86,
      fixture: 'vs Atlético Madrid',
      competition: 'La Liga'
    },
    {
      id: 'up_03',
      team: 'Barcelona',
      market: 'Both Teams To Score',
      confidence: 73,
      fixture: 'vs Villarreal',
      competition: 'La Liga'
    },
    {
      id: 'up_05',
      team: 'Inter Milan',
      market: 'Double Chance (1X)',
      confidence: 79,
      fixture: 'vs Roma',
      competition: 'Serie A'
    }
  ];

  // How the predictions are calculated data items
  const trustFactors = [
    {
      title: 'TEAM FORM',
      description: 'Recent results and performance trends across domestic and continental fixtures.',
      icon: <Activity className="w-4 h-4 text-[#19C37D]" />
    },
    {
      title: 'HOME / AWAY',
      description: 'Home and away goal differentials, pitch familiarity, and crowd attendance coefficients.',
      icon: <Target className="w-4 h-4 text-[#4EA1FF]" />
    },
    {
      title: 'HEAD TO HEAD',
      description: 'Historical matchup records and tactical tendencies across the previous 5 seasons.',
      icon: <Layers className="w-4 h-4 text-[#19C37D]" />
    },
    {
      title: 'GOALS DATA',
      description: 'Scoring velocity, defensive concessions, clean sheet frequencies, and margin variances.',
      icon: <BarChart2 className="w-4 h-4 text-[#4EA1FF]" />
    },
    {
      title: 'LEAGUE DATA',
      description: 'Current league standings, matchweek context, relegation pressure, and title contention.',
      icon: <TrendingUp className="w-4 h-4 text-[#19C37D]" />
    },
    {
      title: 'EXPECTED GOALS (xG)',
      description: 'Shot quality assessment, probability of conversion, and underlying non-penalty xG metrics.',
      icon: <ShieldCheck className="w-4 h-4 text-[#4EA1FF]" />
    }
  ];

  return (
    <div id="home-page" className="space-y-14 py-4">
      {/* 1. EDITORIAL HERO & FEATURED MATCH WITH REALISTIC STADIUM BACKGROUND */}
      <section className="relative -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-12 md:pb-14 -mt-4 overflow-hidden">
        {/* Cinematic Stadium Pitch & Floodlights Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url(${stadiumHeroBg})`,
            backgroundPosition: 'center 42%',
          }}
          aria-hidden="true"
        >
          {/* Base dark navy atmosphere tint - lets stadium floodlights and pitch show through */}
          <div className="absolute inset-0 bg-[#07111F]/40" />

          {/* Directional gradient ensuring crisp contrast for headline and stats on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/90 via-[#07111F]/60 via-45% to-[#07111F]/15" />

          {/* Top subtle fade to blend with navbar */}
          <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#07111F] to-transparent" />

          {/* Seamless bottom fade into normal website background (no rectangular cutoffs) */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-b from-transparent via-[#07111F]/70 to-[#07111F]" />

          {/* Soft lateral edge fades */}
          <div className="absolute inset-y-0 left-0 w-6 sm:w-10 bg-gradient-to-r from-[#07111F] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-6 sm:w-10 bg-gradient-to-l from-[#07111F] to-transparent" />
        </div>

        {/* Hero Content Container - perfectly elevated above the background */}
        <div className="relative z-10 max-w-2xl lg:max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8FA0B5]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
            <span className="uppercase tracking-wider text-[11px] text-[#19C37D]">Football Intelligence Platform</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#F0F4F8] leading-[1.16] tracking-tight drop-shadow-md">
            Football predictions,<br />
            backed by real data.
          </h1>

          <p className="text-sm md:text-base text-[#8FA0B5] leading-relaxed max-w-xl">
            Statistical football analysis built from team form, historical performance, head-to-head records and match data.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => onNavigate('/predictions')}
              className="px-5 py-2.5 bg-[#19C37D] hover:bg-[#15A86B] text-[#07111F] font-bold text-xs rounded transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Explore Predictions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('/performance')}
              className="px-5 py-2.5 bg-[#111F31] hover:bg-[#182A40] border border-[#203652] text-[#F0F4F8] font-semibold text-xs rounded transition-colors cursor-pointer"
            >
              View Performance
            </button>
          </div>

          {/* Clean credibility stats */}
          <div className="pt-6 grid grid-cols-3 gap-6 border-t border-[#1A2A3E]/80 max-w-lg">
            <div>
              <span className="text-xl md:text-2xl font-bold text-[#F0F4F8] block">69.8%</span>
              <span className="text-[10px] text-[#8FA0B5] uppercase tracking-wider">Overall Accuracy</span>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold text-[#F0F4F8] block">1,284</span>
              <span className="text-[10px] text-[#8FA0B5] uppercase tracking-wider">Matches Audited</span>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold text-[#F0F4F8] block">7 Leagues</span>
              <span className="text-[10px] text-[#8FA0B5] uppercase tracking-wider">Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TODAY'S PREDICTIONS */}
      <section className="space-y-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-[#1A2A3E] pb-3">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#F0F4F8] tracking-tight">
              Today's Predictions
            </h2>
            <p className="text-xs text-[#8FA0B5] mt-0.5">
              Data-driven projections for today's fixtures.
            </p>
          </div>

          {/* Simple date tabs */}
          <div className="flex bg-[#0B1624] border border-[#1A2A3E] rounded p-0.5 text-xs self-start md:self-auto">
            {['Yesterday', 'Today', 'Tomorrow'].map((date) => {
              const isSelected = selectedDate === date;
              return (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#111F31] text-[#F0F4F8]'
                      : 'text-[#8FA0B5] hover:text-[#F0F4F8]'
                  }`}
                >
                  {date}
                </button>
              );
            })}
          </div>
        </div>

        {/* Competition Filters - Simple sports navigation tabs, not giant pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedComp('all')}
            className={`px-3.5 py-1.5 rounded text-xs font-semibold border whitespace-nowrap transition-colors cursor-pointer ${
              selectedComp === 'all'
                ? 'bg-[#111F31] text-[#19C37D] border-[#1E334D]'
                : 'bg-[#0B1624] text-[#8FA0B5] border-[#162537] hover:text-[#F0F4F8] hover:border-[#1E334D]'
            }`}
          >
            All
          </button>
          {COMPETITIONS.map((comp) => {
            const isSelected = selectedComp === comp.id;
            return (
              <button
                key={comp.id}
                onClick={() => setSelectedComp(comp.id)}
                className={`px-3 py-1.5 rounded text-xs font-semibold border whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#111F31] text-[#19C37D] border-[#1E334D]'
                    : 'bg-[#0B1624] text-[#8FA0B5] border-[#162537] hover:text-[#F0F4F8] hover:border-[#1E334D]'
                }`}
              >
                <CompetitionLogo competition={comp} size="xs" />
                <span>{comp.name}</span>
              </button>
            );
          })}
        </div>

        {/* Matches Grid - Dense 4-column layout on desktop */}
        {filteredMatches.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {filteredMatches.map((m) => (
              <MatchCard
                key={m.id}
                match={m}
                onViewAnalysis={(id) => onNavigate('/matches', { id })}
              />
            ))}
          </div>
        ) : (
          <div className="py-10 bg-[#0B1624] border border-[#1A2A3E] rounded-md">
            <EmptyState
              title={`No matches found for ${selectedDate}`}
              description="No fixtures are currently scheduled for this competition filter on the selected date."
              actionLabel="Reset Competition Filter"
              onAction={() => setSelectedComp('all')}
            />
          </div>
        )}
      </section>

      {/* 3. MODEL HIGHLIGHTS (Subtle, professional highlights without "AI" hype) */}
      <section className="bg-[#0B1624] border border-[#1A2A3E] rounded-lg p-5 md:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-[#162537] pb-3">
          <div>
            <h3 className="text-sm font-bold text-[#F0F4F8] uppercase tracking-wider">
              MODEL HIGHLIGHTS
            </h3>
            <p className="text-xs text-[#8FA0B5] mt-0.5">
              Strongest statistical probabilities identified across upcoming matches.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/predictions')}
            className="text-xs font-semibold text-[#4EA1FF] hover:text-[#70B4FF] flex items-center gap-1 cursor-pointer"
          >
            <span>All Projections</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {modelHighlights.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('/matches', { id: item.id })}
              className="bg-[#111F31] border border-[#1E334D] hover:border-[#2B4769] p-4 rounded-md flex flex-col justify-between gap-3 cursor-pointer transition-colors group"
            >
              <div className="flex items-center justify-between text-[10px] text-[#8FA0B5] font-semibold uppercase tracking-wider">
                <div className="flex items-center gap-1.5 min-w-0 max-w-[170px]">
                  <CompetitionLogo competition={item.competition} size="xs" />
                  <span className="truncate">{item.competition}</span>
                </div>
                <span className="text-[#19C37D] font-bold">{item.confidence}%</span>
              </div>

              <div className="flex items-center gap-3">
                <TeamLogo team={item.team} size="highlight" />
                <div className="min-w-0">
                  <span className="text-sm font-bold text-[#F0F4F8] group-hover:text-[#4EA1FF] transition-colors block truncate">
                    {item.team}
                  </span>
                  <span className="text-xs font-medium text-[#19C37D] block truncate">
                    {item.market}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#64748B] border-t border-[#162537] pt-2">
                <span>{item.fixture}</span>
                <span className="text-[10px] font-semibold text-[#8FA0B5]">Details →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STATISTICS / TRUST SECTION: "How the predictions are calculated" */}
      <section className="border-t border-[#1A2A3E] pt-12 space-y-6">
        <div className="max-w-xl space-y-1">
          <h2 className="text-xl md:text-2xl font-bold text-[#F0F4F8] tracking-tight">
            How the predictions are calculated
          </h2>
          <p className="text-xs text-[#8FA0B5] leading-relaxed">
            Touchline IQ models probability by combining historical data, tactical parameters, and contextual football metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustFactors.map((factor, index) => (
            <div
              key={index}
              className="bg-[#0B1624] border border-[#1A2A3E] p-4 rounded-md space-y-2 hover:border-[#223B5A] transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded bg-[#111F31] border border-[#1C2E46]">
                  {factor.icon}
                </div>
                <h3 className="text-xs font-bold text-[#F0F4F8] tracking-wider">
                  {factor.title}
                </h3>
              </div>
              <p className="text-xs text-[#8FA0B5] leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
