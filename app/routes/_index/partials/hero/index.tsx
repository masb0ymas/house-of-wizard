import { ArrowRight, Binary, Database, LineChart } from "lucide-react"
import { Button } from "~/components/ui/button"
import { RainbowButton } from "~/components/ui/rainbow-button"
import SparklesText from "~/components/ui/sparkles-text"

export default function Hero() {
  return (
    <div className="pt-24 pb-16 h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <SparklesText text="House of Wizard" />

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform blockchain data into actionable insights. Learn how to analyze Web3 data and
              start your career in the decentralized future.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <RainbowButton className="gap-2">
              <span>Start Learning</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </RainbowButton>

            <Button
              variant={"outline"}
              className="px-8 py-2 font-medium h-11 shadow-sm hover:shadow-xl transition ease-in-out duration-300 gap-2"
              radius={"xl"}
            >
              <span>View Courses</span>
            </Button>
          </div>

          <div className="flex justify-center gap-8 pt-12">
            <div className="flex items-center gap-2">
              <Database className="h-6 w-6 text-indigo-600" />
              <span className="text-gray-600">Blockchain Data</span>
            </div>
            <div className="flex items-center gap-2">
              <LineChart className="h-6 w-6 text-indigo-600" />
              <span className="text-gray-600">DeFi Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <Binary className="h-6 w-6 text-indigo-600" />
              <span className="text-gray-600">Smart Contract Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
