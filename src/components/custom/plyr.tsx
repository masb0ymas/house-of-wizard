'use client'

import { MediaPlayer, MediaProvider } from '@vidstack/react'
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr'

type IProps = {
  title: string
  src: string
}

export default function YoutubePlyr(props: IProps) {
  const { title, src } = props

  return (
    <MediaPlayer
      title={title}
      src={src}
      crossOrigin="anonymous"
      playsInline
      viewType="video"
      streamType="on-demand"
    >
      <MediaProvider />
      <PlyrLayout icons={plyrLayoutIcons} />
    </MediaPlayer>
  )
}
