import React, { useState } from 'react';
import { MATCHES, COMPETITIONS } from '../data/mockFootball';
import { MatchCard } from '../components/MatchCard';
import { EmptyState } from '../components/EmptyState';

interface PredictionsProps {
  onNavigate: (path: string, params?: any) => void;
}

export const Predictions: React.FC<PredictionsProps> = ({ onNavigate }) => {
  const [selectedComp, setSelectedComp] = useState<string>('all');
  const [selectedDate, setSelectedDate] = useState<string>('Today');

  // Filter logic
  const filteredMatches = MATCHES.filter(m => {
    const compMatches = selectedComp === 'all' ? true : m.competitionId === selectedComp;
    const dateMatches = m.kickoffDate === selectedDate;
    const isUpcoming = m.status === 'upcoming';
    return compMatches && dateMatches && isUpcoming;
  });

  return (
    <div id="predictions-page" className="space-y-6 py-4">
      {/* Top Section header */}
      <div className="space-y-1 border-b border-[#1A2A3E] pb-4">
        <div className="flex items-center gap-2 text-xs text-[#19C37D] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
          <span className="uppercase tracking-wider text-[10px]">Statistical Projections</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#F0F4F8] tracking-tight">
          Match Predictions
        </h1>
        <p className="text-xs text-[#8FA0B5] max-w-2xl leading-relaxed">
          Comprehensive probability forecasts and market selections calculated from rolling performance data across top competitions.
        </p>
      </div>

      {/* Filter panel */}
      <div className="bg-[#0B1624] border border-[#1A2A3E] rounded-md p-3.5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <span className="text-[11px] font-bold text-[#8FA0B5] uppercase tracking-wider">
            Filter by Date & Competition
          </span>

          {/* Date Selector */}
          <div className="flex bg-[#111F31] p-0.5 rounded border border-[#1E334D] text-xs self-start sm:self-auto">
            {['Yesterday', 'Today', 'Tomorrow'].map((date) => {
              const isSelected = selectedDate === date;
              return (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#142437] text-[#F0F4F8] border border-[#223B5A]'
                      : 'text-[#8FA0B5] hover:text-[#F0F4F8]'
                  }`}
                >
                  {date}
                </button>
              );
            })}
          </div>
        </div>

        {/* Competition filter sports tabs */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedComp('all')}
            className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors border cursor-pointer ${
              selectedComp === 'all'
                ? 'bg-[#111F31] text-[#19C37D] border-[#1E334D]'
                : 'bg-[#0B1624] text-[#8FA0B5] border-[#162537] hover:text-[#F0F4F8] hover:border-[#1E334D]'
            }`}
          >
            All Leagues
          </button>
          {COMPETITIONS.map((comp) => {
            const isSelected = selectedComp === comp.id;
            return (
              <button
                key={comp.id}
                onClick={() => setSelectedComp(comp.id)}
                className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors border flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#111F31] text-[#19C37D] border-[#1E334D]'
                    : 'bg-[#0B1624] text-[#8FA0B5] border-[#162537] hover:text-[#F0F4F8] hover:border-[#1E334D]'
                }`}
              >
                <span>{comp.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Predictions grid display - Dense 4-column layout */}
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
        <div className="py-10 bg-[#0B1624] rounded-md border border-[#1A2A3E]">
          <EmptyState
            title={`No predictions found for ${selectedDate}`}
            description="No fixtures are scheduled for the selected league on this date."
            actionLabel="Reset Filters"
            onAction={() => {
              setSelectedComp('all');
              setSelectedDate('Today');
            }}
          />
        </div>
      )}
    </div>
  );
};
