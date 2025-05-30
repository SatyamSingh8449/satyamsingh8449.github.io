import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Github, Linkedin, Twitter, Mail, Send, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          type: null,
          message: ''
        });
      }, 5000);
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-3xl font-bold font-mono text-cyan-500 mb-4">Get in Touch</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a question about cybersecurity, interested in collaboration, or want to discuss a potential project? Feel free to reach out!
        </p>
      </section>
      
      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <Card className="h-full">
            <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-cyan-500 mb-2">Connect with me</h3>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://github.com/satyamsingh8449" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-500 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>satyamsingh8449</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/satyam-s-b77b87134/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-500 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>Satyam Singh</span>
                  </a>
                  
                  <a 
                    href="https://x.com/0x0shad0w" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-500 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span>0x0shad0w</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-cyan-500 mb-2">Email</h3>
                <a 
                  href="mailto:satyamsingh8449@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-500 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>satyamsingh8449@gmail.com</span>
                </a>
                <p className="text-gray-500 mt-1 text-sm">
                  
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-cyan-500 mb-2">Availability</h3>
                <p className="text-gray-300">
                  I'm currently open to:
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-2">
                  <li>Security consulting opportunities</li>
                  <li>Research collaborations</li>
                  <li>Speaking engagements</li>
                  <li>Technical writing projects</li>
                </ul>
              </div>
              
              <div className="pt-4">
                <p className="text-gray-400">
                  Please use the contact form to get in touch, and I'll respond as soon as possible.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        <div>
          <Card>
            <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>
            
            {formStatus.type && (
              <div className={`mb-6 p-4 rounded-md ${
                formStatus.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
              }`}>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 mt-0.5" />
                  <p>{formStatus.message}</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="collaboration">Research Collaboration</option>
                  <option value="consulting">Security Consulting</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="writing">Technical Writing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  variant="primary"
                  className="w-full"
                  icon={<Send size={16} />}
                >
                  Send Message
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  * Required fields
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;