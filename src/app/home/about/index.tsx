import { BookOpen, Trophy, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            About House of Wizard
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Leading the revolution in Web3 Education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from industry professionals with years of experience in
              blockchain analytics
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Trophy className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold">Industry Recognition</h3>
            <p className="text-gray-600">
              Our certificates are recognized by leading Web3 companies
              worldwide
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <BookOpen className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold">Comprehensive Curriculum</h3>
            <p className="text-gray-600">
              Structured learning path from basics to advanced blockchain
              analytics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
