import React from 'react';
import { Calendar, Clock, ExternalLink, BookOpen, AlertCircle } from 'lucide-react';
import type { Page } from '../App';

interface ExamUpdatesProps {
  onNavigate: (page: Page) => void;
}

const ExamUpdates: React.FC<ExamUpdatesProps> = ({ onNavigate }) => {
  const upcomingExams = [
    {
      name: 'JEE Main 2025',
      date: 'January 2025',
      type: 'Engineering',
      description: 'National level entrance exam for engineering admissions',
      registrationDeadline: 'December 2024',
      eligibility: '12th with PCM',
      website: 'https://jeemain.nta.nic.in'
    },
    {
      name: 'NEET 2025',
      date: 'May 2025',
      type: 'Medical',
      description: 'National Eligibility cum Entrance Test for medical courses',
      registrationDeadline: 'March 2025',
      eligibility: '12th with PCB',
      website: 'https://neet.nta.nic.in'
    },
    {
      name: 'CAT 2025',
      date: 'November 2025',
      type: 'Management',
      description: 'Common Admission Test for IIM and other B-schools',
      registrationDeadline: 'September 2025',
      eligibility: 'Graduation in any discipline',
      website: 'https://iimcat.ac.in'
    },
    {
      name: 'CLAT 2025',
      date: 'May 2025',
      type: 'Law',
      description: 'Common Law Admission Test for law colleges',
      registrationDeadline: 'March 2025',
      eligibility: '12th pass',
      website: 'https://consortiumofnlus.ac.in'
    },
    {
      name: 'GATE 2025',
      date: 'February 2025',
      type: 'Engineering/Science',
      description: 'Graduate Aptitude Test in Engineering for PG admissions',
      registrationDeadline: 'October 2024',
      eligibility: 'B.Tech/B.E. or equivalent',
      website: 'https://gate.iitkgp.ac.in'
    },
    {
      name: 'AIIMS MBBS 2025',
      date: 'May 2025',
      type: 'Medical',
      description: 'All India Institute of Medical Sciences entrance exam',
      registrationDeadline: 'March 2025',
      eligibility: '12th with PCB',
      website: 'https://aiimsexams.ac.in'
    },
    {
      name: 'BITSAT 2025',
      date: 'August 2025',
      type: 'Engineering',
      description: 'Birla Institute of Technology and Science Admission Test',
      registrationDeadline: 'June 2025',
      eligibility: '12th with PCM',
      website: 'https://www.bitsadmission.com'
    },
    {
      name: 'KVPY 2025',
      date: 'November 2025',
      type: 'Science/Research',
      description: 'Kishore Vaigyanik Protsahan Yojana for science students',
      registrationDeadline: 'September 2025',
      eligibility: '11th/12th Science students',
      website: 'https://kvpy.iisc.ac.in'
    }
  ];

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

        {/* Category Dashboard */}
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

        {/* Alert Banner */}
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
          {upcomingExams.map((exam, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-800 mr-3">{exam.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.date)}`}>
                        {exam.date}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-2">{exam.description}</p>

                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span className="mr-4">{exam.type}</span>
                      <span>Eligibility: {exam.eligibility}</span>
                    </div>
                  </div>
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

                <div className="flex justify-between items-center">

                  {/* Official Website Link */}
                  <a
                    href={exam.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Official Website
                  </a>

                  <div className="flex gap-2">
                    <button className="bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 text-green-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Set Reminder
                    </button>

                    <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      More Details
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExamUpdates;