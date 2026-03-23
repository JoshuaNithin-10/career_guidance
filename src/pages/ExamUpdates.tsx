import React, { useState } from 'react';
import { Calendar, Clock, ExternalLink, BookOpen, AlertCircle } from 'lucide-react';
import type { Page } from '../App';

interface ExamUpdatesProps {
  onNavigate: (page: Page) => void;
}

const ExamUpdates: React.FC<ExamUpdatesProps> = () => {
  const [selectedExam, setSelectedExam] = useState<any>(null);

  const upcomingExams = [
    // 💻 COMPUTER SCIENCE / ENGINEERING
    {
      name: 'JEE Main 2025',
      date: 'January 2025',
      type: 'Engineering',
      streams: ['Computer Science'],
      description: 'Engineering entrance exam',
      registrationDeadline: 'December 2024',
      eligibility: '12th with PCM',
      website: 'https://jeemain.nta.nic.in',
      common: false
    },
    {
      name: 'BITSAT 2025',
      date: 'August 2025',
      type: 'Engineering',
      streams: ['Computer Science'],
      description: 'BITS admission test',
      registrationDeadline: 'June 2025',
      eligibility: '12th with PCM',
      website: 'https://www.bitsadmission.com',
      common: false
    },
    {
      name: 'GATE 2025',
      date: 'February 2025',
      type: 'Engineering',
      streams: ['Computer Science'],
      description: 'PG engineering exam',
      registrationDeadline: 'October 2024',
      eligibility: 'B.Tech',
      website: 'https://gate.iitkgp.ac.in',
      common: false
    },
  
    // 🧬 BIOLOGY
    {
      name: 'NEET 2025',
      date: 'May 2025',
      type: 'Medical',
      streams: ['Biology'],
      description: 'Medical entrance exam',
      registrationDeadline: 'March 2025',
      eligibility: '12th with PCB',
      website: 'https://neet.nta.nic.in',
      common: false
    },
    {
      name: 'AIIMS 2025',
      date: 'May 2025',
      type: 'Medical',
      streams: ['Biology'],
      description: 'AIIMS admission exam',
      registrationDeadline: 'March 2025',
      eligibility: '12th PCB',
      website: 'https://aiimsexams.ac.in',
      common: false
    },
  
    // 📊 COMMERCE / ARTS
    {
      name: 'CUET 2025',
      date: 'June 2025',
      type: 'General',
      streams: ['Commerce', 'Arts', 'Biology', 'Computer Science'],
      description: 'Central University Entrance Test',
      registrationDeadline: 'April 2025',
      eligibility: '12th pass',
      website: 'https://cuet.samarth.ac.in',
      common: true
    },
    {
      name: 'CLAT 2025',
      date: 'May 2025',
      type: 'Law',
      streams: ['Arts', 'Commerce'],
      description: 'Law entrance exam',
      registrationDeadline: 'March 2025',
      eligibility: '12th pass',
      website: 'https://consortiumofnlus.ac.in',
      common: false
    },
    {
      name: 'CAT 2025',
      date: 'November 2025',
      type: 'Management',
      streams: ['Commerce', 'Arts'],
      description: 'MBA entrance exam',
      registrationDeadline: 'September 2025',
      eligibility: 'Graduation',
      website: 'https://iimcat.ac.in',
      common: false
    }
  ];

  const getFilteredExams = () => {
    const userStream = localStorage.getItem("userStream") || "";
    const interest = localStorage.getItem("userInterest")?.toLowerCase() || "";
  
    // 🎯 Strict match
    let filtered = upcomingExams.filter((exam) =>
      exam.streams.includes(userStream)
    );
  
    // ❤️ Interest boost
    if (interest) {
      const interestMatches = upcomingExams.filter((exam) =>
        (interest.includes("law") && exam.type === "Law") ||
        (interest.includes("business") && exam.type === "Management") ||
        (interest.includes("medical") && exam.type === "Medical")
      );
      filtered = [...filtered, ...interestMatches];
    }
  
    // 🌍 Add common exams if less than 3
    if (filtered.length < 3) {
      const commonExams = upcomingExams.filter((exam) => exam.common);
      filtered = [...filtered, ...commonExams];
    }
  
    // ❌ Remove duplicates
    let unique = Array.from(
      new Map(filtered.map((item) => [item.name, item])).values()
    );

    // 🛡️ GUARANTEE MINIMUM 3 EXAMS FOR BLANK PROFILES
    if (unique.length < 3) {
      const fallbacks = upcomingExams.filter(
        (exam) => !unique.find((u) => u.name === exam.name)
      );
      unique = [...unique, ...fallbacks.slice(0, 3 - unique.length)];
    }
  
    return unique.slice(0, 5); // show max 5 (clean UI)
  };

  const examCategories = [
    { name: 'Engineering', count: 3, color: 'bg-gradient-to-r from-green-200 to-emerald-200 text-green-800' },
    { name: 'Medical', count: 2, color: 'bg-gradient-to-r from-emerald-200 to-lime-200 text-emerald-800' },
    { name: 'Management', count: 1, color: 'bg-gradient-to-r from-lime-200 to-amber-200 text-lime-800' },
    { name: 'Law', count: 1, color: 'bg-gradient-to-r from-amber-200 to-rose-200 text-amber-800' },
    { name: 'Science/Research', count: 1, color: 'bg-gradient-to-r from-teal-200 to-cyan-200 text-teal-800' }
  ];

  const getStatusColor = (date: string) => {
    const currentMonth = new Date().getMonth();
    const examMonth = new Date(`${date} 1, 2025`).getMonth();

    if (examMonth <= currentMonth + 2) {
      return 'bg-gradient-to-r from-red-200 to-amber-200 text-red-800';
    } else if (examMonth <= currentMonth + 5) {
      return 'bg-gradient-to-r from-amber-200 to-yellow-200 text-amber-800';
    } else {
      return 'bg-gradient-to-r from-green-200 to-emerald-200 text-green-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-white py-8">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Entrance Exam Updates
          </h1>
          <p className="text-gray-600 text-lg">
            Stay updated with upcoming entrance exams and important dates
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {examCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-lg">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${category.color}`}>
                {category.name}
              </div>
              <p className="text-2xl font-bold text-gray-800">{category.count}</p>
              <p className="text-sm text-gray-600">Exams</p>
            </div>
          ))}
        </div>

        {/* Alert */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 mb-8">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Important Notice</h3>
              <p className="text-green-700 text-sm">
                Registration deadlines are approaching. Always verify details on official websites.
              </p>
            </div>
          </div>
        </div>

        {/* Exam Cards */}
        <div className="grid gap-6">
          {getFilteredExams().map((exam, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500 relative">
              <div className="p-6 pt-8">

                <div className="absolute top-4 right-4">
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full shadow-sm font-semibold">
                    ⭐ Recommended for you
                  </span>
                </div>

                <div className="flex items-center mb-2 mt-2">
                  <h3 className="text-xl font-bold text-gray-800 mr-3">{exam.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.date)}`}>
                    {exam.date}
                  </span>
                </div>

                <p className="text-gray-600 mb-2">{exam.description}</p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span className="mr-4">{exam.type}</span>
                  <span>Eligibility: {exam.eligibility}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-green-500" />
                    <span><strong>Exam Date:</strong> {exam.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-green-500" />
                    <span><strong>Registration Deadline:</strong> {exam.registrationDeadline}</span>
                  </div>
                </div>

                {/* Buttons Section */}
                <div className="flex justify-between items-center">

                  {/* Pinnacle Style Website Link Added */}
                  <a
                    href={exam.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Visit Official Website
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>

                  {/* Spark Original Buttons */}
                  <div className="flex gap-2">
                    <button className="bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 text-green-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Set Reminder
                    </button>

                    <button
                      onClick={() => setSelectedExam(exam)}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      More Details
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {selectedExam && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">

            <h2 className="text-xl font-bold text-green-600 mb-2">
              {selectedExam.name}
            </h2>

            <p className="text-sm text-gray-600 mb-4">
              {selectedExam.description}
            </p>

            <div className="space-y-3 text-sm bg-green-50 p-4 rounded-lg mb-4">
              <p className="flex justify-between border-b border-green-100 pb-2">
                <strong className="text-green-800">Exam Date:</strong> 
                <span className="text-green-900">{selectedExam.date}</span>
              </p>
              <p className="flex justify-between border-b border-green-100 pb-2">
                <strong className="text-green-800">Registration:</strong> 
                <span className="text-green-900">{selectedExam.registrationDeadline}</span>
              </p>
              <p className="flex justify-between border-b border-green-100 pb-2">
                <strong className="text-green-800">Eligibility:</strong> 
                <span className="text-green-900">{selectedExam.eligibility}</span>
              </p>
              <p className="flex justify-between">
                <strong className="text-green-800">Type:</strong> 
                <span className="text-green-900">{selectedExam.type}</span>
              </p>
            </div>

            <div className="flex justify-between items-center mt-6">
              <a
                href={selectedExam.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-zinc-800 text-white font-medium rounded-lg hover:bg-zinc-900 transition-colors"
              >
                Apply Now
              </a>
              <button
                onClick={() => setSelectedExam(null)}
                className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-300 transition-colors font-medium"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ExamUpdates;