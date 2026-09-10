import React, { useState } from 'react';
import { MATCHES, COMPETITIONS } from '../data/mockFootball';
import { MatchCard } from '../components/MatchCard';
import { EmptyState } from '../components/EmptyState';
import { Search } from 'lucide-react';

interface MatchesProps {
  onNavigate: (path: string, params?: any) => void;
}

export const Matches: React.FC<MatchesProps> = ({ onNavigate }) => {
  const [searchTeam, setSearchTeam] = useState('');
  const [selectedComp, setSelectedComp] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');
  const [selectedConfidence, setSelectedConfidence] = useState('all');

  // Multi-tier filtering
  const filteredMatches = MATCHES.filter(m => {
    // Only upcoming matches
    if (m.status !== 'upcoming') return false;

    // Search input
    const matchSearch = searchTeam.trim() === '' || 
      m.homeTeam.name.toLowerCase().includes(searchTeam.toLowerCase()) ||
      m.awayTeam.name.toLowerCase().includes(searchTeam.toLowerCase());

    // Competition
    const compMatch = selectedComp === 'all' || m.competitionId === selectedComp;

    // Date
    const dateMatch = selectedDate === 'all' || m.kickoffDate === selectedDate;

    // Confidence
    const confidenceMatch = selectedConfidence === 'all' || m.confidenceLevel === selectedConfidence;

    return matchSearch && compMatch && dateMatch && confidenceMatch;
  });

  // Grouped matches
  const todayMatches = filteredMatches.filter(m => m.kickoffDate === 'Today');
  const tomorrowMatches = filteredMatches.filter(m => m.kickoffDate === 'Tomorrow');
  const thisWeekMatches = filteredMatches.filter(m => m.kickoffDate === 'This Week');

  return (
    <div id="matches-schedule-page" className="space-y-6 py-4">
      {/* Header */}
      <div className="space-y-1 border-b border-[#1A2A3E] pb-4">
        <div className="flex items-center gap-2 text-xs text-[#19C37D] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
          <span className="uppercase tracking-wider text-[10px]">Fixtures Schedule</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#F0F4F8] tracking-tight">
          Matches & Fixtures
        </h1>
        <p className="text-xs text-[#8FA0B5]">
          Browse fixtures across Europe's top domestic and continental competitions with model forecasts.
        </p>
      </div>

      {/* Advanced Filters Panel */}
      <div className="bg-[#0B1624] border border-[#1A2A3E] rounded-md p-4 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Team Search */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#8FA0B5] uppercase tracking-wider block">Search Team</label>
            <div className="relative flex items-center">
              <Search className="absolute left-2.5 w-3.5 h-3.5 text-[#64748B]" />
              <input
                type="text"
                placeholder="e.g. Manchester City, Real Madrid..."
                value={searchTeam}
                onChange={(e) => setSearchTeam(e.target.value)}
                className="w-full bg-[#111F31] border border-[#1E334D] focus:border-[#19C37D] rounded px-3 py-1.5 pl-8 text-xs text-[#F0F4F8] focus:outline-none placeholder-[#64748B] transition-colors"
              />
            </div>
          </div>

          {/* League Dropdown */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#8FA0B5] uppercase tracking-wider block">Leagues</label>
            <select
              value={selectedComp}
              onChange={(e) => setSelectedComp(e.target.value)}
              className="w-full bg-[#111F31] border border-[#1E334D] rounded px-3 py-1.5 text-xs text-[#F0F4F8] focus:outline-none focus:border-[#19C37D] transition-colors cursor-pointer"
            >
              <option value="all">All Competitions</option>
              {COMPETITIONS.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Date Selector */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#8FA0B5] uppercase tracking-wider block">Date</label>
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-[#111F31] border border-[#1E334D] rounded px-3 py-1.5 text-xs text-[#F0F4F8] focus:outline-none focus:border-[#19C37D] transition-colors cursor-pointer"
            >
              <option value="all">All Dates</option>
              <option value="Today">Today</option>
              <option value="Tomorrow">Tomorrow</option>
              <option value="This Week">Later This Week</option>
            </select>
          </div>

          {/* Model Confidence */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#8FA0B5] uppercase tracking-wider block">Confidence</label>
            <select
              value={selectedConfidence}
              onChange={(e) => setSelectedConfidence(e.target.value)}
              className="w-full bg-[#111F31] border border-[#1E334D] rounded px-3 py-1.5 text-xs text-[#F0F4F8] focus:outline-none focus:border-[#19C37D] transition-colors cursor-pointer"
            >
              <option value="all">All Confidence Levels</option>
              <option value="HIGH">High Confidence</option>
              <option value="MEDIUM">Medium Confidence</option>
              <option value="LOW">Moderate / Low Confidence</option>
            </select>
          </div>
        </div>
      </div>

      {/* Fixture Sections (Today, Tomorrow, This Week) */}
      {filteredMatches.length > 0 ? (
        <div className="space-y-8">
          {/* Today */}
          {todayMatches.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#19C37D] border-l-2 border-[#19C37D] pl-2.5">
                <span>TODAY'S FIXTURES</span>
                <span className="text-[#8FA0B5] font-normal">({todayMatches.length})</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {todayMatches.map(m => (
                  <MatchCard key={m.id} match={m} onViewAnalysis={(id) => onNavigate('/matches', { id })} />
                ))}
              </div>
            </div>
          )}

          {/* Tomorrow */}
          {tomorrowMatches.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F0F4F8] border-l-2 border-[#1E334D] pl-2.5">
                <span>TOMORROW'S FIXTURES</span>
                <span className="text-[#8FA0B5] font-normal">({tomorrowMatches.length})</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tomorrowMatches.map(m => (
                  <MatchCard key={m.id} match={m} onViewAnalysis={(id) => onNavigate('/matches', { id })} />
                ))}
              </div>
            </div>
          )}

          {/* This Week */}
          {thisWeekMatches.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F0F4F8] border-l-2 border-[#1E334D] pl-2.5">
                <span>LATER THIS WEEK</span>
                <span className="text-[#8FA0B5] font-normal">({thisWeekMatches.length})</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {thisWeekMatches.map(m => (
                  <MatchCard key={m.id} match={m} onViewAnalysis={(id) => onNavigate('/matches', { id })} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="py-10 bg-[#0B1624] rounded-md border border-[#1A2A3E]">
          <EmptyState
            title="No Matches Found"
            description="Adjust your search query or filter parameters to locate available fixtures."
            actionLabel="Clear Filters"
            onAction={() => {
              setSearchTeam('');
              setSelectedComp('all');
              setSelectedDate('all');
              setSelectedConfidence('all');
            }}
          />
        </div>
      )}
    </div>
  );
};
