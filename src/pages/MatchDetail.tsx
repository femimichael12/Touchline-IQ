import React from 'react';
import { Match } from '../types/football';
import { TeamBadge } from '../components/TeamBadge';
import { ErrorState } from '../components/ErrorState';
import { ChevronLeft, ArrowRight, Shield, Activity, BarChart2 } from 'lucide-react';

interface MatchDetailProps {
  match: Match | undefined;
  onBack: () => void;
  onNavigate: (path: string, params?: any) => void;
}

export const MatchDetail: React.FC<MatchDetailProps> = ({ match, onBack, onNavigate }) => {
  if (!match) {
    return (
      <div className="py-12 text-center space-y-4">
        <ErrorState 
          title="Match profile not found" 
          description="The fixture requested does not match any current record in the Touchline IQ database."
          onRetry={onBack}
        />
      </div>
    );
  }

  const isPredictionAvailable = match.aiPrediction !== 'Prediction Unavailable' && match.probabilities.homeWin > 0;

  if (!isPredictionAvailable) {
    return (
      <div className="py-12 space-y-6">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs text-[#8FA0B5] hover:text-[#F0F4F8] transition-colors font-semibold"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Matches</span>
        </button>
        <ErrorState 
          title="Prediction unavailable" 
          description="Insufficient statistical sample size to generate a verified match prediction. A minimum rolling history of 5 competitive matches is required."
          onRetry={onBack}
        />
      </div>
    );
  }

  // Determine venue based on home team
  const getVenue = (homeTeamName: string) => {
    switch (homeTeamName) {
      case 'Manchester City': return 'Etihad Stadium, Manchester';
      case 'Arsenal': return 'Emirates Stadium, London';
      case 'Real Madrid': return 'Santiago Bernabéu, Madrid';
      case 'Barcelona': return 'Estadi Olímpic Lluís Companys, Barcelona';
      case 'Bayern Munich': return 'Allianz Arena, Munich';
      case 'Inter Milan': return 'San Siro, Milan';
      case 'Paris Saint-Germain': return 'Parc des Princes, Paris';
      case 'Liverpool': return 'Anfield, Liverpool';
      case 'Chelsea': return 'Stamford Bridge, London';
      default: return 'Home Stadium';
    }
  };

  const formColorClass = (letter: string) => {
    if (letter === 'W') return 'bg-[#112720] text-[#19C37D] border-[#1B4D3E]';
    if (letter === 'L') return 'bg-[#2A161A] text-[#FF5A65] border-[#4A2026]';
    return 'bg-[#182332] text-[#8FA0B5] border-[#253950]';
  };

  const maxProb = Math.max(
    match.probabilities.homeWin,
    match.probabilities.draw,
    match.probabilities.awayWin
  );

  return (
    <div id={`match-detail-page-${match.id}`} className="space-y-8 py-4">
      {/* 1. TOP NAV & BREADCRUMB */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1 text-xs text-[#8FA0B5] hover:text-[#F0F4F8] transition-colors font-semibold cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Fixtures</span>
        </button>

        <span className="text-[11px] font-semibold text-[#8FA0B5] uppercase tracking-wider">
          {match.competitionName} · Match Preview
        </span>
      </div>

      {/* 2. MATCH HEADER BANNER */}
      <div className="bg-[#111F31] border border-[#1E334D] rounded-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Home Team */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <TeamBadge team={match.homeTeam} size="xl" textClassName="font-bold text-[#F0F4F8] text-base md:text-lg mt-2" />
            <span className="text-xs text-[#8FA0B5] mt-1">Home</span>
          </div>

          {/* Center Info: Kickoff, Competition, Venue */}
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="text-[10px] font-bold text-[#8FA0B5] uppercase tracking-widest">
              {match.competitionName}
            </span>
            <div className="text-2xl md:text-3xl font-mono font-bold text-[#F0F4F8] tracking-wider bg-[#0B1624] px-5 py-1.5 rounded border border-[#1A2C42]">
              {match.kickoffTime}
            </div>
            <div className="text-xs text-[#8FA0B5] space-y-0.5 pt-1">
              <p className="font-semibold text-[#F0F4F8]">
                {match.kickoffDate === 'Today' ? `Today · ${match.kickoffTime}` : `${match.kickoffDate} · ${match.kickoffTime}`}
              </p>
              <p className="text-[11px] text-[#64748B]">
                {getVenue(match.homeTeam.name)}
              </p>
            </div>
          </div>

          {/* Away Team */}
          <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right">
            <TeamBadge team={match.awayTeam} size="xl" textClassName="font-bold text-[#F0F4F8] text-base md:text-lg mt-2" />
            <span className="text-xs text-[#8FA0B5] mt-1">Away</span>
          </div>
        </div>
      </div>

      {/* 3. TWO-COLUMN LAYOUT: PREDICTION & STATISTICAL METRICS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Primary Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* MATCH PREDICTION */}
          <div className="bg-[#111F31] border border-[#1E334D] rounded-lg p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#1A2C42] pb-3">
              <h3 className="text-xs font-bold text-[#F0F4F8] uppercase tracking-wider">
                MATCH PREDICTION
              </h3>
              <span className="text-xs text-[#8FA0B5]">
                Confidence: <strong className="text-[#19C37D] font-bold">{match.confidence}%</strong>
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8FA0B5] tracking-wider block">
                    Outcome
                  </span>
                  <span className="text-base md:text-lg font-bold text-[#F0F4F8]">
                    {match.aiPrediction}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-[#8FA0B5] tracking-wider block">
                    Strength
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#112720] text-[#19C37D] border border-[#1B4D3E]">
                    {match.confidenceLevel === 'HIGH' ? 'Strong Edge' : 'Moderate Projection'}
                  </span>
                </div>
              </div>

              {/* Probabilities Breakdown */}
              <div className="pt-2 space-y-2">
                <div className="grid grid-cols-3 text-center text-xs font-semibold">
                  <div className={match.probabilities.homeWin === maxProb ? 'text-[#19C37D]' : 'text-[#8FA0B5]'}>
                    <span className="text-[10px] uppercase block font-medium">Home ({match.homeTeam.name})</span>
                    <span>{match.probabilities.homeWin}%</span>
                  </div>
                  <div className={match.probabilities.draw === maxProb ? 'text-[#19C37D]' : 'text-[#8FA0B5]'}>
                    <span className="text-[10px] uppercase block font-medium">Draw</span>
                    <span>{match.probabilities.draw}%</span>
                  </div>
                  <div className={match.probabilities.awayWin === maxProb ? 'text-[#19C37D]' : 'text-[#8FA0B5]'}>
                    <span className="text-[10px] uppercase block font-medium">Away ({match.awayTeam.name})</span>
                    <span>{match.probabilities.awayWin}%</span>
                  </div>
                </div>

                <div className="h-2 w-full bg-[#0B1624] rounded-sm overflow-hidden flex border border-[#1A2C42]">
                  <div
                    className={`h-full ${match.probabilities.homeWin === maxProb ? 'bg-[#19C37D]' : 'bg-[#2E4663]'}`}
                    style={{ width: `${match.probabilities.homeWin}%` }}
                  />
                  <div
                    className={`h-full border-x border-[#0B1624] ${match.probabilities.draw === maxProb ? 'bg-[#19C37D]' : 'bg-[#22354A]'}`}
                    style={{ width: `${match.probabilities.draw}%` }}
                  />
                  <div
                    className={`h-full ${match.probabilities.awayWin === maxProb ? 'bg-[#19C37D]' : 'bg-[#2E4663]'}`}
                    style={{ width: `${match.probabilities.awayWin}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* STATISTICAL COMPARISON */}
          {match.statsComparison && (
            <div className="bg-[#111F31] border border-[#1E334D] rounded-lg p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-[#1A2C42] pb-3">
                <h3 className="text-xs font-bold text-[#F0F4F8] uppercase tracking-wider">
                  STATISTICAL COMPARISON
                </h3>
                <div className="flex items-center gap-4 text-[11px] font-semibold">
                  <span className="text-[#F0F4F8]">{match.homeTeam.name}</span>
                  <span className="text-[#64748B]">vs</span>
                  <span className="text-[#F0F4F8]">{match.awayTeam.name}</span>
                </div>
              </div>

              <div className="space-y-4 pt-1">
                {match.statsComparison.map((stat, index) => {
                  const homePct = (stat.home / stat.max) * 100;
                  const awayPct = (stat.away / stat.max) * 100;
                  const isHomeHigher = stat.home > stat.away;
                  const isAwayHigher = stat.away > stat.home;

                  return (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className={`font-semibold ${isHomeHigher ? 'text-[#19C37D]' : 'text-[#8FA0B5]'}`}>
                          {stat.home}
                        </span>
                        <span className="text-[11px] font-medium text-[#8FA0B5] uppercase tracking-wider">
                          {stat.name}
                        </span>
                        <span className={`font-semibold ${isAwayHigher ? 'text-[#19C37D]' : 'text-[#8FA0B5]'}`}>
                          {stat.away}
                        </span>
                      </div>

                      {/* Split comparative horizontal bars */}
                      <div className="grid grid-cols-2 gap-2">
                        {/* Home bar (aligns to the right) */}
                        <div className="h-1.5 w-full bg-[#0B1624] rounded-sm flex justify-end overflow-hidden border border-[#1A2C42]">
                          <div 
                            className={`h-full ${isHomeHigher ? 'bg-[#19C37D]' : 'bg-[#2E4663]'}`}
                            style={{ width: `${homePct}%` }}
                          />
                        </div>
                        {/* Away bar (aligns to the left) */}
                        <div className="h-1.5 w-full bg-[#0B1624] rounded-sm overflow-hidden border border-[#1A2C42]">
                          <div 
                            className={`h-full ${isAwayHigher ? 'bg-[#19C37D]' : 'bg-[#2E4663]'}`}
                            style={{ width: `${awayPct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* GOALS ANALYSIS & BOTH TEAMS TO SCORE (BTTS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Goals Analysis */}
            {match.goalProbabilities && (
              <div className="bg-[#111F31] border border-[#1E334D] rounded-lg p-5 space-y-3">
                <div className="border-b border-[#1A2C42] pb-2">
                  <h4 className="text-xs font-bold text-[#F0F4F8] uppercase tracking-wider">
                    GOALS ANALYSIS
                  </h4>
                </div>

                <div className="space-y-3 pt-1">
                  {[
                    { label: 'Over 1.5 Goals', prob: match.goalProbabilities.over15 },
                    { label: 'Over 2.5 Goals', prob: match.goalProbabilities.over25 },
                    { label: 'Under 2.5 Goals', prob: match.goalProbabilities.under25 },
                  ].map((g, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#8FA0B5]">{g.label}</span>
                        <span className="font-semibold text-[#F0F4F8]">{g.prob}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#0B1624] rounded-sm overflow-hidden border border-[#1A2C42]">
                        <div 
                          className="h-full bg-[#19C37D]" 
                          style={{ width: `${g.prob}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Both Teams To Score (BTTS) */}
            {match.bttsProbabilities && (
              <div className="bg-[#111F31] border border-[#1E334D] rounded-lg p-5 space-y-3 flex flex-col justify-between">
                <div className="border-b border-[#1A2C42] pb-2">
                  <h4 className="text-xs font-bold text-[#F0F4F8] uppercase tracking-wider">
                    BOTH TEAMS TO SCORE (BTTS)
                  </h4>
                </div>

                <div className="space-y-4 py-2">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-[#0B1624] border border-[#1A2C42] p-3 rounded">
                      <span className="text-[10px] font-bold text-[#8FA0B5] uppercase tracking-wider block">YES</span>
                      <span className="text-xl font-bold text-[#F0F4F8] mt-1 block">{match.bttsProbabilities.yes}%</span>
                    </div>
                    <div className="bg-[#0B1624] border border-[#1A2C42] p-3 rounded">
                      <span className="text-[10px] font-bold text-[#8FA0B5] uppercase tracking-wider block">NO</span>
                      <span className="text-xl font-bold text-[#F0F4F8] mt-1 block">{match.bttsProbabilities.no}%</span>
                    </div>
                  </div>

                  <div className="h-1.5 w-full bg-[#0B1624] rounded-sm overflow-hidden flex border border-[#1A2C42]">
                    <div className="h-full bg-[#19C37D]" style={{ width: `${match.bttsProbabilities.yes}%` }} />
                    <div className="h-full bg-[#2E4663]" style={{ width: `${match.bttsProbabilities.no}%` }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right / Secondary Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* TEAM FORM */}
          {match.form && (
            <div className="bg-[#111F31] border border-[#1E334D] rounded-lg p-5 space-y-4">
              <div className="border-b border-[#1A2C42] pb-2">
                <h4 className="text-xs font-bold text-[#F0F4F8] uppercase tracking-wider">
                  TEAM FORM
                </h4>
              </div>

              <div className="space-y-4">
                {/* Home Form */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#F0F4F8]">{match.homeTeam.name}</span>
                    <span className="text-[11px] text-[#8FA0B5]">Last 5 matches</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {match.form.home.map((f, i) => (
                      <span key={i} className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold border ${formColorClass(f)}`}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Away Form */}
                <div className="space-y-2 pt-2 border-t border-[#1A2C42]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#F0F4F8]">{match.awayTeam.name}</span>
                    <span className="text-[11px] text-[#8FA0B5]">Last 5 matches</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {match.form.away.map((f, i) => (
                      <span key={i} className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold border ${formColorClass(f)}`}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Goal stats preview */}
                {match.formStats && (
                  <div className="pt-3 border-t border-[#1A2C42] space-y-2 text-xs text-[#8FA0B5]">
                    <div className="flex justify-between py-0.5">
                      <span>Goals Scored (L5)</span>
                      <span className="font-semibold text-[#F0F4F8]">{match.formStats.home.goalsScored} vs {match.formStats.away.goalsScored}</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span>Goals Conceded (L5)</span>
                      <span className="font-semibold text-[#F0F4F8]">{match.formStats.home.goalsConceded} vs {match.formStats.away.goalsConceded}</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span>Clean Sheets</span>
                      <span className="font-semibold text-[#F0F4F8]">{match.formStats.home.cleanSheets} vs {match.formStats.away.cleanSheets}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* HEAD-TO-HEAD TABLE */}
          {match.headToHead && (
            <div className="bg-[#111F31] border border-[#1E334D] rounded-lg p-5 space-y-4">
              <div className="border-b border-[#1A2C42] pb-2 flex justify-between items-center">
                <h4 className="text-xs font-bold text-[#F0F4F8] uppercase tracking-wider">
                  HEAD-TO-HEAD
                </h4>
                <span className="text-[11px] text-[#8FA0B5]">
                  {match.headToHead.summary.homeWins}W - {match.headToHead.summary.draws}D - {match.headToHead.summary.awayWins}W
                </span>
              </div>

              {/* Clean table for previous meetings */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="text-[10px] text-[#8FA0B5] uppercase border-b border-[#1A2C42]">
                      <th className="pb-2 font-semibold">Date</th>
                      <th className="pb-2 font-semibold">Match</th>
                      <th className="pb-2 font-semibold text-right">Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1A2C42]">
                    {match.headToHead.lastMeetings.map((meet, mIdx) => (
                      <tr key={mIdx} className="hover:bg-[#142437]/50 transition-colors">
                        <td className="py-2.5 text-[#8FA0B5] text-[11px]">{meet.date}</td>
                        <td className="py-2.5 text-[#F0F4F8] font-medium">
                          {meet.competition}
                          <span className="block text-[10px] text-[#8FA0B5]">{meet.winner === 'Draw' ? 'Draw' : `${meet.winner} victory`}</span>
                        </td>
                        <td className="py-2.5 text-right font-mono font-bold text-[#F0F4F8]">
                          {meet.score}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* MATCH ANALYSIS (Written like a professional football analyst) */}
          {match.aiAnalysis && (
            <div className="bg-[#111F31] border border-[#1E334D] rounded-lg p-5 space-y-3">
              <div className="border-b border-[#1A2C42] pb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#19C37D]" />
                <h4 className="text-xs font-bold text-[#F0F4F8] uppercase tracking-wider">
                  MATCH ANALYSIS
                </h4>
              </div>

              <p className="text-xs text-[#8FA0B5] leading-relaxed">
                {match.aiAnalysis.text}
              </p>

              <div className="pt-3 border-t border-[#1A2C42] space-y-2">
                <span className="text-[10px] font-bold text-[#8FA0B5] uppercase tracking-wider block">
                  Key Tactical Factors
                </span>
                <ul className="space-y-1.5 text-xs text-[#8FA0B5]">
                  {match.aiAnalysis.keyFactors.map((factor, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#19C37D] shrink-0 mt-1.5" />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
