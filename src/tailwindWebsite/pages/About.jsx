import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const About = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Our Technology Business</h1>
          <p className="text-gray-700 mb-6">
            Welcome to our technology-driven world! At [Your Company Name], we are passionate about
            leveraging the latest advancements in technology to empower businesses and individuals alike.
          </p>
          <p className="text-gray-700 mb-6">
            Our journey began with a simple idea: to make technology accessible and beneficial for
            everyone. Today, we are proud to offer a range of innovative solutions that cater to the
            diverse needs of our clients.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to transform the way people interact with technology. We strive to provide
            cutting-edge solutions that not only meet the current demands but also anticipate future
            challenges.
          </p>
          <h2 className="text-2xl font-bold mb-4">What Sets Us Apart</h2>
          <p className="text-gray-700 mb-6">
            At [Your Company Name], we differentiate ourselves through innovation, quality, and
            customer-centricity. Our team of experts is dedicated to staying ahead of the curve,
            ensuring that our clients always receive the best-in-class technology solutions.
          </p>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Have questions or interested in exploring how our technology solutions can benefit your
            business? Reach out to us at [contact@yourcompany.com].
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
