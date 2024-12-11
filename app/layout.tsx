import './globals.css'; // Import global styles
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Toolkit from './components/Toolkit';
import TestimonialsSection from './components/Testimonials';
import Footer from './components/Footer';
import React from 'react';

export const metadata = {
  title: 'My Next.js App',
  description: 'A blogging website built with Next.js',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ }) => {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Shared Navbar */}
        <Hero/> {/* Content from the current page */}
        <Hero2/>
        <Toolkit/>
        <TestimonialsSection/>
        <Footer /> Shared Footer
      </body>
    </html>
  );
};

export default RootLayout;
