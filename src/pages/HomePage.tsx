import React from 'react';
import { ArrowRight, BookOpen, Users, Trophy, TrendingUp } from 'lucide-react';
import type { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Career Guidance',
      description: 'Get personalized course and career recommendations based on your interests and academic background.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'College Selection',
      description: 'Discover the best colleges in your preferred location with detailed information and rankings.'
    },
    {
      icon: <Trophy className="h-8 w-8 text-yellow-600" />,
      title: 'Scholarship Info',
      description: 'Find scholarships and financial aid opportunities tailored to your profile and requirements.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: 'Aptitude Testing',
      description: 'Take our comprehensive aptitude test to understand your strengths and ideal career paths.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20" > 
        <img src="/bg_carrier.jpeg" alt="Career Background" className="w-full h-auto" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              S.P.A.R.K
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-blue-100">
              Smart Path And Right Key
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Helping Class 10, 11 & 12 students make smarter career choices
            </p>
            <button
              onClick={() => onNavigate('career-form')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section> */}
      <section
  className="relative bg-cover bg-center bg-no-repeat text-white py-20"
  style={{ backgroundImage: "url('/bg_carrier.jpeg')" }}
>
  {/* Hero Section */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  <div className="relative container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        S.P.A.R.K
      </h1>
      <h2 className="text-2xl md:text-3xl font-light mb-4 text-blue-100">
        Smart Path And Right Key
      </h2>
      <p className="text-xl md:text-2xl mb-8 text-blue-100">
        Helping Class 10, 11 & 12 students make smarter career choices
      </p>
      <button
        onClick={() => onNavigate("career-form")}
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group shadow-lg"
      >
        Get Started
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose S.P.A.R.K?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive career guidance to help students make informed decisions about their future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Discover Your Path?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your journey towards a successful career with personalized guidance and recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('career-form')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Fill Career Form
            </button>
            <button
              onClick={() => onNavigate('aptitude-test')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Take Aptitude Test
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;