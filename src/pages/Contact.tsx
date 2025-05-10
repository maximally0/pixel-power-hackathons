
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonButton from '@/components/ui/NeonButton';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    reason: 'general'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission - in a real app, this would send data to a backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      message: '',
      reason: 'general'
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <GlitchHeading 
          text="Contact Us" 
          className="text-4xl md:text-5xl mb-4"
        />
        <p className="text-gray-300 max-w-2xl mx-auto px-4 text-sm md:text-base">
          Have questions about our hackathons or services? Want to become a sponsor 
          or judge? Reach out to us and we'll get back to you soon.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glowing-container p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/50 border border-neon-magenta/50 text-white focus:outline-none focus:border-neon-magenta"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/50 border border-neon-magenta/50 text-white focus:outline-none focus:border-neon-magenta"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="organization" className="block mb-2 text-gray-300">
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-neon-magenta/50 text-white focus:outline-none focus:border-neon-magenta"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="reason" className="block mb-2 text-gray-300">
                  Reason for Contact
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-neon-magenta/50 text-white focus:outline-none focus:border-neon-magenta"
                >
                  <option value="general">General Inquiry</option>
                  <option value="sponsor">Sponsorship</option>
                  <option value="host">Host a Hackathon</option>
                  <option value="judge">Become a Judge</option>
                  <option value="student">Student Question</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-black/50 border border-neon-magenta/50 text-white focus:outline-none focus:border-neon-magenta"
                ></textarea>
              </div>
              
              <div className="text-center">
                <NeonButton color="magenta" className="px-10">
                  Send Message
                </NeonButton>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-2">
            <div className="glowing-container-cyan p-6">
              <GlitchHeading 
                text="Get In Touch" 
                className="text-xl mb-6"
                color="cyan"
                level={3}
              />
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 font-semibold mb-1">Email</p>
                  <a href="mailto:info@maximally.tech" className="neon-text-cyan hover:underline">
                    info@maximally.tech
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-300 font-semibold mb-1">Discord</p>
                  <a href="https://discord.gg/maximally" target="_blank" rel="noopener noreferrer" className="neon-text-ultraviolet hover:underline">
                    discord.gg/maximally
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-300 font-semibold mb-1">Location</p>
                  <p className="text-gray-300">
                    Fully remote with team members worldwide
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-neon-cyan/30">
                <p className="text-gray-300 mb-4">
                  For urgent inquiries, please reach out to us on Discord for the fastest response.
                </p>
                
                <NeonButton href="https://discord.gg/maximally" color="ultraviolet" className="w-full">
                  Join Discord
                </NeonButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
