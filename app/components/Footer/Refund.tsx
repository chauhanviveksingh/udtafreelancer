import React from "react";

const RefundPolicy: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Refund Policy
        </h1>
        <p className="text-gray-700 mb-6">
          At Amologic, Inc., we strive to ensure that our customers are satisfied with our
          services. If you are not completely satisfied with your purchase, we offer a refund
          policy as follows:
        </p>

        {/* Section 1: Eligibility for Refund */}
        <section className="mb-6">
          <h2 className="text-xl font-medium text-gray-800 mb-3">
            Eligibility for Refund
          </h2>
          <p className="text-gray-700">
            To be eligible for a refund, you must request it within 30 days of your purchase.
            The service must not have been used extensively or abused.
          </p>
        </section>

        {/* Section 2: Requesting a Refund */}
        <section className="mb-6">
          <h2 className="text-xl font-medium text-gray-800 mb-3">
            Requesting a Refund
          </h2>
          <p className="text-gray-700">
            To request a refund, please contact our customer support team at{" "}
            <a
              href="mailto:support@amologic.com"
              className="text-blue-500 underline hover:text-blue-700"
            >
              support@amologic.com
            </a>{" "}
            with your order details and the reason for the refund request. Our team will review
            your request and respond within 5 business days.
          </p>
        </section>

        {/* Section 3: Processing Refunds */}
        <section className="mb-6">
          <h2 className="text-xl font-medium text-gray-800 mb-3">
            Processing Refunds
          </h2>
          <p className="text-gray-700">
            Once your refund request is approved, we will process the refund to your original
            method of payment within 7-10 business days. Please note that it may take additional
            time for your bank or credit card company to process and post the refund to your
            account.
          </p>
        </section>

        {/* Section 4: Non-Refundable Services */}
        <section className="mb-6">
          <h2 className="text-xl font-medium text-gray-800 mb-3">
            Non-Refundable Services
          </h2>
          <p className="text-gray-700">
            Certain services may be non-refundable, including but not limited to custom
            development work, consulting services, and any other services explicitly stated as
            non-refundable at the time of purchase.
          </p>
        </section>

        {/* Section 5: Changes to Refund Policy */}
        <section className="mb-6">
          <h2 className="text-xl font-medium text-gray-800 mb-3">
            Changes to Refund Policy
          </h2>
          <p className="text-gray-700">
            Amologic, Inc. reserves the right to modify this refund policy at any time. Any
            changes will be posted on our website, and it is your responsibility to review the
            refund policy periodically.
          </p>
        </section>

        {/* Section 6: Contact Information */}
        <section>
          <h2 className="text-xl font-medium text-gray-800 mb-3">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about our refund policy, please do not hesitate
            to contact us at{" "}
            <a
              href="mailto:support@amologic.com"
              className="text-blue-500 underline hover:text-blue-700"
            >
              support@amologic.com
            </a>
            . We are here to help and ensure your satisfaction with our services.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
