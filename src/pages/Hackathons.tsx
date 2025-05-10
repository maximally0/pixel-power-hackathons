import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import HackathonCard from '@/components/ui/HackathonCard';
import NeonCard from '@/components/ui/NeonCard';
import NeonButton from '@/components/ui/NeonButton';

const Hackathons = () => {
  const upcomingHackathons = [
    {
      id: 1,
      title: 'Maximally Makeathon',
      date: 'March 15-17, 2025',
      description: 'Create, innovate, and build the next big thing. Join us for an exciting hackathon experience where creativity meets technology.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/S2YyGtBWKa',
    }
  ];

  const pastHackathons = [
    {
      id: 2,
      title: 'CodeQuest \'25',
      date: 'January 20-22, 2025',
      description: 'The latest in our series of CodeQuest hackathons. Where coding meets adventure.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/S2YyGtBWKa',
    },
    {
      id: 3,
      title: 'HackSkye Series III',
      date: 'December 1-3, 2024',
      description: 'Part of our renowned HackSkye series. Innovation and creativity at its peak.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/S2YyGtBWKa',
    },
    {
      id: 4,
      title: 'CodeQuest Series II',
      date: 'November 10-12, 2024',
      description: 'The second installment of our CodeQuest series. Breaking barriers in code.',
      devpostLink: 'https://devpost.com/',
      discordLink: 'https://discord.gg/S2YyGtBWKa',
    }
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
            <NeonButton href="https://discord.gg/S2YyGtBWKa" color="cyan">
              Join the Community on Discord
            </NeonButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hackathons;