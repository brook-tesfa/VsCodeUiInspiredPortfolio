import React from 'react';
import { MapPin, Briefcase, Clock } from 'lucide-react';

interface StatusBarProps {
  isDarkMode: boolean;
}

export function StatusBar({ isDarkMode }: StatusBarProps) {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`
      h-6 flex items-center justify-between px-4 text-xs
      ${isDarkMode ? 'bg-[#007acc] text-white' : 'bg-blue-600 text-white'}
    `}>
      <div className="flex items-center space-x-4">
        <span className="flex items-center gap-1">
          <Briefcase className="w-3.5 h-3.5" />
          Available for hire
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" />
          Addis Abeba, ET
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <span>TypeScript</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {time.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}