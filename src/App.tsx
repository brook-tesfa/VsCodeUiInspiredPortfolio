import React, { useState } from 'react';
import { TitleBar } from './components/TitleBar';
import { ActivityBar } from './components/ActivityBar';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { StatusBar } from './components/StatusBar';
import { TabBar } from './components/TabBar';
import { SettingsPanel } from './components/Settings/SettingsPanel';
import { Menu, User, Code, Briefcase, Puzzle, GraduationCap, Phone } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
}

const iconMap = {
  about: User,
  projects: Code,
  experience: Briefcase,
  skills: Puzzle,
  academics: GraduationCap,
  contact: Phone,
};

const labelMap = {
  about: 'About Me',
  projects: 'Projects',
  experience: 'Experience',
  skills: 'Skills',
  academics: 'Academics',
  contact: 'Contact',
};

function App() {
  const [activeTab, setActiveTab] = useState('explorer');
  const [activeSection, setActiveSection] = useState<string>('about');
  const [openTabs, setOpenTabs] = useState<Tab[]>([{
    id: 'about',
    label: labelMap.about,
    icon: iconMap.about
  }]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    if (!openTabs.find(tab => tab.id === section)) {
      setOpenTabs(prev => [...prev, {
        id: section,
        label: labelMap[section as keyof typeof labelMap],
        icon: iconMap[section as keyof typeof iconMap]
      }]);
    }
  };

  const handleSearchResultClick = (suggestion: string) => {
    // Map search results to sections
    let targetSection = '';
    if (suggestion.toLowerCase().includes('full stack developer')) {
      targetSection = 'experience';
    } else if (['react', 'vue.js', 'typescript', 'node.js', 'python', 'postgresql', 'mongodb', 'docker'].some(
      skill => suggestion.toLowerCase().includes(skill.toLowerCase())
    )) {
      targetSection = 'skills';
    } else if (['e-commerce', 'task management', 'ai content'].some(
      project => suggestion.toLowerCase().includes(project.toLowerCase())
    )) {
      targetSection = 'projects';
    } else if (suggestion.toLowerCase().includes('science')) {
      targetSection = 'academics';
    }

    if (targetSection) {
      handleSectionClick(targetSection);
      setSearchQuery(suggestion);
    }
  };

  const handleTabClose = (tabId: string) => {
    setOpenTabs(prev => prev.filter(tab => tab.id !== tabId));
    if (activeSection === tabId) {
      setActiveSection(openTabs.length > 1 
        ? openTabs[openTabs.length - 2].id 
        : null
      );
    }
  };

  return (
    <div className={`h-screen flex flex-col ${isDarkMode ? 'bg-[#1e1e1e] text-[#cccccc]' : 'bg-white text-gray-800'}`}>
      <TitleBar 
        searchQuery={searchQuery} 
        onSearchChange={handleSearch}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onSearchResultClick={handleSearchResultClick}
      />
      
      <div className="flex-1 flex overflow-hidden">
        <button
          className="md:hidden fixed top-14 left-2 z-40 p-2 rounded-md bg-[#333333] hover:bg-[#424242]"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="w-5 h-5" />
        </button>

        <ActivityBar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          className="hidden md:block"
          onSettingsClick={() => setIsSettingsOpen(true)}
        />
        
        <div 
          className={`
            fixed md:static inset-y-0 left-0 w-64 h-[calc(100vh-3rem)]
            transform transition-transform duration-200 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0 z-30
          `}
        >
          <Sidebar 
            activeTab={activeTab}
            activeSection={activeSection}
            setActiveSection={handleSectionClick}
            isDarkMode={isDarkMode}
          />
        </div>

        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="flex-1 flex flex-col overflow-hidden">
          <TabBar 
            tabs={openTabs}
            activeTab={activeSection}
            onTabClick={setActiveSection}
            onTabClose={handleTabClose}
            isDarkMode={isDarkMode}
          />
          
          <Content 
            activeSection={activeSection} 
            searchQuery={searchQuery}
            isDarkMode={isDarkMode}
          />
        </div>

        <SettingsPanel
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      </div>

      <StatusBar isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;