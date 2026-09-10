import React, { useState } from 'react';
import { COMPETITIONS, MATCHES, TEAMS } from '../data/mockFootball';
import { MatchCard } from '../components/MatchCard';
import { EmptyState } from '../components/EmptyState';
import { TeamBadge } from '../components/TeamBadge';
import { ChevronLeft } from 'lucide-react';

interface CompetitionDetailProps {
  id: string | undefined;
  onBack: () => void;
  onNavigate: (path: string, params?: any) => void;
}

export const CompetitionDetail: React.FC<CompetitionDetailProps> = ({ id, onBack, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'table' | 'results'>('upcoming');

  const comp = COMPETITIONS.find(c => c.id === id);

  if (!comp) {
    return (
      <div className="py-12">
        <EmptyState 
          title="Competition profile not found"
          description="We couldn't locate any active records for this competition ID."
          actionLabel="Back to Competitions"
          onAction={onBack}
        />
      </div>
    );
  }

  // Get competition matches
  const compUpcoming = MATCHES.filter(m => m.competitionId === comp.id && m.status === 'upcoming');
  const compCompleted = MATCHES.filter(m => m.competitionId === comp.id && m.status === 'completed');

  const formColorClass = (letter: string) => {
    if (letter === 'W') return 'bg-[#112720] text-[#19C37D] border-[#1B4D3E]';
    if (letter === 'L') return 'bg-[#2A161A] text-[#FF5A65] border-[#4A2026]';
    return 'bg-[#182332] text-[#8FA0B5] border-[#253950]';
  };

  return (
    <div id={`competition-detail-${comp.id}`} className="space-y-6 py-4">
      {/* Back button & Title Header */}
      <div className="space-y-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1 text-xs text-[#8FA0B5] hover:text-[#F0F4F8] transition-colors font-semibold cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Competitions</span>
        </button>

        <div className="bg-[#111F31] border border-[#1E334D] rounded-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded bg-[#0B1624] border border-[#1A2C42] flex items-center justify-center text-2xl">
              {comp.logo}
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#F0F4F8] tracking-tight">{comp.name}</h1>
              <p className="text-xs text-[#8FA0B5] mt-0.5">
                Season {comp.season}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-[#0B1624] border border-[#1A2C42] px-4 py-2 rounded">
            <div className="text-center">
              <span className="text-[10px] font-semibold text-[#8FA0B5] uppercase block">Accuracy</span>
              <span className="text-base font-bold text-[#19C37D]">{comp.predictionAccuracy}%</span>
            </div>
            <div className="h-5 w-px bg-[#1A2C42]" />
            <div className="text-center">
              <span className="text-[10px] font-semibold text-[#8FA0B5] uppercase block">Audited</span>
              <span className="text-base font-bold text-[#F0F4F8]">{comp.totalMatchesPredicted}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="flex border-b border-[#1A2A3E] gap-2 overflow-x-auto text-xs">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`py-2 px-3 font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'upcoming'
              ? 'text-[#19C37D] border-[#19C37D]'
              : 'text-[#8FA0B5] border-transparent hover:text-[#F0F4F8]'
          }`}
        >
          Upcoming Predictions ({compUpcoming.length})
        </button>

        <button
          onClick={() => setActiveTab('table')}
          className={`py-2 px-3 font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'table'
              ? 'text-[#19C37D] border-[#19C37D]'
              : 'text-[#8FA0B5] border-transparent hover:text-[#F0F4F8]'
          }`}
        >
          League Standings
        </button>

        <button
          onClick={() => setActiveTab('results')}
          className={`py-2 px-3 font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'results'
              ? 'text-[#19C37D] border-[#19C37D]'
              : 'text-[#8FA0B5] border-transparent hover:text-[#F0F4F8]'
          }`}
        >
          Past Results ({compCompleted.length})
        </button>
      </div>

      {/* TAB 1: UPCOMING PREDICTIONS */}
      {activeTab === 'upcoming' && (
        <div>
          {compUpcoming.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {compUpcoming.map((m) => (
                <MatchCard key={m.id} match={m} onViewAnalysis={(id) => onNavigate('/matches', { id })} />
              ))}
            </div>
          ) : (
            <div className="py-8 bg-[#0B1624] border border-[#1A2A3E] rounded-md">
              <EmptyState
                title="No Upcoming Fixtures"
                description="All scheduled fixtures for this competition have concluded or are pending round confirmation."
                actionLabel="View Other Competitions"
                onAction={onBack}
              />
            </div>
          )}
        </div>
      )}

      {/* TAB 2: STANDINGS TABLE */}
      {activeTab === 'table' && (
        <div className="bg-[#111F31] border border-[#1E334D] rounded-lg overflow-hidden">
          <div className="p-4 border-b border-[#1A2C42] flex justify-between items-center">
            <h3 className="text-xs font-bold text-[#F0F4F8] uppercase tracking-wider">
              Current Standings · {comp.name}
            </h3>
            <span className="text-[10px] text-[#8FA0B5]">Matchweek 5</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0B1624] text-[10px] font-semibold text-[#8FA0B5] uppercase border-b border-[#1A2C42]">
                <tr>
                  <th className="py-2.5 px-3">#</th>
                  <th className="py-2.5 px-3">Club</th>
                  <th className="py-2.5 px-3 text-center">MP</th>
                  <th className="py-2.5 px-3 text-center">W</th>
                  <th className="py-2.5 px-3 text-center">D</th>
                  <th className="py-2.5 px-3 text-center">L</th>
                  <th className="py-2.5 px-3 text-center">GF</th>
                  <th className="py-2.5 px-3 text-center">GA</th>
                  <th className="py-2.5 px-3 text-center">GD</th>
                  <th className="py-2.5 px-3 text-center">Pts</th>
                  <th className="py-2.5 px-3 text-center">Form</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A2C42]">
                {(comp.table || []).map((row) => {
                  const teamObj = Object.values(TEAMS).find(t => t.name.toLowerCase() === row.team.toLowerCase()) || {
                    name: row.team,
                    code: row.team.slice(0, 3).toUpperCase(),
                    logoColor: '#142437',
                    logoText: row.team.slice(0, 3).toUpperCase()
                  };
                  return (
                    <tr key={row.position} className="hover:bg-[#142437]/50 transition-colors">
                      <td className="py-2.5 px-3 font-mono font-semibold text-[#8FA0B5]">
                        {row.position}
                      </td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-2">
                          <TeamBadge team={teamObj} size="sm" showName={false} />
                          <span className="font-semibold text-[#F0F4F8]">{row.team}</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-center text-[#8FA0B5] font-mono">{row.played}</td>
                      <td className="py-2.5 px-3 text-center text-[#8FA0B5] font-mono">{row.won}</td>
                      <td className="py-2.5 px-3 text-center text-[#8FA0B5] font-mono">{row.drawn}</td>
                      <td className="py-2.5 px-3 text-center text-[#8FA0B5] font-mono">{row.lost}</td>
                      <td className="py-2.5 px-3 text-center text-[#8FA0B5] font-mono">{row.goalsFor}</td>
                      <td className="py-2.5 px-3 text-center text-[#8FA0B5] font-mono">{row.goalsAgainst}</td>
                      <td className="py-2.5 px-3 text-center font-mono font-semibold text-[#F0F4F8]">
                        {row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono font-bold text-[#F0F4F8] bg-[#0B1624]/40">
                        {row.points}
                      </td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center justify-center gap-1">
                          {row.form.map((f, fIdx) => (
                            <span
                              key={fIdx}
                              className={`w-4 h-4 rounded text-[9px] font-bold flex items-center justify-center border ${formColorClass(f)}`}
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: PAST RESULTS */}
      {activeTab === 'results' && (
        <div className="space-y-3">
          {compCompleted.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {compCompleted.map((match) => (
                <div
                  key={match.id}
                  className="bg-[#111F31] border border-[#1E334D] p-4 rounded-md flex flex-col justify-between gap-2.5"
                >
                  <div className="flex justify-between text-[11px] text-[#8FA0B5]">
                    <span>{match.kickoffDate}</span>
                    <span className="font-semibold text-[#19C37D]">Prediction Verified</span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <div className="flex items-center gap-2">
                      <TeamBadge team={match.homeTeam} size="sm" showName={false} />
                      <span className="font-bold text-xs text-[#F0F4F8]">{match.homeTeam.name}</span>
                    </div>
                    <div className="font-mono font-bold text-sm text-[#F0F4F8] bg-[#0B1624] px-2.5 py-0.5 rounded border border-[#1A2C42]">
                      {match.actualScore?.home} - {match.actualScore?.away}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-[#F0F4F8]">{match.awayTeam.name}</span>
                      <TeamBadge team={match.awayTeam} size="sm" showName={false} />
                    </div>
                  </div>

                  <div className="text-[11px] text-[#8FA0B5] border-t border-[#1A2C42] pt-2 flex justify-between">
                    <span>Forecast: {match.aiPrediction}</span>
                    <span className="text-[#19C37D] font-semibold">Outcome Accurate</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 bg-[#0B1624] border border-[#1A2A3E] rounded-md">
              <EmptyState
                title="No Concluded Matches"
                description="Past results for this competition will appear here once fixtures conclude."
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
