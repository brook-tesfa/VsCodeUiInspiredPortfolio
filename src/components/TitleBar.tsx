import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { SearchBar } from './SearchBar';

interface TitleBarProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  onSearchResultClick: (suggestion: string) => void;
}

export function TitleBar({ 
  searchQuery, 
  onSearchChange, 
  isDarkMode, 
  setIsDarkMode,
  onSearchResultClick 
}: TitleBarProps) {
  return (
    <div className={`h-12 ${isDarkMode ? 'bg-[#323233]' : 'bg-gray-100'} flex items-center justify-between px-4 select-none`}>
      <div className="flex items-center">
        <span className="text-sm hidden sm:block">Brook Tesfaye - Portfolio</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-1.5 rounded-md transition-colors ${
            isDarkMode 
              ? 'hover:bg-[#424242]' 
              : 'hover:bg-gray-200'
          }`}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          onSuggestionClick={onSearchResultClick}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}