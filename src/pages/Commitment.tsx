
import React from 'react';
import NeonCard from '@/components/ui/NeonCard';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonButton from '@/components/ui/NeonButton';

const Commitment = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <NeonCard color="magenta" className="mb-12">
        <GlitchHeading
          text="Our Commitment"
          className="text-2xl md:text-3xl mb-8 text-center"
          color="magenta"
        />
        
        <div className="space-y-8 text-sm">
          <section className="glowing-container p-6 rounded-lg">
            <h2 className="text-lg neon-text mb-4">Education First</h2>
            <p className="mb-4">
              At Maximally, we believe in the power of hands-on learning. Our commitment to education means:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>Creating hackathons that focus on learning and skill development, not just competition.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>Providing workshops and learning resources before and during events.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>Matching participants with mentors who can guide their learning journey.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>Creating beginner-friendly tracks in all our hackathons.</p>
              </li>
            </ul>
          </section>
          
          <section className="glowing-container-cyan p-6 rounded-lg">
            <h2 className="text-lg neon-text-cyan mb-4">Inclusivity</h2>
            <p className="mb-4">
              We are committed to making tech more accessible and inclusive:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>Ensuring our hackathons are accessible to people from all backgrounds.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>Providing scholarships and resources for underrepresented groups in tech.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>Creating safe spaces for all participants through our strict code of conduct.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>Actively partnering with organizations that promote diversity in tech.</p>
              </li>
            </ul>
          </section>
          
          <section className="glowing-container-ultraviolet p-6 rounded-lg">
            <h2 className="text-lg neon-text-ultraviolet mb-4">Community Building</h2>
            <p className="mb-4">
              We believe in the power of community:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p>Fostering connections between students, industry professionals, and academics.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p>Creating year-round engagement opportunities beyond hackathon events.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p>Supporting open-source contributions and collaborative projects.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p>Highlighting and celebrating community achievements.</p>
              </li>
            </ul>
          </section>
          
          <section className="glowing-container p-6 rounded-lg">
            <h2 className="text-lg neon-text mb-4">Environmental Responsibility</h2>
            <p className="mb-4">
              As a primarily digital platform, we still take our environmental impact seriously:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>Carbon-offsetting for our server usage and digital infrastructure.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>When physical events are held, prioritizing sustainable vendors and practices.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>Encouraging and rewarding environmentally-focused hackathon projects.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>Partnering with organizations committed to tech sustainability.</p>
              </li>
            </ul>
          </section>
        </div>
        
        <div className="mt-12 text-center">
          <NeonButton to="/contact" color="magenta">
            Contact Us
          </NeonButton>
        </div>
      </NeonCard>
    </div>
  );
};

export default Commitment;
