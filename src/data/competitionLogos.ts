import { Competition } from '../types/football';

// Bundled official competition logos (local assets guaranteed to load offline and without external latency)
import premierLeagueLogo from '../assets/competitions/premier_league.png';
import championsLeagueLogo from '../assets/competitions/champions_league_white.png';
import laLigaLogo from '../assets/competitions/la_liga.png';
import serieALogo from '../assets/competitions/serie_a.png';
import bundesligaLogo from '../assets/competitions/bundesliga.png';
import ligue1Logo from '../assets/competitions/ligue_1.png';
import europaLeagueLogo from '../assets/competitions/europa_league.png';

export interface CompetitionLogoMeta {
  id: string;
  name: string;
  shortName: string;
  primaryUrl: string;
  cdnUrl: string;
  fallbackUrl?: string;
  country?: string;
}

/**
 * Centralized Real Official Competition / League Logo Registry
 * Reliable multi-tier fallback architecture:
 * Tier 1: Local bundled high-resolution transparent asset
 * Tier 2: Real Sports Data API CDN (media.api-sports.io)
 * Tier 3: Secondary sports CDN (crests.football-data.org)
 */
export const COMPETITION_LOGOS: Record<string, CompetitionLogoMeta> = {
  // --- Premier League ---
  'premier league': {
    id: 'pl',
    name: 'Premier League',
    shortName: 'PL',
    primaryUrl: premierLeagueLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/39.png',
    fallbackUrl: 'https://crests.football-data.org/PL.png',
    country: 'England',
  },
  'pl': {
    id: 'pl',
    name: 'Premier League',
    shortName: 'PL',
    primaryUrl: premierLeagueLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/39.png',
    fallbackUrl: 'https://crests.football-data.org/PL.png',
    country: 'England',
  },
  '39': {
    id: 'pl',
    name: 'Premier League',
    shortName: 'PL',
    primaryUrl: premierLeagueLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/39.png',
    fallbackUrl: 'https://crests.football-data.org/PL.png',
    country: 'England',
  },

  // --- UEFA Champions League ---
  'uefa champions league': {
    id: 'ucl',
    name: 'UEFA Champions League',
    shortName: 'UCL',
    primaryUrl: championsLeagueLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/2.png',
    fallbackUrl: 'https://crests.football-data.org/CL.png',
    country: 'Europe',
  },
  'champions league': {
    id: 'ucl',
    name: 'UEFA Champions League',
    shortName: 'UCL',
    primaryUrl: championsLeagueLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/2.png',
    fallbackUrl: 'https://crests.football-data.org/CL.png',
    country: 'Europe',
  },
  'ucl': {
    id: 'ucl',
    name: 'UEFA Champions League',
    shortName: 'UCL',
    primaryUrl: championsLeagueLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/2.png',
    fallbackUrl: 'https://crests.football-data.org/CL.png',
    country: 'Europe',
  },
  'cl': {
    id: 'ucl',
    name: 'UEFA Champions League',
    shortName: 'UCL',
    primaryUrl: championsLeagueLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/2.png',
    fallbackUrl: 'https://crests.football-data.org/CL.png',
    country: 'Europe',
  },
  '2': {
    id: 'ucl',
    name: 'UEFA Champions League',
    shortName: 'UCL',
    primaryUrl: championsLeagueLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/2.png',
    fallbackUrl: 'https://crests.football-data.org/CL.png',
    country: 'Europe',
  },

  // --- La Liga ---
  'la liga': {
    id: 'laliga',
    name: 'La Liga',
    shortName: 'LaLiga',
    primaryUrl: laLigaLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/140.png',
    fallbackUrl: 'https://crests.football-data.org/PD.png',
    country: 'Spain',
  },
  'laliga': {
    id: 'laliga',
    name: 'La Liga',
    shortName: 'LaLiga',
    primaryUrl: laLigaLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/140.png',
    fallbackUrl: 'https://crests.football-data.org/PD.png',
    country: 'Spain',
  },
  'primera division': {
    id: 'laliga',
    name: 'La Liga',
    shortName: 'LaLiga',
    primaryUrl: laLigaLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/140.png',
    fallbackUrl: 'https://crests.football-data.org/PD.png',
    country: 'Spain',
  },
  'pd': {
    id: 'laliga',
    name: 'La Liga',
    shortName: 'LaLiga',
    primaryUrl: laLigaLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/140.png',
    fallbackUrl: 'https://crests.football-data.org/PD.png',
    country: 'Spain',
  },
  '140': {
    id: 'laliga',
    name: 'La Liga',
    shortName: 'LaLiga',
    primaryUrl: laLigaLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/140.png',
    fallbackUrl: 'https://crests.football-data.org/PD.png',
    country: 'Spain',
  },

  // --- Serie A ---
  'serie a': {
    id: 'seriea',
    name: 'Serie A',
    shortName: 'Serie A',
    primaryUrl: serieALogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/135.png',
    fallbackUrl: 'https://crests.football-data.org/SA.png',
    country: 'Italy',
  },
  'seriea': {
    id: 'seriea',
    name: 'Serie A',
    shortName: 'Serie A',
    primaryUrl: serieALogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/135.png',
    fallbackUrl: 'https://crests.football-data.org/SA.png',
    country: 'Italy',
  },
  'sa': {
    id: 'seriea',
    name: 'Serie A',
    shortName: 'Serie A',
    primaryUrl: serieALogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/135.png',
    fallbackUrl: 'https://crests.football-data.org/SA.png',
    country: 'Italy',
  },
  '135': {
    id: 'seriea',
    name: 'Serie A',
    shortName: 'Serie A',
    primaryUrl: serieALogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/135.png',
    fallbackUrl: 'https://crests.football-data.org/SA.png',
    country: 'Italy',
  },

  // --- Bundesliga ---
  'bundesliga': {
    id: 'bundesliga',
    name: 'Bundesliga',
    shortName: 'Bundesliga',
    primaryUrl: bundesligaLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/78.png',
    fallbackUrl: 'https://crests.football-data.org/BL1.png',
    country: 'Germany',
  },
  'bl1': {
    id: 'bundesliga',
    name: 'Bundesliga',
    shortName: 'Bundesliga',
    primaryUrl: bundesligaLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/78.png',
    fallbackUrl: 'https://crests.football-data.org/BL1.png',
    country: 'Germany',
  },
  '78': {
    id: 'bundesliga',
    name: 'Bundesliga',
    shortName: 'Bundesliga',
    primaryUrl: bundesligaLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/78.png',
    fallbackUrl: 'https://crests.football-data.org/BL1.png',
    country: 'Germany',
  },

  // --- Ligue 1 ---
  'ligue 1': {
    id: 'ligue1',
    name: 'Ligue 1',
    shortName: 'Ligue 1',
    primaryUrl: ligue1Logo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/61.png',
    fallbackUrl: 'https://crests.football-data.org/FL1.png',
    country: 'France',
  },
  'ligue1': {
    id: 'ligue1',
    name: 'Ligue 1',
    shortName: 'Ligue 1',
    primaryUrl: ligue1Logo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/61.png',
    fallbackUrl: 'https://crests.football-data.org/FL1.png',
    country: 'France',
  },
  'fl1': {
    id: 'ligue1',
    name: 'Ligue 1',
    shortName: 'Ligue 1',
    primaryUrl: ligue1Logo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/61.png',
    fallbackUrl: 'https://crests.football-data.org/FL1.png',
    country: 'France',
  },
  '61': {
    id: 'ligue1',
    name: 'Ligue 1',
    shortName: 'Ligue 1',
    primaryUrl: ligue1Logo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/61.png',
    fallbackUrl: 'https://crests.football-data.org/FL1.png',
    country: 'France',
  },

  // --- UEFA Europa League ---
  'uefa europa league': {
    id: 'uel',
    name: 'UEFA Europa League',
    shortName: 'UEL',
    primaryUrl: europaLeagueLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/3.png',
    fallbackUrl: 'https://crests.football-data.org/EL.png',
    country: 'Europe',
  },
  'europa league': {
    id: 'uel',
    name: 'UEFA Europa League',
    shortName: 'UEL',
    primaryUrl: europaLeagueLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/3.png',
    fallbackUrl: 'https://crests.football-data.org/EL.png',
    country: 'Europe',
  },
  'uel': {
    id: 'uel',
    name: 'UEFA Europa League',
    shortName: 'UEL',
    primaryUrl: europaLeagueLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/3.png',
    fallbackUrl: 'https://crests.football-data.org/EL.png',
    country: 'Europe',
  },
  'el': {
    id: 'uel',
    name: 'UEFA Europa League',
    shortName: 'UEL',
    primaryUrl: europaLeagueLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/3.png',
    fallbackUrl: 'https://crests.football-data.org/EL.png',
    country: 'Europe',
  },
  '3': {
    id: 'uel',
    name: 'UEFA Europa League',
    shortName: 'UEL',
    primaryUrl: europaLeagueLogo,
    cdnUrl: 'https://media.api-sports.io/football/leagues/3.png',
    fallbackUrl: 'https://crests.football-data.org/EL.png',
    country: 'Europe',
  },

  // --- Additional European Competitions & Future Expansion ---
  'fa cup': {
    id: 'facup',
    name: 'FA Cup',
    shortName: 'FA Cup',
    primaryUrl: 'https://media.api-sports.io/football/leagues/45.png',
    cdnUrl: 'https://media.api-sports.io/football/leagues/45.png',
    country: 'England',
  },
  'copa del rey': {
    id: 'copadelrey',
    name: 'Copa del Rey',
    shortName: 'Copa del Rey',
    primaryUrl: 'https://media.api-sports.io/football/leagues/143.png',
    cdnUrl: 'https://media.api-sports.io/football/leagues/143.png',
    country: 'Spain',
  },
  'dfb pokal': {
    id: 'dfbpokal',
    name: 'DFB-Pokal',
    shortName: 'DFB-Pokal',
    primaryUrl: 'https://media.api-sports.io/football/leagues/81.png',
    cdnUrl: 'https://media.api-sports.io/football/leagues/81.png',
    country: 'Germany',
  },
  'coppa italia': {
    id: 'coppaitalia',
    name: 'Coppa Italia',
    shortName: 'Coppa Italia',
    primaryUrl: 'https://media.api-sports.io/football/leagues/137.png',
    cdnUrl: 'https://media.api-sports.io/football/leagues/137.png',
    country: 'Italy',
  },
  'world cup': {
    id: 'worldcup',
    name: 'FIFA World Cup',
    shortName: 'World Cup',
    primaryUrl: 'https://media.api-sports.io/football/leagues/1.png',
    cdnUrl: 'https://media.api-sports.io/football/leagues/1.png',
    country: 'World',
  },
  'euro': {
    id: 'euro',
    name: 'UEFA European Championship',
    shortName: 'Euro',
    primaryUrl: 'https://media.api-sports.io/football/leagues/4.png',
    cdnUrl: 'https://media.api-sports.io/football/leagues/4.png',
    country: 'Europe',
  },
  'europa conference league': {
    id: 'uecl',
    name: 'UEFA Europa Conference League',
    shortName: 'UECL',
    primaryUrl: 'https://media.api-sports.io/football/leagues/848.png',
    cdnUrl: 'https://media.api-sports.io/football/leagues/848.png',
    country: 'Europe',
  },
};

/**
 * Resolve competition identity to logo URLs and metadata
 */
export function getCompetitionMeta(
  competition?: Competition | string | { name?: string; id?: string; logo?: string; logoUrl?: string; competitionName?: string; competitionId?: string } | null
): {
  name: string;
  primaryUrl?: string;
  cdnUrl?: string;
  fallbackUrl?: string;
} {
  if (!competition) {
    return { name: 'Competition' };
  }

  // 1. Direct object inspection (API compatibility)
  if (typeof competition === 'object') {
    // If an official logoUrl is already present on the object from an external sports API
    if (competition.logoUrl && competition.logoUrl.startsWith('http')) {
      return {
        name: competition.name || competition.competitionName || 'Competition',
        primaryUrl: competition.logoUrl,
        cdnUrl: competition.logoUrl,
      };
    }

    // If competition.logo contains an actual image URL or local asset path
    if (competition.logo && (competition.logo.startsWith('http') || competition.logo.startsWith('/') || competition.logo.startsWith('data:'))) {
      return {
        name: competition.name || competition.competitionName || 'Competition',
        primaryUrl: competition.logo,
        cdnUrl: competition.logoUrl,
      };
    }

    // Try finding by id, name, or competitionName
    const searchKeys = [
      competition.id,
      competition.competitionId,
      competition.name,
      competition.competitionName,
    ].filter(Boolean) as string[];

    for (const key of searchKeys) {
      const normalized = key.toLowerCase().trim();
      if (COMPETITION_LOGOS[normalized]) {
        const meta = COMPETITION_LOGOS[normalized];
        return {
          name: meta.name,
          primaryUrl: meta.primaryUrl,
          cdnUrl: meta.cdnUrl,
          fallbackUrl: meta.fallbackUrl,
        };
      }
      // Try stripping non-alphanumeric (e.g. "Premier-League" -> "premierleague")
      const alphaKey = normalized.replace(/[^a-z0-9]/g, '');
      for (const [dictKey, meta] of Object.entries(COMPETITION_LOGOS)) {
        if (dictKey.replace(/[^a-z0-9]/g, '') === alphaKey) {
          return {
            name: meta.name,
            primaryUrl: meta.primaryUrl,
            cdnUrl: meta.cdnUrl,
            fallbackUrl: meta.fallbackUrl,
          };
        }
      }
    }

    return { name: competition.name || competition.competitionName || 'Competition' };
  }

  // 2. String lookup
  const searchStr = String(competition).trim();
  const normalized = searchStr.toLowerCase();

  if (COMPETITION_LOGOS[normalized]) {
    const meta = COMPETITION_LOGOS[normalized];
    return {
      name: meta.name,
      primaryUrl: meta.primaryUrl,
      cdnUrl: meta.cdnUrl,
      fallbackUrl: meta.fallbackUrl,
    };
  }

  // Partial or cleaned key matching
  const alphaKey = normalized.replace(/[^a-z0-9]/g, '');
  for (const [dictKey, meta] of Object.entries(COMPETITION_LOGOS)) {
    if (dictKey.replace(/[^a-z0-9]/g, '') === alphaKey) {
      return {
        name: meta.name,
        primaryUrl: meta.primaryUrl,
        cdnUrl: meta.cdnUrl,
        fallbackUrl: meta.fallbackUrl,
      };
    }
  }

  // Check substring matches
  if (normalized.includes('premier') || normalized.includes('epl')) return COMPETITION_LOGOS['premier league'];
  if (normalized.includes('champion') || normalized.includes('ucl')) return COMPETITION_LOGOS['uefa champions league'];
  if (normalized.includes('europa') || normalized.includes('uel')) return COMPETITION_LOGOS['uefa europa league'];
  if (normalized.includes('laliga') || normalized.includes('la liga')) return COMPETITION_LOGOS['la liga'];
  if (normalized.includes('serie a') || normalized.includes('seriea')) return COMPETITION_LOGOS['serie a'];
  if (normalized.includes('bundesliga')) return COMPETITION_LOGOS['bundesliga'];
  if (normalized.includes('ligue 1') || normalized.includes('ligue1')) return COMPETITION_LOGOS['ligue 1'];

  return { name: searchStr };
}

/**
 * Returns primary logo URL for competition or undefined if none available
 */
export function getCompetitionLogoUrl(
  competition?: Competition | string | { name?: string; id?: string; logo?: string; logoUrl?: string; competitionName?: string; competitionId?: string } | null
): string | undefined {
  const meta = getCompetitionMeta(competition);
  return meta.primaryUrl || meta.cdnUrl;
}
