import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import BrookImage from '../assets/brook_tesfa.jpg;

interface AboutProps {
  isDarkMode: boolean;
}

export function About({ isDarkMode }: AboutProps) {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '../asset/Biruk Tesfaye.pdf';
    link.download = 'Biruk Tesfaye.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 py-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src="/asset/brook_tesfa.jpg"
          alt="Profile"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg ring-2 ring-opacity-50 ring-[#4ec9b0]"
        />
        <div className="space-y-4 text-center md:text-left max-w-xl">
          <h1 className={`text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-[#4ec9b0]' : 'text-teal-600'}`}>
            Brook Tesfaye
          </h1>
          <h2 className={`text-xl md:text-2xl ${isDarkMode ? 'text-[#9cdcfe]' : 'text-blue-600'}`}>
            Senior Full Stack Developer
          </h2>
          <p className="text-base md:text-lg opacity-90">
            Passionate developer with expertise in building scalable web applications and cloud architecture.
            Based in Addis Abeba Ethiopia , always eager to learn and create innovative solutions.
          </p>
          <button 
            className={`
              px-4 py-2 rounded-md flex items-center gap-2 mx-auto md:mx-0
              transition-colors duration-200
              ${isDarkMode 
                ? 'bg-[#4ec9b0] hover:bg-[#3da892] text-black' 
                : 'bg-teal-600 hover:bg-teal-700 text-white'
              }
            `}
            onClick={handleDownload}
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>

      <pre className={`
        p-4 rounded-lg overflow-x-auto
        ${isDarkMode ? 'bg-[#2d2d2d]' : 'bg-gray-100'}
      `}>
        <code className={isDarkMode ? 'text-[#ce9178]' : 'text-orange-600'}>
{`const aboutMe = {
  location: "Addis Abeba , ETH",
  experience: "2+ years",
  passion: "Building scalable web applications",
  interests: [
    "AI | ML",
    "DevOps",
    "Open Source",
    "AI Agent & AI Automation"
  ]
};`}
        </code>
      </pre>

      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {[
          { href: "https://github.com/brook-tesfa", icon: Github, label: "GitHub" },
          { href: "https://linkedin.com/in/brook-tesfaye-worku/", icon: Linkedin, label: "LinkedIn" },
          { href: "mailto:biruktesfayeworku@gmail.com", icon: Mail, label: "Email" }
        ].map(({ href, icon: Icon, label }) => (
          <a 
            key={label}
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`
              flex items-center gap-2 px-4 py-2 rounded-md
              transition-colors duration-200
              ${isDarkMode 
                ? 'bg-[#2d2d2d] hover:bg-[#3d3d3d] text-[#4ec9b0]' 
                : 'bg-gray-100 hover:bg-gray-200 text-teal-600'
              }
            `}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
