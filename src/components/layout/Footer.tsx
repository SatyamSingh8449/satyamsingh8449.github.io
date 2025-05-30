import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-500/20 backdrop-blur-sm bg-neutral-900/80 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-mono text-lg font-bold text-cyan-500">0x0shad0w</h3>
            <p className="text-sm text-gray-400 mt-1">
              Security Researcher & Malware Analyst
            </p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/satyamsingh8449" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/satyam-s-b77b87134/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://x.com/0x0shad0w" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-neutral-800 text-center text-sm text-gray-500">
          <p>© {currentYear} Satyam Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;