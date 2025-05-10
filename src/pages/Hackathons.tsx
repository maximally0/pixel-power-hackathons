
import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import HackathonCard from '@/components/ui/HackathonCard';

const Hackathons = () => {
  // Sample hackathon data - in a real application, this would come from an API
  const upcomingHackathons = [
    {
      id: 1,
      title: 'CyberGrid Hackathon 2025',
      date: 'August 15-17, 2025',
      description: 'Our flagship event with $10,000 in prizes. Build projects focused on cybersecurity and AI.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/maximally',
    },
    {
      id: 2,
      title: 'EdTech Innovation Challenge',
      date: 'June 5-7, 2025',
      description: 'Create solutions that revolutionize education technology. Sponsored by top EdTech companies.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/maximally',
    },
    {
      id: 3,
      title: 'Climate Hack 2025',
      date: 'September 20-22, 2025',
      description: 'Build projects addressing climate change and environmental sustainability challenges.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/maximally',
    },
  ];
  
  const pastHackathons = [
    {
      id: 4,
      title: 'Game Dev Jam 2024',
      date: 'November 10-12, 2024',
      description: 'Create innovative games with a focus on unique mechanics and storytelling.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/maximally',
    },
    {
      id: 5,
      title: 'HealthTech Hackathon',
      date: 'September 8-10, 2024',
      description: 'Build projects addressing healthcare challenges and improving patient outcomes.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/maximally',
    },
    {
      id: 6,
      title: 'Fintech Innovation Cup',
      date: 'July 15-17, 2024',
      description: 'Develop solutions for the future of finance, banking, and financial inclusion.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/maximally',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <GlitchHeading 
          text="Hackathons" 
          className="text-4xl md:text-5xl mb-4"
        />
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore our upcoming and past hackathons. Each event offers unique challenges, 
          prizes, and opportunities to connect with fellow hackers and industry mentors.
        </p>
      </div>
      
      {/* Upcoming Hackathons */}
      <section className="mb-16">
        <GlitchHeading 
          text="Upcoming Events" 
          className="text-2xl md:text-3xl mb-8"
          color="magenta"
          level={2}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingHackathons.map((hackathon) => (
            <HackathonCard
              key={hackathon.id}
              title={hackathon.title}
              date={hackathon.date}
              description={hackathon.description}
              devpostLink={hackathon.devpostLink}
              discordLink={hackathon.discordLink}
            />
          ))}
        </div>
      </section>
      
      {/* Past Hackathons */}
      <section>
        <GlitchHeading 
          text="Past Events" 
          className="text-2xl md:text-3xl mb-8"
          color="cyan"
          level={2}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastHackathons.map((hackathon) => (
            <HackathonCard
              key={hackathon.id}
              title={hackathon.title}
              date={hackathon.date}
              description={hackathon.description}
              devpostLink={hackathon.devpostLink}
              discordLink={hackathon.discordLink}
              past={true}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hackathons;
