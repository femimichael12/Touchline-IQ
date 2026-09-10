import { Team } from '../types/football';

/**
 * Centralized Real Football Club Crest Registry
 * Official club crests provided with transparent background.
 * Future API Compatibility: dynamically checks for team.logoUrl first.
 */
export const TEAM_LOGOS: Record<string, string> = {
  // --- Premier League ---
  'manchester city': 'https://crests.football-data.org/65.png',
  'man city': 'https://crests.football-data.org/65.png',
  'mci': 'https://crests.football-data.org/65.png',

  'arsenal': 'https://crests.football-data.org/57.png',
  'ars': 'https://crests.football-data.org/57.png',

  'chelsea': 'https://crests.football-data.org/61.png',
  'che': 'https://crests.football-data.org/61.png',

  'liverpool': 'https://crests.football-data.org/64.png',
  'liv': 'https://crests.football-data.org/64.png',

  'manchester united': 'https://crests.football-data.org/66.png',
  'man united': 'https://crests.football-data.org/66.png',
  'man utd': 'https://crests.football-data.org/66.png',
  'mun': 'https://crests.football-data.org/66.png',

  'tottenham hotspur': 'https://crests.football-data.org/73.png',
  'tottenham': 'https://crests.football-data.org/73.png',
  'spurs': 'https://crests.football-data.org/73.png',
  'tot': 'https://crests.football-data.org/73.png',

  'newcastle united': 'https://crests.football-data.org/67.png',
  'newcastle': 'https://crests.football-data.org/67.png',
  'new': 'https://crests.football-data.org/67.png',

  'aston villa': 'https://crests.football-data.org/58.png',
  'avl': 'https://crests.football-data.org/58.png',

  // --- La Liga ---
  'real madrid': 'https://crests.football-data.org/86.png',
  'rma': 'https://crests.football-data.org/86.png',

  'barcelona': 'https://crests.football-data.org/81.png',
  'fc barcelona': 'https://crests.football-data.org/81.png',
  'fcb': 'https://crests.football-data.org/81.png',

  'atletico madrid': 'https://crests.football-data.org/78.png',
  'atletico': 'https://crests.football-data.org/78.png',
  'atm': 'https://crests.football-data.org/78.png',

  'villarreal': 'https://crests.football-data.org/94.png',
  'villarreal cf': 'https://crests.football-data.org/94.png',
  'vil': 'https://crests.football-data.org/94.png',

  // --- Serie A ---
  'juventus': 'https://crests.football-data.org/109.png',
  'juv': 'https://crests.football-data.org/109.png',

  'ac milan': 'https://crests.football-data.org/98.png',
  'milan': 'https://crests.football-data.org/98.png',
  'acm': 'https://crests.football-data.org/98.png',

  'inter milan': 'https://crests.football-data.org/108.png',
  'inter': 'https://crests.football-data.org/108.png',
  'internazionale': 'https://crests.football-data.org/108.png',
  'int': 'https://crests.football-data.org/108.png',

  'as roma': 'https://crests.football-data.org/100.png',
  'roma': 'https://crests.football-data.org/100.png',
  'rom': 'https://crests.football-data.org/100.png',

  'napoli': 'https://crests.football-data.org/113.png',
  'ssc napoli': 'https://crests.football-data.org/113.png',
  'nap': 'https://crests.football-data.org/113.png',

  // --- Bundesliga ---
  'bayern munich': 'https://crests.football-data.org/5.png',
  'bayern munchen': 'https://crests.football-data.org/5.png',
  'bayern': 'https://crests.football-data.org/5.png',
  'bay': 'https://crests.football-data.org/5.png',

  'borussia dortmund': 'https://crests.football-data.org/4.png',
  'dortmund': 'https://crests.football-data.org/4.png',
  'bvb': 'https://crests.football-data.org/4.png',

  'bayer leverkusen': 'https://crests.football-data.org/721.png',
  'leverkusen': 'https://crests.football-data.org/721.png',
  'b04': 'https://crests.football-data.org/721.png',

  // --- Ligue 1 ---
  'psg': 'https://crests.football-data.org/524.png',
  'paris saint germain': 'https://crests.football-data.org/524.png',
  'paris': 'https://crests.football-data.org/524.png',

  'marseille': 'https://crests.football-data.org/516.png',
  'om': 'https://crests.football-data.org/516.png',

  'lyon': 'https://crests.football-data.org/523.png',
  'ol': 'https://crests.football-data.org/523.png',
};

/**
 * Normalizes club name by lowercasing and stripping diacritics and punctuation
 */
export function normalizeClubKey(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Centralized resolution function for team logos.
 * Supports future API dynamic team objects with `logoUrl`, or resolves from database.
 */
export function getTeamLogoUrl(teamOrName: Team | string | null | undefined): string | undefined {
  if (!teamOrName) return undefined;

  // 1. If it's a Team object
  if (typeof teamOrName === 'object') {
    // If the data provider already has a real logoUrl:
    if (teamOrName.logoUrl && typeof teamOrName.logoUrl === 'string' && teamOrName.logoUrl.startsWith('http')) {
      return teamOrName.logoUrl;
    }

    if (teamOrName.name) {
      const normName = normalizeClubKey(teamOrName.name);
      if (TEAM_LOGOS[normName]) return TEAM_LOGOS[normName];

      // Match partial names (e.g. "Atletico Madrid" in "Club Atletico de Madrid")
      for (const [key, url] of Object.entries(TEAM_LOGOS)) {
        if (normName === key || normName.includes(key) || key.includes(normName)) {
          return url;
        }
      }
    }

    if (teamOrName.code) {
      const normCode = normalizeClubKey(teamOrName.code);
      if (TEAM_LOGOS[normCode]) return TEAM_LOGOS[normCode];
    }

    return undefined;
  }

  // 2. If it's a string
  const norm = normalizeClubKey(teamOrName);
  if (TEAM_LOGOS[norm]) return TEAM_LOGOS[norm];

  for (const [key, url] of Object.entries(TEAM_LOGOS)) {
    if (norm === key || norm.includes(key) || key.includes(norm)) {
      return url;
    }
  }

  return undefined;
}
