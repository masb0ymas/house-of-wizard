'use client'

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'

const activityData = [
  { axis: 'DEX volume', current: 86, previous: 64 },
  { axis: 'Wallets', current: 74, previous: 61 },
  { axis: 'Bridges', current: 91, previous: 68 },
  { axis: 'Fees', current: 68, previous: 54 },
  { axis: 'TVL', current: 79, previous: 65 },
]

const chartConfig = {
  current: { label: 'This week', color: 'oklch(0.702 0.183 293.541)' },
  previous: { label: 'Last week', color: 'oklch(0.828 0.189 84.429)' },
} satisfies ChartConfig

export default function HeroRadarChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[15rem] w-full sm:h-[18.5rem]">
      <RadarChart data={activityData} cx="50%" cy="50%" outerRadius="72%">
        <PolarGrid gridType="circle" stroke="rgba(255, 255, 255, 0.12)" />
        <PolarAngleAxis
          dataKey="axis"
          tick={{ fill: 'rgba(255, 255, 255, 0.55)', fontSize: 10 }}
          tickLine={false}
        />
        <PolarRadiusAxis domain={[0, 100]} tick={false} tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Radar
          dataKey="previous"
          stroke="var(--color-previous)"
          strokeWidth={1.5}
          fill="var(--color-previous)"
          fillOpacity={0.12}
        />
        <Radar
          dataKey="current"
          stroke="var(--color-current)"
          strokeWidth={2}
          fill="var(--color-current)"
          fillOpacity={0.3}
        />
      </RadarChart>
    </ChartContainer>
  )
}
