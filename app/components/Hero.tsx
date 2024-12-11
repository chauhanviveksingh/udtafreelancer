/* eslint-disable @next/next/no-img-element */
import React from 'react';



const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="bg-primary text-secondary min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <h1 className="text-5xl font-bold mb-4">
      Build and scale your Next 
       <span className="text-accent"> Business idea faster</span>
      </h1>
      <p className="text-lg max-w-2xl mb-6">
      Blinder making it simple for you to build and grow your SaaS applications, or any business idea.
      </p>
      <div className="flex space-x-4">
        <a href="#about" className="text-accent border border-accent py-2 px-6 rounded hover:bg-accent hover:text-black">
         Start Building
        </a>
        <a href="#portfolio" className="text-accent border border-accent py-2 px-6 rounded hover:bg-accent hover:text-black">
        Learn More 
        </a>
      </div>
      <div className="mt-10">
        <img
          src="https://pbs.twimg.com/profile_images/1715692540421120000/dimtn-uT_400x400.jpg" // Replace with your actual image URL
          alt="Vivek"
          className="rounded-full w-60 h-70"
        />
      </div>
      <div className="mt-6">
      <h1 className="tagline">
    TRUSTED BY TEAMS FROM AROUND THE WORLD
  </h1>
</div>
<div className="mt-6 grid grid-cols-4 gap-4 place-items-center">
  <img
    src="https://blinder-nine.vercel.app/_next/static/media/layers.51c665af.svg" 
    alt="Logo 1"
    className="h-10"
  />
  <img
    src="https://blinder-nine.vercel.app/_next/static/media/sendgrid.ed62bb3d.svg" 
    alt="Logo 2"
    className="h-10"
  />
  <img
    src="https://blinder-nine.vercel.app/_next/static/media/freshbooks.c4c650e5.svg" 
    alt="Logo 3"
    className="h-10"
  />
  <img
    src="https://blinder-nine.vercel.app/_next/static/media/adobe.c73627f3.svg" 
    alt="Logo 4"
    className="h-10"
  />
</div>

    </section>
  );
};

export default Hero;
