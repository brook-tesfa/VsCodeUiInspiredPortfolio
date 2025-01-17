import React from 'react';
import { User, Code, Briefcase, Puzzle, ChevronRight, ChevronDown, GraduationCap, Phone } from 'lucide-react';

interface ExplorerProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Explorer({ activeSection, setActiveSection }: ExplorerProps) {
  const [isExpanded, setIsExpanded] = React.useState(true);
  
  const sections = [
    { id: 'about', icon: User, label: 'About Me' },
    { id: 'projects', icon: Code, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'skills', icon: Puzzle, label: 'Skills' },
    { id: 'academics', icon: GraduationCap, label: 'Academics' },
    { id: 'contact', icon: Phone, label: 'Contact' }
  ];

  return (
    <div className="p-2">
      <div 
        className="flex items-center space-x-2 p-1 text-xs uppercase tracking-wide text-[#6f7681] cursor-pointer hover:text-[#cccccc]"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        <span>Portfolio</span>
      </div>
      
      {isExpanded && (
        <div className="mt-1 space-y-1">
          {sections.map(({ id, icon: Icon, label }) => (
            <div 
              key={id}
              className={`
                flex items-center space-x-2 p-1.5 rounded cursor-pointer
                transition-colors duration-200
                ${activeSection === id ? 'bg-[#37373d]' : 'hover:bg-[#37373d]'}
              `}
              onClick={() => setActiveSection(id)}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}