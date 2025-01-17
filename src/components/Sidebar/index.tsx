import React from 'react';
import { Explorer } from './Explorer';
import { GitView } from './GitView';
import { DebugView } from './DebugView';

interface SidebarProps {
  activeTab: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDarkMode: boolean;
}

export function Sidebar({ activeTab, activeSection, setActiveSection, isDarkMode }: SidebarProps) {
  const renderContent = () => {
    switch(activeTab) {
      case 'explorer':
        return <Explorer activeSection={activeSection} setActiveSection={setActiveSection} />;
      case 'git':
        return <GitView />;
      case 'debug':
        return <DebugView />;
      default:
        return null;
    }
  };

  return (
    <div className={`h-full ${isDarkMode ? 'bg-[#252526]' : 'bg-gray-100'} border-r border-[#3c3c3c]`}>
      {renderContent()}
    </div>
  );
}