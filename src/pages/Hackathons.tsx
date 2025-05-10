
import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import HackathonCard from '@/components/ui/HackathonCard';
import NeonCard from '@/components/ui/NeonCard';
import NeonButton from '@/components/ui/NeonButton';

const Hackathons = () => {
  const upcomingHackathons = [
    {
      id: 1,
      title: 'CyberGrid Hackathon 2025',
      date: 'August 15-17, 2025',
      description: 'Build something unbreakable. This is our flagship challenge focused on cybersecurity, AI, and digital trust. $10,000 in prizes. Mentors from top tech companies. You vs. the grid.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/maximally',
    },
    {
      id: 2,
      title: 'EdTech Innovation Challenge',
      date: 'June 5-7, 2025',
      description: 'Rebuild the classroom from scratch. Design the future of learning with tools that engage, empower, and educate. Backed by leading EdTech brands.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/maximally',
    },
    {
      id: 3,
      title: 'Climate Hack 2025',
      date: 'September 20-22, 2025',
      description: 'Your code vs. climate change. Build tech that tackles environmental challenges — and helps shape a more sustainable world.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/maximally',
    },
  ];
  
  const pastHackathons = [
    {
      id: 4,
      title: 'Game Dev Jam 2024',
      date: 'November 10-12, 2024',
      description: 'Create wild, playable worlds with new mechanics and real storytelling.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/maximally',
    },
    {
      id: 5,
      title: 'HealthTech Hackathon',
      date: 'September 8-10, 2024',
      description: 'Build projects that make healthcare smarter, faster, and more human.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/maximally',
    },
    {
      id: 6,
      title: 'Fintech Innovation Cup',
      date: 'July 15-17, 2024',
      description: 'Hack the future of finance. Payments, banking, crypto, equity — your vision, your build.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/maximally',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <GlitchHeading 
          text="⚔️ The Arena: Maximally Hackathons" 
          className="text-4xl md:text-5xl mb-4"
        />
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          This is where future founders are forged.
          Maximally hackathons aren't just coding contests — they're startup sprints for Gen Z.
          Whether you're here to launch your first product or test your boldest idea, this is your stage.
        </p>
      </div>
      
      {/* Upcoming Hackathons */}
      <section className="mb-16">
        <GlitchHeading 
          text="🔥 Upcoming Hackathons" 
          className="text-2xl md:text-3xl mb-4"
          color="magenta"
          level={2}
        />
        <p className="text-gray-300 mb-8">
          Each Maximally event is themed, fast-paced, and powered by real prizes, mentors, and momentum.
          Ready to build something real?
        </p>
        
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
      <section className="mb-16">
        <GlitchHeading 
          text="💾 Past Hackathons" 
          className="text-2xl md:text-3xl mb-4"
          color="cyan"
          level={2}
        />
        <p className="text-gray-300 mb-8">
          Browse past battles, standout builds, and the ideas that left a mark.
          We'll be adding full archives soon — for now, here's a look back at some of our recent favorites.
        </p>
        
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

      {/* Why Join Section */}
      <section className="mb-16">
        <GlitchHeading 
          text="🧬 Why Join a Maximally Hackathon?" 
          className="text-2xl md:text-3xl mb-8"
          color="ultraviolet"
          level={2}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <NeonCard color="magenta">
            <ul className="space-y-4 text-gray-300">
              <li>✓ Real prizes and real mentorship — not just participation trophies</li>
              <li>✓ Themes that matter: AI, climate, education, health, gaming, and more</li>
            </ul>
          </NeonCard>
          <NeonCard color="cyan">
            <ul className="space-y-4 text-gray-300">
              <li>✓ A global stage to test, fail, build, and actually launch</li>
              <li>✓ Friends, teammates, co-founders — all starting from scratch, like you</li>
            </ul>
          </NeonCard>
        </div>

        <NeonCard color="ultraviolet" className="text-center p-8 mb-12">
          <p className="text-lg italic text-gray-300 mb-4">
            "I had no idea what to expect. 48 hours later, we had a product, a pitch, and a waitlist. Insane."
          </p>
          <p className="neon-text">— Dimitri, 17, Greece</p>
        </NeonCard>

        <div className="text-center">
          <GlitchHeading 
            text="🎯 Ready to Jump In?" 
            className="text-2xl md:text-3xl mb-4"
            color="magenta"
            level={2}
          />
          <p className="text-gray-300 mb-8">
            Explore upcoming events, find your squad, and launch your first startup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton to="/hackathons" color="magenta">
              See All Upcoming Hackathons
            </NeonButton>
            <NeonButton href="https://discord.gg/maximally" color="cyan">
              Join the Community on Discord
            </NeonButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hackathons;
