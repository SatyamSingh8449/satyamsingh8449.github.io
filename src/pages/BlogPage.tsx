import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Search, ExternalLink, Tag, Calendar } from 'lucide-react';

const blogs = [
    {
    id: 1,
    title: "Supply Chain Risk in Python: Termncolor and Colorinal Explained",
    excerpt: "Zscaler ThreatLabz continually monitors threats in our Python scanning database, uncovering risks that may signal potential supply chain attacks.",
    date: "November 5, 2023",
    tags: ["PyPI", "Threat Analysis", "Emerging Threats","SupplyChain Attack"],
    category: "corporate",
    link: "https://www.zscaler.com/blogs/security-research/supply-chain-risk-python-termncolor-and-colorinal-explained",
    image: "https://images.pexels.com/photos/5475752/pexels-photo-5475752.jpeg"
  },
  {
    id: 4,
    title: "BunnyLoader: The Newest Malware-as-a-Service",
    excerpt: "Deep dive into BunnyLoader, examining its capabilities, infrastructure, and position in the MaaS ecosystem.",
    date: "September 29, 2023",
    tags: ["MaaS", "Threat Analysis", "Emerging Threats"],
    category: "corporate",
    link: "https://www.zscaler.com/blogs/security-research/bunnyloader-newest-malware-service",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    title: "Hibernating Qakbot: A Comprehensive Study and In-Depth Campaign Analysis",
    excerpt: "Detailed analysis of Qakbot malware campaigns, their evolution, and attack techniques with technical breakdown of the infection chain.",
    date: "July 25, 2023",
    tags: ["Malware", "Banking Trojan", "Campaign Analysis"],
    category: "corporate",
    link: "https://www.zscaler.com/blogs/security-research/hibernating-qakbot-comprehensive-study-and-depth-campaign-analysis",
    image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    title: "DBatLoader Actively Distributing Malwares Targeting European Businesses",
    excerpt: "Investigation into DBatLoader malware campaign targeting European businesses with analysis of TTPs and IOCs.",
    date: "March 27, 2023",
    tags: ["Loader", "Europe", "Business Targets"],
    category: "corporate",
    link: "https://www.zscaler.com/blogs/security-research/dbatloader-actively-distributing-malwares-targeting-european-businesses",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
    {
    id: 2,
    title: "Malicious PyPI Packages Deliver SilentSync RAT",
    excerpt: "Zscaler ThreatLabz regularly monitors for threats in the popular Python Package Index (PyPI), which contains open source libraries that are frequently used by many Python developers.",
    date: "September 17, 2025",
    tags: ["PyPi", "Python", "Supply Chain"],
    category: "corporate",
    link: "https://www.zscaler.com/blogs/security-research/malicious-pypi-packages-deliver-silentsync-rat",
    image: "https://www.pexels.com/photo/python-book-1181671/"
  },
{
    id: 1,
    title: "Malicious NPM Packages Deliver NodeCordRAT",
    excerpt: "Zscaler ThreatLabz regularly monitors the npm database for suspicious packages. In November 2025, ThreatLabz identified three malicious packages: bitcoin-main-lib, bitcoin-lib-js, and bip40",
    date: "January 07, 2026",
    tags: ["Supplychain", "NPM", "NodecordRAT"],
    category: "corporate",
    link: "https://www.zscaler.com/blogs/security-research/malicious-npm-packages-deliver-nodecordrat",
    image: "https://www.pexels.com/photo/person-holding-a-red-npm-sticker-11035482/"
  },
    

  
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Extract all unique tags
  const allTags = [...new Set(blogs.flatMap(blog => blog.tags))];
  
  // Filter blogs based on search, category, and tag
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = searchTerm === '' || 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategory === null || blog.category === selectedCategory;
    
    const matchesTag = selectedTag === null || blog.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl font-bold font-mono text-cyan-500 mb-4">Security Research & Blogs</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Exploring cybersecurity topics through in-depth analysis, vulnerability research, and malware breakdowns
        </p>
      </section>
      
      {/* Filters */}
      <section className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-neutral-700 rounded-md bg-neutral-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-4">
          <select
            className="px-3 py-2 border border-neutral-700 rounded-md bg-neutral-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
          >
            <option value="">All Categories</option>
            <option value="corporate">Corporate</option>
            <option value="personal">Personal</option>
          </select>
          
          <select
            className="px-3 py-2 border border-neutral-700 rounded-md bg-neutral-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            value={selectedTag || ''}
            onChange={(e) => setSelectedTag(e.target.value || null)}
          >
            <option value="">All Tags</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </section>
      
      {/* Blog List */}
      <section className="grid md:grid-cols-2 gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <Card key={blog.id} className="overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={blog.category === 'corporate' ? 'default' : 'outline'}>
                    {blog.category === 'corporate' ? 'Corporate' : 'Personal'}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {blog.date}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-2">{blog.title}</h2>
                <p className="text-gray-400 mb-4 flex-grow">{blog.excerpt}</p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map(tag => (
                      <div 
                        key={tag} 
                        className="flex items-center text-xs text-cyan-400"
                        onClick={() => setSelectedTag(tag)}
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        <span className="cursor-pointer hover:underline">{tag}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    Read Full Article <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-2 text-center py-12">
            <p className="text-gray-400">No articles found matching your search criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;
