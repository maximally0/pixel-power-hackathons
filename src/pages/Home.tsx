
import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonButton from '@/components/ui/NeonButton';
import NeonCard from '@/components/ui/NeonCard';

const Home = () => {
  const stats = [
    { number: "50+", label: "Hackathons Hosted" },
    { number: "10K+", label: "Global Participants" },
    { number: "$100K+", label: "in Prizes Awarded" },
    { number: "25+", label: "Partner Companies" }
  ];

  const featuredHackathons = [
    {
      title: "CyberGrid 2025",
      date: "Mar 15-17",
      prize: "$10,000",
      color: "magenta"
    },
    {
      title: "AI Innovation",
      date: "Apr 1-3",
      prize: "$5,000",
      color: "cyan"
    },
    {
      title: "GameDev Pro",
      date: "May 20-22",
      prize: "$7,500",
      color: "ultraviolet"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <NeonCard color="magenta" className="max-w-4xl w-full py-12 px-8">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6 neon-text animate-flicker px-4">
            ENTER THE GRID
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-12 max-w-3xl mx-auto floating px-4">
            Host and join epic online hackathons. For students, schools, and companies.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <NeonButton to="/hackathons" color="magenta">
              View Hackathons
            </NeonButton>
            <NeonButton to="/host" color="cyan">
              Host Your Own
            </NeonButton>
            <NeonButton href="https://discord.gg/maximally" color="ultraviolet">
              Join Discord
            </NeonButton>
          </div>
        </NeonCard>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <NeonCard key={index} color={index % 2 === 0 ? 'magenta' : 'cyan'} className="text-center py-6">
                <h3 className="text-2xl md:text-3xl mb-2 neon-text animate-pulse">{stat.number}</h3>
                <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hackathons */}
      <section className="py-16 px-4 bg-black/30">
        <div className="container mx-auto">
          <GlitchHeading 
            text="Upcoming Hackathons" 
            className="text-2xl md:text-3xl mb-8 text-center"
            color="ultraviolet"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredHackathons.map((hackathon, index) => (
              <NeonCard key={index} color={hackathon.color as any} className="transform hover:scale-105 transition-transform">
                <div className="p-6">
                  <h3 className={`text-xl mb-4 neon-text-${hackathon.color}`}>{hackathon.title}</h3>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-gray-300">{hackathon.date}</span>
                    <span className={`neon-text-${hackathon.color}`}>{hackathon.prize}</span>
                  </div>
                  <NeonButton to="/hackathons" color={hackathon.color as any} className="w-full">
                    Learn More
                  </NeonButton>
                </div>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <NeonCard color="cyan" className="mb-12 py-8">
            <GlitchHeading 
              text="About Maximally"
              className="text-3xl md:text-4xl mb-10 text-center"
              color="cyan"
            />
          </NeonCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NeonCard color="magenta">
              <h3 className="text-lg mb-4 neon-text">Student Focused</h3>
              <p className="text-xs md:text-sm text-gray-300 floating">
                Student-focused hackathons with mentors and workshops to boost your skills.
              </p>
            </NeonCard>
            
            <NeonCard color="cyan">
              <h3 className="text-xl mb-4 neon-text-cyan">Global Community</h3>
              <p className="text-lg text-gray-300 floating">
                Code with peers worldwide in our global hacker community.
              </p>
            </NeonCard>
            
            <NeonCard color="ultraviolet">
              <h3 className="text-xl mb-4 neon-text-ultraviolet">Host Your Own</h3>
              <p className="text-lg text-gray-300 floating">
                Easy hackathon hosting for schools and companies. We handle everything.
              </p>
            </NeonCard>
          </div>
        </div>
      </section>

      {/* Featured Hackathon */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <NeonCard color="ultraviolet" className="mb-12 py-8">
            <GlitchHeading 
              text="Featured Hackathon"
              className="text-3xl md:text-4xl mb-10 text-center"
              color="ultraviolet"
            />
          </NeonCard>
          
          <NeonCard color="ultraviolet" className="pixel-border mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 p-6">            
              <div className="w-full">
                <GlitchHeading 
                  text="CyberGrid Hackathon 2025"
                  className="text-2xl md:text-3xl mb-6"
                  color="ultraviolet"
                  level={2}
                />
                
                <p className="mb-6 text-sm text-gray-300">
                  Our flagship annual hackathon brings together students from around the world for 
                  48 hours of coding, creativity, and collaboration. With $10,000 in prizes and 
                  mentors from leading tech companies, this is the ultimate student hackathon experience.
                </p>
                
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center text-lg text-gray-300">
                    <span className="inline-block w-4 h-4 bg-neon-ultraviolet mr-4 rounded"></span>
                    Date: August 15-17, 2025
                  </li>
                  <li className="flex items-center text-lg text-gray-300">
                    <span className="inline-block w-4 h-4 bg-neon-ultraviolet mr-4 rounded"></span>
                    Format: Virtual (Global)
                  </li>
                  <li className="flex items-center text-lg text-gray-300">
                    <span className="inline-block w-4 h-4 bg-neon-ultraviolet mr-4 rounded"></span>
                    Prizes: $10,000 + Swag
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <NeonButton href="https://devpost.com/" color="ultraviolet">
                    Register on Devpost
                  </NeonButton>
                  <NeonButton href="https://discord.gg/maximally" color="magenta">
                    Join Discord
                  </NeonButton>
                </div>
              </div>
            </div>
          </NeonCard>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <NeonCard color="magenta" className="py-12">
            <GlitchHeading 
              text="Ready to Hack?"
              className="text-3xl md:text-4xl mb-6"
            />
            
            <p className="text-base mb-10 max-w-2xl mx-auto text-gray-300">
              Whether you're a student looking to join a hackathon, or an organization 
              wanting to host one, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <NeonButton to="/students" color="cyan">
                For Students
              </NeonButton>
              <NeonButton to="/host" color="magenta">
                Host a Hackathon
              </NeonButton>
            </div>
          </NeonCard>
        </div>
      </section>
    </div>
  );
};

export default Home;
