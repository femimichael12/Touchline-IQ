import React from 'react';

interface FooterProps {
  onNavigate: (path: string, params?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#07111F] border-t border-[#1A2A3E] pt-12 pb-8 px-4 md:px-8 text-xs text-[#8FA0B5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* Brand column */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#111F31] border border-[#22354D] flex items-center justify-center relative">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#F0F4F8]" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7l3 2v3.5l-3 2-3-2V9l3-2z" fill="#142437" stroke="#8FA0B5" strokeWidth="1.2" />
              </svg>
              <span className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-[#19C37D]" />
            </div>
            <span className="font-extrabold text-sm tracking-wider text-[#F0F4F8]">
              TOUCHLINE <span className="text-[#19C37D]">IQ</span>
            </span>
          </div>
          <p className="text-[11px] text-[#8FA0B5] leading-relaxed max-w-xs">
            Statistical football analysis built from team form, historical performance, head-to-head records and match data.
          </p>
        </div>

        {/* Platform links */}
        <div>
          <h4 className="text-[11px] font-bold text-[#F0F4F8] uppercase tracking-wider mb-3">Platform</h4>
          <ul className="space-y-2 text-[11px]">
            <li>
              <button onClick={() => onNavigate('/')} className="hover:text-[#F0F4F8] transition-colors cursor-pointer">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/predictions')} className="hover:text-[#F0F4F8] transition-colors cursor-pointer">
                Predictions
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/matches')} className="hover:text-[#F0F4F8] transition-colors cursor-pointer">
                Matches & Fixtures
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/competitions')} className="hover:text-[#F0F4F8] transition-colors cursor-pointer">
                Competitions
              </button>
            </li>
          </ul>
        </div>

        {/* Analytics links */}
        <div>
          <h4 className="text-[11px] font-bold text-[#F0F4F8] uppercase tracking-wider mb-3">Analytics</h4>
          <ul className="space-y-2 text-[11px]">
            <li>
              <button onClick={() => onNavigate('/results')} className="hover:text-[#F0F4F8] transition-colors cursor-pointer">
                Prediction Results
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/performance')} className="hover:text-[#F0F4F8] transition-colors cursor-pointer">
                Performance Dashboard
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/matches')} className="hover:text-[#F0F4F8] transition-colors cursor-pointer">
                Statistical Comparisons
              </button>
            </li>
          </ul>
        </div>

        {/* Credibility info */}
        <div>
          <h4 className="text-[11px] font-bold text-[#F0F4F8] uppercase tracking-wider mb-3">Integrity</h4>
          <p className="text-[11px] text-[#8FA0B5] leading-relaxed">
            All historical predictions are archived with timestamped transparency. Model weights are calibrated across major European domestic and continental leagues.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#1A2A3E]/70 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-[#64748B]">
        <p>
          &copy; {new Date().getFullYear()} Touchline IQ. All rights reserved.
        </p>
        <p className="max-w-xl text-center md:text-right leading-normal">
          <strong className="text-[#8FA0B5]">Disclaimer:</strong> Predictions are statistical estimates and are not guarantees of match outcomes. Touchline IQ does not host, facilitate, or promote sports betting. All metrics and projections are intended for informational and analytical purposes only.
        </p>
      </div>
    </footer>
  );
};
