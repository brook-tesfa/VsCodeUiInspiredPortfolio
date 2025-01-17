import React from 'react';
import { Briefcase } from 'lucide-react';

const experience = [
  {
    role: "Junior Full Stack Developer",
    company: "JIMMA UNIVERSITY",
    period: "2022 - 2023",
    details: [
      "Development of microservices architecture",
      "Mentored junior developers",
      "Improved CI/CD pipeline efficiency by 40%"
    ]
  },
  {
    role: "Full Stack Developer , CTO",
    company: "Nexa IT Solution StartUp Inc",
    period: "2023 - present",
    details: [
      "Built scalable web applications",
      "Implemented authentication system",
      "Reduced loading time by 60%"
    ]
  }
];

interface ExperienceProps {
  searchQuery: string;
  isDarkMode: boolean;
}

export function Experience({ searchQuery, isDarkMode }: ExperienceProps) {
  const filteredExperience = searchQuery
    ? experience.filter(job => 
        job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.details.some(detail => detail.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : experience;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#4ec9b0] flex items-center gap-2">
        <Briefcase className="w-8 h-8" />
        Work Experience
      </h2>
      {filteredExperience.length === 0 ? (
        <div className={`p-6 rounded-lg text-center ${isDarkMode ? 'bg-[#2d2d2d]' : 'bg-gray-100'}`}>
          <p className="text-gray-400">No matching experience found</p>
        </div>
      ) : (
        filteredExperience.map((job, index) => (
          <div key={index} className={`p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-[1.02] ${isDarkMode ? 'bg-[#2d2d2d]' : 'bg-white shadow-lg'}`}>
            <h3 className="text-xl font-semibold text-[#9cdcfe]">{job.role}</h3>
            <div className="text-[#4ec9b0] mt-1">{job.company}</div>
            <div className="text-[#6a9955] text-sm mt-1">{job.period}</div>
            <ul className="list-disc list-inside mt-4 space-y-2 text-[#d4d4d4]">
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}