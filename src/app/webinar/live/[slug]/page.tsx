import Image from 'next/image'
import { Description, ItemType } from '~/components/custom/description'
import ShineBorder from '~/components/ui/shine-border'

const data = {
  title: 'Webinar Data Analyst',
  speakers: 'Andi',
  start_date: '2024-11-17 18:30:00',
  webinar_url: 'https://meet.google.com/abc',
}

const details = [
  { key: 'title', title: 'Webinar', type: ItemType.string },
  { key: 'speakers', title: 'Speakers', type: ItemType.string },
  { key: 'start_date', title: 'Schedule', type: ItemType.date },
  { key: 'webinar_url', title: 'Webinar URL', type: ItemType.link },
]

export default function WebinarLivePage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <ShineBorder
          className="relative h-48 w-48 min-h-48 min-w-48 p-0 flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
          color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        >
          <Image
            src="/logo-how.png"
            alt="House of Wizard"
            className="h-48 w-48 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
            width={192}
            height={192}
          />
        </ShineBorder>

        <h1 className="text-4xl font-semibold font-serif">Webinar Data Analyst</h1>
        <h4 className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          To become a greater wizard, learn how to analyze Web3 data and start your career in the
          decentralized future.
        </h4>

        <div className="flex flex-col gap-2 text-center w-full mt-8">
          {details.map((content) => Description<any>({ item: data, content }))}
        </div>
      </div>
    </section>
  )
}
