
import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonCard from '@/components/ui/NeonCard';
import NeonButton from '@/components/ui/NeonButton';

const JudgesMentors = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <GlitchHeading 
          text="Judges & Mentors" 
          className="text-4xl md:text-5xl mb-4"
        />
        <p className="text-gray-300 max-w-2xl mx-auto">
          Join our community of industry professionals and help shape the next generation of tech innovators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <NeonCard color="magenta">
          <h2 className="text-2xl mb-4 neon-text">Become a Judge</h2>
          <p className="text-gray-300 mb-6">
            As a judge, you'll evaluate innovative projects, provide valuable feedback, and help identify promising talent.
          </p>
          <ul className="space-y-3 mb-6">
            {['Review hackathon submissions', 'Provide constructive feedback', 'Network with industry peers', 'Inspire young innovators'].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="inline-block w-2 h-2 bg-neon-magenta mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
          <NeonButton to="/contact" color="magenta">Apply as Judge</NeonButton>
        </NeonCard>

        <NeonCard color="cyan">
          <h2 className="text-2xl mb-4 neon-text-cyan">Become a Mentor</h2>
          <p className="text-gray-300 mb-6">
            Share your expertise, guide participants through technical challenges, and make a lasting impact on aspiring developers.
          </p>
          <ul className="space-y-3 mb-6">
            {['Guide project development', 'Share technical expertise', 'Support team collaboration', 'Foster innovation'].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="inline-block w-2 h-2 bg-neon-cyan mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
          <NeonButton to="/contact" color="cyan">Apply as Mentor</NeonButton>
        </NeonCard>
      </div>
    </div>
  );
};

export default JudgesMentors;
