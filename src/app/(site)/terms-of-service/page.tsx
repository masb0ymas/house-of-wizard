import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - House of Wizard',
  description: 'Terms of Service House of Wizard',
}

export default function TermsOfServicePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-4xl font-bold font-serif tracking-wide text-gray-800 dark:text-gray-100">
        Terms of Service
      </h1>

      <div className="flex flex-col gap-4 mt-10">
        <p className="text-lg font-serif text-gray-500">Effective Date: 2024-11-22</p>
        <p>
          Welcome to <b>House of Wizard</b>! These Terms of Service (&quot;Terms&ldquo;) govern your
          use of our website, webinars, and online courses related to data analysis. By accessing or
          using our services, you agree to comply with these Terms. If you do not agree, please
          refrain from using our services.
        </p>

        <div className="space-y-2 mb-4">
          <h4 className="text-xl font-semibold font-serif tracking-wide">1. Definitions</h4>
          <p>
            “We,” “us,” “our” refer to <b>House of Wizard</b>, the provider of the services. “User,”
            “you,” “your” refer to individuals accessing or using our services. “Services” include
            the website, webinars, online courses, and associated materials provided by us.
          </p>
        </div>

        <div className="space-y-2 mb-4">
          <h4 className="text-xl font-semibold font-serif tracking-wide">2. Eligibility</h4>
          <p>
            You must be at least 18 years old to use our services. If you are under 18, you must
            have parental or guardian consent.
          </p>
        </div>

        <div className="space-y-2 mb-4">
          <h4 className="text-xl font-semibold font-serif tracking-wide">3. User Accounts</h4>
          <ul className="pl-8 list-disc">
            <li>
              To access certain services, you may need to create an account. You are responsible for
              maintaining the confidentiality of your login credentials.
            </li>
            <li>You must provide accurate and complete information during registration.</li>
          </ul>
        </div>

        <div className="space-y-2 mb-4">
          <h4 className="text-xl font-semibold font-serif tracking-wide">4. Payment and Refunds</h4>
          <ul className="pl-8 list-disc">
            <li>
              All payments for webinars, courses, and subscriptions are non-refundable unless
              otherwise stated in the course-specific terms.
            </li>
            <li>
              Pricing is subject to change. Any changes will not affect payments already processed.
            </li>
          </ul>
        </div>

        <div className="space-y-2 mb-4">
          <h4 className="text-xl font-semibold font-serif tracking-wide">
            5. Intellectual Property
          </h4>
          <ul className="pl-8 list-disc">
            <li>
              All content, materials, and resources provided in webinars and courses, including
              videos, slides, and downloadable files, are the intellectual property of{' '}
              <b>House of Wizard</b> or its licensors.
            </li>
            <li>
              You may not reproduce, distribute, or share these materials without prior written
              consent.
            </li>
          </ul>
        </div>

        <div className="space-y-2 mb-4">
          <h4 className="text-xl font-semibold font-serif tracking-wide">6. Prohibited Conduct</h4>
          <p>You agree not to:</p>
          <ul className="pl-8 list-disc">
            <li>Use our services for unlawful or unauthorized purposes.</li>
            <li>Share your account access with others.</li>
            <li>Copy, modify, or resell our materials without permission.</li>
          </ul>
        </div>

        <div className="space-y-2 mb-4">
          <h4 className="text-xl font-semibold font-serif tracking-wide">7. Disclaimers</h4>
          <ul className="pl-8 list-disc">
            <li>
              The information provided in our webinars and courses is for educational purposes only.
              We do not guarantee specific results or outcomes.
            </li>
            <li>
              We are not responsible for any technical interruptions or platform issues beyond our
              control.
            </li>
          </ul>
        </div>

        <div className="space-y-2 mb-4">
          <h4 className="text-xl font-semibold font-serif tracking-wide">
            8. Limitation of Liability
          </h4>
          <p>
            To the maximum extent permitted by law, we are not liable for any indirect, incidental,
            or consequential damages arising from the use of our services.
          </p>
        </div>

        <div className="space-y-2 mb-4">
          <h4 className="text-xl font-semibold font-serif tracking-wide">9. Privacy Policy</h4>
          <p>
            Our Privacy Policy governs how we collect, use, and protect your data. Please review it{' '}
            <Link
              href="/privacy-policy"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              privacy-policy
            </Link>
            .
          </p>
        </div>

        <div className="space-y-2 mb-4">
          <h4 className="text-xl font-semibold font-serif tracking-wide">10. Termination</h4>
          <p>
            We reserve the right to suspend or terminate your access to our services if you violate
            these Terms.
          </p>
        </div>

        <div className="space-y-2 mb-4">
          <h4 className="text-xl font-semibold font-serif tracking-wide">11. Governing Law</h4>
          <p>
            These Terms are governed by the laws of Indonesia. Any disputes will be resolved
            exclusively in the courts of [Your Jurisdiction].
          </p>
        </div>

        <div className="space-y-2 mb-4">
          <h4 className="text-xl font-semibold font-serif tracking-wide">12. Changes to Terms</h4>
          <p>
            We may update these Terms from time to time. Continued use of our services after updates
            constitutes acceptance of the revised Terms.
          </p>
        </div>

        <div className="space-y-2 mb-4">
          <h4 className="text-xl font-semibold font-serif tracking-wide">13. Contact Us</h4>
          <p>
            If you have questions about these Terms, please contact us at{' '}
            <Link href="/contact">contact</Link>. By using our services, you acknowledge that you
            have read, understood, and agreed to these Terms.
          </p>
        </div>
      </div>
    </div>
  )
}
