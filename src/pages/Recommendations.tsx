import React, { useState } from 'react';
import { BookOpen, Building, Award, Brain, ChevronDown, ChevronUp, ExternalLink, MapPin, Star } from 'lucide-react';
import type { Page, FormData } from '../App';

interface RecommendationsProps {
  formData: FormData;
  onNavigate: (page: Page) => void;
}

type TabType = 'courses' | 'colleges' | 'scholarships';

const Recommendations: React.FC<RecommendationsProps> = ({ formData, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<TabType>('courses');
  const [expandedPG, setExpandedPG] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState(false);

  const mockCourses = {
    'Computer Science': [
      {
        name: 'B.Tech Computer Science',
        duration: '4 Years',
        eligibility: '12th with PCM/CS',
        careerPath: 'Software Engineer, AI/ML Specialist, Data Scientist'
      },
      {
        name: 'B.Sc Computer Science',
        duration: '3 Years',
        eligibility: '12th with Mathematics',
        careerPath: 'Web Developer, Software Analyst, System Admin'
      },
      {
        name: 'BCA (Bachelor of Computer Applications)',
        duration: '3 Years',
        eligibility: '12th any stream with Maths',
        careerPath: 'Application Developer, Database Admin, IT Consultant'
      }
    ],
    'Biology': [
      {
        name: 'B.Sc Biology',
        duration: '3 Years',
        eligibility: '12th with Biology',
        careerPath: 'Biotechnologist, Research Scientist, Lab Technician'
      },
      {
        name: 'MBBS',
        duration: '5.5 Years',
        eligibility: '12th with Biology, NEET qualified',
        careerPath: 'Doctor, Surgeon, Medical Researcher'
      },
      {
        name: 'B.Pharm',
        duration: '4 Years',
        eligibility: '12th with PCB/PCM',
        careerPath: 'Pharmacist, Drug Inspector, Pharmaceutical Researcher'
      }
    ],
    'Commerce': [
      {
        name: 'B.Com',
        duration: '3 Years',
        eligibility: '12th Commerce',
        careerPath: 'Accountant, Financial Analyst, Tax Consultant'
      },
      {
        name: 'BBA',
        duration: '3 Years',
        eligibility: '12th any stream',
        careerPath: 'Business Manager, Marketing Executive, HR Specialist'
      },
      {
        name: 'CA (Chartered Accountant)',
        duration: '3-5 Years',
        eligibility: '12th Commerce',
        careerPath: 'Chartered Accountant, Auditor, Financial Advisor'
      }
    ],
    'Arts': [
      {
        name: 'BA Psychology',
        duration: '3 Years',
        eligibility: '12th any stream',
        careerPath: 'Psychologist, Counselor, HR Specialist'
      },
      {
        name: 'BA English Literature',
        duration: '3 Years',
        eligibility: '12th any stream',
        careerPath: 'Content Writer, Editor, Teacher, Journalist'
      },
      {
        name: 'BA Political Science',
        duration: '3 Years',
        eligibility: '12th any stream',
        careerPath: 'Civil Servant, Political Analyst, Diplomat'
      }
    ],
    'Others': [
      {
        name: 'B.Des (Bachelor of Design)',
        duration: '4 Years',
        eligibility: '12th any stream',
        careerPath: 'Graphic Designer, UI/UX Designer, Product Designer'
      },
      {
        name: 'Hotel Management',
        duration: '3-4 Years',
        eligibility: '12th any stream',
        careerPath: 'Hotel Manager, Event Coordinator, Chef'
      }
    ]
  };

  const pgOptions = [
    {
      course: 'M.Tech/MS abroad',
      requirements: 'Good GRE/TOEFL scores',
      scholarships: 'Merit-based, Research assistantships'
    },
    {
      course: 'MBA',
      requirements: 'CAT/GMAT scores',
      scholarships: 'Need-based, Corporate sponsorships'
    },
    {
      course: 'M.Sc Research',
      requirements: 'GATE/NET qualification',
      scholarships: 'Government fellowships, University grants'
    }
  ];

  const courseDetails = [
    {
      course: "B.E. Computer Science & Engineering (Core syllabus summary)",
      core_topics: [
        "Programming Fundamentals (C/C++/Python)",
        "Data Structures & Algorithms",
        "Discrete Mathematics",
        "Computer Organization & Architecture",
        "Operating Systems",
        "Database Management Systems",
        "Software Engineering",
        "Theory of Computation",
        "Computer Networks",
        "Web Technologies (HTML/CSS/JS)",
        "Machine Learning Basics",
        "Artificial Intelligence introduction",
        "Electives: Cloud Computing, Cybersecurity, Mobile App Development",
        "Project Work & Internship"
      ]
    }
  ];

 const mockColleges = {
  'Tamil Nadu': [
    { name: 'Anna University', location: 'Chennai', nirfRank: 15 },
    { name: 'VIT University', location: 'Vellore', nirfRank: 18 },
    { name: 'SRM Institute', location: 'Chennai', nirfRank: 35 },
    { name: 'PSG College', location: 'Coimbatore', nirfRank: 42 },
    { name: 'Madras Institute of Technology', location: 'Chennai', nirfRank: 25 },
    { name: 'SSN College of Engineering', location: 'Chennai', nirfRank: 48 },
    { name: 'Coimbatore Institute of Technology', location: 'Coimbatore', nirfRank: 55 },
    { name: 'Thiagarajar College of Engineering', location: 'Madurai', nirfRank: 65 }
  ],
  'Karnataka': [
    { name: 'Indian Institute of Science', location: 'Bangalore', nirfRank: 1 },
    { name: 'Manipal University', location: 'Manipal', nirfRank: 28 },
    { name: 'PES University', location: 'Bangalore', nirfRank: 45 },
    { name: 'RV College of Engineering', location: 'Bangalore', nirfRank: 52 },
    { name: 'BMS College of Engineering', location: 'Bangalore', nirfRank: 63 },
    { name: 'NIT Surathkal', location: 'Mangalore', nirfRank: 7 },
    { name: 'IIIT Bangalore', location: 'Bangalore', nirfRank: 30 }
  ],
  'Kerala': [
    { name: 'IIT Palakkad', location: 'Palakkad', nirfRank: 12 },
    { name: 'CUSAT', location: 'Kochi', nirfRank: 38 },
    { name: 'NIT Calicut', location: 'Kozhikode', nirfRank: 25 },
    { name: 'University of Kerala', location: 'Thiruvananthapuram', nirfRank: 65 },
    { name: 'College of Engineering Trivandrum', location: 'Thiruvananthapuram', nirfRank: 40 },
    { name: 'Rajagiri School of Engineering', location: 'Kochi', nirfRank: 78 }
  ],
  'Andhra Pradesh': [
    { name: 'IIT Tirupati', location: 'Tirupati', nirfRank: 11 },
    { name: 'Andhra University', location: 'Visakhapatnam', nirfRank: 35 },
    { name: 'NIT Andhra Pradesh', location: 'Tadepalligudem', nirfRank: 20 },
    { name: 'SRM University Andhra Pradesh', location: 'Amaravati', nirfRank: 45 },
    { name: 'VIT-AP University', location: 'Vellore (AP Campus)', nirfRank: 50 }
  ],
  'Maharashtra': [
    { name: 'IIT Bombay', location: 'Mumbai', nirfRank: 3 },
    { name: 'IIT Delhi (Mumbai Campus?)', location: 'Mumbai', nirfRank: 2 },
    { name: 'COEP Pune', location: 'Pune', nirfRank: 30 },
    { name: 'VJTI Mumbai', location: 'Mumbai', nirfRank: 35 },
    { name: 'SP Pune University', location: 'Pune', nirfRank: 40 }
  ],
  'Delhi': [
    { name: 'IIT Delhi', location: 'Delhi', nirfRank: 2 },
    { name: 'Delhi Technological University', location: 'Delhi', nirfRank: 9 },
    { name: 'Jamia Millia Islamia', location: 'Delhi', nirfRank: 18 },
    { name: 'NSUT', location: 'Delhi', nirfRank: 22 }
  ],
  'Jammu and Kashmir': [
    { name: 'IIT Jammu', location: 'Jammu', nirfRank: 28 },
    { name: 'NIT Srinagar', location: 'Srinagar', nirfRank: 40 },
    { name: 'University of Jammu', location: 'Jammu', nirfRank: 55 },
    { name: 'Central University of Kashmir', location: 'Srinagar', nirfRank: 62 }
  ]
};
  const mockScholarships = [
    {
      name: 'KVPY Scholarship',
      amount: '₹5,000 - ₹28,000/month',
      eligibility: 'Science students, entrance exam'
    },
    {
      name: 'National Merit Scholarship',
      amount: '₹12,000/year',
      eligibility: 'Merit-based, all streams'
    },
    {
      name: 'State Government Scholarship',
      amount: '₹10,000 - ₹50,000/year',
      eligibility: 'Based on family income and merit'
    },
    {
      name: 'Minority Scholarship',
      amount: '₹30,000/year',
      eligibility: 'Minority communities, merit-based'
    }
  ];

  const getCurrentCourses = () => {
    return mockCourses[formData.stream as keyof typeof mockCourses] || mockCourses['Others'];
  };

  const getCurrentColleges = () => {
    return mockColleges[formData.state as keyof typeof mockColleges] || mockColleges['Tamil Nadu'];
  };

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="grid gap-6">
        {getCurrentCourses().map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-bold text-lime-600 mb-2 md:mb-0">{course.name}</h3>
              <span className="text-sm text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
                {course.duration}
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-zinc-600 mb-1">
                  <strong>Eligibility:</strong> {course.eligibility}
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-600">
                  <strong>Career Path:</strong> {course.careerPath}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

     
      <div className="mt-8 bg-gradient-to-r from-lime-50 to-zinc-50 rounded-lg p-6">
        <button
          onClick={() => setExpandedPG(!expandedPG)}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-xl font-bold text-zinc-800">PG Options & Abroad Studies</h3>
          {expandedPG ? (
            <ChevronUp className="h-5 w-5 text-zinc-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-zinc-600" />
          )}
        </button>
        
        {expandedPG && (
          <div className="mt-4 space-y-4">
            {pgOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-lime-500">
                <h4 className="font-semibold text-zinc-800">{option.course}</h4>
                <p className="text-sm text-zinc-600 mt-1">
                  <strong>Requirements:</strong> {option.requirements}
                </p>
                <p className="text-sm text-zinc-600">
                  <strong>Scholarships:</strong> {option.scholarships}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>


      <div className="mt-8 bg-gradient-to-r from-lime-50 to-zinc-50 rounded-lg p-6">
        <button
          onClick={() => setExpandedCourse(!expandedCourse)}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-xl font-bold text-zinc-800">Course Structure</h3>
          {expandedCourse ? (
            <ChevronUp className="h-5 w-5 text-zinc-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-zinc-600" />
          )}
        </button>
        
        {expandedCourse && (
          <div className="mt-4 space-y-4">
            {courseDetails.map((option, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-lime-500">
                <h4 className="font-semibold text-zinc-800">{option.course}</h4>
                <p className="text-sm text-zinc-600 mt-1">
                  <strong>Core Topics:</strong> {option.core_topics.join(', ')}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderColleges = () => (
    <div className="space-y-6">
      <div className="bg-lime-50 border border-lime-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-lime-600 mb-4">
          Top Recommended Colleges in {formData.state || 'Your Area'}
        </h3>
        <p className="text-zinc-700">
          Based on your preferences for {formData.stream} in {formData.district}, {formData.state}
        </p>
      </div>

      <div className="grid gap-4">
        {getCurrentColleges().map((college, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-zinc-800 mb-2">{college.name}</h4>
                <p className="flex items-center text-zinc-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {college.location}
                </p>
              </div>
              <div className="flex items-center bg-yellow-50 px-3 py-2 rounded-lg">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="text-sm font-medium">NIRF Rank: {college.nirfRank}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderScholarships = () => (
    <div className="space-y-6">
      <div className="bg-lime-50 border border-lime-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-lime-600 mb-4">Scholarship Opportunities</h3>
        <p className="text-zinc-700">
          Financial aid options for {formData.stream} students in {formData.state}
        </p>
      </div>

      <div className="grid gap-4">
        {mockScholarships.map((scholarship, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-lime-500">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h4 className="text-lg font-bold text-zinc-800">{scholarship.name}</h4>
              <span className="text-lime-600 font-semibold">{scholarship.amount}</span>
            </div>
            <p className="text-zinc-600 text-sm">
              <strong>Eligibility:</strong> {scholarship.eligibility}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center mx-auto">
          View More Scholarships
          <ExternalLink className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );

  const tabs = [
    { id: 'courses' as TabType, label: 'Suggested Courses', icon: BookOpen },
    { id: 'colleges' as TabType, label: 'Suggested Colleges', icon: Building },
    { id: 'scholarships' as TabType, label: 'Suggested Scholarships', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-zinc-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-lime-600 mb-4">Your Career Recommendations</h1>
          <p className="text-zinc-600 text-lg">
            Personalized suggestions for {formData.name} - {formData.class} ({formData.stream})
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-2 rounded-lg shadow-lg max-w-3xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-lime-600 text-white shadow-md'
                  : 'text-zinc-600 hover:text-lime-600 hover:bg-lime-50'
              }`}
            >
              <tab.icon className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'courses' && renderCourses()}
          {activeTab === 'colleges' && renderColleges()}
          {activeTab === 'scholarships' && renderScholarships()}
        </div>

        {/* Aptitude Test CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-lime-600 to-emerald-600 rounded-lg p-8 max-w-2xl mx-auto text-white">
            <Brain className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Want More Personalized Guidance?</h3>
            <p className="mb-6 text-lime-100">
              Take our comprehensive aptitude test to discover your strengths and get even more targeted recommendations.
            </p>
            <button
              onClick={() => onNavigate('aptitude-test')}
              className="bg-white text-lime-600 hover:bg-lime-50 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Brain className="h-5 w-5 mr-2" />
              Take Aptitude Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
