
import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonButton from '@/components/ui/NeonButton';
import NeonCard from '@/components/ui/NeonCard';

const Home = () => {
  return (
    <div>
      {/* Disclaimer Banner */}
      <div className="bg-background/90 backdrop-blur-md border-y border-neon-cyan/30 py-3 px-4 text-center">
        <p className="text-sm text-gray-300">
          <span className="neon-text-cyan">Note:</span> Maximally Hackathon Division is a part of{' '}
          <a 
            href="https://maximally.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="neon-text-ultraviolet hover:underline"
          >
            Maximally.in
          </a>
          {' '}but operates as a separate entity.
        </p>
      </div>
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

      {/* Judges and Mentors */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <NeonCard color="cyan" className="mb-12 py-8">
            <GlitchHeading 
              text="Our Judges & Mentors"
              className="text-2xl md:text-3xl mb-10 text-center"
              color="cyan"
            />
          </NeonCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Current Judges/Mentors */}
            <NeonCard color="magenta">
              <div className="text-center p-4">
                <div className="w-24 h-24 rounded-full bg-neon-magenta/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👩‍💻</span>
                </div>
                <h3 className="text-lg mb-2 neon-text">Sarah Chen</h3>
                <p className="text-sm text-gray-300 mb-2">Senior AI Engineer at TechCorp</p>
                <p className="text-xs text-gray-400">Judge since 2023</p>
              </div>
            </NeonCard>

            <NeonCard color="cyan">
              <div className="text-center p-4">
                <div className="w-24 h-24 rounded-full bg-neon-cyan/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <h3 className="text-lg mb-2 neon-text-cyan">Alex Rivera</h3>
                <p className="text-sm text-gray-300 mb-2">Lead Developer at StartupX</p>
                <p className="text-xs text-gray-400">Mentor since 2022</p>
              </div>
            </NeonCard>

            <NeonCard color="ultraviolet">
              <div className="text-center p-4">
                <div className="w-24 h-24 rounded-full bg-neon-ultraviolet/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👩‍🏫</span>
                </div>
                <h3 className="text-lg mb-2 neon-text-ultraviolet">Dr. Maya Patel</h3>
                <p className="text-sm text-gray-300 mb-2">Professor of Computer Science</p>
                <p className="text-xs text-gray-400">Judge & Mentor since 2021</p>
              </div>
            </NeonCard>
          </div>

          {/* Past Judges/Mentors */}
          <NeonCard color="ultraviolet" className="p-8">
            <h3 className="text-xl mb-6 text-center neon-text-ultraviolet">Past Contributors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              {['James Wilson', 'Elena Santos', 'David Kim', 'Priya Sharma', 'Marcus Johnson', 'Lisa Chen'].map((name, index) => (
                <div key={index} className="p-2">
                  <p className="text-sm text-gray-300">{name}</p>
                  <p className="text-xs text-gray-400">2021-2022</p>
                </div>
              ))}
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
