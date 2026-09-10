import React, { useState } from 'react';
import { MATCHES } from '../data/mockFootball';
import { TeamLogo } from '../components/TeamLogo';
import { EmptyState } from '../components/EmptyState';
import { CheckCircle2, XCircle } from 'lucide-react';

interface ResultsProps {
  onNavigate: (path: string, params?: any) => void;
}

export const Results: React.FC<ResultsProps> = ({ onNavigate }) => {
  const [filterType, setFilterType] = useState<'all' | 'correct' | 'incorrect'>('all');

  // Completed matches from mock list
  const completedMatches = MATCHES.filter(m => m.status === 'completed');

  // Stats
  const totalCount = completedMatches.length;
  const correctCount = completedMatches.filter(m => m.resultStatus === 'correct').length;
  const incorrectCount = completedMatches.filter(m => m.resultStatus === 'incorrect').length;
  const overallPct = totalCount > 0 ? ((correctCount / totalCount) * 100).toFixed(1) : '0.0';

  // Apply filters
  const filteredMatches = completedMatches.filter(m => {
    if (filterType === 'all') return true;
    return m.resultStatus === filterType;
  });

  return (
    <div id="prediction-results-archive-page" className="space-y-6 py-4">
      {/* Header */}
      <div className="space-y-1 border-b border-[#1A2A3E] pb-4">
        <div className="flex items-center gap-2 text-xs text-[#19C37D] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
          <span className="uppercase tracking-wider text-[10px]">Verification Archive</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#F0F4F8] tracking-tight">
          Prediction Results
        </h1>
        <p className="text-xs text-[#8FA0B5]">
          Transparent archive of historical match projections compared directly against official final scores.
        </p>
      </div>

      {/* Accuracy Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-[#0B1624] p-4 rounded-md border border-[#1A2A3E]">
        <div className="space-y-0.5">
          <span className="text-[10px] font-semibold text-[#8FA0B5] uppercase block">Historical Accuracy</span>
          <span className="text-xl md:text-2xl font-bold text-[#19C37D]">{overallPct}%</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-[10px] font-semibold text-[#8FA0B5] uppercase block">Audited Fixtures</span>
          <span className="text-xl md:text-2xl font-bold text-[#F0F4F8]">{totalCount}</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-[10px] font-semibold text-[#8FA0B5] uppercase block">Correct Outcomes</span>
          <span className="text-xl md:text-2xl font-bold text-[#19C37D]">{correctCount}</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-[10px] font-semibold text-[#8FA0B5] uppercase block">Incorrect Outcomes</span>
          <span className="text-xl md:text-2xl font-bold text-[#8FA0B5]">{incorrectCount}</span>
        </div>
      </div>

      {/* Filter tab buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1A2A3E] pb-2 text-xs">
        <div className="flex gap-1.5 bg-[#0B1624] p-0.5 rounded border border-[#1A2A3E]">
          {[
            { id: 'all', label: 'All Audited' },
            { id: 'correct', label: 'Correct' },
            { id: 'incorrect', label: 'Incorrect' },
          ].map((tab) => {
            const isSelected = filterType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id as any)}
                className={`px-3 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#111F31] text-[#F0F4F8] border border-[#1E334D]'
                    : 'text-[#8FA0B5] hover:text-[#F0F4F8]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        
        <span className="text-[11px] text-[#8FA0B5]">
          Showing {filteredMatches.length} recorded fixtures
        </span>
      </div>

      {/* Results Listings */}
      {filteredMatches.length > 0 ? (
        <div className="bg-[#111F31] border border-[#1E334D] rounded-lg overflow-hidden divide-y divide-[#1A2C42]">
          {filteredMatches.map((m) => {
            const isCorrect = m.resultStatus === 'correct';
            
            return (
              <div 
                key={m.id} 
                className="p-4 flex flex-col lg:flex-row items-center justify-between gap-4 hover:bg-[#142437]/40 transition-colors"
              >
                {/* Competition details */}
                <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className="text-[11px] font-bold text-[#8FA0B5] uppercase tracking-wider">{m.competitionName}</span>
                  <span className="text-[11px] text-[#64748B]">{m.kickoffTime}</span>
                </div>

                {/* Score vs predicted */}
                <div className="w-full lg:w-2/4 flex flex-col sm:flex-row justify-center items-center gap-4">
                  {/* Real outcome */}
                  <div className="flex items-center gap-2.5 justify-center">
                    <span className="font-semibold text-xs text-[#F0F4F8] text-right w-24 truncate">{m.homeTeam.name}</span>
                    <TeamLogo team={m.homeTeam} size="xs" />
                    <span className="font-mono bg-[#0B1624] border border-[#1A2C42] px-2.5 py-1 text-[#F0F4F8] rounded font-bold text-center text-xs">
                      {m.actualScore?.home} — {m.actualScore?.away}
                    </span>
                    <TeamLogo team={m.awayTeam} size="xs" />
                    <span className="font-semibold text-xs text-[#F0F4F8] text-left w-24 truncate">{m.awayTeam.name}</span>
                  </div>

                  <div className="h-4 w-px bg-[#1A2C42] hidden sm:block" />

                  {/* Prediction confidence */}
                  <div className="text-center sm:text-left text-xs bg-[#0B1624] px-2.5 py-1 rounded border border-[#1A2C42]">
                    <span className="text-[10px] text-[#8FA0B5] block">Confidence</span>
                    <span className="font-bold text-[#19C37D] font-mono">{m.confidence}%</span>
                  </div>
                </div>

                {/* Accuracy Status */}
                <div className="w-full lg:w-1/4 flex items-center justify-center lg:justify-end gap-3">
                  <div className="text-right">
                    <span className="text-[10px] text-[#8FA0B5] block">Prediction</span>
                    <span className="font-bold text-[#F0F4F8] text-xs">{m.aiPrediction}</span>
                  </div>

                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1 bg-[#112720] border border-[#1B4D3E] text-[#19C37D] font-semibold text-[11px] px-2.5 py-1 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Correct</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 bg-[#2A161A] border border-[#4A2026] text-[#FF5A65] font-semibold text-[11px] px-2.5 py-1 rounded">
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Missed</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-8 bg-[#0B1624] rounded-md border border-[#1A2A3E]">
          <EmptyState 
            title="No matches found"
            description="Adjust your selection to display archived prediction results."
            actionLabel="View All"
            onAction={() => setFilterType('all')}
          />
        </div>
      )}
    </div>
  );
};
