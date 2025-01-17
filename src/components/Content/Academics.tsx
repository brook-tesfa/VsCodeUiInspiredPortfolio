import React from 'react';
import { GraduationCap, Award, Book } from 'lucide-react';

const academics = [
  {
    degree: "Bachler of Science in Computer Science",
    institution: "Jimma University",
    period: "2019 - 2022",
    gpa: "3.4/4.0",
    achievements: [
      "The Nearest Pharmacy Locater App",
      "Published 2 research papers",
      "Teaching Assistant for Advanced Algorithms"
    ]
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "CISCO",
    period: "2022 - 2023",
    gpa: "3.8/4.0",
    achievements: [
      "Dean's List all semesters",
      "Led the Robotics Club",
      "Won Best Undergraduate Project Award"
    ]
  }
];

interface AcademicsProps {
  searchQuery: string;
  isDarkMode: boolean;
}

export function Academics({ searchQuery, isDarkMode }: AcademicsProps) {
  const filteredAcademics = searchQuery
    ? academics.filter(edu => 
        edu.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
        edu.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        edu.achievements.some(achievement => 
          achievement.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : academics;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#4ec9b0] flex items-center gap-2">
        <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />
        Academic Background
      </h2>
      
      <div className="space-y-6">
        {filteredAcademics.map((edu, index) => (
          <div 
            key={index} 
            className={`
              p-4 md:p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-[1.02]
              ${isDarkMode ? 'bg-[#2d2d2d]' : 'bg-white shadow-lg'}
            `}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#9cdcfe]">{edu.degree}</h3>
                <p className="text-[#4ec9b0] mt-1">{edu.institution}</p>
                <p className="text-[#6a9955] text-sm mt-1">{edu.period}</p>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#4ec9b0]" />
                <span className="text-[#4ec9b0] font-semibold">{edu.gpa}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-[#9cdcfe] flex items-center gap-2 mb-2">
                <Book className="w-4 h-4" />
                Key Achievements
              </h4>
              <ul className="list-disc list-inside space-y-1 text-[#d4d4d4] text-sm md:text-base">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="break-words">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}