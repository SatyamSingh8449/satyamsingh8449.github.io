import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldAlert, Code, ExternalLink, FileText } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { TypedText } from '../components/ui/TypedText';
import { Terminal } from '../components/ui/Terminal';

const terminalCommands = [
  'whoami',
  'cat profile.json',
  'ls -la projects/',
  'cat latest_vulnerability.md'
];

const terminalResponses = [
  '0x0shad0w (Satyam Singh) - Security Researcher & Malware Analyst',
  '{\n  "name": "Satyam Singh",\n  "alias": "0x0shad0w",\n  "expertise": ["Vulnerability Research", "Malware Analysis", "Cyber Security"],\n  "experience": "3+ years",\n  "current": "Cyber Researcher at Zscaler"\n}',
  'total 3\ndrwxr-xr-x  2 0x0shad0w users  MCP_Analysis_PYPI.py\ndrwxr-xr-x  2 0x0shad0w users  QakBot_Research.md\ndrwxr-xr-x  2 0x0shad0w users  BunnyLoader_Analysis.py',
  '# Latest Research: Hibernating Qakbot\n\nA comprehensive study and in-depth campaign analysis of the Qakbot malware.\nSee full analysis at https://www.zscaler.com/blogs/security-research/hibernating-qakbot-comprehensive-study-and-depth-campaign-analysis'
];

const HomePage = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-500 border border-cyan-500/20">
              Security Researcher
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono">
              <span className="text-white">Satyam Singh</span>
              <div className="text-cyan-500">
                <TypedText 
                  text="0x0shad0w" 
                  speed={120}
                  onComplete={() => setTypingComplete(true)}
                  className="mt-2"
                />
              </div>
            </h1>
            
            <p className="text-lg text-gray-300">
              Specializing in vulnerability research, malware analysis, and security intelligence with over 3 years of experience.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                variant="primary"
                icon={<FileText size={18} />}
                onClick={() => window.open("https://www.zscaler.com/blogs/security-research/hibernating-qakbot-comprehensive-study-and-depth-campaign-analysis", "_blank")}
              >
                Read Latest Research
              </Button>
              <Link to="/contact">
                <Button variant="outline">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <Terminal 
              commands={terminalCommands}
              responses={terminalResponses}
              autoType={typingComplete}
              className="shadow-xl shadow-cyan-500/5"
            />
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-mono text-cyan-500">Featured Research</h2>
            <p className="text-gray-400 mt-2">Recent publications and security discoveries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className={`transform ${animateCards ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 delay-100`}>
              <div className="space-y-4">
                <div className="h-44 bg-gradient-to-br from-neutral-800 to-cyan-900/20 rounded-md flex items-center justify-center">
                  <ShieldAlert className="h-16 w-16 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Hibernating Qakbot</h3>
                <p className="text-gray-400">A comprehensive study and in-depth campaign analysis of the Qakbot malware.</p>
                <div className="pt-4">
                  <a 
                    href="https://www.zscaler.com/blogs/security-research/hibernating-qakbot-comprehensive-study-and-depth-campaign-analysis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    Read Analysis <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className={`transform ${animateCards ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 delay-200`}>
              <div className="space-y-4">
                <div className="h-44 bg-gradient-to-br from-neutral-800 to-cyan-900/20 rounded-md flex items-center justify-center">
                  <Code className="h-16 w-16 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Supply Chain Risk in Python</h3>
                <p className="text-gray-400">Termncolor and Colorinal Explained</p>
                <div className="pt-4">
                  <a 
                    href="https://www.zscaler.com/blogs/security-research/supply-chain-risk-python-termncolor-and-colorinal-explained" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    Read Analysis <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className={`transform ${animateCards ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 delay-300`}>
              <div className="space-y-4">
                <div className="h-44 bg-gradient-to-br from-neutral-800 to-cyan-900/20 rounded-md flex items-center justify-center">
                  <ShieldAlert className="h-16 w-16 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-white">BunnyLoader MaaS</h3>
                <p className="text-gray-400">Deep dive into BunnyLoader, the newest malware-as-a-service in the threat landscape.</p>
                <div className="pt-4">
                  <a 
                    href="https://www.zscaler.com/blogs/security-research/bunnyloader-newest-malware-service" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    Read Analysis <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blogs">
              <Button 
                variant="outline"
                className="mx-auto"
                icon={<ChevronRight size={16} />}
              >
                View All Research
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="py-16 bg-gradient-to-b from-transparent to-neutral-900/50 rounded-xl">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-mono text-cyan-500">About Me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300">
                Security researcher with 3+ years of experience in vulnerability analysis and malware research. Currently working at Zscaler, focused on discovering and analyzing emerging threats.
              </p>
              <p className="text-gray-300">
                Completed MCA degree from DIT and BSC from Chinmaya degree college, with specialized expertise in malware analysis, vulnerability assessment, and threat intelligence.
              </p>
              <div className="pt-4">
                <Link to="/about">
                  <Button 
                    variant="secondary" 
                    className="mt-4"
                    icon={<ChevronRight size={16} />}
                  >
                    Learn More About Me
                  </Button>
                </Link>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-cyan-500/20">
              <div className="space-y-4">
                <h3 className="text-xl font-mono font-bold text-cyan-500">Career Timeline</h3>
                <ul className="space-y-4">
                  <li className="border-l-2 border-cyan-500/50 pl-4 pb-4">
                    <div className="text-white font-medium">Cyber Researcher at Zscaler</div>
                    <div className="text-cyan-500 text-sm">Aug 2022 - Present</div>
                    <div className="text-gray-400 text-sm mt-1">Vulnerability & malware research</div>
                  </li>
                  <li className="border-l-2 border-gray-700 pl-4 pb-4">
                    <div className="text-white font-medium">Cyber Researcher Intern</div>
                    <div className="text-gray-500 text-sm">Feb 2022 - Aug 2022</div>
                    <div className="text-gray-400 text-sm mt-1">Security analysis & threat hunting</div>
                  </li>
                  <li className="border-l-2 border-gray-700 pl-4">
                    <div className="text-white font-medium">Java Developer Intern</div>
                    <div className="text-gray-500 text-sm">Jun 2021 - Aug 2021</div>
                    <div className="text-gray-400 text-sm mt-1">Backend development & APIs</div>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
