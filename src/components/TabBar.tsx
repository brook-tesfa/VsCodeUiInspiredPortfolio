import React from 'react';
import { X } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface TabBarProps {
  tabs: Tab[];
  activeTab: string | null;
  onTabClick: (id: string) => void;
  onTabClose: (id: string) => void;
  isDarkMode: boolean;
}

export function TabBar({ tabs, activeTab, onTabClick, onTabClose, isDarkMode }: TabBarProps) {
  if (tabs.length === 0) return null;

  return (
    <div className={`
      flex overflow-x-auto scrollbar-hide border-b
      ${isDarkMode ? 'bg-[#252526] border-[#3c3c3c]' : 'bg-gray-100 border-gray-200'}
    `}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <div
            key={tab.id}
            className={`
              flex items-center gap-2 px-3 py-2 cursor-pointer select-none
              border-r min-w-[120px] max-w-[200px] group
              ${isDarkMode ? 'border-[#3c3c3c]' : 'border-gray-200'}
              ${activeTab === tab.id 
                ? isDarkMode 
                  ? 'bg-[#1e1e1e] text-white' 
                  : 'bg-white text-black'
                : isDarkMode
                  ? 'bg-[#2d2d2d] text-gray-400 hover:bg-[#2d2d2d]'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }
            `}
          >
            <div
              className="flex items-center gap-2 flex-1 truncate"
              onClick={() => onTabClick(tab.id)}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{tab.label}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab.id);
              }}
              className={`
                opacity-0 group-hover:opacity-100 p-0.5 rounded-sm
                hover:bg-[#3c3c3c] transition-opacity
              `}
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        );
      })}
    </div>
  );
}