'use client'

import { Plyr } from 'plyr-react'
import 'plyr-react/plyr.css'
import { useRef } from 'react'

interface YoutubePlyrProps {
  title?: string
  src: string
}

export default function YoutubePlyr({ src }: YoutubePlyrProps) {
  const ref = useRef(null)
  const youtubeID = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)?.[1]

  const youtubeVideoSrc = {
    type: 'video' as const,
    sources: [
      {
        src: youtubeID ?? '', // YouTube video ID or URL
        provider: 'youtube' as const,
      },
    ],
  }

  return (
    <div className="h-full w-full [&_.plyr]:h-full [&_.plyr]:w-full [&_.plyr__video-wrapper]:h-full [&_.plyr__video-wrapper]:w-full [&_iframe]:h-full! [&_iframe]:w-full!">
      <Plyr ref={ref} source={youtubeVideoSrc} />
    </div>
  )
}
