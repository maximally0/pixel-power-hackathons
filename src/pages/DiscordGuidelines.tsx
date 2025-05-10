
import React from 'react';
import NeonCard from '@/components/ui/NeonCard';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonButton from '@/components/ui/NeonButton';

const DiscordGuidelines = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <NeonCard color="cyan" className="mb-12">
        <GlitchHeading
          text="Discord Community Guidelines"
          className="text-2xl md:text-3xl mb-8 text-center"
          color="cyan"
        />
        
        <div className="space-y-8 text-sm">
          <section className="glowing-container-cyan p-6 rounded-lg">
            <h2 className="text-lg neon-text-cyan mb-4">General Conduct</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>Be respectful to all community members. Harassment, hate speech, and discriminatory language will not be tolerated.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>Keep discussions relevant to the appropriate channels. Use thread features for extended conversations.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>Do not spam messages, emotes, or reactions. This includes excessive tagging of users or roles.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>Share knowledge freely and help fellow community members when possible.</p>
              </li>
            </ul>
          </section>
          
          <section className="glowing-container p-6 rounded-lg">
            <h2 className="text-lg neon-text mb-4">During Hackathons</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>Form teams in the designated team-formation channels.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>Request mentor help through the appropriate mentor-request channels.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>Share progress updates and ask for feedback in the project-showcase channel.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>Be mindful of announcements and deadlines posted by the organizers.</p>
              </li>
            </ul>
          </section>
          
          <section className="glowing-container-ultraviolet p-6 rounded-lg">
            <h2 className="text-lg neon-text-ultraviolet mb-4">Consequences</h2>
            <p className="mb-4">Violations of these guidelines may result in:</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p>Verbal warning from moderators</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p>Temporary mute or channel restrictions</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p>Temporary or permanent ban from the Discord server</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p>Disqualification from ongoing hackathons</p>
              </li>
            </ul>
          </section>
        </div>
        
        <div className="mt-12 text-center">
          <NeonButton href="https://discord.gg/maximally" color="cyan">
            Join Our Discord
          </NeonButton>
        </div>
      </NeonCard>
    </div>
  );
};

export default DiscordGuidelines;
