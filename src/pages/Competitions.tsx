import React from 'react';
import { COMPETITIONS } from '../data/mockFootball';
import { ChevronRight, Calendar, Percent } from 'lucide-react';

interface CompetitionsProps {
  onNavigate: (path: string, params?: any) => void;
}

export const Competitions: React.FC<CompetitionsProps> = ({ onNavigate }) => {
  return (
    <div id="competitions-overview-page" className="space-y-6 py-4">
      {/* Header */}
      <div className="space-y-1 border-b border-[#1A2A3E] pb-4">
        <div className="flex items-center gap-2 text-xs text-[#19C37D] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
          <span className="uppercase tracking-wider text-[10px]">Competitions Coverage</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#F0F4F8] tracking-tight">
          Supported Competitions
        </h1>
        <p className="text-xs text-[#8FA0B5]">
          Touchline IQ tracks seven major European leagues and cups with active probability models and performance statistics.
        </p>
      </div>

      {/* Grid of Competition Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {COMPETITIONS.map((comp) => {
          return (
            <div
              key={comp.id}
              onClick={() => onNavigate(`/competitions/${comp.id}`, { id: comp.id })}
              className="bg-[#111F31] border border-[#1E334D] rounded-md p-4 flex flex-col justify-between gap-4 hover:border-[#284263] transition-colors cursor-pointer group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#0B1624] border border-[#1A2C42] flex items-center justify-center text-xl">
                    {comp.logo}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#F0F4F8] group-hover:text-[#4EA1FF] transition-colors">
                      {comp.name}
                    </h3>
                    <p className="text-[10px] text-[#8FA0B5] uppercase mt-0.5">
                      Season {comp.season}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#64748B] group-hover:text-[#F0F4F8] transition-transform group-hover:translate-x-0.5" />
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-2 border-t border-[#1A2C42] pt-3 text-xs">
                <div className="bg-[#0B1624] p-2 rounded border border-[#162537]">
                  <span className="text-[10px] font-semibold text-[#8FA0B5] uppercase block">Upcoming</span>
                  <span className="font-bold text-[#F0F4F8] text-xs mt-0.5 block">{comp.upcomingMatchesCount} matches</span>
                </div>

                <div className="bg-[#0B1624] p-2 rounded border border-[#162537]">
                  <span className="text-[10px] font-semibold text-[#8FA0B5] uppercase block">Model Accuracy</span>
                  <span className="font-bold text-[#19C37D] text-xs mt-0.5 block">{comp.predictionAccuracy}%</span>
                </div>
              </div>

              {/* Graphical accuracy visualizer */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-[#8FA0B5]">
                  <span>Historical Accuracy</span>
                  <span className="font-semibold text-[#F0F4F8]">{comp.predictionAccuracy}%</span>
                </div>
                <div className="h-1 w-full bg-[#0B1624] rounded-sm overflow-hidden border border-[#1A2C42]">
                  <div 
                    className="h-full bg-[#19C37D]" 
                    style={{ width: `${comp.predictionAccuracy}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
