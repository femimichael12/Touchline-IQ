import React from 'react';
import { Database } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No predictions available',
  description = 'We don\'t have any matches matching your filter criteria right now.',
  icon = <Database className="w-6 h-6 text-[#8FA0B5]" />,
  actionLabel,
  onAction
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 md:p-8 bg-[#111F31] border border-[#1E334D] rounded-lg max-w-md mx-auto">
      <div className="p-2.5 bg-[#0B1624] rounded border border-[#1A2C42] mb-3 text-[#8FA0B5]">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-[#F0F4F8] mb-1">{title}</h3>
      <p className="text-xs text-[#8FA0B5] leading-relaxed mb-4">{description}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="px-3.5 py-1.5 bg-[#142437] hover:bg-[#1A2E46] text-xs font-semibold text-[#F0F4F8] rounded border border-[#223B5A] transition-colors cursor-pointer"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};
