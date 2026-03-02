import React, { useState } from "react";
import { ArrowRight, User, GraduationCap, Heart, MapPin } from "lucide-react";
import type { Page } from "../App";
import { indiaData, StateType } from "../data/indiaData";

interface FormData {
  name: string;
  class: string;
  stream: string;
  interests: string;
  state: StateType | "";
  district: string;
}

interface CareerFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNavigate: (page: Page) => void;
}

const CareerForm: React.FC<CareerFormProps> = ({
  formData,
  setFormData,
  onNavigate,
}) => {
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const states = Object.keys(indiaData) as StateType[];

  const handleInputChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "state" ? { district: "" } : {}),
    }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.class) newErrors.class = "Class is required";
    if (!formData.stream) newErrors.stream = "Stream is required";
    if (!formData.interests.trim())
      newErrors.interests = "Interests are required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.district) newErrors.district = "District is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNavigate("recommendations");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-lime-600 mb-4">
              Career Guidance Form
            </h1>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="flex items-center font-medium mb-2">
                  <User className="h-4 w-4 mr-2" /> Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    handleInputChange("name", e.target.value)
                  }
                  className="w-full px-4 py-3 border rounded-lg border-zinc-300"
                />
              </div>

              {/* Class */}
              <div>
                <label className="flex items-center font-medium mb-2">
                  <GraduationCap className="h-4 w-4 mr-2" /> Current Class
                </label>
                <select
                  value={formData.class}
                  onChange={(e) =>
                    handleInputChange("class", e.target.value)
                  }
                  className="w-full px-4 py-3 border rounded-lg border-zinc-300"
                >
                  <option value="">Select</option>
                  <option value="10th">10th</option>
                  <option value="11th">11th</option>
                  <option value="12th">12th</option>
                </select>
              </div>

              {/* Stream */}
              <div>
                <label className="flex items-center font-medium mb-2">
                  <GraduationCap className="h-4 w-4 mr-2" /> Stream
                </label>
                <select
                  value={formData.stream}
                  onChange={(e) =>
                    handleInputChange("stream", e.target.value)
                  }
                  className="w-full px-4 py-3 border rounded-lg border-zinc-300"
                >
                  <option value="">Select</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Biology">Biology</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>

              {/* Interests */}
              <div>
                <label className="flex items-center font-medium mb-2">
                  <Heart className="h-4 w-4 mr-2" /> Interests
                </label>
                <textarea
                  rows={3}
                  value={formData.interests}
                  onChange={(e) =>
                    handleInputChange("interests", e.target.value)
                  }
                  className="w-full px-4 py-3 border rounded-lg border-zinc-300"
                />
              </div>

              {/* State */}
              <div>
                <label className="flex items-center font-medium mb-2">
                  <MapPin className="h-4 w-4 mr-2" /> State
                </label>
                <select
                  value={formData.state}
                  onChange={(e) =>
                    handleInputChange(
                      "state",
                      e.target.value as StateType
                    )
                  }
                  className="w-full px-4 py-3 border rounded-lg border-zinc-300"
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* District */}
              <div>
                <label className="flex items-center font-medium mb-2">
                  <MapPin className="h-4 w-4 mr-2" /> District
                </label>
                <select
                  value={formData.district}
                  onChange={(e) =>
                    handleInputChange("district", e.target.value)
                  }
                  disabled={!formData.state}
                  className="w-full px-4 py-3 border rounded-lg border-zinc-300"
                >
                  <option value="">Select District</option>
                  {formData.state &&
                    indiaData[formData.state].map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-lime-500 hover:bg-lime-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center"
              >
                Get Recommendations
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;