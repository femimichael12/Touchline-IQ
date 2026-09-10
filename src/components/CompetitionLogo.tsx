import React, { useState, useEffect } from 'react';
import { Trophy } from 'lucide-react';
import { Competition } from '../types/football';
import { getCompetitionMeta } from '../data/competitionLogos';

export type CompetitionLogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

export interface CompetitionLogoProps {
  competition?: Competition | string | { name?: string; id?: string; logo?: string; logoUrl?: string; competitionName?: string; competitionId?: string } | null;
  size?: CompetitionLogoSize;
  className?: string;
  imgClassName?: string;
  alt?: string;
}

/**
 * Reusable Official Competition Logo Component
 * - Displays authentic league/competition official logos
 * - Maintains natural aspect ratio (object-contain) without distortion
 * - Accommodates different rectangular/square shapes (36–48px on desktop)
 * - Multi-tier fallback (bundled asset -> API CDN -> secondary sports CDN -> neutral trophy icon)
 * - Future football data API compatibility (supports competition.logo / competition.logoUrl)
 */
export const CompetitionLogo: React.FC<CompetitionLogoProps> = ({
  competition,
  size = 'md',
  className = '',
  imgClassName = '',
  alt,
}) => {
  const meta = getCompetitionMeta(competition);
  const competitionName = meta.name || 'Competition';

  const [currentSrc, setCurrentSrc] = useState<string | undefined>(meta.primaryUrl || meta.cdnUrl);
  const [tier, setTier] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(!meta.primaryUrl && !meta.cdnUrl);

  // Synchronize when competition prop changes
  useEffect(() => {
    const nextMeta = getCompetitionMeta(competition);
    const initialUrl = nextMeta.primaryUrl || nextMeta.cdnUrl;
    setCurrentSrc(initialUrl);
    setTier(0);
    setHasError(!initialUrl);
  }, [competition]);

  const handleError = () => {
    if (tier === 0 && meta.cdnUrl && meta.cdnUrl !== currentSrc) {
      setTier(1);
      setCurrentSrc(meta.cdnUrl);
    } else if (tier <= 1 && meta.fallbackUrl && meta.fallbackUrl !== currentSrc) {
      setTier(2);
      setCurrentSrc(meta.fallbackUrl);
    } else {
      setHasError(true);
    }
  };

  // Dimensions & scaling (approx 36–48px on desktop for 'md', scaling appropriately on mobile)
  let sizeClasses = 'w-9 h-9 md:w-11 md:h-11'; // ~36px mobile, ~44px desktop
  let inlineStyle: React.CSSProperties | undefined = undefined;

  if (typeof size === 'number') {
    inlineStyle = { width: size, height: size };
    sizeClasses = '';
  } else {
    switch (size) {
      case 'xs':
        sizeClasses = 'w-4 h-4 md:w-5 md:h-5'; // ~16-20px (cards, badges, filters)
        break;
      case 'sm':
        sizeClasses = 'w-6 h-6 md:w-7 md:h-7'; // ~24-28px (search results, sub-tables)
        break;
      case 'md':
        sizeClasses = 'w-9 h-9 md:w-11 md:h-11'; // ~36-44px (competition cards - standard 36-48px)
        break;
      case 'lg':
        sizeClasses = 'w-12 h-12 md:w-14 md:h-14'; // ~48-56px (competition detail header)
        break;
      case 'xl':
        sizeClasses = 'w-16 h-16 md:w-20 md:h-20'; // ~64-80px (featured views)
        break;
    }
  }

  // Simple neutral fallback icon when no logo is available (does not pretend to be official logo)
  if (hasError || !currentSrc) {
    return (
      <div
        className={`inline-flex items-center justify-center shrink-0 ${sizeClasses} ${className}`}
        style={inlineStyle}
        title={competitionName}
        aria-label={`${competitionName} icon`}
      >
        <Trophy className="w-full h-full text-[#64748B] opacity-70 p-0.5" />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 overflow-hidden ${sizeClasses} ${className}`}
      style={inlineStyle}
      title={competitionName}
    >
      <img
        src={currentSrc}
        alt={alt || `${competitionName} official logo`}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={handleError}
        className={`max-w-full max-h-full w-auto h-auto object-contain select-none transition-transform duration-150 ${imgClassName}`}
      />
    </div>
  );
};
