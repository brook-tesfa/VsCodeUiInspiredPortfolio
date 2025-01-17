import React from 'react';
import { Puzzle } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "Express", "FastAPI", "GraphQL"]
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  },
  {
    category: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"]
  }
];

interface SkillsProps {
  searchQuery: string;
  isDarkMode: boolean;
}

export function Skills({ searchQuery, isDarkMode }: SkillsProps) {
  const filteredSkills = searchQuery
    ? skills.filter(category => 
        category.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : skills;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#4ec9b0] flex items-center gap-2">
        <Puzzle className="w-8 h-8" />
        Technical Skills
      </h2>
      {filteredSkills.length === 0 ? (
        <div className={`p-6 rounded-lg text-center ${isDarkMode ? 'bg-[#2d2d2d]' : 'bg-gray-100'}`}>
          <p className="text-gray-400">No matching skills found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((category, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-[1.02] ${isDarkMode ? 'bg-[#2d2d2d]' : 'bg-white shadow-lg'}`}
            >
              <h3 className="text-xl font-semibold text-[#9cdcfe] mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className={`px-3 py-1 rounded text-sm transition-colors
                      ${searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase())
                        ? 'bg-[#4ec9b0] text-black font-medium'
                        : 'bg-[#37373d] text-[#d4d4d4]'
                      }
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}