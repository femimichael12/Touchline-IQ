import React, { useState, useEffect } from 'react';
import { Team } from '../types/football';
import { getTeamLogoUrl } from '../data/teamLogos';

export type TeamLogoSize = 'xs' | 'sm' | 'highlight' | 'md' | 'lg' | 'xl' | number;

interface TeamLogoProps {
  team: Team | string;
  size?: TeamLogoSize;
  className?: string;
  alt?: string;
}

export const TeamLogo: React.FC<TeamLogoProps> = ({
  team,
  size = 'md',
  className = '',
  alt
}) => {
  const teamName = typeof team === 'string' ? team : team.name || 'Team';
  const initialUrl = getTeamLogoUrl(team);
  
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(initialUrl);
  const [hasError, setHasError] = useState<boolean>(!initialUrl);
  const [attemptedSvg, setAttemptedSvg] = useState<boolean>(false);

  // Synchronize when team changes
  useEffect(() => {
    const url = getTeamLogoUrl(team);
    setCurrentSrc(url);
    setHasError(!url);
    setAttemptedSvg(false);
  }, [team]);

  const handleError = () => {
    // If the primary PNG failed, attempt the SVG version if from football-data CDN
    if (!attemptedSvg && currentSrc && currentSrc.endsWith('.png')) {
      setAttemptedSvg(true);
      setCurrentSrc(currentSrc.replace('.png', '.svg'));
    } else {
      setHasError(true);
    }
  };

  // Sizing styles
  let sizeClasses = 'w-10 h-10 md:w-11 md:h-11'; // default md (~40-44px)
  let inlineStyle: React.CSSProperties | undefined = undefined;

  if (typeof size === 'number') {
    inlineStyle = { width: size, height: size };
    sizeClasses = '';
  } else {
    switch (size) {
      case 'xs':
        sizeClasses = 'w-4 h-4 md:w-5 md:h-5'; // ~16-20px
        break;
      case 'sm':
        sizeClasses = 'w-6 h-6 md:w-7 md:h-7'; // ~24-28px
        break;
      case 'highlight':
        sizeClasses = 'w-9 h-9 md:w-10 md:h-10'; // ~36-40px (Model Highlights)
        break;
      case 'md':
        sizeClasses = 'w-10 h-10 md:w-11 md:h-11'; // ~40-46px (Prediction Cards)
        break;
      case 'lg':
        sizeClasses = 'w-16 h-16 md:w-20 md:h-20'; // ~64-80px (Featured Match)
        break;
      case 'xl':
        sizeClasses = 'w-20 h-20 md:w-24 md:h-24'; // ~80-96px (Match Detail Header)
        break;
    }
  }

  // Graceful neutral football icon fallback (clean minimalist geometry, NOT a fake club badge)
  const renderNeutralFallback = () => (
    <div
      className={`flex items-center justify-center ${sizeClasses} ${className}`}
      style={inlineStyle}
      title={teamName}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-full h-full text-[#64748B] opacity-60 p-0.5"
        aria-label={`${teamName} fallback emblem`}
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="12 7 15 10 14 14 10 14 9 10" />
        <line x1="12" y1="2" x2="12" y2="7" />
        <line x1="15" y1="10" x2="19.5" y2="8" />
        <line x1="14" y1="14" x2="18" y2="18.5" />
        <line x1="10" y1="14" x2="6" y2="18.5" />
        <line x1="9" y1="10" x2="4.5" y2="8" />
      </svg>
    </div>
  );

  if (hasError || !currentSrc) {
    return renderNeutralFallback();
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${sizeClasses} ${className}`}
      style={inlineStyle}
    >
      <img
        src={currentSrc}
        alt={alt || `${teamName} crest`}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={handleError}
        className="w-full h-full object-contain filter drop-shadow-sm select-none transition-transform duration-200"
      />
    </div>
  );
};
