import React from 'react';
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// データセット
const populationData = [
  { year: 2010, total: 128.1, births: 1.071 },
  { year: 2015, total: 127.1, births: 1.005 },
  { year: 2020, total: 125.7, births: 0.840 },
  { year: 2023, total: 124.9, births: 0.770 }
];

// カスタム凡例のレンダリング関数
const renderLegend = (props) => {
  const { payload } = props;
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      gap: '20px',
      marginTop: '10px'
    }}>
      {payload.map((entry, index) => (
        <div
          key={`legend-${index}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '10px'
          }}
        >
          <svg width="30" height="3" style={{ marginRight: '5px' }}>
            <line
              x1="0"
              y1="1.5"
              x2="30"
              y2="1.5"
              stroke={entry.color}
              strokeWidth={entry.dataKey === 'total' ? 2.5 : 2}
              strokeDasharray={entry.dataKey === 'births' ? '5 5' : 'none'}
            />
          </svg>
          <span style={{ color: '#64748B' }}>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

// グラフスライドコンポーネント
const PopulationTrendsSlide = () => (
  <Card className="w-full h-[500px] p-8 bg-white">
    <div className="h-full flex flex-col">
      <h2 className="text-3xl font-bold text-[#2B4B7C] mb-6">Japan's Population Trends</h2>
      
      <div className="relative">
        <LineChart width={1000} height={350} data={populationData}
          margin={{ top: 10, right: 50, left: 50, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis 
            dataKey="year" 
            label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
            stroke="#64748B"
            padding={{ left: 30, right: 30 }}
          />
          <YAxis 
            yAxisId="left" 
            label={{ 
              value: 'Total Population (Millions)', 
              angle: -90, 
              position: 'insideLeft', 
              offset: -35,
              dy: 50
            }}
            stroke="#64748B"
          />
          <YAxis 
            yAxisId="right" 
            orientation="right"
            label={{ 
              value: 'Births (Millions)', 
              angle: 90, 
              position: 'insideRight', 
              offset: -10 
            }}
            stroke="#64748B" 
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white',
              border: '1px solid #E5E7EB'
            }}
          />
          <Legend 
            content={renderLegend}
            verticalAlign="top"
            height={36}
          />
          {/* Total Population - 実線 */}
          <Line 
            yAxisId="left" 
            type="monotone"
            dataKey="total" 
            stroke="#2B4B7C" 
            strokeWidth={2.5}
            dot={{ stroke: '#2B4B7C', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#2B4B7C', strokeWidth: 2 }}
            name="Total Population" 
          />
          {/* Births - 点線 */}
          <Line 
            yAxisId="right" 
            type="monotone"
            dataKey="births" 
            stroke="#6B7A99" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ stroke: '#6B7A99', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#6B7A99', strokeWidth: 2 }}
            name="Births" 
          />
        </LineChart>
      </div>

      <div className="mt-4 space-y-1 text-sm text-gray-500">
        <p>Source: Statistics Bureau of Japan, Vital Statistics</p>
        <p>URL: 
          <a href="https://www.e-stat.go.jp/stat-search/files?page=1&toukei=00450011&tstat=000001028897" className="text-[#2B4B7C] hover:underline ml-1">
            https://www.e-stat.go.jp/stat-search/files?page=1&toukei=00450011&tstat=000001028897
          </a>
        </p>
        <p>
          <a href="https://www.mhlw.go.jp/toukei/list/81-1a.html" className="text-[#2B4B7C] hover:underline">
            https://www.mhlw.go.jp/toukei/list/81-1a.html
          </a>
        </p>
      </div>
    </div>
  </Card>
);

export default PopulationTrendsSlide;