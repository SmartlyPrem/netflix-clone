import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const Resources = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="container mx-auto py-8">
        <div className='text-4xl my-3 pb-5 font-bold'>Our resources</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Resource Card 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Introduction to Artificial Intelligence</h2>
            <p className="text-gray-700 mb-4">
              Learn the basics of AI and its applications in the modern world.
            </p>
            <a
              href="/ai-introduction"
              className="text-blue-500 hover:underline inline-block"
            >
              Read More
            </a>
          </div>

          {/* Resource Card 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Web Development Trends 2024</h2>
            <p className="text-gray-700 mb-4">
              Stay ahead of the curve with the latest trends in web development.
            </p>
            <a
              href="/web-dev-trends-2024"
              className="text-blue-500 hover:underline inline-block"
            >
              Read More
            </a>
          </div>

          {/* Resource Card 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Cybersecurity Best Practices</h2>
            <p className="text-gray-700 mb-4">
              Protect your business from cyber threats with these best practices.
            </p>
            <a
              href="/cybersecurity-best-practices"
              className="text-blue-500 hover:underline inline-block"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
