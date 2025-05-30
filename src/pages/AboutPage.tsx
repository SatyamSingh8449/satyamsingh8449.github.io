import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Shield, Code, FileCode, Cpu, Database, Terminal, Network, Bug } from 'lucide-react';

const AboutPage = () => {
  const skills = [
    { category: "Malware Analysis", items: ["Static Analysis", "Dynamic Analysis", "Reverse Engineering", "Memory Forensics"] },
    { category: "Security Research", items: ["Vulnerability Assessment", "Exploit Development", "Threat Intelligence", "Zero-day Research"] },
    { category: "Programming", items: ["Python", "Java", "C/C++", "Assembly", "JavaScript", "PowerShell"] },
    { category: "Tools & Technologies", items: ["IDA Pro", "Ghidra", "WinDbg", "x64dbg", "Burp Suite", "Volatility", "YARA", "Wireshark"] }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "DIT University",
      duration: "2019 - 2022",
      description: "Specialized in Cybersecurity with focus on advanced security concepts and threat mitigation strategies."
    },
    {
      degree: "Bachelor of Science (BSc)",
      institution: "Chinmaya Degree College",
      duration: "2016 - 2019",
      description: "Studied Computer Science with foundational courses in programming, networking, and system architecture."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Bio Section */}
      <section>
        <h1 className="text-3xl font-bold font-mono text-cyan-500 mb-8">About Me</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <h2 className="text-xl font-bold text-white mb-4">Satyam Singh <span className="text-cyan-500 font-mono">| 0x0shad0w</span></h2>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  I am a passionate Security Researcher with over 3 years of experience in vulnerability analysis and malware research. Currently working at Zscaler, I focus on discovering and analyzing emerging threats to help organizations stay protected against sophisticated cyber attacks.
                </p>
                <p>
                  My expertise spans across various domains of cybersecurity, including malware analysis, vulnerability assessment, and threat intelligence. I have published several research papers and blog posts detailing my findings on complex malware campaigns and zero-day vulnerabilities.
                </p>
                <p>
                  Throughout my career, I've developed a keen interest in understanding the mechanics of sophisticated malware and advanced persistent threats. This curiosity drives me to continuously explore new attack vectors and defensive strategies in the ever-evolving landscape of cybersecurity.
                </p>
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 h-full">
              <h2 className="text-xl font-bold text-white mb-4">Professional Info</h2>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-cyan-500 mt-0.5" />
                  <div>
                    <span className="text-gray-400">Position:</span>
                    <p className="text-white">Security Researcher</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Code className="h-5 w-5 text-cyan-500 mt-0.5" />
                  <div>
                    <span className="text-gray-400">Experience:</span>
                    <p className="text-white">3+ Years</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileCode className="h-5 w-5 text-cyan-500 mt-0.5" />
                  <div>
                    <span className="text-gray-400">Specialization:</span>
                    <p className="text-white">Malware Analysis, Vulnerability Research</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Cpu className="h-5 w-5 text-cyan-500 mt-0.5" />
                  <div>
                    <span className="text-gray-400">Languages:</span>
                    <p className="text-white">Python, C/C++, Java</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Terminal className="h-5 w-5 text-cyan-500 mt-0.5" />
                  <div>
                    <span className="text-gray-400">Tools:</span>
                    <p className="text-white">IDA Pro, Ghidra, WinDbg, x64dbg</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-bold font-mono text-cyan-500 mb-8">Work Experience</h2>
        
        <div className="space-y-6">
          <Card className="border-l-4 border-l-cyan-500">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Cyber Researcher</h3>
                <p className="text-cyan-500">Zscaler</p>
              </div>
              <Badge variant="default">Aug 2022 - Present</Badge>
            </div>
            
            <p className="text-gray-300 mb-4">
              Working as a security researcher focusing on malware analysis and vulnerability research to enhance threat intelligence capabilities.
            </p>
            
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Conducted in-depth analysis of sophisticated malware like Qakbot, BunnyLoader, and DBatLoader</li>
              <li>Published comprehensive threat research reports and blogs detailing attack techniques</li>
              <li>Developed automated tools to extract and analyze indicators of compromise</li>
              <li>Contributed to the development of detection rules and mitigation strategies</li>
            </ul>
          </Card>
          
          <Card className="border-l-4 border-l-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Cyber Researcher Intern</h3>
                <p className="text-gray-400">Security Research Firm</p>
              </div>
              <Badge variant="outline">Feb 2022 - Aug 2022</Badge>
            </div>
            
            <p className="text-gray-300 mb-4">
              Internship focused on security analysis and threat hunting in enterprise environments.
            </p>
            
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Assisted in analyzing malware samples and identifying attack patterns</li>
              <li>Participated in threat hunting activities to identify potential breaches</li>
              <li>Learned various techniques for reverse engineering malicious code</li>
              <li>Developed scripts to automate routine analysis tasks</li>
            </ul>
          </Card>
          
          <Card className="border-l-4 border-l-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Java Developer Intern</h3>
                <p className="text-gray-400">Software Development Company</p>
              </div>
              <Badge variant="outline">Jun 2021 - Aug 2021</Badge>
            </div>
            
            <p className="text-gray-300 mb-4">
              Two-month internship focused on backend development using Java and related technologies.
            </p>
            
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Developed and maintained Java-based backend services</li>
              <li>Worked with APIs and database integration</li>
              <li>Implemented security best practices in application development</li>
              <li>Collaborated with team members using version control systems</li>
            </ul>
          </Card>
        </div>
      </section>
      
      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-bold font-mono text-cyan-500 mb-8">Education</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-cyan-500">{edu.institution}</p>
                </div>
                <Badge variant="outline">{edu.duration}</Badge>
              </div>
              <p className="text-gray-300">{edu.description}</p>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-bold font-mono text-cyan-500 mb-8">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index}>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                {index === 0 && <Bug className="h-5 w-5 text-cyan-500" />}
                {index === 1 && <Shield className="h-5 w-5 text-cyan-500" />}
                {index === 2 && <Code className="h-5 w-5 text-cyan-500" />}
                {index === 3 && <Database className="h-5 w-5 text-cyan-500" />}
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <Badge key={idx} variant={idx % 3 === 0 ? 'default' : 'outline'} className="mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;