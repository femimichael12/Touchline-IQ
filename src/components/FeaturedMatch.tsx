import React from 'react';
import { Match } from '../types/football';
import { TeamLogo } from './TeamLogo';
import { CompetitionLogo } from './CompetitionLogo';
import { ArrowRight } from 'lucide-react';

interface FeaturedMatchProps {
  match: Match;
  onViewAnalysis: (matchId: string) => void;
}

export const FeaturedMatch: React.FC<FeaturedMatchProps> = ({ match, onViewAnalysis }) => {
  return (
    <div
      id="featured-match"
      onClick={() => onViewAnalysis(match.id)}
      className="bg-[#111F31] border border-[#1E334D] hover:border-[#284263] rounded-md p-4 sm:p-5 transition-all cursor-pointer group text-left"
    >
      {/* Top Bar: Featured Match + Competition */}
      <div className="flex items-center justify-between border-b border-[#1A2C42] pb-2.5 mb-3 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#19C37D]">
            FEATURED MATCH
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <CompetitionLogo competition={match.competitionName} size="xs" />
          <span className="text-[11px] font-semibold text-[#8FA0B5] uppercase tracking-wider font-mono">
            {match.competitionName}
          </span>
        </div>
      </div>

      {/* Teams Display */}
      <div className="py-2.5">
        <div className="grid grid-cols-5 items-center gap-2">
          {/* Home Team */}
          <div className="col-span-2 flex flex-col items-center text-center min-w-0">
            <span className="text-xs sm:text-sm font-bold text-[#F0F4F8] truncate w-full mb-2 group-hover:text-[#4EA1FF] transition-colors" title={match.homeTeam.name}>
              {match.homeTeam.name}
            </span>
            <TeamLogo team={match.homeTeam} size="highlight" />
          </div>

          {/* Center VS & Kickoff */}
          <div className="col-span-1 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">vs</span>
            <span className="text-xs font-mono font-bold text-[#F0F4F8] bg-[#0B1624] px-2 py-0.5 rounded border border-[#1A2C42] mt-1">
              {match.kickoffTime}
            </span>
          </div>

          {/* Away Team */}
          <div className="col-span-2 flex flex-col items-center text-center min-w-0">
            <span className="text-xs sm:text-sm font-bold text-[#F0F4F8] truncate w-full mb-2 group-hover:text-[#4EA1FF] transition-colors" title={match.awayTeam.name}>
              {match.awayTeam.name}
            </span>
            <TeamLogo team={match.awayTeam} size="highlight" />
          </div>
        </div>
      </div>

      {/* Prediction & Confidence Block */}
      <div className="mt-3 pt-3 border-t border-[#1A2C42] flex flex-col items-center text-center">
        <span className="text-[9px] font-bold text-[#8FA0B5] uppercase tracking-widest">
          PREDICTION
        </span>
        <div className="text-sm sm:text-base font-bold text-[#F0F4F8] mt-0.5">
          {match.aiPrediction}
        </div>
        {match.marketBadge && (
          <span className="mt-1 inline-block text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#0B1624] text-[#4EA1FF] border border-[#1A2C42]">
            {match.marketBadge}
          </span>
        )}
        <div className="mt-2 text-xs font-medium text-[#8FA0B5]">
          Confidence <span className="font-bold text-[#19C37D]">{match.confidence}%</span>
        </div>
      </div>

      {/* View Full Analysis action */}
      <div className="mt-3 pt-2.5 border-t border-[#162537] flex items-center justify-center">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onViewAnalysis(match.id);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4EA1FF] group-hover:text-[#70B4FF] transition-colors cursor-pointer"
        >
          <span>View Full Analysis</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
