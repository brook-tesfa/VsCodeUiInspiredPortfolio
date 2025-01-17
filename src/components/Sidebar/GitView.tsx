import React from 'react';
import { Github } from 'lucide-react';

export function GitView() {
  return (
    <div className="p-4">
      <h2 className="text-xs uppercase tracking-wide mb-2 text-[#6f7681]">Source Control</h2>
      <div className="space-y-4">
        <div className="text-sm">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#4ec9b0] hover:text-[#6ad0b5] flex items-center space-x-2"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Profile</span>
          </a>
        </div>
        <div className="text-sm text-[#6f7681]">
          No source control providers registered.
        </div>
      </div>
    </div>
  );
}