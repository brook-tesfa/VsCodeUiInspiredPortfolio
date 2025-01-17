import React from 'react';
import { Files, GitBranch, Bug, User, Settings } from 'lucide-react';

interface ActivityBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string;
  onSettingsClick: () => void;
}

export function ActivityBar({ activeTab, setActiveTab, className = '', onSettingsClick }: ActivityBarProps) {
  const tabs = [
    { id: 'explorer', icon: Files, title: 'Explorer' },
    { id: 'git', icon: GitBranch, title: 'Source Control' },
    { id: 'debug', icon: Bug, title: 'Debug' }
  ];

  return (
    <div className={`w-12 bg-[#333333] flex flex-col items-center py-4 ${className}`}>
      <div className="flex-1 flex flex-col items-center space-y-4">
        {tabs.map(({ id, icon: Icon, title }) => (
          <button 
            key={id}
            className={`
              p-2 rounded-md transition-colors duration-200
              ${activeTab === id ? 'bg-[#424242]' : 'hover:bg-[#424242]'}
            `}
            onClick={() => setActiveTab(id)}
            title={title}
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-[#424242] rounded-md transition-colors duration-200"
          title="View Profile"
        >
          <User className="w-5 h-5" />
        </a>
        <button 
          className="p-2 hover:bg-[#424242] rounded-md transition-colors duration-200"
          onClick={onSettingsClick}
          title="Settings"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}