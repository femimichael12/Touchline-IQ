import React from 'react';
import { Team } from '../types/football';
import { TeamLogo, TeamLogoSize } from './TeamLogo';

interface TeamBadgeProps {
  team: Team;
  size?: 'xs' | 'sm' | 'highlight' | 'md' | 'lg' | 'xl';
  showName?: boolean;
  textClassName?: string;
  className?: string;
}

export const TeamBadge: React.FC<TeamBadgeProps> = ({
  team,
  size = 'md',
  showName = true,
  textClassName = 'font-semibold text-[#F0F4F8] text-xs mt-1',
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <TeamLogo team={team} size={size as TeamLogoSize} />
      {showName && (
        <span className={`${textClassName} truncate max-w-[130px] md:max-w-[160px] text-center`}>
          {team.name}
        </span>
      )}
    </div>
  );
};
