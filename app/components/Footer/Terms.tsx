import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>

        {/* Introduction */}
        <p className="text-lg mb-6">
          Welcome to Amologic, Inc. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of
          Service (&quot;Terms&quot;) are a legal agreement between you and Amologic,
          Inc. By accessing or using our website and services, you agree to
          comply with and be bound by these Terms. If you do not agree to these
          Terms, in whole or in part, please do not use our website or services.
        </p>

        {/* Section 1 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website, you acknowledge that you have
            read, understood, and agree to be bound by these Terms. These Terms
            govern your use of our website and services, including any content,
            functionality, and services offered on or through our website. Your
            use of our website is also subject to our Privacy Policy, which
            covers how we collect, use, and protect your personal information.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. All changes
            will be effective immediately upon posting to our website. Your
            continued use of our website and services following the posting of
            revised Terms means that you accept and agree to the changes. It is
            your responsibility to check this page periodically for updates. If
            you do not agree to the new Terms, you must stop using our website
            and services.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">3. Description of Services</h2>
          <p>
            Our website provides visitors with information about our company
            and the services we offer. We strive to ensure that the information
            on our website is accurate and up-to-date. However, we do not
            warrant the accuracy, completeness, or usefulness of this
            information. Any reliance you place on such information is strictly
            at your own risk. We reserve the right to modify or discontinue our
            services at any time without notice.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
          <ul className="list-disc ml-6">
            <li>Use the website only for lawful purposes.</li>
            <li>
              Avoid transmitting any advertising, promotional material, or spam.
            </li>
            <li>
              Do not impersonate Amologic, Inc., its employees, or other users.
            </li>
            <li>Do not engage in harmful or unlawful activities.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
          <p>
            Our website and its entire contents, features, and functionality
            (including but not limited to all information, software, text,
            displays, images, video, and audio, and the design, selection, and
            arrangement thereof) are owned by Amologic, Inc., its licensors, or
            other providers of such material and are protected by copyright,
            trademark, and other laws.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p>
            In no event will Amologic, Inc., its affiliates, or their licensors,
            service providers, employees, agents, officers, or directors be
            liable for damages of any kind arising out of or in connection with
            your use or inability to use our website or services.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
          <p>
            All matters relating to our website and these Terms and any dispute
            or claim arising therefrom shall be governed by the laws of the
            State of Karnataka without giving effect to any choice or conflict
            of law provision or rule.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:support@amologic.com" className="text-blue-600 hover:underline">
              support@amologic.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
