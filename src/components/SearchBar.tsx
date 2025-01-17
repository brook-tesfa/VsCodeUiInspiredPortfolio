import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

interface SearchSuggestion {
  type: 'skill' | 'project' | 'experience' | 'academic';
  text: string;
  category?: string;
}

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSuggestionClick: (suggestion: string) => void;
  isDarkMode: boolean;
}

// Combined data for search suggestions
const searchData: SearchSuggestion[] = [
  // Skills
  { type: 'skill', text: 'React', category: 'Frontend' },
  { type: 'skill', text: 'Vue.js', category: 'Frontend' },
  { type: 'skill', text: 'TypeScript', category: 'Frontend' },
  { type: 'skill', text: 'Node.js', category: 'Backend' },
  { type: 'skill', text: 'Python', category: 'Backend' },
  { type: 'skill', text: 'PostgreSQL', category: 'Database' },
  { type: 'skill', text: 'MongoDB', category: 'Database' },
  { type: 'skill', text: 'Docker', category: 'DevOps' },
  
  // Projects
  { type: 'project', text: 'E-commerce Platform' },
  { type: 'project', text: 'Task Management System' },
  { type: 'project', text: 'AI Content Generator' },
  
  // Experience
  { type: 'experience', text: 'Senior Full Stack Developer at Tech Corp' },
  { type: 'experience', text: 'Full Stack Developer at StartUp Inc' },
  
  // Academics
  { type: 'academic', text: 'Master of Science in Computer Science' },
  { type: 'academic', text: 'Bachelor of Science in Software Engineering' }
];

export function SearchBar({ searchQuery, onSearchChange, onSuggestionClick, isDarkMode }: SearchBarProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle clicks outside of search component
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = searchData.filter(item =>
        item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const getIconColor = (type: string) => {
    switch (type) {
      case 'skill': return 'text-purple-400';
      case 'project': return 'text-blue-400';
      case 'experience': return 'text-green-400';
      case 'academic': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search skills, projects, experience..."
          value={searchQuery}
          onChange={onSearchChange}
          onFocus={() => setShowSuggestions(true)}
          className={`
            pl-9 pr-8 py-1.5 rounded-md text-sm w-48 md:w-64
            transition-all duration-200
            focus:outline-none focus:ring-1 focus:w-56 md:focus:w-72
            ${isDarkMode 
              ? 'bg-[#3c3c3c] focus:ring-[#007acc] placeholder-gray-400' 
              : 'bg-gray-200 focus:ring-gray-400 placeholder-gray-500'
            }
          `}
        />
        {searchQuery && (
          <button
            onClick={() => {
              onSearchChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
              setShowSuggestions(false);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-700/50"
          >
            <X className="w-3 h-3 text-gray-400" />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className={`
          absolute z-50 mt-1 w-full max-h-80 overflow-y-auto rounded-md shadow-lg
          ${isDarkMode ? 'bg-[#2d2d2d] border border-[#3c3c3c]' : 'bg-white border border-gray-200'}
        `}>
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className={`
                px-4 py-2 cursor-pointer flex items-center gap-2
                ${isDarkMode ? 'hover:bg-[#3c3c3c]' : 'hover:bg-gray-100'}
                ${index !== suggestions.length - 1 ? 'border-b border-gray-700' : ''}
              `}
              onClick={() => {
                onSuggestionClick(suggestion.text);
                setShowSuggestions(false);
              }}
            >
              <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${getIconColor(suggestion.type)}`}>
                {suggestion.type.charAt(0).toUpperCase()}
              </span>
              <div className="flex-1">
                <div className="text-sm">{suggestion.text}</div>
                {suggestion.category && (
                  <div className="text-xs text-gray-500">{suggestion.category}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}