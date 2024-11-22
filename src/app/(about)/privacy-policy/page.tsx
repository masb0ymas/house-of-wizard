import Link from 'next/link'
import React from 'react'
import { Separator } from '~/components/ui/separator'

/**
 * PrivacyPolicyPage component.
 *
 * This component renders the Privacy Policy page.
 *
 * @return {React.ReactElement} The Privacy Policy page component.
 */
export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-4xl font-bold font-serif tracking-wide text-gray-800 dark:text-gray-100">
        Privacy Policy
      </h1>

      <div className="flex flex-col gap-4 mt-10">
        <p className="text-lg font-serif text-gray-500">Effective Date: 2024-11-22</p>
        <p>
          <b>House of Wizard</b> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed
          to protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you participate in our webinars and online courses
          focused on data analysis.
        </p>
        <Separator />
        <h4 className="text-2xl font-semibold font-serif tracking-wide">
          1. Information We Collect
        </h4>
        <p className="font-semibold">
          1.1 Personal Information We may collect the following information directly from you:
        </p>
        <ul className="pl-8 list-disc">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number (if provided)</li>
          <li>Billing information (for paid courses)</li>
          <li>Organization/Company name (if applicable)</li>
          <li>Job title (if applicable)</li>
        </ul>
        <p className="font-semibold">1.2 Automatically Collected Information</p>
        <p>When you access our webinars or courses, we may automatically collect:</p>
        <ul className="pl-8 list-disc">
          <li>IP address</li>
          <li>Device type and browser information</li>
          <li>Course and webinar usage data (e.g., time spent, progress, completion status)</li>
          <li>Cookies and tracking data (e.g., session identifiers)</li>
        </ul>
        <Separator />
        <h4 className="text-2xl font-semibold font-serif tracking-wide">
          2. How We Use Your Information
        </h4>
        <p>We use the collected information for the following purposes:</p>
        <ul className="pl-8 list-disc">
          <li>To provide, manage, and improve our webinars and courses.</li>
          <li>To communicate updates, certificates of completion, and promotional offers.</li>
          <li>To process payments and issue invoices.</li>
          <li>To monitor and analyze participant engagement and platform usage.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <Separator />
        <h4 className="text-2xl font-semibold font-serif tracking-wide">
          3. Sharing Your Information
        </h4>
        <p>We do not sell your personal information. However, we may share your data:</p>
        <ul className="pl-8 list-disc">
          <li>
            With Service Providers: Third-party vendors who assist with payment processing, course
            hosting, or analytics.
          </li>
          <li>For Compliance: When required by law or to protect our legal rights.</li>
          <li>
            With Affiliates: In cases where we collaborate with partner organizations for co-branded
            courses or webinars.
          </li>
        </ul>
        <Separator />
        <h4 className="text-2xl font-semibold font-serif tracking-wide">
          4. Your Rights and Choices
        </h4>
        <ul className="pl-8 list-disc">
          <li>
            Access and Update: You may review and update your personal information by contacting us.
          </li>
          <li>
            Opt-Out: You can opt out of marketing communications by clicking the
            &quot;unsubscribe&quot; link in our emails.
          </li>
          <li>Cookies: You can disable cookies through your browser settings.</li>
          <li>
            Data Deletion: You may request that we delete your personal data, subject to legal or
            contractual obligations.
          </li>
        </ul>
        <Separator />
        <h4 className="text-2xl font-semibold font-serif tracking-wide">5. Security Measures</h4>
        <p>
          We implement industry-standard measures to protect your data, including encryption, secure
          storage, and regular audits. However, no method of online transmission is 100% secure, and
          we cannot guarantee absolute security.
        </p>
        <Separator />
        <h4 className="text-2xl font-semibold font-serif tracking-wide">6. Third-Party Links</h4>
        <p>
          Our webinars or course materials may contain links to third-party websites. We are not
          responsible for the privacy practices of these external sites.
        </p>

        <Separator />
        <h4 className="text-2xl font-semibold font-serif tracking-wide">
          7. Retention of Information
        </h4>

        <p>
          We retain your data for as long as necessary to provide our services or comply with legal
          obligations.
        </p>

        <Separator />
        <h4 className="text-2xl font-semibold font-serif tracking-wide">8. International Users</h4>
        <p>
          If you access our services from outside Indonesia, your data may be transferred to
          and processed in Indonesia, where privacy laws may differ.
        </p>

        <Separator />
        <h4 className="text-2xl font-semibold font-serif tracking-wide">
          9. Updates to This Policy
        </h4>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted with the
          &quot;Effective Date&quot; noted above.
        </p>

        <Separator />
        <h4 className="text-2xl font-semibold font-serif tracking-wide">10. Contact Us</h4>

        <p>
          If you have any questions about this Privacy Policy or how your information is handled,
          please contact us:
        </p>

        <ul className="pl-8 list-disc">
          <li>
            Email:{' '}
            <Link href="mailto:info@house-of-wizard.xyz" className="hover:text-indigo-500">
              info@house-of-wizard.xyz
            </Link>
          </li>
          <li>Phone: -</li>
          <li>Mailing Address: Depok, Yogyakarta.</li>
        </ul>

        <Separator />
        <p>
          By participating in our webinars or online courses, you agree to the terms of this Privacy
          Policy.
        </p>
      </div>
    </div>
  )
}
