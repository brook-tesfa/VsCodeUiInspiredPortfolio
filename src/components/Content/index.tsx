import React from 'react';
import { About } from './About';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { Skills } from './Skills';
import { Academics } from './Academics';
import { Contact } from './Contact';

interface ContentProps {
  activeSection: string;
  searchQuery: string;
  isDarkMode: boolean;
}

export function Content({ activeSection, searchQuery, isDarkMode }: ContentProps) {
  const renderContent = () => {
    switch(activeSection) {
      case 'about':
        return <About isDarkMode={isDarkMode} />;
      case 'projects':
        return <Projects searchQuery={searchQuery} isDarkMode={isDarkMode} />;
      case 'experience':
        return <Experience searchQuery={searchQuery} isDarkMode={isDarkMode} />;
      case 'skills':
        return <Skills searchQuery={searchQuery} isDarkMode={isDarkMode} />;
      case 'academics':
        return <Academics searchQuery={searchQuery} isDarkMode={isDarkMode} />;
      case 'contact':
        return <Contact isDarkMode={isDarkMode} />;
      default:
        return null;
    }
  };

  return (
    <main className={`
      flex-1 overflow-y-auto
      ${isDarkMode ? 'bg-[#1e1e1e]' : 'bg-white'}
    `}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        {renderContent()}
      </div>
    </main>
  );
}