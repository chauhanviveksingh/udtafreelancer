import React from "react";

const ToolkitSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Work with the Best Toolkit</h2>
        <p className="text-gray-600">
          These are a few of our favourite things:
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {[
          { title: "WordPress", description: "An open-source CMS." },
          {
            title: "Next.js",
            description: "A React framework for building web apps.",
          },
          {
            title: "Tailwind CSS",
            description: "A utility-first CSS framework for UI development.",
          },
          {
            title: "Node.js",
            description:
              "An open-source, cross-platform JavaScript runtime environment.",
          },
          { title: "Vercel", description: "A cloud platform for web hosting." },
          { title: "Figma", description: "A web-based UI design tool." },
        ].map((tool, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg"
          >
            <h4 className="text-xl font-bold mb-2">{tool.title}</h4>
            <p className="text-gray-600">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolkitSection;
