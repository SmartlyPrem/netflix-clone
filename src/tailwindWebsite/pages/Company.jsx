// CompanyPage.jsx

import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Company = () => {
    return (
        <div className="bg-gray-100 min-h-screen">

            {/* Company Information */}
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-6">Our Technology Company</h1>
                <p className="text-gray-600 mb-8">
                    Welcome to Our Technology Company, where innovation meets excellence.
                    We strive to bring cutting-edge solutions to the world.
                </p>

                {/* Company Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Web Development</h2>
                        <p className="text-gray-600">
                            We create modern and responsive websites to help your business
                            thrive in the digital age.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Mobile Apps</h2>
                        <p className="text-gray-600">
                            Harness the power of mobile platforms with our innovative and
                            user-friendly mobile applications.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Cloud Solutions</h2>
                        <p className="text-gray-600">
                            Leverage the cloud to streamline your operations and enhance
                            scalability with our cloud computing solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
