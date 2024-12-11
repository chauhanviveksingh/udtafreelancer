import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

        {/* Introduction */}
        <p className="text-lg mb-6">
          Amologic, Inc. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you visit our website and use our
          services. Please read this policy carefully to understand our views
          and practices regarding your personal data and how we will treat it.
        </p>

        {/* Section 1 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <ul className="list-disc ml-6">
            <li>Personal Identification Information: Name, email address, phone number, etc.</li>
            <li>
              Technical Data: IP address, browser type and version, time zone
              setting, browser plug-in types and versions, operating system and
              platform, and other technology on the devices you use to access
              this website.
            </li>
            <li>
              Usage Data: Information about how you use our website, products,
              and services.
            </li>
            <li>
              Marketing and Communications Data: Your preferences in receiving
              marketing from us and your communication preferences.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6">
            <li>To provide, operate, and maintain our website and services.</li>
            <li>To improve, personalize, and expand our website and services.</li>
            <li>To understand and analyze how you use our website and services.</li>
            <li>To develop new products, services, features, and functionality.</li>
            <li>
              To communicate with you, either directly or through one of our
              partners, including for customer service, updates, and marketing
              purposes.
            </li>
            <li>To process your transactions and manage your orders.</li>
            <li>To send you emails.</li>
            <li>To find and prevent fraud.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">3. How We Share Your Information</h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>With Service Providers:</strong> Third-party providers
              performing services on our behalf.
            </li>
            <li>
              <strong>For Business Transfers:</strong> Sharing data in
              connection with mergers or acquisitions.
            </li>
            <li>
              <strong>With Affiliates:</strong> Sharing information with
              affiliates bound by this Privacy Policy.
            </li>
            <li>
              <strong>With Business Partners:</strong> Offering certain
              products, services, or promotions.
            </li>
            <li>
              <strong>With Your Consent:</strong> Disclosing information with
              your explicit permission.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that no security measures are perfect or
            impenetrable, and no method of data transmission can be guaranteed
            against misuse.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            5. Your Data Protection Rights
          </h2>
          <p className="mb-4">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc ml-6">
            <li>The right to access your personal data.</li>
            <li>The right to request corrections to inaccurate information.</li>
            <li>The right to request the deletion of your personal data.</li>
            <li>
              The right to restrict or object to the processing of your data.
            </li>
            <li>
              The right to request data portability to another organization or
              directly to you.
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            6. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for
            updates. Changes are effective when posted.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
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

export default PrivacyPolicy;
