import { ASSETS } from '~/lib/constants/assets'

export default function HeroSection() {
  return (
    <section className="mb-16 grid grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2">
      <img
        src={ASSETS.WEBINAR_BATCH_IMAGE}
        alt="Hero"
        className="h-auto w-full rounded-3xl"
        width={1200}
        height={800}
      />

      <div className="text-center lg:text-right">
        <h1 className="mb-6 font-serif text-2xl font-bold tracking-wide text-gray-800 sm:text-4xl md:text-5xl dark:text-gray-100">
          Become a Web3 Data Analyst
        </h1>
        <p className="mx-auto max-w-2xl font-serif text-lg tracking-wide text-gray-600 sm:text-xl dark:text-gray-300">
          Join our exclusive live private course and master the art of blockchain analytics. Limited
          spots available for <u>Batch 1.</u>
        </p>
      </div>
    </section>
  )
}
