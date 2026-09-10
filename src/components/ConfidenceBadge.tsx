import React from 'react';

interface ConfidenceBadgeProps {
  level: 'HIGH' | 'MEDIUM' | 'LOW';
  value: number;
}

export const ConfidenceBadge: React.FC<ConfidenceBadgeProps> = ({ level, value }) => {
  const styles = {
    HIGH: {
      bg: 'bg-[#112720]',
      border: 'border-[#1B4D3E]',
      text: 'text-[#19C37D]',
      dot: 'bg-[#19C37D]',
      label: 'High'
    },
    MEDIUM: {
      bg: 'bg-[#1C2836]',
      border: 'border-[#263D56]',
      text: 'text-[#4EA1FF]',
      dot: 'bg-[#4EA1FF]',
      label: 'Medium'
    },
    LOW: {
      bg: 'bg-[#1F242C]',
      border: 'border-[#333C48]',
      text: 'text-[#8FA0B5]',
      dot: 'bg-[#8FA0B5]',
      label: 'Moderate'
    }
  };

  const current = styles[level] || styles.MEDIUM;

  return (
    <div
      id={`confidence-badge-${level}-${value}`}
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium ${current.bg} ${current.border} ${current.text} border`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${current.dot}`} />
      <span>Confidence {value}%</span>
    </div>
  );
};
