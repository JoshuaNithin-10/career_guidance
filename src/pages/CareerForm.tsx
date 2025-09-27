import React, { useState } from 'react';
import { ArrowRight, User, GraduationCap, Heart, MapPin } from 'lucide-react';
import type { Page, FormData } from '../App';

interface CareerFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNavigate: (page: Page) => void;
}

const CareerForm: React.FC<CareerFormProps> = ({ formData, setFormData, onNavigate }) => {
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const states = ['Tamil Nadu', 'Jammu and Kashmir','Karnataka', 'Kerala', 'Andhra Pradesh', 'Maharashtra', 'Delhi'];
  
  const districts = {
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Trichy'],
    'Jammu and Kashmir': ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Kupwara'], 
    'Karnataka': ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum'],
    'Kerala': ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kannur'],
    'Andhra Pradesh': ['Hyderabad', 'Vijayawada', 'Visakhapatnam', 'Guntur', 'Tirupati'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
    'Delhi': ['Central Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi']
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      // Reset district if state changes
      ...(field === 'state' ? { district: '' } : {})
    }));
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.class) newErrors.class = 'Class is required';
    if (!formData.stream) newErrors.stream = 'Stream is required';
    if (!formData.interests.trim()) newErrors.interests = 'Interests are required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.district) newErrors.district = 'District is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNavigate('recommendations');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Career Guidance Form</h1>
            <p className="text-gray-600">
              Help us understand your background and preferences to provide personalized recommendations
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="flex items-center text-gray-700 font-medium mb-2">
                  <User className="h-4 w-4 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Class */}
              <div>
                <label className="flex items-center text-gray-700 font-medium mb-2">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Current Class
                </label>
                <select
                  value={formData.class}
                  onChange={(e) => handleInputChange('class', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.class ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select your class</option>
                  <option value="10th">10th Grade</option>
                  <option value="11th">11th Grade</option>
                  <option value="12th">12th Grade</option>
                </select>
                {errors.class && <p className="text-red-500 text-sm mt-1">{errors.class}</p>}
              </div>

              {/* Stream */}
              <div>
                <label className="flex items-center text-gray-700 font-medium mb-2">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Stream/Subject
                </label>
                <select
                  value={formData.stream}
                  onChange={(e) => handleInputChange('stream', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.stream ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select your stream</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Biology">Biology</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                  <option value="Others">Others</option>
                </select>
                {errors.stream && <p className="text-red-500 text-sm mt-1">{errors.stream}</p>}
              </div>

              {/* Interests */}
              <div>
                <label className="flex items-center text-gray-700 font-medium mb-2">
                  <Heart className="h-4 w-4 mr-2" />
                  Interests & Hobbies
                </label>
                <textarea
                  value={formData.interests}
                  onChange={(e) => handleInputChange('interests', e.target.value)}
                  rows={3}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
                    errors.interests ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us about your interests, hobbies, and what you enjoy doing..."
                />
                {errors.interests && <p className="text-red-500 text-sm mt-1">{errors.interests}</p>}
              </div>

              {/* Location */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    Preferred State
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.state ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select state</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                </div>

                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    Preferred District
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => handleInputChange('district', e.target.value)}
                    disabled={!formData.state}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.district ? 'border-red-500' : 'border-gray-300'
                    } ${!formData.state ? 'bg-gray-100' : ''}`}
                  >
                    <option value="">Select district</option>
                    {formData.state && districts[formData.state as keyof typeof districts]?.map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                  {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center group"
              >
                Get My Recommendations
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;