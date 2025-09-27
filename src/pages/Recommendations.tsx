import React, { useState } from 'react';
import { BookOpen, Building, Award, Brain, ChevronDown, ChevronUp, ExternalLink, MapPin, Star } from 'lucide-react';
import type { Page, FormData } from '../App';

interface RecommendationsProps {
  formData: FormData;
  onNavigate: (page: Page) => void;
}

type TabType = 'courses' | 'colleges' | 'scholarships'| 'course_details';

const Recommendations: React.FC<RecommendationsProps> = ({ formData, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<TabType>('courses');
  const [expandedPG, setExpandedPG] = useState(false);
  // const [activeTab, setActiveTab] = useState<TabType>('structure');
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
    }, 
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
  },
  {
    course: "B.Tech. Information Technology",
    core_topics: [
      "Programming (Python & Java)",
      "Data Structures & Algorithms",
      "Database Systems",
      "Web Development",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Information Security",
      "Machine Learning fundamentals",
      "Electives: DevOps, Cloud"
    ]
  },
  {
    course: "B.E. Electronics & Communication",
    core_topics: [
      "Circuit Theory",
      "Digital Electronics",
      "Analog Electronics",
      "Signals & Systems",
      "Microprocessors & Microcontrollers",
      "Embedded Systems",
      "Communication Systems",
      "VLSI basics",
      "Electives: IoT, Signal Processing"
    ]
  },
  {
    course: "B.Tech. Mechanical Engineering",
    core_topics: [
      "Engineering Mechanics",
      "Thermodynamics",
      "Fluid Mechanics",
      "Machine Design",
      "Manufacturing Processes",
      "Heat Transfer",
      "CAD/CAM",
      "Dynamics & Vibrations",
      "Materials Science",
      "Electives: Automotive Systems, Robotics"
    ]
  },
  {
    course: "B.Tech. Civil Engineering",
    core_topics: [
      "Strength of Materials",
      "Structural Analysis",
      "Concrete Technology",
      "Geotechnical Engineering",
      "Surveying",
      "Hydraulics & Water Resources",
      "Transportation Engineering",
      "Construction Management",
      "Electives: Environmental Engineering, Earthquake Engineering"
    ]
  },
  {
    course: "B.Sc. Data Science",
    core_topics: [
      "Programming (Python/R)",
      "Statistics & Probability",
      "Linear Algebra",
      "Data Wrangling",
      "Databases & SQL",
      "Machine Learning",
      "Data Visualization",
      "Big Data Technologies (Spark/Hadoop)",
      "Applied Projects"
    ]
  },
  {
    course: "B.Sc. Biotechnology",
    core_topics: [
      "Cell Biology",
      "Genetics",
      "Biochemistry",
      "Microbiology",
      "Molecular Biology",
      "Bioprocess Engineering",
      "Immunology",
      "Lab Techniques & Safety",
      "Electives: Bioinformatics"
    ]
  },
  {
    course: "MBBS (core subjects summary)",
    core_topics: [
      "Anatomy",
      "Physiology",
      "Biochemistry",
      "Pathology",
      "Microbiology",
      "Pharmacology",
      "Forensic Medicine",
      "Community Medicine",
      "Medicine, Surgery, Obstetrics & Gynaecology, Pediatrics (clinical postings)",
      "Internship / Rotatory Internship"
    ]
  },
  {
    course: "B.Com (Accounting & Finance)",
    core_topics: [
      "Financial Accounting",
      "Corporate Accounting",
      "Cost Accounting",
      "Business Law",
      "Taxation (Direct & Indirect)",
      "Auditing",
      "Managerial Economics",
      "Financial Management",
      "Electives: E-Commerce, Banking"
    ]
  },
  {
    course: "B.A. Journalism & Mass Communication",
    core_topics: [
      "Media Studies",
      "Reporting & Editing",
      "Media Law & Ethics",
      "Broadcast Journalism",
      "Digital Media & Social Media",
      "Photojournalism",
      "Communication Research Methods",
      "Practical Projects & Internships"
    ]
  },
  {
    course: "B.Pharm",
    core_topics: [
      "Pharmaceutics",
      "Pharmacology",
      "Pharmaceutical Chemistry",
      "Pharmacognosy",
      "Dispensing Pharmacy",
      "Clinical Pharmacy",
      "Quality Assurance",
      "Pharmaceutical Biotechnology"
    ]
  },
  {
    course: "B.Design (UX/UI)",
    core_topics: [
      "Design Thinking",
      "Visual Design Principles",
      "Interaction Design",
      "Prototyping & Wireframing",
      "User Research & Testing",
      "Front-End Basics (HTML/CSS)",
      "Portfolio Project"
    ]
  },
  {
    course: "B.E. Biomedical Engineering",
    core_topics: [
      "Human Physiology",
      "Biomaterials",
      "Biomedical Instrumentation",
      "Medical Imaging",
      "Clinical Engineering",
      "Signal Processing for Biomedical",
      "Regulatory & Ethics in Healthcare Tech"
    ]
  },
  {
    course: "B.Sc. Environmental Science",
    core_topics: [
      "Ecology & Biodiversity",
      "Environmental Chemistry",
      "Pollution Control",
      "Environmental Assessment & Impact",
      "Sustainable Development",
      "Waste Management",
      "GIS & Remote Sensing (basic)"
    ]
  },
  {
    course: "B.Tech. Food Technology",
    core_topics: [
      "Food Chemistry",
      "Food Microbiology",
      "Food Processing & Preservation",
      "Food Engineering",
      "Quality Assurance & Safety",
      "Packaging Technology",
      "Electives: Functional Foods, Food Packaging"
    ]
  },
  {
    course: "B.Sc. Psychology",
    core_topics: [
      "Introduction to Psychology",
      "Developmental Psychology",
      "Cognitive Psychology",
      "Abnormal Psychology",
      "Research Methods & Statistics",
      "Counseling Techniques",
      "Electives: Organizational Psychology"
    ]
  },
  {
    course: "B.Arch (outline)",
    core_topics: [
      "Design Studio",
      "Building Construction",
      "Architectural History",
      "Structural Systems for Architecture",
      "Materials & Methods",
      "Environmental Systems",
      "Professional Practice"
    ]
  },
  {
    course: "BBA - Business Management",
    core_topics: [
      "Principles of Management",
      "Marketing Management",
      "Financial Accounting",
      "Organizational Behavior",
      "Business Law",
      "Human Resource Management",
      "Operations Management",
      "Electives: Business Analytics"
    ]
  },
  {
    course: "B.Sc. Forensic Science",
    core_topics: [
      "Forensic Chemistry",
      "Forensic Biology",
      "Crime Scene Investigation",
      "Toxicology",
      "Ballistics & Fingerprint Analysis",
      "Legal Procedures & Evidence Handling"
    ]
  }
]
  const mockColleges = {
    'Tamil Nadu': [
      { name: 'Anna University', location: 'Chennai', nirfRank: 15 },
      { name: 'VIT University', location: 'Vellore', nirfRank: 18 },
      { name: 'SRM Institute', location: 'Chennai', nirfRank: 35 },
      { name: 'PSG College', location: 'Coimbatore', nirfRank: 42 }
    ],
    'Karnataka': [
      { name: 'Indian Institute of Science', location: 'Bangalore', nirfRank: 1 },
      { name: 'Manipal University', location: 'Manipal', nirfRank: 28 },
      { name: 'PES University', location: 'Bangalore', nirfRank: 45 },
      { name: 'RV College', location: 'Bangalore', nirfRank: 52 }
    ],
    'Kerala': [
      { name: 'IIT Palakkad', location: 'Palakkad', nirfRank: 12 },
      { name: 'CUSAT', location: 'Kochi', nirfRank: 38 },
      { name: 'NIT Calicut', location: 'Kozhikode', nirfRank: 25 },
      { name: 'Kerala University', location: 'Thiruvananthapuram', nirfRank: 65 }
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
              <h3 className="text-xl font-bold text-blue-600 mb-2 md:mb-0">{course.name}</h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {course.duration}
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Eligibility:</strong> {course.eligibility}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  <strong>Career Path:</strong> {course.careerPath}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PG Options Section */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
        <button
          onClick={() => setExpandedPG(!expandedPG)}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-xl font-bold text-gray-800">PG Options & Abroad Studies</h3>
          {expandedPG ? (
            <ChevronUp className="h-5 w-5 text-gray-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-600" />
          )}
        </button>
        
        {expandedPG && (
          <div className="mt-4 space-y-4">
            {pgOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-800">{option.course}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Requirements:</strong> {option.requirements}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Scholarships:</strong> {option.scholarships}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Course_Structure */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
        <button
          onClick={() => setExpandedCourse(!expandedCourse)}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-xl font-bold text-gray-800">Course Structure</h3>
          {expandedCourse ? (
            <ChevronUp className="h-5 w-5 text-gray-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-600" />
          )}
        </button>
        
        {expandedCourse && (
          <div className="mt-4 space-y-4">
            {courseDetails.map((option, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-800">{option.course}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Core Topics:</strong> {option.core_topics}
                </p>
                {/* <p className="text-sm text-gray-600">
                  <strong>Scholarships:</strong> {option.scholarships}
                </p> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderColleges = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-blue-600 mb-4">
          Top Recommended Colleges in {formData.state || 'Your Area'}
        </h3>
        <p className="text-gray-700">
          Based on your preferences for {formData.stream} in {formData.district}, {formData.state}
        </p>
      </div>

      <div className="grid gap-4">
        {getCurrentColleges().map((college, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-800 mb-2">{college.name}</h4>
                <p className="flex items-center text-gray-600 mb-2">
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
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-green-600 mb-4">Scholarship Opportunities</h3>
        <p className="text-gray-700">
          Financial aid options for {formData.stream} students in {formData.state}
        </p>
      </div>

      <div className="grid gap-4">
        {mockScholarships.map((scholarship, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-green-500">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h4 className="text-lg font-bold text-gray-800">{scholarship.name}</h4>
              <span className="text-green-600 font-semibold">{scholarship.amount}</span>
            </div>
            <p className="text-gray-600 text-sm">
              <strong>Eligibility:</strong> {scholarship.eligibility}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center mx-auto">
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Your Career Recommendations</h1>
          <p className="text-gray-600 text-lg">
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
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
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
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 max-w-2xl mx-auto text-white">
            <Brain className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Want More Personalized Guidance?</h3>
            <p className="mb-6 text-purple-100">
              Take our comprehensive aptitude test to discover your strengths and get even more targeted recommendations.
            </p>
            <button
              onClick={() => onNavigate('aptitude-test')}
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
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