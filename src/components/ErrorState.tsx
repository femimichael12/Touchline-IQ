import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Prediction unavailable',
  description = 'We don\'t have enough reliable statistical data to generate a prediction for this match.',
  onRetry
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 bg-rose-950/10 border border-rose-900/20 rounded-lg max-w-md mx-auto">
      <div className="p-3 bg-rose-500/10 rounded-lg border border-rose-500/20 mb-4 text-rose-400">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <h3 className="text-base font-semibold text-rose-200 mb-1.5">{title}</h3>
      <p className="text-xs text-neutral-400 leading-relaxed mb-5">{description}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-xs font-semibold text-rose-300 rounded border border-rose-500/20 transition"
        >
          Retry Analytics Model
        </button>
      )}
    </div>
  );
};
