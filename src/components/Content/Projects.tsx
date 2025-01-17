import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    tech: ["React", "Node.js", "MongoDB"],
    description: "A full-featured e-commerce platform with real-time inventory management.",
    link: "https://github.com/yourusername/ecommerce"
  },
  {
    title: "Task Management System",
    tech: ["Vue.js", "Express", "PostgreSQL"],
    description: "Enterprise task management system with team collaboration features.",
    link: "https://github.com/yourusername/task-manager"
  },
  {
    title: "AI Content Generator",
    tech: ["Python", "TensorFlow", "FastAPI"],
    description: "AI-powered content generation tool for marketing teams.",
    link: "https://github.com/yourusername/ai-content-gen"
  }
];

interface ProjectsProps {
  searchQuery: string;
  isDarkMode: boolean;
}

export function Projects({ searchQuery, isDarkMode }: ProjectsProps) {
  const filteredProjects = searchQuery
    ? projects.filter(project => 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : projects;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#4ec9b0] flex items-center gap-2">
        <Code className="w-8 h-8" />
        Featured Projects
      </h2>
      {filteredProjects.length === 0 ? (
        <div className={`p-6 rounded-lg text-center ${isDarkMode ? 'bg-[#2d2d2d]' : 'bg-gray-100'}`}>
          <p className="text-gray-400">No matching projects found</p>
        </div>
      ) : (
        filteredProjects.map((project, index) => (
          <div key={index} className={`p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-[1.02] ${isDarkMode ? 'bg-[#2d2d2d]' : 'bg-white shadow-lg'}`}>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-[#9cdcfe]">{project.title}</h3>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#4ec9b0] hover:text-[#6ad0b5] transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <p className="text-[#d4d4d4] mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-2 py-1 text-sm bg-[#37373d] rounded text-[#9cdcfe]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}