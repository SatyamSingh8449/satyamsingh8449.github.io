import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Github, ExternalLink, FolderOpen, Calendar, Bookmark } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "MCP Analysis with PYPI Packages",
    description: "A corporate project focused on analyzing malware control panels through PYPI packages, identifying malicious indicators and command structures.",
    technologies: ["Python", "YARA", "Threat Intelligence"],
    type: "corporate",
    date: "2023",
    image: "https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    links: {
      github: null,
      demo: null
    }
  },
  
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredProjects = filter 
    ? projects.filter(project => project.type === filter)
    : projects;
    
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl font-bold font-mono text-cyan-500 mb-4">Projects & Research Work</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of my cybersecurity projects, tools, and research initiatives
        </p>
      </section>
      
      {/* Filters */}
      <section className="flex justify-center gap-4">
        <button
          onClick={() => setFilter(null)}
          className={`px-4 py-2 rounded-md transition-colors ${
            filter === null 
              ? 'bg-cyan-500 text-black' 
              : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setFilter('personal')}
          className={`px-4 py-2 rounded-md transition-colors ${
            filter === 'personal' 
              ? 'bg-cyan-500 text-black' 
              : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
          }`}
        >
          Personal
        </button>
        <button
          onClick={() => setFilter('corporate')}
          className={`px-4 py-2 rounded-md transition-colors ${
            filter === 'corporate' 
              ? 'bg-cyan-500 text-black' 
              : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
          }`}
        >
          Corporate
        </button>
      </section>
      
      {/* Projects Grid */}
      <section className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map(project => (
          <Card key={project.id} className="overflow-hidden">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-0 right-0 m-4">
                <Badge variant={project.type === 'corporate' ? 'default' : 'outline'}>
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </Badge>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3 text-gray-500 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {project.date}
                </div>
                <div className="flex items-center">
                  <FolderOpen className="h-4 w-4 mr-1" />
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="outline" className="bg-neutral-700/50">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4 mt-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                )}
                {!project.links.github && !project.links.demo && (
                  <span className="inline-flex items-center text-gray-500">
                    <Bookmark className="h-4 w-4 mr-1" />
                    Private Project
                  </span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </section>
      
      {/* Coming Soon Section */}
      <section className="mt-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold font-mono text-cyan-500">Upcoming Projects</h2>
          <p className="text-gray-400 mt-2">Stay tuned for these exciting new security tools and research</p>
        </div>
        
      </section>
    </div>
  );
};

export default ProjectsPage;