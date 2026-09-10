import React from 'react';
import { Match } from '../types/football';
import { TeamLogo } from './TeamLogo';
import { CompetitionLogo } from './CompetitionLogo';
import { ArrowRight } from 'lucide-react';

interface MatchCardProps {
  match: Match;
  onViewAnalysis: (matchId: string) => void;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match, onViewAnalysis }) => {
  const isAvailable = match.aiPrediction !== 'Prediction Unavailable';

  return (
    <div
      id={`match-card-${match.id}`}
      onClick={() => onViewAnalysis(match.id)}
      className="bg-[#111F31] border border-[#1E334D] hover:border-[#2B4769] rounded-md p-3.5 flex flex-col justify-between transition-all duration-150 cursor-pointer group text-left"
    >
      {/* 1. Header: Competition & Kickoff Time */}
      <div className="flex items-center justify-between text-[11px] pb-2.5 border-b border-[#1A2C42] text-[#8FA0B5]">
        <div className="flex items-center gap-1.5 min-w-0 max-w-[150px]">
          <CompetitionLogo competition={match.competitionName} size="xs" />
          <span className="font-bold uppercase tracking-wider truncate">
            {match.competitionName}
          </span>
        </div>
        <span className="font-medium text-[#8FA0B5] shrink-0 font-mono">
          {match.kickoffDate === 'Today' ? match.kickoffTime : `${match.kickoffDate} · ${match.kickoffTime}`}
        </span>
      </div>

      {/* 2. Teams Section: The most visually important part of each card */}
      <div className="py-2.5">
        <div className="grid grid-cols-5 items-center gap-1.5">
          {/* Home Team */}
          <div className="col-span-2 flex flex-col items-center text-center min-w-0">
            <span
              className="text-xs font-semibold text-[#F0F4F8] truncate w-full mb-1.5 leading-tight group-hover:text-[#4EA1FF] transition-colors"
              title={match.homeTeam.name}
            >
              {match.homeTeam.name}
            </span>
            <TeamLogo team={match.homeTeam} size="md" />
          </div>

          {/* VS Divider */}
          <div className="col-span-1 flex items-center justify-center">
            <span className="text-[11px] font-bold text-[#4B5E76] uppercase tracking-wider">
              VS
            </span>
          </div>

          {/* Away Team */}
          <div className="col-span-2 flex flex-col items-center text-center min-w-0">
            <span
              className="text-xs font-semibold text-[#F0F4F8] truncate w-full mb-1.5 leading-tight group-hover:text-[#4EA1FF] transition-colors"
              title={match.awayTeam.name}
            >
              {match.awayTeam.name}
            </span>
            <TeamLogo team={match.awayTeam} size="md" />
          </div>
        </div>
      </div>

      {/* 3. Prediction & Confidence: The Main Result */}
      <div className="pt-2.5 pb-2 border-t border-[#1A2C42] flex flex-col items-center text-center">
        <span className="text-[9px] font-bold uppercase tracking-widest text-[#8FA0B5]">
          PREDICTION
        </span>

        {isAvailable ? (
          <>
            <span className="text-xs sm:text-sm font-bold text-[#F0F4F8] mt-0.5 leading-snug px-1">
              {match.aiPrediction}
            </span>

            {match.marketBadge && (
              <span className="mt-1 inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#0B1624] text-[#4EA1FF] border border-[#1A2C42]">
                {match.marketBadge}
              </span>
            )}

            <div className="mt-1.5 text-xs font-medium text-[#8FA0B5]">
              Confidence <span className="font-bold text-[#19C37D]">{match.confidence}%</span>
            </div>
          </>
        ) : (
          <div className="py-2 text-[11px] text-[#64748B]">
            Insufficient Data
          </div>
        )}
      </div>

      {/* 4. Action: View Analysis → */}
      <div className="pt-2 border-t border-[#162537] flex items-center justify-center">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onViewAnalysis(match.id);
          }}
          className="text-[11px] font-semibold text-[#4EA1FF] group-hover:text-[#70B4FF] inline-flex items-center gap-1 transition-colors cursor-pointer py-0.5"
        >
          <span>View Analysis</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
