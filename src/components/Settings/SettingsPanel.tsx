import React from 'react';
import { X, Globe, Palette, Github, Mail, Linkedin, User } from 'lucide-react';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function SettingsPanel({ isOpen, onClose, isDarkMode, setIsDarkMode }: SettingsPanelProps) {
  const [activeTab, setActiveTab] = React.useState('appearance');
  
  if (!isOpen) return null;

  const socialLinks = {
    github: 'https://github.com/brook-tesfa/',
    linkedin: 'linkedin.com/in/brook-tesfaye-worku',
    email: 'biruktesfayeworku@gmail.com'
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose} />
      <div className={`
        fixed right-0 top-0 h-full w-80 z-50 
        ${isDarkMode ? 'bg-[#252526] text-[#cccccc]' : 'bg-white text-gray-800'}
        shadow-lg
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Settings</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-md hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-6">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-sm font-medium">
              <Palette className="w-4 h-4" />
              Appearance
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-sm">Theme</span>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`
                  px-3 py-1 rounded-md text-sm
                  ${isDarkMode 
                    ? 'bg-[#37373d] hover:bg-[#424242]' 
                    : 'bg-gray-100 hover:bg-gray-200'
                  }
                `}
              >
                {isDarkMode ? 'Dark' : 'Light'}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-sm font-medium">
              <User className="w-4 h-4" />
              Profile
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <input
                  type="text"
                  value={socialLinks.github}
                  className={`
                    flex-1 px-2 py-1 rounded-md text-sm
                    ${isDarkMode 
                      ? 'bg-[#37373d] border-gray-700' 
                      : 'bg-gray-100 border-gray-300'
                    }
                    border focus:outline-none
                  `}
                  placeholder="GitHub username"
                />
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <input
                  type="text"
                  value={socialLinks.linkedin}
                  className={`
                    flex-1 px-2 py-1 rounded-md text-sm
                    ${isDarkMode 
                      ? 'bg-[#37373d] border-gray-700' 
                      : 'bg-gray-100 border-gray-300'
                    }
                    border focus:outline-none
                  `}
                  placeholder="LinkedIn username"
                />
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <input
                  type="email"
                  value={socialLinks.email}
                  className={`
                    flex-1 px-2 py-1 rounded-md text-sm
                    ${isDarkMode 
                      ? 'bg-[#37373d] border-gray-700' 
                      : 'bg-gray-100 border-gray-300'
                    }
                    border focus:outline-none
                  `}
                  placeholder="Email address"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-sm font-medium">
              <Globe className="w-4 h-4" />
              Site Settings
            </h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  className="rounded text-[#007acc]"
                />
                <span className="text-sm">Show real-time clock</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  className="rounded text-[#007acc]"
                />
                <span className="text-sm">Enable animations</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}