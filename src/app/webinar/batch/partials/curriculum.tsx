import React from 'react'

export default function Curriculum() {
  const modules = [
    {
      week: 'Week 1-2',
      title: 'Foundations of Web3',
      topics: ['Blockchain fundamentals', 'Smart contracts', 'DeFi basics'],
    },
    {
      week: 'Week 3-4',
      title: 'Data Analysis Tools',
      topics: ['Python for blockchain', 'Web3 libraries', 'Data visualization'],
    },
    {
      week: 'Week 5-6',
      title: 'DeFi Analytics',
      topics: ['Liquidity analysis', 'Yield farming metrics', 'Risk assessment'],
    },
    {
      week: 'Week 7-8',
      title: 'NFT Market Analysis',
      topics: ['Collection analytics', 'Market trends', 'Rarity analysis'],
    },
    {
      week: 'Week 9-10',
      title: 'Advanced Topics',
      topics: ['MEV analysis', 'Cross-chain analytics', 'Protocol metrics'],
    },
    {
      week: 'Week 11-12',
      title: 'Final Project',
      topics: ['Real-world analysis', 'Portfolio building', 'Presentation'],
    },
  ]

  return (
    <div className="space-y-2 sm:space-y-4 md:space-y-6">
      {modules.map((module, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg sm:text-xl font-semibold font-serif tracking-wide">{module.title}</h3>
            <span className="text-purple-100 text-sm font-medium font-serif tracking-wide px-3 py-1 bg-gray-900/70 rounded-full">
              {module.week}
            </span>
          </div>
          <ul className="space-y-2">
            {module.topics.map((topic, topicIndex) => (
              <li key={topicIndex} className="text-gray-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
