import React, { useState, useEffect } from 'react';

interface TerminalProps {
  commands?: string[];
  responses?: string[];
  autoType?: boolean;
  className?: string;
}

export const Terminal: React.FC<TerminalProps> = ({
  commands = [],
  responses = [],
  autoType = true,
  className = '',
}) => {
  const [output, setOutput] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  // Auto typing effect
  useEffect(() => {
    if (!autoType || currentIndex >= commands.length + responses.length) return;
    
    const isCommand = currentIndex % 2 === 0;
    const text = isCommand 
      ? commands[Math.floor(currentIndex / 2)]
      : responses[Math.floor(currentIndex / 2)];
    
    if (!text) {
      setCurrentIndex(prev => prev + 1);
      return;
    }
    
    if (!isTyping) {
      setIsTyping(true);
      setCurrentText('');
      let i = 0;
      
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setCurrentText(prev => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setOutput(prev => [...prev, text]);
          setCurrentText('');
          
          // Move to next item after a delay
          setTimeout(() => {
            setCurrentIndex(prev => prev + 1);
          }, isCommand ? 500 : 1000);
        }
      }, isCommand ? 50 : 10);
      
      return () => clearInterval(typeInterval);
    }
  }, [commands, responses, currentIndex, isTyping, autoType]);

  return (
    <div className={`bg-neutral-900 border border-cyan-500/30 rounded-md p-4 font-mono text-sm ${className}`}>
      <div className="flex items-center justify-between mb-4 border-b border-cyan-500/20 pb-2">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-500">0x0shad0w@terminal</div>
      </div>
      
      <div className="text-gray-300">
        {output.map((line, index) => {
          const isCmd = index % 2 === 0;
          return (
            <div key={index} className="mb-2">
              {isCmd && (
                <span className="text-cyan-500">0x0shad0w@terminal:~$ </span>
              )}
              <span className={isCmd ? 'text-white' : 'text-green-300'}>
                {line}
              </span>
            </div>
          );
        })}
        
        {isTyping && (
          <div>
            <span className="text-cyan-500">0x0shad0w@terminal:~$ </span>
            <span className="text-white">
              {currentText}
              {cursorVisible && <span className="animate-blink">█</span>}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};