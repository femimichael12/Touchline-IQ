import React, { useState } from 'react';
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { HelpCircle } from 'lucide-react';

interface PerformanceProps {
  onNavigate: (path: string, params?: any) => void;
}

export const Performance: React.FC<PerformanceProps> = () => {
  const [timeFilter, setTimeFilter] = useState<'7days' | '30days' | 'season'>('season');

  const accuracyOverTimeData = {
    '7days': [
      { name: 'Mon', accuracy: 66.4 },
      { name: 'Tue', accuracy: 68.1 },
      { name: 'Wed', accuracy: 72.8 },
      { name: 'Thu', accuracy: 70.2 },
      { name: 'Fri', accuracy: 67.4 },
      { name: 'Sat', accuracy: 71.5 },
      { name: 'Sun', accuracy: 69.8 },
    ],
    '30days': [
      { name: 'W1', accuracy: 65.2 },
      { name: 'W2', accuracy: 68.9 },
      { name: 'W3', accuracy: 71.4 },
      { name: 'W4', accuracy: 69.8 },
    ],
    'season': [
      { name: 'Sep', accuracy: 64.8 },
      { name: 'Oct', accuracy: 66.2 },
      { name: 'Nov', accuracy: 68.5 },
      { name: 'Dec', accuracy: 67.1 },
      { name: 'Jan', accuracy: 71.0 },
      { name: 'Feb', accuracy: 69.5 },
      { name: 'Mar', accuracy: 69.8 },
    ]
  };

  const competitionAccuracyData = [
    { name: 'Champions Lg', accuracy: 74.2 },
    { name: 'Premier League', accuracy: 71.4 },
    { name: 'Bundesliga', accuracy: 70.1 },
    { name: 'Europa League', accuracy: 69.3 },
    { name: 'La Liga', accuracy: 68.8 },
    { name: 'Serie A', accuracy: 67.5 },
    { name: 'Ligue 1', accuracy: 66.2 },
  ];

  const outcomesAccuracyData = [
    { name: 'Home Win', accuracy: 76.5 },
    { name: 'Away Win', accuracy: 64.2 },
    { name: 'Draw Options', accuracy: 52.8 },
  ];

  const marketsAccuracyData = [
    { name: 'Over/Under Goals', accuracy: 73.1 },
    { name: 'Both Teams To Score', accuracy: 68.4 },
    { name: 'Double Chance', accuracy: 78.5 },
  ];

  const activeTimeData = accuracyOverTimeData[timeFilter];

  return (
    <div id="model-performance-analytics-page" className="space-y-6 py-4">
      {/* Header */}
      <div className="space-y-1 border-b border-[#1A2A3E] pb-4">
        <div className="flex items-center gap-2 text-xs text-[#19C37D] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
          <span className="uppercase tracking-wider text-[10px]">Model Performance</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#F0F4F8] tracking-tight">
          Performance Analytics
        </h1>
        <p className="text-xs text-[#8FA0B5]">
          Statistical accuracy verification and historical tracking across all active European leagues.
        </p>
      </div>

      {/* High-Level Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-[#111F31] border border-[#1E334D] p-4 rounded-md space-y-1">
          <span className="text-[10px] font-semibold text-[#8FA0B5] uppercase block">Overall Accuracy</span>
          <span className="text-2xl md:text-3xl font-bold text-[#19C37D]">69.8%</span>
          <p className="text-[10px] text-[#64748B]">Active campaign benchmark</p>
        </div>

        <div className="bg-[#111F31] border border-[#1E334D] p-4 rounded-md space-y-1">
          <span className="text-[10px] font-semibold text-[#8FA0B5] uppercase block">Audited Fixtures</span>
          <span className="text-2xl md:text-3xl font-bold text-[#F0F4F8]">1,284</span>
          <p className="text-[10px] text-[#64748B]">Validated results</p>
        </div>

        <div className="bg-[#111F31] border border-[#1E334D] p-4 rounded-md space-y-1">
          <span className="text-[10px] font-semibold text-[#8FA0B5] uppercase block">Correct Outcomes</span>
          <span className="text-2xl md:text-3xl font-bold text-[#19C37D]">897</span>
          <p className="text-[10px] text-[#64748B]">Matched projections</p>
        </div>

        <div className="bg-[#111F31] border border-[#1E334D] p-4 rounded-md space-y-1">
          <span className="text-[10px] font-semibold text-[#8FA0B5] uppercase block">Incorrect Outcomes</span>
          <span className="text-2xl md:text-3xl font-bold text-[#8FA0B5]">387</span>
          <p className="text-[10px] text-[#64748B]">Variances from model</p>
        </div>
      </div>

      {/* Time filters controller */}
      <div className="flex justify-between items-center border-b border-[#1A2A3E] pb-2 text-xs">
        <span className="text-[11px] font-semibold text-[#8FA0B5] uppercase tracking-wider">
          Accuracy Trend
        </span>

        <div className="flex bg-[#0B1624] p-0.5 rounded border border-[#1A2A3E]">
          {[
            { id: '7days', label: '7 Days' },
            { id: '30days', label: '30 Days' },
            { id: 'season', label: 'Season' },
          ].map((time) => {
            const isSelected = timeFilter === time.id;
            return (
              <button
                key={time.id}
                onClick={() => setTimeFilter(time.id as any)}
                className={`px-3 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#111F31] text-[#F0F4F8] border border-[#1E334D]'
                    : 'text-[#8FA0B5] hover:text-[#F0F4F8]'
                }`}
              >
                {time.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN GRAPH: Accuracy trend over time */}
      <div className="bg-[#111F31] border border-[#1E334D] p-5 rounded-lg space-y-3">
        <div className="flex justify-between items-center border-b border-[#1A2C42] pb-2">
          <div>
            <h3 className="text-xs font-bold text-[#F0F4F8] uppercase tracking-wider">
              Rolling Accuracy Over Time
            </h3>
            <p className="text-[11px] text-[#8FA0B5] mt-0.5">
              Historical precision curve across evaluated matches.
            </p>
          </div>
          <span className="text-xs font-bold text-[#19C37D]">
            Average 69.8%
          </span>
        </div>

        <div className="h-[240px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={activeTimeData}>
              <defs>
                <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#19C37D" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#19C37D" stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#64748B" fontSize={11} tickLine={false} />
              <YAxis stroke="#64748B" fontSize={11} tickLine={false} domain={[50, 90]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0B1624', border: '1px solid #1E334D', borderRadius: '4px', color: '#F0F4F8' }}
                itemStyle={{ color: '#19C37D', fontSize: '11px' }}
              />
              <Area type="monotone" dataKey="accuracy" stroke="#19C37D" strokeWidth={2} fillOpacity={1} fill="url(#colorAccuracy)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* METRICS GRID: Accuracy by competition and Markets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Accuracy by competition */}
        <div className="bg-[#111F31] border border-[#1E334D] p-5 rounded-lg space-y-3">
          <div className="border-b border-[#1A2C42] pb-2">
            <h4 className="text-xs font-bold text-[#F0F4F8] uppercase tracking-wider">Accuracy by League Coverage</h4>
          </div>

          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={competitionAccuracyData} layout="vertical">
                <XAxis type="number" stroke="#64748B" fontSize={10} domain={[0, 100]} hide />
                <YAxis dataKey="name" type="category" stroke="#8FA0B5" fontSize={11} tickLine={false} width={100} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0B1624', border: '1px solid #1E334D', borderRadius: '4px' }}
                  itemStyle={{ color: '#19C37D', fontSize: '11px' }}
                />
                <Bar dataKey="accuracy" fill="#19C37D" radius={[0, 2, 2, 0]} barSize={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Accuracy by markets/outcomes */}
        <div className="space-y-4">
          {/* Win option types accuracy */}
          <div className="bg-[#111F31] border border-[#1E334D] p-5 rounded-lg space-y-3">
            <div className="border-b border-[#1A2C42] pb-2">
              <h4 className="text-xs font-bold text-[#F0F4F8] uppercase tracking-wider">Accuracy by Outcome Type</h4>
            </div>

            <div className="space-y-3">
              {outcomesAccuracyData.map((data, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#8FA0B5]">{data.name}</span>
                    <span className="font-semibold text-[#F0F4F8]">{data.accuracy}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#0B1624] rounded-sm overflow-hidden border border-[#1A2C42]">
                    <div className="h-full bg-[#19C37D]" style={{ width: `${data.accuracy}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Goal markets accuracy */}
          <div className="bg-[#111F31] border border-[#1E334D] p-5 rounded-lg space-y-3">
            <div className="border-b border-[#1A2C42] pb-2">
              <h4 className="text-xs font-bold text-[#F0F4F8] uppercase tracking-wider">Accuracy by Market Categories</h4>
            </div>

            <div className="space-y-3">
              {marketsAccuracyData.map((data, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#8FA0B5]">{data.name}</span>
                    <span className="font-semibold text-[#F0F4F8]">{data.accuracy}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#0B1624] rounded-sm overflow-hidden border border-[#1A2C42]">
                    <div className="h-full bg-[#4EA1FF]" style={{ width: `${data.accuracy}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Integrity Disclaimer details */}
      <div className="bg-[#0B1624] border border-[#1A2A3E] p-4 rounded-md flex gap-3 items-start">
        <HelpCircle className="w-4 h-4 text-[#8FA0B5] shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="text-[11px] font-bold text-[#F0F4F8] uppercase tracking-wider block">How Accuracy is Computed</span>
          <p className="text-[11px] text-[#8FA0B5] leading-relaxed">
            Accuracy stats represent correct outcome classifications evaluated after the full 90 minutes. A "Home Win" prediction is verified correct if the home team wins. Over 2.5 is verified correct when 3 or more goals are scored. Draw predictions are verified strictly on tied scores. All metrics reflect raw probabilities and are not intended for gambling or betting purposes.
          </p>
        </div>
      </div>
    </div>
  );
};
