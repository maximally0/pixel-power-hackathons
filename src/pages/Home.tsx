import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonButton from '@/components/ui/NeonButton';
import NeonCard from '@/components/ui/NeonCard';

const Home = () => {
  return (
    <div>
      {/* 24-Hour Challenge Banner */}
      <section className="py-8 sm:py-16 px-2 sm:px-4">
        <div className="container mx-auto">
          <NeonCard color="ultraviolet" className="animate-pulse">
            <div className="flex flex-col items-center gap-6 p-6 sm:p-8">
              <div className="text-center w-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold neon-text-ultraviolet mb-4">🚀 24-HOUR STARTUP SPRINT</h2>
                <p className="text-gray-300 mb-6 text-lg sm:text-xl max-w-3xl mx-auto">Build and launch a real startup in 24 hours! Open to teens ages 13-19.</p>
                <div className="flex flex-wrap justify-center gap-4 text-base sm:text-lg text-gray-300 mb-8">
                  <span className="bg-purple-900/30 px-6 py-3 rounded-full">Team of 2-4</span>
                  <span className="bg-purple-900/30 px-6 py-3 rounded-full">AI + No-Code Tools</span>
                  <span className="bg-purple-900/30 px-6 py-3 rounded-full">June 1st, 2025</span>
                </div>
              </div>
              <NeonButton 
                to="/startup-sprint" 
                color="ultraviolet" 
                className="text-xl sm:text-2xl text-center whitespace-nowrap py-4 px-8"
              >
                JOIN THE SPRINT 🏃‍♂️
              </NeonButton>
            </div>
          </NeonCard>
        </div>
      </section>

      {/* Hero Section */}
      <section className="min-h-[80vh] sm:h-screen flex flex-col items-center justify-center text-center px-2 sm:px-4">
        <NeonCard color="magenta" className="max-w-4xl w-full py-6 sm:py-12 px-4 sm:px-8">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 neon-text animate-flicker px-2 sm:px-4">
            ENTER THE GRID: LAUNCH WHAT'S POSSIBLE
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto floating px-2 sm:px-4">
            Maximally is where student entrepreneurs go from scrolling reels to building real businesses.
            We run online startup hackathons for teens — and help schools, clubs, and companies host their own.
            It's bold. It's fast. It's the runway to your first real startup.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <NeonButton to="/hackathons" color="magenta">
              View Hackathons
            </NeonButton>
            <NeonButton to="/host" color="cyan">
              Host Your Own
            </NeonButton>
            <NeonButton href="https://discord.gg/S2YyGtBWKa" color="ultraviolet">
              Join Discord
            </NeonButton>
          </div>
        </NeonCard>
      </section>

      {/* What Is Maximally Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <NeonCard color="cyan" className="mb-12 py-8">
            <GlitchHeading 
              text="What Is Maximally?"
              className="text-3xl md:text-4xl mb-10 text-center"
              color="cyan"
            />
            <h2 className="text-2xl mb-6 text-center neon-text-cyan">
              Startup Hackathons, Reinvented for Gen Z
            </h2>
            <p className="text-center text-gray-300 mb-8">
              We don't do lectures. We don't do busywork.<br/>
              We drop you into the deep end — with a team, an idea, and 48 hours to build a business from scratch.<br/>
              Apps, brands, AI tools, services — whatever you can imagine, we help you launch it.
            </p>
          </NeonCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NeonCard color="ultraviolet">
              <h3 className="text-xl mb-4 neon-text-ultraviolet">A Global Community of Builders</h3>
              <p className="text-gray-300 mb-6">
                Thousands of student founders, designers, and developers — all building their first big thing.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-ultraviolet rounded-full mr-3"></span>
                  <span>Teenagers launching real startups with real traction</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-ultraviolet rounded-full mr-3"></span>
                  <span>Mentorship from top engineers, founders, and creators</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-ultraviolet rounded-full mr-3"></span>
                  <span>Workshops that don't suck — real tools, real skills</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-ultraviolet rounded-full mr-3"></span>
                  <span>A fast-paced, no-fluff environment to grow fast</span>
                </li>
              </ul>
            </NeonCard>

            <NeonCard color="magenta">
              <div className="text-center p-6">
                <p className="text-lg mb-4 italic text-gray-300">
                  "I joined with zero experience. Now I'm launching my second product with a team I met at the hackathon."
                </p>
                <p className="neon-text">— Riya, 16, Canada</p>
              </div>
            </NeonCard>
          </div>
        </div>
      </section>

      {/* Featured Hackathon */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <NeonCard color="ultraviolet" className="mb-12">
            <GlitchHeading 
              text="Maximally Makeathon 2025"
              className="text-3xl md:text-4xl mb-6 text-center"
              color="ultraviolet"
            />
            <h3 className="text-2xl mb-6 text-center neon-text-ultraviolet">
              The Ultimate Student Startup Experience
            </h3>

            <div className="text-center mb-8">
              <p className="text-gray-300 mb-6">
                Join hundreds of student founders for 48 hours of pure creativity, chaos, and code.
                Compete for prizes worth 83k INR ($1000) at Maximally Makeathon — our flagship startup hackathon open globally to all high school students.
              </p>

              <ul className="space-y-4 max-w-lg mx-auto mb-8">
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-neon-ultraviolet rounded-full mr-3"></span>
                  <span>Date: July 1-3, 2025</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-neon-ultraviolet rounded-full mr-3"></span>
                  <span>Format: 100% Virtual</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-neon-ultraviolet rounded-full mr-3"></span>
                  <span>Prizes: 83k INR ($1000) in cash + swag</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-neon-ultraviolet rounded-full mr-3"></span>
                  <span>Who: 13–18 year olds ready to build a business</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <NeonButton href="https://maximally-makeathon-2025.devpost.com/" color="ultraviolet">
                  Register on Devpost
                </NeonButton>
                <NeonButton href="https://discord.gg/S2YyGtBWKa" color="magenta">
                  Join Discord
                </NeonButton>
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
              text="Ready to Build Something Real?"
              className="text-3xl md:text-4xl mb-6"
              color="magenta"
            />

            <p className="text-base mb-10 max-w-2xl mx-auto text-gray-300">
              Whether you're here to compete, connect, or create your own event — you're in the right place.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <NeonButton to="/hackathons" color="cyan">
                Explore Hackathons
              </NeonButton>
              <NeonButton to="/host" color="magenta">
                Host Your Own
              </NeonButton>
              <NeonButton href="https://discord.gg/S2YyGtBWKa" color="ultraviolet">
                Join Community
              </NeonButton>
            </div>
          </NeonCard>
        </div>
      </section>
    </div>
  );
};

export default Home;