import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      {/* Features Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="text-center">
          <div className="text-4xl text-purple-500 mb-4">✅</div>
          <h3 className="text-xl font-bold mb-2">Best Quality</h3>
          <p className="text-gray-600">
            We care about the quality of the product. As a digital product
            development agency, we believe in beautiful software.
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl text-purple-500 mb-4">🧩</div>
          <h3 className="text-xl font-bold mb-2">Modern Technologies</h3>
          <p className="text-gray-600">
            We use the modern and most flexible and secure technologies to build
            the best products on the internet.
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl text-purple-500 mb-4">🔒</div>
          <h3 className="text-xl font-bold mb-2">Advanced Security</h3>
          <p className="text-gray-600">
            At Software Security Solutions, our mission is to raise the bar by
            making computer security more accessible.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center mt-16 px-4">
        <img
          src="https://2456764.fs1.hubspotusercontent-eu1.net/hub/2456764/hubfs/YoungPeopleBusinessMeeting_1200x627.jpg?width=1440&name=YoungPeopleBusinessMeeting_1200x627.jpg"
          alt="Team Meeting"
          className="w-full md:w-1/2 rounded-lg mb-8 md:mb-0"
        />
        <div className="md:ml-12">
          <h2 className="text-3xl font-bold mb-4">
            Create Successful Business Models with Our IT Solutions
          </h2>
          <p className="text-gray-600 mb-6">
            Blinder, a software development company, helps to digitize
            businesses by focusing on client&apos;s business challenges and needs. We
            value close transparent cooperation and encourage our clients to
            participate actively in the project development life cycle.
          </p>
          <button className="bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-600">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
