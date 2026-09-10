export interface Team {
  name: string;
  code: string;
  logoUrl?: string; // Real official crest URL from sports data API
  logoColor: string; // Hex color or Tailwind class name
  secondaryColor?: string;
  logoText: string;
}

export interface Competition {
  id: string;
  name: string;
  logo: string; // Tailwind color or emoji or category
  season: string;
  predictionAccuracy: number;
  totalMatchesPredicted: number;
  upcomingMatchesCount: number;
  table?: TableRow[];
}

export interface TableRow {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: string[];
}

export interface Match {
  id: string;
  competitionId: string;
  competitionName: string;
  kickoffTime: string; // e.g. "20:00" or "Saturday · 15:00"
  kickoffDate: string; // "Yesterday" | "Today" | "Tomorrow" | "This Week"
  homeTeam: Team;
  awayTeam: Team;
  aiPrediction: string; // friendly output e.g. "Arsenal or Draw"
  marketBadge?: string; // e.g. "1X", "YES", "NO", "OVER 2.5"
  predictionMarket?: string; // e.g. "Double Chance", "Both Teams To Score", "Match Winner", "Total Goals"
  predictionType: 'home' | 'draw' | 'away' | 'over_1_5' | 'over_2_5' | 'under_2_5' | 'under_3_5' | 'btts_yes' | 'btts_no' | 'double_chance' | 'team_goals' | 'clean_sheet';
  probabilities: {
    homeWin: number;
    draw: number;
    awayWin: number;
  };
  predictedScore: {
    home: number;
    away: number;
  };
  confidence: number;
  confidenceLevel: 'HIGH' | 'MEDIUM' | 'LOW';
  status: 'upcoming' | 'completed';
  actualScore?: {
    home: number;
    away: number;
  };
  resultStatus?: 'correct' | 'incorrect';
  isFeatured?: boolean;
  isTopPick?: boolean;
  topPickLabel?: string; // e.g. "Inter Milan Double Chance"
  topPickType?: string; // e.g. "Win", "Over 1.5", "Double Chance", "BTTS"
  topPickProb?: number; // e.g. 82
  goalProbabilities?: {
    over15: number;
    over25: number;
    over35: number;
    under25: number;
  };
  bttsProbabilities?: {
    yes: number;
    no: number;
  };
  form?: {
    home: string[]; // e.g. ["W", "W", "D", "W", "W"]
    away: string[]; // e.g. ["W", "L", "D", "W", "W"]
  };
  formStats?: {
    home: {
      goalsScored: number;
      goalsConceded: number;
      cleanSheets: number;
      avgGoals: number;
      record: string; // e.g. "5-1-0"
    };
    away: {
      goalsScored: number;
      goalsConceded: number;
      cleanSheets: number;
      avgGoals: number;
      record: string; // e.g. "3-1-2"
    };
  };
  headToHead?: {
    summary: {
      homeWins: number;
      draws: number;
      awayWins: number;
    };
    lastMeetings: {
      date: string;
      competition: string;
      score: string;
      winner: string;
    }[];
  };
  statsComparison?: {
    name: string;
    home: number;
    away: number;
    max: number;
  }[];
  aiAnalysis?: {
    text: string;
    keyFactors: string[];
  };
}
