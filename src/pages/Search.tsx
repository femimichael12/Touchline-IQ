import React from 'react';
import { MATCHES, COMPETITIONS, TEAMS } from '../data/mockFootball';
import { MatchCard } from '../components/MatchCard';
import { TeamBadge } from '../components/TeamBadge';
import { EmptyState } from '../components/EmptyState';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

interface SearchProps {
  query: string;
  onNavigate: (path: string, params?: any) => void;
}

export const Search: React.FC<SearchProps> = ({ query, onNavigate }) => {
  const normQuery = query.toLowerCase().trim();

  // 1. Search matching teams
  const matchingTeams = Object.values(TEAMS).filter(t => 
    t.name.toLowerCase().includes(normQuery) || 
    t.code.toLowerCase().includes(normQuery)
  );

  // 2. Search upcoming matches involving matching teams or query
  const matchingUpcoming = MATCHES.filter(m => 
    m.status === 'upcoming' && (
      m.homeTeam.name.toLowerCase().includes(normQuery) ||
      m.awayTeam.name.toLowerCase().includes(normQuery) ||
      m.competitionName.toLowerCase().includes(normQuery)
    )
  );

  // 3. Search completed matches involving matching teams
  const matchingCompleted = MATCHES.filter(m => 
    m.status === 'completed' && (
      m.homeTeam.name.toLowerCase().includes(normQuery) ||
      m.awayTeam.name.toLowerCase().includes(normQuery) ||
      m.competitionName.toLowerCase().includes(normQuery)
    )
  );

  // 4. Search competitions
  const matchingCompetitions = COMPETITIONS.filter(c => 
    c.name.toLowerCase().includes(normQuery)
  );

  const totalResults = matchingTeams.length + matchingUpcoming.length + matchingCompleted.length + matchingCompetitions.length;

  return (
    <div id="global-search-results-page" className="space-y-6 py-4">
      {/* Header */}
      <div className="space-y-1 border-b border-[#1A2A3E] pb-4">
        <div className="flex items-center gap-2 text-xs text-[#19C37D] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
          <span className="uppercase tracking-wider text-[10px]">Database Search</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#F0F4F8] tracking-tight">
          Results for <span className="text-[#4EA1FF]">"{query}"</span>
        </h1>
        <p className="text-xs text-[#8FA0B5]">
          Found {totalResults} matching teams, competitions, and fixtures.
        </p>
      </div>

      {totalResults > 0 ? (
        <div className="space-y-8">
          {/* Section: Matching Leagues/Competitions */}
          {matchingCompetitions.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#8FA0B5] uppercase tracking-wider">
                Competitions ({matchingCompetitions.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {matchingCompetitions.map((comp) => (
                  <div
                    key={comp.id}
                    onClick={() => onNavigate(`/competitions/${comp.id}`, { id: comp.id })}
                    className="p-3.5 bg-[#111F31] hover:bg-[#142437] border border-[#1E334D] rounded-md flex items-center justify-between cursor-pointer group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{comp.logo}</span>
                      <div>
                        <h4 className="text-xs font-bold text-[#F0F4F8] group-hover:text-[#4EA1FF] transition-colors">{comp.name}</h4>
                        <p className="text-[10px] text-[#8FA0B5]">Model Accuracy: {comp.predictionAccuracy}%</p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#F0F4F8] transition-transform group-hover:translate-x-0.5" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Matching Teams */}
          {matchingTeams.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#8FA0B5] uppercase tracking-wider">
                Clubs ({matchingTeams.length})
              </h3>
              <div className="flex flex-wrap gap-2.5 bg-[#0B1624] p-3.5 border border-[#1A2A3E] rounded-md">
                {matchingTeams.map((team, idx) => (
                  <div key={idx} className="bg-[#111F31] border border-[#1E334D] px-3.5 py-2 rounded flex items-center gap-2.5">
                    <TeamBadge team={team} size="sm" showName={false} />
                    <div>
                      <h4 className="text-xs font-bold text-[#F0F4F8]">{team.name}</h4>
                      <p className="text-[10px] text-[#8FA0B5] uppercase">{team.code}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Upcoming Match Predictions */}
          {matchingUpcoming.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#8FA0B5] uppercase tracking-wider">
                Upcoming Predictions ({matchingUpcoming.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {matchingUpcoming.map((m) => (
                  <MatchCard key={m.id} match={m} onViewAnalysis={(id) => onNavigate('/matches', { id })} />
                ))}
              </div>
            </div>
          )}

          {/* Section: Audited Prediction History */}
          {matchingCompleted.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#8FA0B5] uppercase tracking-wider">
                Audited Results History ({matchingCompleted.length})
              </h3>
              <div className="bg-[#111F31] border border-[#1E334D] rounded-md overflow-hidden divide-y divide-[#1A2C42]">
                {matchingCompleted.map((m) => {
                  const isCorrect = m.resultStatus === 'correct';
                  return (
                    <div 
                      key={m.id} 
                      onClick={() => onNavigate('/results')}
                      className="p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs hover:bg-[#142437]/50 transition-colors cursor-pointer"
                    >
                      <div className="text-center sm:text-left">
                        <span className="text-[10px] text-[#8FA0B5] uppercase font-bold block">{m.competitionName}</span>
                        <span className="text-[#64748B] text-[11px]">{m.kickoffTime}</span>
                      </div>

                      <div className="flex items-center gap-3 justify-center">
                        <span className="font-semibold text-xs text-[#F0F4F8] text-right w-24 truncate">{m.homeTeam.name}</span>
                        <span className="font-mono bg-[#0B1624] border border-[#1A2C42] px-2.5 py-0.5 text-[#F0F4F8] rounded font-bold text-xs">
                          {m.actualScore?.home} — {m.actualScore?.away}
                        </span>
                        <span className="font-semibold text-xs text-[#F0F4F8] text-left w-24 truncate">{m.awayTeam.name}</span>
                      </div>

                      <div className="text-center sm:text-right flex items-center gap-3">
                        <div className="text-right">
                          <span className="text-[10px] text-[#8FA0B5] block">Model</span>
                          <span className="font-bold text-[#F0F4F8] text-xs">{m.aiPrediction}</span>
                        </div>
                        {isCorrect ? (
                          <span className="inline-flex items-center gap-1 text-[11px] bg-[#112720] border border-[#1B4D3E] text-[#19C37D] font-semibold px-2 py-0.5 rounded">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Correct</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] bg-[#2A161A] border border-[#4A2026] text-[#FF5A65] font-semibold px-2 py-0.5 rounded">
                            <XCircle className="w-3 h-3" />
                            <span>Missed</span>
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="py-10 bg-[#0B1624] rounded-md border border-[#1A2A3E]">
          <EmptyState
            title="No Results Found"
            description="No fixtures, clubs, or competitions matched your query. Try searching for 'Arsenal', 'Madrid', or 'Premier'."
            actionLabel="Search 'Arsenal'"
            onAction={() => onNavigate('/search', { query: 'Arsenal' })}
          />
        </div>
      )}
    </div>
  );
};
