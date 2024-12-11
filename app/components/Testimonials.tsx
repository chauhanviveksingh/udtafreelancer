import React from "react";

interface Testimonial {
  name: string;
  title: string;
  image: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Wonderson",
    title: "Founder of Lyconf",
    image: "https://via.placeholder.com/50", // Replace with real image URLs
    feedback:
      "As a small business owner, I was doing everything and my workload was increasing. With this startup, I was able to save time so I could focus on the things that matter most: my clients and my family.",
  },
  {
    name: "Karim Ahmed",
    title: "DevOps Engineer",
    image: "https://via.placeholder.com/50",
    feedback:
      "My company's software now is easy to use, saves time and money, and is loved by a lot of users. One customer saved $10k over the course of 3 years, and another saves 8 hours per week! Thanks to Blinder.",
  },
  {
    name: "Lysa Stian",
    title: "System Manager",
    image: "https://via.placeholder.com/50",
    feedback:
      "My business was in a dire situation. I had no idea what to do, and I felt like I was losing hope. Then I found this startup, and everything changed. It helped me create automated sales.",
  },
  {
    name: "Angela Stian",
    title: "Product Designer",
    image: "https://via.placeholder.com/50",
    feedback:
      "One day, my company was about to go under, and I had no idea what to do. I found Blinder, and it helped me get my business back on track. Now, my company is flourishing and I see new opportunities.",
  },
  {
    name: "Jurica Koletic",
    title: "Founder of Let’s Code",
    image: "https://via.placeholder.com/50",
    feedback:
      "In these difficult economic times, doing business is tough. Funding is hard to come by, and many entrepreneurs are struggling to keep their doors open. But when I found this startup, everything changed.",
  },
  {
    name: "Kavi Laron",
    title: "Full Stack Engineer",
    image: "https://via.placeholder.com/50",
    feedback:
      "We all know how costly it is to find good help. I was faced with this problem when I lost my data entry staff and my business was on the brink of going under. Thankfully, Blinder saved the day.",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">See what others are saying about us</h2>
        <p className="text-gray-600 mb-12">
          Listen to what the experts around the world are saying about us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-left hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
