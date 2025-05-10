
import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonButton from '@/components/ui/NeonButton';
import NeonCard from '@/components/ui/NeonCard';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 neon-text animate-flicker">
          ENTER THE GRID
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl">
          Maximally runs student-focused online hackathons throughout the year and offers 
          Hackathon-as-a-Service to schools, clubs, and companies.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
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
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <GlitchHeading 
            text="About Maximally"
            className="text-3xl md:text-4xl mb-10 text-center"
            color="cyan"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NeonCard color="magenta">
              <h3 className="text-xl mb-4 neon-text">Student Focused</h3>
              <p className="text-lg text-gray-300">
                We create hackathons specifically designed for students, with mentors, 
                workshops, and resources to help you learn and build amazing projects.
              </p>
            </NeonCard>
            
            <NeonCard color="cyan">
              <h3 className="text-xl mb-4 neon-text-cyan">Global Community</h3>
              <p className="text-lg text-gray-300">
                Join our international community of student hackers, mentors, and tech 
                enthusiasts. Connect, collaborate, and code with peers worldwide.
              </p>
            </NeonCard>
            
            <NeonCard color="ultraviolet">
              <h3 className="text-xl mb-4 neon-text-ultraviolet">Host Your Own</h3>
              <p className="text-lg text-gray-300">
                Our Hackathon-as-a-Service offering makes it easy for schools, clubs, and 
                companies to run their own customized hackathon events.
              </p>
            </NeonCard>
          </div>
        </div>
      </section>

      {/* Featured Hackathon */}
      <section className="py-16 px-4 glowing-container-ultraviolet mx-4 md:mx-auto max-w-6xl">
        <div className="container mx-auto">
          <GlitchHeading 
            text="Featured Hackathon"
            className="text-3xl md:text-4xl mb-10 text-center"
            color="ultraviolet"
          />
          
          <div className="flex flex-col lg:flex-row items-center gap-8">            
            <div className="w-full">
              <GlitchHeading 
                text="CyberGrid Hackathon 2025"
                className="text-2xl md:text-3xl mb-6"
                color="ultraviolet"
                level={2}
              />
              
              <p className="mb-6 text-lg text-gray-300">
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <GlitchHeading 
            text="Ready to Hack?"
            className="text-3xl md:text-4xl mb-6"
          />
          
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
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
        </div>
      </section>
    </div>
  );
};

export default Home;
