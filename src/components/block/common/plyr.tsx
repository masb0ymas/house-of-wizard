import '@vidstack/react/player/styles/base.css'
import '@vidstack/react/player/styles/plyr/theme.css'

import { MediaPlayer, MediaProvider } from '@vidstack/react'
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr'

interface PlyrProps {
  title: string
  src: string
}

export default function Plyr({ title, src }: PlyrProps) {
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
