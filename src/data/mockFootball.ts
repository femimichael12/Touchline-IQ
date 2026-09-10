import { Match, Competition, Team } from '../types/football';

// Team Database with Official Club Crest Assets
export const TEAMS: Record<string, Team> = {
  ARSENAL: { 
    name: 'Arsenal', 
    code: 'ARS', 
    logoUrl: 'https://crests.football-data.org/57.png',
    logoColor: '#EF0107', 
    secondaryColor: '#FFFFFF', 
    logoText: 'A' 
  },
  CHELSEA: { 
    name: 'Chelsea', 
    code: 'CHE', 
    logoUrl: 'https://crests.football-data.org/61.png',
    logoColor: '#034694', 
    secondaryColor: '#FFFFFF', 
    logoText: 'C' 
  },
  LIVERPOOL: { 
    name: 'Liverpool', 
    code: 'LIV', 
    logoUrl: 'https://crests.football-data.org/64.png',
    logoColor: '#C8102E', 
    secondaryColor: '#F6EB61', 
    logoText: 'L' 
  },
  MAN_CITY: { 
    name: 'Manchester City', 
    code: 'MCI', 
    logoUrl: 'https://crests.football-data.org/65.png',
    logoColor: '#6CABDD', 
    secondaryColor: '#1C2C5B', 
    logoText: 'MC' 
  },
  MAN_UTD: { 
    name: 'Manchester United', 
    code: 'MUN', 
    logoUrl: 'https://crests.football-data.org/66.png',
    logoColor: '#DA291C', 
    secondaryColor: '#FFE500', 
    logoText: 'MU' 
  },
  REAL_MADRID: { 
    name: 'Real Madrid', 
    code: 'RMA', 
    logoUrl: 'https://crests.football-data.org/86.png',
    logoColor: '#ECEFF1', 
    secondaryColor: '#1A237E', 
    logoText: 'RM' 
  },
  BARCELONA: { 
    name: 'Barcelona', 
    code: 'FCB', 
    logoUrl: 'https://crests.football-data.org/81.png',
    logoColor: '#004D98', 
    secondaryColor: '#A50044', 
    logoText: 'FCB' 
  },
  ATLETICO: { 
    name: 'Atlético Madrid', 
    code: 'ATM', 
    logoUrl: 'https://crests.football-data.org/78.png',
    logoColor: '#CB3524', 
    secondaryColor: '#1B4D91', 
    logoText: 'AM' 
  },
  VILLARREAL: { 
    name: 'Villarreal', 
    code: 'VIL', 
    logoUrl: 'https://crests.football-data.org/94.png',
    logoColor: '#FFE600', 
    secondaryColor: '#005CA9', 
    logoText: 'VIL' 
  },
  INTER_MILAN: { 
    name: 'Inter Milan', 
    code: 'INT', 
    logoUrl: 'https://crests.football-data.org/108.png',
    logoColor: '#001A30', 
    secondaryColor: '#0066B2', 
    logoText: 'IM' 
  },
  AC_MILAN: { 
    name: 'AC Milan', 
    code: 'ACM', 
    logoUrl: 'https://crests.football-data.org/98.png',
    logoColor: '#E30613', 
    secondaryColor: '#000000', 
    logoText: 'ACM' 
  },
  JUVENTUS: { 
    name: 'Juventus', 
    code: 'JUV', 
    logoUrl: 'https://crests.football-data.org/109.png',
    logoColor: '#111111', 
    secondaryColor: '#FFFFFF', 
    logoText: 'J' 
  },
  BAYERN: { 
    name: 'Bayern Munich', 
    code: 'FCB', 
    logoUrl: 'https://crests.football-data.org/5.png',
    logoColor: '#DC052D', 
    secondaryColor: '#0066B2', 
    logoText: 'FCB' 
  },
  PSG: { 
    name: 'PSG', 
    code: 'PSG', 
    logoUrl: 'https://crests.football-data.org/524.png',
    logoColor: '#002C5F', 
    secondaryColor: '#E30613', 
    logoText: 'PSG' 
  },
};

// Competitions Database
export const COMPETITIONS: Competition[] = [
  {
    id: 'pl',
    name: 'Premier League',
    logo: '🏆',
    season: '2026/27',
    predictionAccuracy: 71.4,
    totalMatchesPredicted: 342,
    upcomingMatchesCount: 5,
    table: [
      { position: 1, team: 'Manchester City', played: 4, won: 4, drawn: 0, lost: 0, goalsFor: 12, goalsAgainst: 2, goalDifference: 10, points: 12, form: ['W', 'W', 'W', 'W'] },
      { position: 2, team: 'Arsenal', played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 8, goalsAgainst: 2, goalDifference: 6, points: 10, form: ['W', 'W', 'D', 'W'] },
      { position: 3, team: 'Liverpool', played: 4, won: 3, drawn: 0, lost: 1, goalsFor: 9, goalsAgainst: 3, goalDifference: 6, points: 9, form: ['W', 'W', 'W', 'L'] },
      { position: 4, team: 'Chelsea', played: 4, won: 2, drawn: 1, lost: 1, goalsFor: 8, goalsAgainst: 5, goalDifference: 3, points: 7, form: ['W', 'L', 'D', 'W'] },
      { position: 5, team: 'Manchester United', played: 4, won: 2, drawn: 0, lost: 2, goalsFor: 5, goalsAgainst: 6, goalDifference: -1, points: 6, form: ['L', 'W', 'L', 'W'] },
    ]
  },
  {
    id: 'ucl',
    name: 'UEFA Champions League',
    logo: '✨',
    season: '2026/27',
    predictionAccuracy: 74.2,
    totalMatchesPredicted: 184,
    upcomingMatchesCount: 3,
    table: [
      { position: 1, team: 'Real Madrid', played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 6, goalsAgainst: 1, goalDifference: 5, points: 6, form: ['W', 'W'] },
      { position: 2, team: 'Bayern Munich', played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 5, goalsAgainst: 2, goalDifference: 3, points: 6, form: ['W', 'W'] },
      { position: 3, team: 'Arsenal', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 3, goalsAgainst: 1, goalDifference: 2, points: 4, form: ['D', 'W'] },
      { position: 4, team: 'Inter Milan', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 0, goalDifference: 2, points: 4, form: ['W', 'D'] },
      { position: 5, team: 'PSG', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 3, goalsAgainst: 3, goalDifference: 0, points: 3, form: ['W', 'L'] },
    ]
  },
  {
    id: 'laliga',
    name: 'La Liga',
    logo: '🇪🇸',
    season: '2026/27',
    predictionAccuracy: 68.8,
    totalMatchesPredicted: 286,
    upcomingMatchesCount: 3,
    table: [
      { position: 1, team: 'Barcelona', played: 4, won: 4, drawn: 0, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10, points: 12, form: ['W', 'W', 'W', 'W'] },
      { position: 2, team: 'Real Madrid', played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 9, goalsAgainst: 2, goalDifference: 7, points: 10, form: ['W', 'D', 'W', 'W'] },
      { position: 3, team: 'Atletico Madrid', played: 4, won: 2, drawn: 2, lost: 0, goalsFor: 6, goalsAgainst: 2, goalDifference: 4, points: 8, form: ['D', 'W', 'D', 'W'] },
    ]
  },
  {
    id: 'seriea',
    name: 'Serie A',
    logo: '🇮🇹',
    season: '2026/27',
    predictionAccuracy: 67.5,
    totalMatchesPredicted: 240,
    upcomingMatchesCount: 2,
    table: [
      { position: 1, team: 'Inter Milan', played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 10, goalsAgainst: 3, goalDifference: 7, points: 10, form: ['W', 'D', 'W', 'W'] },
      { position: 2, team: 'Juventus', played: 4, won: 2, drawn: 2, lost: 0, goalsFor: 6, goalsAgainst: 1, goalDifference: 5, points: 8, form: ['W', 'W', 'D', 'D'] },
      { position: 3, team: 'AC Milan', played: 4, won: 2, drawn: 1, lost: 1, goalsFor: 7, goalsAgainst: 5, goalDifference: 2, points: 7, form: ['D', 'L', 'W', 'W'] },
    ]
  },
  {
    id: 'bundesliga',
    name: 'Bundesliga',
    logo: '🇩🇪',
    season: '2026/27',
    predictionAccuracy: 70.1,
    totalMatchesPredicted: 168,
    upcomingMatchesCount: 2,
    table: [
      { position: 1, team: 'Bayern Munich', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 9, goalsAgainst: 2, goalDifference: 7, points: 9, form: ['W', 'W', 'W'] },
    ]
  },
  {
    id: 'ligue1',
    name: 'Ligue 1',
    logo: '🇫🇷',
    season: '2026/27',
    predictionAccuracy: 66.2,
    totalMatchesPredicted: 144,
    upcomingMatchesCount: 1,
    table: [
      { position: 1, team: 'PSG', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 10, goalsAgainst: 1, goalDifference: 9, points: 9, form: ['W', 'W', 'W'] },
    ]
  },
  {
    id: 'uel',
    name: 'Europa League',
    logo: '🇪🇺',
    season: '2026/27',
    predictionAccuracy: 69.3,
    totalMatchesPredicted: 120,
    upcomingMatchesCount: 2,
    table: []
  }
];

// Helper to populate robust statistics and AI analysis
const makeAnalysis = (home: string, away: string, comp: string, prediction: string, probHome: number, probDraw: number, probAway: number) => {
  return {
    text: `${home} enter this fixture with stronger recent form and an excellent tactical structure. Their statistical output has been superior in central build-up phases. ${away} remain highly capable of transition threats, creating scoring opportunities and sustaining pressure, which keeps the probability of goals elevated across both halves.`,
    keyFactors: [
      `${home} are highly efficient at home, averaging 2.1+ goals per match.`,
      `The statistical models indicate a high tactical advantage in progressive passes for the hosts.`,
      `${away} showing minor vulnerability in defensive transitions in recent away matches.`,
      `Head-to-head records favor the predicted outcome of ${prediction}.`,
    ]
  };
};

const makeGoalProbs = (over15: number, over25: number, over35: number, under25: number) => ({
  over15, over25, over35, under25
});

const makeBttsProbs = (yes: number, no: number) => ({ yes, no });

// Complete list of mock matches
export const MATCHES: Match[] = [
  // --- UPCOMING MATCHES (15 Fixtures) ---
  {
    id: 'up_featured',
    competitionId: 'ucl',
    competitionName: 'UEFA Champions League',
    kickoffTime: '20:00',
    kickoffDate: 'Today',
    homeTeam: TEAMS.MAN_CITY,
    awayTeam: TEAMS.REAL_MADRID,
    aiPrediction: 'Manchester City Win',
    predictionType: 'home',
    probabilities: { homeWin: 58, draw: 23, awayWin: 19 },
    predictedScore: { home: 2, away: 1 },
    confidence: 76,
    confidenceLevel: 'HIGH',
    status: 'upcoming',
    isFeatured: true, // FEATURED MATCH OF THE DAY
    isTopPick: true,
    topPickLabel: 'Manchester City Win',
    topPickType: 'Win',
    topPickProb: 82,
    goalProbabilities: makeGoalProbs(89, 73, 49, 27),
    bttsProbabilities: makeBttsProbs(72, 28),
    form: {
      home: ['W', 'W', 'W', 'W', 'D'],
      away: ['W', 'D', 'W', 'W', 'W']
    },
    formStats: {
      home: { goalsScored: 15, goalsConceded: 3, cleanSheets: 3, avgGoals: 3.0, record: '5-0-0' },
      away: { goalsScored: 11, goalsConceded: 4, cleanSheets: 2, avgGoals: 2.2, record: '4-1-0' }
    },
    headToHead: {
      summary: { homeWins: 4, draws: 4, awayWins: 2 },
      lastMeetings: [
        { date: '2026-05-12', competition: 'Champions League', score: '1 - 1', winner: 'Draw' },
        { date: '2026-05-04', competition: 'Champions League', score: '3 - 2', winner: 'Manchester City' },
        { date: '2025-04-17', competition: 'Champions League', score: '4 - 3', winner: 'Manchester City' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 95, away: 91, max: 100 },
      { name: 'Defense Rating', home: 88, away: 85, max: 100 },
      { name: 'Recent Form Score', home: 90, away: 88, max: 100 },
      { name: 'Expected Goals (xG)', home: 2.7, away: 2.2, max: 3.0 },
      { name: 'Average Possession %', home: 64, away: 54, max: 100 },
      { name: 'Clean Sheets %', home: 50, away: 40, max: 100 }
    ],
    aiAnalysis: makeAnalysis('Manchester City', 'Real Madrid', 'UEFA Champions League', 'Manchester City Win', 58, 23, 19)
  },
  {
    id: 'up_1',
    competitionId: 'pl',
    competitionName: 'Premier League',
    kickoffTime: '15:00',
    kickoffDate: 'Today',
    homeTeam: TEAMS.ARSENAL,
    awayTeam: TEAMS.CHELSEA,
    aiPrediction: 'Arsenal or Draw',
    predictionType: 'double_chance',
    marketBadge: '1X',
    predictionMarket: 'Double Chance',
    probabilities: { homeWin: 61, draw: 23, awayWin: 16 },
    predictedScore: { home: 2, away: 1 },
    confidence: 78,
    confidenceLevel: 'HIGH',
    status: 'upcoming',
    isFeatured: false,
    goalProbabilities: makeGoalProbs(82, 67, 39, 33),
    bttsProbabilities: makeBttsProbs(64, 36),
    form: {
      home: ['W', 'W', 'D', 'W', 'W'],
      away: ['W', 'L', 'D', 'W', 'W']
    },
    formStats: {
      home: { goalsScored: 12, goalsConceded: 4, cleanSheets: 3, avgGoals: 2.4, record: '4-1-0' },
      away: { goalsScored: 9, goalsConceded: 7, cleanSheets: 1, avgGoals: 1.8, record: '2-1-2' }
    },
    headToHead: {
      summary: { homeWins: 5, draws: 2, awayWins: 3 },
      lastMeetings: [
        { date: '2026-04-18', competition: 'Premier League', score: '3 - 1', winner: 'Arsenal' },
        { date: '2025-11-09', competition: 'Premier League', score: '1 - 1', winner: 'Draw' },
        { date: '2025-05-02', competition: 'Premier League', score: '2 - 0', winner: 'Arsenal' },
        { date: '2024-10-22', competition: 'Premier League', score: '1 - 2', winner: 'Chelsea' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 82, away: 68, max: 100 },
      { name: 'Defense Rating', home: 80, away: 70, max: 100 },
      { name: 'Recent Form Score', home: 85, away: 75, max: 100 },
      { name: 'Expected Goals (xG)', home: 2.1, away: 1.6, max: 3.0 },
      { name: 'Average Possession %', home: 58, away: 52, max: 100 },
      { name: 'Clean Sheets %', home: 60, away: 20, max: 100 }
    ],
    aiAnalysis: makeAnalysis('Arsenal', 'Chelsea', 'Premier League', 'Arsenal or Draw', 61, 23, 16)
  },
  {
    id: 'up_2',
    competitionId: 'ucl',
    competitionName: 'UEFA Champions League',
    kickoffTime: '21:00',
    kickoffDate: 'Today',
    homeTeam: TEAMS.REAL_MADRID,
    awayTeam: TEAMS.ATLETICO,
    aiPrediction: 'Under 3.5 Goals',
    predictionType: 'under_3_5',
    marketBadge: 'UNDER 3.5',
    predictionMarket: 'Goals',
    probabilities: { homeWin: 56, draw: 25, awayWin: 19 },
    predictedScore: { home: 2, away: 1 },
    confidence: 79,
    confidenceLevel: 'HIGH',
    status: 'upcoming',
    isFeatured: false,
    isTopPick: true,
    topPickLabel: 'Real Madrid vs Atletico Under 3.5',
    topPickType: 'Under 3.5 Goals',
    topPickProb: 79,
    goalProbabilities: makeGoalProbs(90, 72, 48, 28),
    bttsProbabilities: makeBttsProbs(70, 30),
    form: {
      home: ['W', 'D', 'W', 'W', 'W'],
      away: ['W', 'W', 'D', 'W', 'D']
    },
    formStats: {
      home: { goalsScored: 13, goalsConceded: 4, cleanSheets: 3, avgGoals: 2.6, record: '4-1-0' },
      away: { goalsScored: 9, goalsConceded: 5, cleanSheets: 2, avgGoals: 1.8, record: '3-2-0' }
    },
    headToHead: {
      summary: { homeWins: 6, draws: 4, awayWins: 3 },
      lastMeetings: [
        { date: '2026-02-10', competition: 'La Liga', score: '1 - 1', winner: 'Draw' },
        { date: '2025-09-28', competition: 'La Liga', score: '2 - 1', winner: 'Real Madrid' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 93, away: 82, max: 100 },
      { name: 'Defense Rating', home: 88, away: 89, max: 100 },
      { name: 'Recent Form Score', home: 89, away: 82, max: 100 },
      { name: 'Expected Goals (xG)', home: 2.4, away: 1.5, max: 3.0 },
      { name: 'Average Possession %', home: 59, away: 46, max: 100 },
      { name: 'Clean Sheets %', home: 60, away: 40, max: 100 }
    ],
    aiAnalysis: makeAnalysis('Real Madrid', 'Atlético Madrid', 'UEFA Champions League', 'Under 3.5 Goals', 56, 25, 19)
  },
  {
    id: 'up_3',
    competitionId: 'laliga',
    competitionName: 'La Liga',
    kickoffTime: '17:15',
    kickoffDate: 'Today',
    homeTeam: TEAMS.BARCELONA,
    awayTeam: TEAMS.VILLARREAL,
    aiPrediction: 'Over 2.5 Goals',
    predictionType: 'over_2_5',
    marketBadge: 'OVER 2.5',
    predictionMarket: 'Goals',
    probabilities: { homeWin: 68, draw: 20, awayWin: 12 },
    predictedScore: { home: 3, away: 1 },
    confidence: 72,
    confidenceLevel: 'HIGH',
    status: 'upcoming',
    isFeatured: false,
    isTopPick: true,
    topPickLabel: 'Barcelona Over 2.5 Goals',
    topPickType: 'Over 2.5 Goals',
    topPickProb: 72,
    goalProbabilities: makeGoalProbs(94, 82, 58, 18),
    bttsProbabilities: makeBttsProbs(73, 27),
    form: {
      home: ['W', 'W', 'W', 'W', 'W'],
      away: ['W', 'L', 'W', 'D', 'W']
    },
    formStats: {
      home: { goalsScored: 16, goalsConceded: 4, cleanSheets: 3, avgGoals: 3.2, record: '5-0-0' },
      away: { goalsScored: 10, goalsConceded: 8, cleanSheets: 1, avgGoals: 2.0, record: '3-1-1' }
    },
    headToHead: {
      summary: { homeWins: 7, draws: 1, awayWins: 2 },
      lastMeetings: [
        { date: '2026-01-20', competition: 'La Liga', score: '4 - 1', winner: 'Barcelona' },
        { date: '2025-08-27', competition: 'La Liga', score: '3 - 2', winner: 'Barcelona' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 96, away: 78, max: 100 },
      { name: 'Defense Rating', home: 84, away: 72, max: 100 },
      { name: 'Recent Form Score', home: 95, away: 74, max: 100 },
      { name: 'Expected Goals (xG)', home: 2.8, away: 1.4, max: 3.0 },
      { name: 'Average Possession %', home: 65, away: 45, max: 100 },
      { name: 'Clean Sheets %', home: 60, away: 20, max: 100 }
    ],
    aiAnalysis: makeAnalysis('Barcelona', 'Villarreal', 'La Liga', 'Over 2.5 Goals', 68, 20, 12)
  },
  {
    id: 'up_4',
    competitionId: 'seriea',
    competitionName: 'Serie A',
    kickoffTime: '19:45',
    kickoffDate: 'Today',
    homeTeam: TEAMS.JUVENTUS,
    awayTeam: TEAMS.AC_MILAN,
    aiPrediction: 'Both Teams To Score',
    predictionType: 'btts_yes',
    marketBadge: 'YES',
    predictionMarket: 'Both Teams To Score',
    probabilities: { homeWin: 45, draw: 28, awayWin: 27 },
    predictedScore: { home: 1, away: 1 },
    confidence: 74,
    confidenceLevel: 'HIGH',
    status: 'upcoming',
    isFeatured: false,
    goalProbabilities: makeGoalProbs(78, 52, 28, 48),
    bttsProbabilities: makeBttsProbs(74, 26),
    form: {
      home: ['W', 'W', 'D', 'W', 'D'],
      away: ['D', 'W', 'W', 'L', 'W']
    },
    formStats: {
      home: { goalsScored: 8, goalsConceded: 3, cleanSheets: 3, avgGoals: 1.6, record: '3-2-0' },
      away: { goalsScored: 9, goalsConceded: 6, cleanSheets: 2, avgGoals: 1.8, record: '3-1-1' }
    },
    headToHead: {
      summary: { homeWins: 4, draws: 4, awayWins: 3 },
      lastMeetings: [
        { date: '2026-04-12', competition: 'Serie A', score: '0 - 0', winner: 'Draw' },
        { date: '2025-10-22', competition: 'Serie A', score: '1 - 1', winner: 'Draw' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 81, away: 82, max: 100 },
      { name: 'Defense Rating', home: 89, away: 80, max: 100 },
      { name: 'Recent Form Score', home: 84, away: 78, max: 100 },
      { name: 'Expected Goals (xG)', home: 1.6, away: 1.5, max: 3.0 },
      { name: 'Average Possession %', home: 52, away: 51, max: 100 },
      { name: 'Clean Sheets %', home: 60, away: 40, max: 100 }
    ],
    aiAnalysis: makeAnalysis('Juventus', 'AC Milan', 'Serie A', 'Both Teams To Score', 45, 28, 27)
  },
  {
    id: 'up_5',
    competitionId: 'bundesliga',
    competitionName: 'Bundesliga',
    kickoffTime: '15:30',
    kickoffDate: 'Today',
    homeTeam: TEAMS.BAYERN,
    awayTeam: TEAMS.JUVENTUS,
    aiPrediction: 'BTTS — Yes',
    predictionType: 'btts_yes',
    marketBadge: 'YES',
    predictionMarket: 'Both Teams To Score',
    probabilities: { homeWin: 65, draw: 22, awayWin: 13 },
    predictedScore: { home: 3, away: 1 },
    confidence: 76,
    confidenceLevel: 'HIGH',
    status: 'upcoming',
    isTopPick: true,
    topPickLabel: 'Bayern Munich BTTS — Yes',
    topPickType: 'BTTS',
    topPickProb: 76,
    goalProbabilities: makeGoalProbs(88, 71, 46, 29),
    bttsProbabilities: makeBttsProbs(76, 24),
    form: {
      home: ['W', 'W', 'W', 'D', 'W'],
      away: ['W', 'W', 'D', 'D', 'L']
    },
    formStats: {
      home: { goalsScored: 16, goalsConceded: 4, cleanSheets: 3, avgGoals: 3.2, record: '4-1-0' },
      away: { goalsScored: 6, goalsConceded: 3, cleanSheets: 3, avgGoals: 1.2, record: '2-2-1' }
    },
    headToHead: {
      summary: { homeWins: 3, draws: 1, awayWins: 1 },
      lastMeetings: [
        { date: '2025-08-01', competition: 'Club Friendly', score: '2 - 0', winner: 'Bayern Munich' },
        { date: '2023-11-20', competition: 'Champions League', score: '3 - 1', winner: 'Bayern Munich' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 94, away: 72, max: 100 },
      { name: 'Defense Rating', home: 84, away: 88, max: 100 },
      { name: 'Recent Form Score', home: 88, away: 76, max: 100 },
      { name: 'Expected Goals (xG)', home: 2.8, away: 1.4, max: 3.0 },
      { name: 'Average Possession %', home: 61, away: 48, max: 100 },
      { name: 'Clean Sheets %', home: 60, away: 60, max: 100 }
    ],
    aiAnalysis: makeAnalysis('Bayern Munich', 'Juventus', 'Bundesliga', 'BTTS — Yes', 65, 22, 13)
  },
  {
    id: 'up_6',
    competitionId: 'ligue1',
    competitionName: 'Ligue 1',
    kickoffTime: '20:45',
    kickoffDate: 'Today',
    homeTeam: TEAMS.PSG,
    awayTeam: TEAMS.CHELSEA,
    aiPrediction: 'Home Team to Score',
    predictionType: 'team_goals',
    marketBadge: 'OVER 0.5',
    predictionMarket: 'Team Goals',
    probabilities: { homeWin: 57, draw: 25, awayWin: 18 },
    predictedScore: { home: 2, away: 0 },
    confidence: 85,
    confidenceLevel: 'HIGH',
    status: 'upcoming',
    isTopPick: false,
    goalProbabilities: makeGoalProbs(85, 62, 38, 38),
    bttsProbabilities: makeBttsProbs(55, 45),
    form: {
      home: ['W', 'W', 'W', 'D', 'W'],
      away: ['W', 'L', 'D', 'W', 'W']
    },
    formStats: {
      home: { goalsScored: 14, goalsConceded: 2, cleanSheets: 4, avgGoals: 2.8, record: '4-1-0' },
      away: { goalsScored: 9, goalsConceded: 7, cleanSheets: 1, avgGoals: 1.8, record: '2-1-2' }
    },
    headToHead: {
      summary: { homeWins: 2, draws: 3, awayWins: 2 },
      lastMeetings: [
        { date: '2024-03-12', competition: 'Champions League', score: '2 - 2', winner: 'Draw' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 90, away: 68, max: 100 },
      { name: 'Defense Rating', home: 86, away: 70, max: 100 },
      { name: 'Recent Form Score', home: 90, away: 75, max: 100 },
      { name: 'Expected Goals (xG)', home: 2.4, away: 1.6, max: 3.0 },
      { name: 'Average Possession %', home: 63, away: 52, max: 100 },
      { name: 'Clean Sheets %', home: 80, away: 20, max: 100 }
    ],
    aiAnalysis: makeAnalysis('PSG', 'Chelsea', 'Ligue 1', 'Home Team to Score', 57, 25, 18)
  },
  {
    id: 'up_7',
    competitionId: 'pl',
    competitionName: 'Premier League',
    kickoffTime: '17:30',
    kickoffDate: 'Today',
    homeTeam: TEAMS.LIVERPOOL,
    awayTeam: TEAMS.MAN_UTD,
    aiPrediction: 'Liverpool to Score',
    predictionType: 'team_goals',
    marketBadge: 'OVER 0.5',
    predictionMarket: 'Team Goals',
    probabilities: { homeWin: 60, draw: 22, awayWin: 18 },
    predictedScore: { home: 3, away: 1 },
    confidence: 84,
    confidenceLevel: 'HIGH',
    status: 'upcoming',
    isTopPick: true,
    topPickLabel: 'Liverpool Over 0.5 Goals',
    topPickType: 'Team Goals',
    topPickProb: 84,
    goalProbabilities: makeGoalProbs(86, 70, 48, 30),
    bttsProbabilities: makeBttsProbs(66, 34),
    form: {
      home: ['W', 'W', 'W', 'L', 'W'],
      away: ['L', 'W', 'L', 'W', 'D']
    },
    formStats: {
      home: { goalsScored: 11, goalsConceded: 4, cleanSheets: 2, avgGoals: 2.2, record: '4-0-1' },
      away: { goalsScored: 6, goalsConceded: 8, cleanSheets: 1, avgGoals: 1.2, record: '2-1-2' }
    },
    headToHead: {
      summary: { homeWins: 4, draws: 3, awayWins: 3 },
      lastMeetings: [
        { date: '2026-03-10', competition: 'Premier League', score: '4 - 0', winner: 'Liverpool' },
        { date: '2025-12-14', competition: 'Premier League', score: '2 - 2', winner: 'Draw' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 88, away: 72, max: 100 },
      { name: 'Defense Rating', home: 84, away: 72, max: 100 },
      { name: 'Recent Form Score', home: 82, away: 64, max: 100 },
      { name: 'Expected Goals (xG)', home: 2.2, away: 1.5, max: 3.0 },
      { name: 'Average Possession %', home: 59, away: 50, max: 100 },
      { name: 'Clean Sheets %', home: 40, away: 20, max: 100 }
    ],
    aiAnalysis: makeAnalysis('Liverpool', 'Manchester United', 'Premier League', 'Liverpool Win', 60, 22, 18)
  },
  {
    id: 'up_8',
    competitionId: 'laliga',
    competitionName: 'La Liga',
    kickoffTime: '21:00',
    kickoffDate: 'Today',
    homeTeam: TEAMS.BARCELONA,
    awayTeam: TEAMS.ATLETICO,
    aiPrediction: 'Home Team Clean Sheet',
    predictionType: 'clean_sheet',
    predictionMarket: 'Clean Sheet',
    probabilities: { homeWin: 55, draw: 27, awayWin: 18 },
    predictedScore: { home: 2, away: 0 },
    confidence: 68,
    confidenceLevel: 'MEDIUM',
    status: 'upcoming',
    isTopPick: true,
    topPickLabel: 'Barcelona Clean Sheet',
    topPickType: 'Clean Sheet',
    topPickProb: 68,
    goalProbabilities: makeGoalProbs(84, 61, 35, 39),
    bttsProbabilities: makeBttsProbs(73, 27),
    form: {
      home: ['W', 'W', 'W', 'W', 'W'],
      away: ['D', 'W', 'D', 'W', 'D']
    },
    formStats: {
      home: { goalsScored: 15, goalsConceded: 3, cleanSheets: 3, avgGoals: 3.0, record: '5-0-0' },
      away: { goalsScored: 6, goalsConceded: 2, cleanSheets: 3, avgGoals: 1.2, record: '2-3-0' }
    },
    headToHead: {
      summary: { homeWins: 5, draws: 3, awayWins: 2 },
      lastMeetings: [
        { date: '2026-03-02', competition: 'La Liga', score: '3 - 0', winner: 'Barcelona' },
        { date: '2025-11-30', competition: 'La Liga', score: '1 - 1', winner: 'Draw' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 94, away: 78, max: 100 },
      { name: 'Defense Rating', home: 82, away: 89, max: 100 },
      { name: 'Recent Form Score', home: 95, away: 80, max: 100 },
      { name: 'Expected Goals (xG)', home: 2.6, away: 1.4, max: 3.0 },
      { name: 'Average Possession %', home: 61, away: 45, max: 100 },
      { name: 'Clean Sheets %', home: 60, away: 60, max: 100 }
    ],
    aiAnalysis: makeAnalysis('Barcelona', 'Atletico Madrid', 'La Liga', 'Home Team Clean Sheet', 55, 27, 18)
  },
  {
    id: 'up_9',
    competitionId: 'uel',
    competitionName: 'Europa League',
    kickoffTime: '18:45',
    kickoffDate: 'Today',
    homeTeam: TEAMS.MAN_UTD,
    awayTeam: TEAMS.AC_MILAN,
    aiPrediction: 'Draw or Man United Win',
    predictionType: 'double_chance',
    marketBadge: '1X',
    predictionMarket: 'Double Chance',
    probabilities: { homeWin: 38, draw: 34, awayWin: 28 },
    predictedScore: { home: 1, away: 1 },
    confidence: 66,
    confidenceLevel: 'MEDIUM',
    status: 'upcoming',
    goalProbabilities: makeGoalProbs(70, 42, 21, 58),
    bttsProbabilities: makeBttsProbs(54, 46),
    form: {
      home: ['L', 'W', 'L', 'W', 'D'],
      away: ['D', 'L', 'W', 'W', 'L']
    },
    formStats: {
      home: { goalsScored: 6, goalsConceded: 8, cleanSheets: 1, avgGoals: 1.2, record: '2-1-2' },
      away: { goalsScored: 7, goalsConceded: 6, cleanSheets: 2, avgGoals: 1.4, record: '2-1-2' }
    },
    headToHead: {
      summary: { homeWins: 2, draws: 2, awayWins: 2 },
      lastMeetings: [
        { date: '2021-03-18', competition: 'Europa League', score: '0 - 1', winner: 'Manchester United' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 72, away: 75, max: 100 },
      { name: 'Defense Rating', home: 72, away: 76, max: 100 },
      { name: 'Recent Form Score', home: 64, away: 66, max: 100 },
      { name: 'Expected Goals (xG)', home: 1.5, away: 1.4, max: 3.0 },
      { name: 'Average Possession %', home: 50, away: 51, max: 100 },
      { name: 'Clean Sheets %', home: 20, away: 40, max: 100 }
    ],
    aiAnalysis: makeAnalysis('Manchester United', 'AC Milan', 'Europa League', 'Draw or Man United Win', 38, 34, 28)
  },
  {
    id: 'up_10',
    competitionId: 'ucl',
    competitionName: 'UEFA Champions League',
    kickoffTime: '21:00',
    kickoffDate: 'Tomorrow',
    homeTeam: TEAMS.PSG,
    awayTeam: TEAMS.BAYERN,
    aiPrediction: 'Bayern Munich Win',
    predictionType: 'away',
    marketBadge: 'AWAY WIN',
    probabilities: { homeWin: 30, draw: 25, awayWin: 45 },
    predictedScore: { home: 1, away: 2 },
    confidence: 62,
    confidenceLevel: 'MEDIUM',
    status: 'upcoming',
    goalProbabilities: makeGoalProbs(88, 72, 48, 28),
    bttsProbabilities: makeBttsProbs(70, 30),
    form: {
      home: ['W', 'W', 'W', 'D', 'W'],
      away: ['W', 'W', 'W', 'D', 'W']
    },
    formStats: {
      home: { goalsScored: 14, goalsConceded: 2, cleanSheets: 4, avgGoals: 2.8, record: '4-1-0' },
      away: { goalsScored: 16, goalsConceded: 4, cleanSheets: 3, avgGoals: 3.2, record: '4-1-0' }
    },
    headToHead: {
      summary: { homeWins: 2, draws: 1, awayWins: 4 },
      lastMeetings: [
        { date: '2025-03-08', competition: 'Champions League', score: '2 - 0', winner: 'Bayern Munich' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 90, away: 94, max: 100 },
      { name: 'Defense Rating', home: 86, away: 84, max: 100 },
      { name: 'Recent Form Score', home: 90, away: 88, max: 100 },
      { name: 'Expected Goals (xG)', home: 2.4, away: 2.8, max: 3.0 },
      { name: 'Average Possession %', home: 63, away: 61, max: 100 },
      { name: 'Clean Sheets %', home: 80, away: 60, max: 100 }
    ],
    aiAnalysis: makeAnalysis('PSG', 'Bayern Munich', 'UEFA Champions League', 'Bayern Munich Win', 30, 25, 45)
  },
  {
    id: 'up_11',
    competitionId: 'pl',
    competitionName: 'Premier League',
    kickoffTime: '15:00',
    kickoffDate: 'Yesterday', // To represent a prediction that was generated yesterday but either not played or error state
    homeTeam: TEAMS.MAN_CITY,
    awayTeam: TEAMS.CHELSEA,
    aiPrediction: 'Prediction Unavailable',
    predictionType: 'home',
    probabilities: { homeWin: 0, draw: 0, awayWin: 0 },
    predictedScore: { home: 0, away: 0 },
    confidence: 0,
    confidenceLevel: 'LOW',
    status: 'upcoming', // We use this specifically to demonstrate error handling!
    form: { home: [], away: [] },
  },
  {
    id: 'up_12',
    competitionId: 'seriea',
    competitionName: 'Serie A',
    kickoffTime: '20:45',
    kickoffDate: 'Today',
    homeTeam: TEAMS.INTER_MILAN,
    awayTeam: TEAMS.JUVENTUS,
    aiPrediction: 'Under 2.5 Goals',
    predictionType: 'under_2_5',
    marketBadge: 'UNDER 2.5',
    predictionMarket: 'Goals',
    probabilities: { homeWin: 30, draw: 42, awayWin: 28 },
    predictedScore: { home: 1, away: 1 },
    confidence: 71,
    confidenceLevel: 'HIGH',
    status: 'upcoming',
    goalProbabilities: makeGoalProbs(60, 32, 12, 68),
    bttsProbabilities: makeBttsProbs(45, 55),
    form: {
      home: ['W', 'D', 'W', 'W', 'D'],
      away: ['W', 'W', 'D', 'D', 'W']
    },
    formStats: {
      home: { goalsScored: 10, goalsConceded: 3, cleanSheets: 3, avgGoals: 2.0, record: '3-2-0' },
      away: { goalsScored: 6, goalsConceded: 1, cleanSheets: 4, avgGoals: 1.2, record: '3-2-0' }
    },
    headToHead: {
      summary: { homeWins: 2, draws: 5, awayWins: 3 },
      lastMeetings: [
        { date: '2026-02-04', competition: 'Serie A', score: '0 - 0', winner: 'Draw' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 72, away: 80, max: 100 },
      { name: 'Defense Rating', home: 88, away: 90, max: 100 },
      { name: 'Recent Form Score', home: 76, away: 82, max: 100 },
      { name: 'Expected Goals (xG)', home: 1.2, away: 1.8, max: 3.0 },
      { name: 'Average Possession %', home: 48, away: 54, max: 100 },
      { name: 'Clean Sheets %', home: 80, away: 80, max: 100 }
    ],
    aiAnalysis: makeAnalysis('Juventus', 'Inter Milan', 'Serie A', 'Draw', 30, 42, 28)
  },
  {
    id: 'up_13',
    competitionId: 'laliga',
    competitionName: 'La Liga',
    kickoffTime: '21:00',
    kickoffDate: 'This Week',
    homeTeam: TEAMS.ATLETICO,
    awayTeam: TEAMS.REAL_MADRID,
    aiPrediction: 'Draw',
    predictionType: 'draw',
    probabilities: { homeWin: 32, draw: 38, awayWin: 30 },
    predictedScore: { home: 1, away: 1 },
    confidence: 55,
    confidenceLevel: 'LOW',
    status: 'upcoming',
    goalProbabilities: makeGoalProbs(65, 38, 18, 62),
    bttsProbabilities: makeBttsProbs(52, 48),
    form: {
      home: ['D', 'W', 'D', 'W', 'D'],
      away: ['W', 'D', 'W', 'W', 'W']
    },
    formStats: {
      home: { goalsScored: 6, goalsConceded: 2, cleanSheets: 3, avgGoals: 1.2, record: '2-3-0' },
      away: { goalsScored: 11, goalsConceded: 3, cleanSheets: 3, avgGoals: 2.2, record: '4-1-0' }
    },
    headToHead: {
      summary: { homeWins: 2, draws: 4, awayWins: 4 },
      lastMeetings: [
        { date: '2026-02-04', competition: 'La Liga', score: '1 - 1', winner: 'Draw' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 78, away: 92, max: 100 },
      { name: 'Defense Rating', home: 89, away: 89, max: 100 },
      { name: 'Recent Form Score', home: 80, away: 84, max: 100 },
      { name: 'Expected Goals (xG)', home: 1.4, away: 2.3, max: 3.0 },
      { name: 'Average Possession %', home: 45, away: 56, max: 100 },
      { name: 'Clean Sheets %', home: 60, away: 60, max: 100 }
    ],
    aiAnalysis: makeAnalysis('Atletico Madrid', 'Real Madrid', 'La Liga', 'Draw', 32, 38, 30)
  },
  {
    id: 'up_14',
    competitionId: 'bundesliga',
    competitionName: 'Bundesliga',
    kickoffTime: '15:30',
    kickoffDate: 'This Week',
    homeTeam: TEAMS.BAYERN,
    awayTeam: TEAMS.PSG,
    aiPrediction: 'Bayern Munich Win',
    predictionType: 'home',
    probabilities: { homeWin: 58, draw: 22, awayWin: 20 },
    predictedScore: { home: 2, away: 1 },
    confidence: 71,
    confidenceLevel: 'HIGH',
    status: 'upcoming',
    goalProbabilities: makeGoalProbs(86, 68, 44, 32),
    bttsProbabilities: makeBttsProbs(65, 35),
    form: {
      home: ['W', 'W', 'W', 'D', 'W'],
      away: ['W', 'W', 'W', 'D', 'W']
    },
    formStats: {
      home: { goalsScored: 16, goalsConceded: 4, cleanSheets: 3, avgGoals: 3.2, record: '4-1-0' },
      away: { goalsScored: 14, goalsConceded: 2, cleanSheets: 4, avgGoals: 2.8, record: '4-1-0' }
    },
    headToHead: {
      summary: { homeWins: 4, draws: 1, awayWins: 2 },
      lastMeetings: [
        { date: '2024-04-12', competition: 'Champions League', score: '3 - 0', winner: 'Bayern Munich' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 94, away: 90, max: 100 },
      { name: 'Defense Rating', home: 84, away: 86, max: 100 },
      { name: 'Recent Form Score', home: 88, away: 90, max: 100 },
      { name: 'Expected Goals (xG)', home: 2.8, away: 2.4, max: 3.0 },
      { name: 'Average Possession %', home: 61, away: 63, max: 100 },
      { name: 'Clean Sheets %', home: 60, away: 80, max: 100 }
    ],
    aiAnalysis: makeAnalysis('Bayern Munich', 'PSG', 'Champions League', 'Bayern Munich Win', 58, 22, 20)
  },
  {
    id: 'up_15',
    competitionId: 'pl',
    competitionName: 'Premier League',
    kickoffTime: '15:00',
    kickoffDate: 'This Week',
    homeTeam: TEAMS.MAN_UTD,
    awayTeam: TEAMS.LIVERPOOL,
    aiPrediction: 'Liverpool Win',
    predictionType: 'away',
    probabilities: { homeWin: 24, draw: 26, awayWin: 50 },
    predictedScore: { home: 1, away: 2 },
    confidence: 65,
    confidenceLevel: 'MEDIUM',
    status: 'upcoming',
    goalProbabilities: makeGoalProbs(80, 58, 32, 42),
    bttsProbabilities: makeBttsProbs(60, 40),
    form: {
      home: ['L', 'W', 'L', 'W', 'D'],
      away: ['W', 'W', 'W', 'L', 'W']
    },
    formStats: {
      home: { goalsScored: 6, goalsConceded: 8, cleanSheets: 1, avgGoals: 1.2, record: '2-1-2' },
      away: { goalsScored: 11, goalsConceded: 4, cleanSheets: 2, avgGoals: 2.2, record: '4-0-1' }
    },
    headToHead: {
      summary: { homeWins: 3, draws: 3, awayWins: 4 },
      lastMeetings: [
        { date: '2026-03-10', competition: 'Premier League', score: '0 - 4', winner: 'Liverpool' },
      ]
    },
    statsComparison: [
      { name: 'Attack Power', home: 72, away: 88, max: 100 },
      { name: 'Defense Rating', home: 72, away: 84, max: 100 },
      { name: 'Recent Form Score', home: 64, away: 82, max: 100 },
      { name: 'Expected Goals (xG)', home: 1.5, away: 2.2, max: 3.0 },
      { name: 'Average Possession %', home: 50, away: 59, max: 100 },
      { name: 'Clean Sheets %', home: 20, away: 40, max: 100 }
    ],
    aiAnalysis: makeAnalysis('Manchester United', 'Liverpool', 'Premier League', 'Liverpool Win', 24, 26, 50)
  },

  // --- COMPLETED MATCHES (10 Fixtures - With MIXED Results) ---
  {
    id: 'comp_1',
    competitionId: 'pl',
    competitionName: 'Premier League',
    kickoffTime: 'Saturday · 15:00',
    kickoffDate: 'Yesterday',
    homeTeam: TEAMS.ARSENAL,
    awayTeam: TEAMS.CHELSEA,
    aiPrediction: 'Arsenal Win',
    predictionType: 'home',
    probabilities: { homeWin: 61, draw: 23, awayWin: 16 },
    predictedScore: { home: 2, away: 1 },
    confidence: 74,
    confidenceLevel: 'HIGH',
    status: 'completed',
    actualScore: { home: 2, away: 0 },
    resultStatus: 'correct' // CORRECT PREDICTION
  },
  {
    id: 'comp_2',
    competitionId: 'ucl',
    competitionName: 'UEFA Champions League',
    kickoffTime: 'Wednesday · 21:00',
    kickoffDate: 'Yesterday',
    homeTeam: TEAMS.MAN_CITY,
    awayTeam: TEAMS.REAL_MADRID,
    aiPrediction: 'Manchester City Win',
    predictionType: 'home',
    probabilities: { homeWin: 58, draw: 23, awayWin: 19 },
    predictedScore: { home: 3, away: 1 },
    confidence: 76,
    confidenceLevel: 'HIGH',
    status: 'completed',
    actualScore: { home: 1, away: 1 },
    resultStatus: 'incorrect' // INCORRECT PREDICTION (Ended as Draw)
  },
  {
    id: 'comp_3',
    competitionId: 'laliga',
    competitionName: 'La Liga',
    kickoffTime: 'Sunday · 21:00',
    kickoffDate: 'Yesterday',
    homeTeam: TEAMS.BARCELONA,
    awayTeam: TEAMS.ATLETICO,
    aiPrediction: 'Barcelona Win',
    predictionType: 'home',
    probabilities: { homeWin: 55, draw: 27, awayWin: 18 },
    predictedScore: { home: 2, away: 1 },
    confidence: 70,
    confidenceLevel: 'HIGH',
    status: 'completed',
    actualScore: { home: 3, away: 1 },
    resultStatus: 'correct' // CORRECT PREDICTION
  },
  {
    id: 'comp_4',
    competitionId: 'seriea',
    competitionName: 'Serie A',
    kickoffTime: 'Saturday · 18:00',
    kickoffDate: 'Yesterday',
    homeTeam: TEAMS.JUVENTUS,
    awayTeam: TEAMS.AC_MILAN,
    aiPrediction: 'Draw',
    predictionType: 'draw',
    probabilities: { homeWin: 33, draw: 40, awayWin: 27 },
    predictedScore: { home: 1, away: 1 },
    confidence: 60,
    confidenceLevel: 'MEDIUM',
    status: 'completed',
    actualScore: { home: 1, away: 1 },
    resultStatus: 'correct' // CORRECT PREDICTION
  },
  {
    id: 'comp_5',
    competitionId: 'bundesliga',
    competitionName: 'Bundesliga',
    kickoffTime: 'Saturday · 15:30',
    kickoffDate: 'Yesterday',
    homeTeam: TEAMS.BAYERN,
    awayTeam: TEAMS.LIVERPOOL,
    aiPrediction: 'Bayern Munich Win',
    predictionType: 'home',
    probabilities: { homeWin: 52, draw: 26, awayWin: 22 },
    predictedScore: { home: 2, away: 1 },
    confidence: 65,
    confidenceLevel: 'MEDIUM',
    status: 'completed',
    actualScore: { home: 1, away: 2 },
    resultStatus: 'incorrect' // INCORRECT PREDICTION
  },
  {
    id: 'comp_6',
    competitionId: 'ligue1',
    competitionName: 'Ligue 1',
    kickoffTime: 'Sunday · 20:45',
    kickoffDate: 'Yesterday',
    homeTeam: TEAMS.PSG,
    awayTeam: TEAMS.BARCELONA,
    aiPrediction: 'PSG Win',
    predictionType: 'home',
    probabilities: { homeWin: 48, draw: 28, awayWin: 24 },
    predictedScore: { home: 2, away: 1 },
    confidence: 64,
    confidenceLevel: 'MEDIUM',
    status: 'completed',
    actualScore: { home: 2, away: 1 },
    resultStatus: 'correct' // CORRECT PREDICTION
  },
  {
    id: 'comp_7',
    competitionId: 'uel',
    competitionName: 'Europa League',
    kickoffTime: 'Thursday · 21:00',
    kickoffDate: 'Yesterday',
    homeTeam: TEAMS.MAN_UTD,
    awayTeam: TEAMS.JUVENTUS,
    aiPrediction: 'Draw or Man United Win',
    predictionType: 'double_chance',
    probabilities: { homeWin: 35, draw: 38, awayWin: 27 },
    predictedScore: { home: 1, away: 1 },
    confidence: 58,
    confidenceLevel: 'LOW',
    status: 'completed',
    actualScore: { home: 2, away: 1 },
    resultStatus: 'correct' // CORRECT PREDICTION (Double chance covers Home Win)
  },
  {
    id: 'comp_8',
    competitionId: 'pl',
    competitionName: 'Premier League',
    kickoffTime: 'Sunday · 16:30',
    kickoffDate: 'Yesterday',
    homeTeam: TEAMS.MAN_CITY,
    awayTeam: TEAMS.LIVERPOOL,
    aiPrediction: 'Manchester City Win',
    predictionType: 'home',
    probabilities: { homeWin: 54, draw: 25, awayWin: 21 },
    predictedScore: { home: 3, away: 2 },
    confidence: 71,
    confidenceLevel: 'HIGH',
    status: 'completed',
    actualScore: { home: 3, away: 1 },
    resultStatus: 'correct' // CORRECT PREDICTION
  },
  {
    id: 'comp_9',
    competitionId: 'laliga',
    competitionName: 'La Liga',
    kickoffTime: 'Saturday · 16:15',
    kickoffDate: 'Yesterday',
    homeTeam: TEAMS.REAL_MADRID,
    awayTeam: TEAMS.ATLETICO,
    aiPrediction: 'Real Madrid Win',
    predictionType: 'home',
    probabilities: { homeWin: 56, draw: 26, awayWin: 18 },
    predictedScore: { home: 2, away: 0 },
    confidence: 72,
    confidenceLevel: 'HIGH',
    status: 'completed',
    actualScore: { home: 1, away: 1 },
    resultStatus: 'incorrect' // INCORRECT PREDICTION (Ended as 1-1 Draw)
  },
  {
    id: 'comp_10',
    competitionId: 'pl',
    competitionName: 'Premier League',
    kickoffTime: 'Saturday · 12:30',
    kickoffDate: 'Yesterday',
    homeTeam: TEAMS.MAN_UTD,
    awayTeam: TEAMS.CHELSEA,
    aiPrediction: 'Draw or Chelsea Win',
    predictionType: 'double_chance',
    probabilities: { homeWin: 28, draw: 34, awayWin: 38 },
    predictedScore: { home: 1, away: 2 },
    confidence: 62,
    confidenceLevel: 'MEDIUM',
    status: 'completed',
    actualScore: { home: 0, away: 2 },
    resultStatus: 'correct' // CORRECT PREDICTION (Chelsea Win)
  }
];

// Helper database search function
export const getMatchById = (id: string): Match | undefined => {
  return MATCHES.find(m => m.id === id);
};

export const getMatchesByCompetition = (compId: string): Match[] => {
  return MATCHES.filter(m => m.competitionId === compId);
};
