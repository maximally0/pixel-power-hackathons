
import React from 'react';
import NeonCard from '@/components/ui/NeonCard';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonButton from '@/components/ui/NeonButton';

const SubmissionGuidelines = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <NeonCard color="magenta" className="mb-12">
        <GlitchHeading
          text="Submission Guidelines"
          className="text-2xl md:text-3xl mb-8 text-center"
          color="magenta"
        />
        
        <div className="space-y-8 text-sm">
          <section className="glowing-container p-6 rounded-lg">
            <h2 className="text-lg neon-text mb-4">General Requirements</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>All submissions must be original work created during the hackathon period.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>Projects must be submitted before the deadline. Late submissions will not be accepted.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>All code must be publicly available on GitHub or an equivalent platform.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>Teams must submit a working demo or prototype.</p>
              </li>
            </ul>
          </section>
          
          <section className="glowing-container-cyan p-6 rounded-lg">
            <h2 className="text-lg neon-text-cyan mb-4">Submission Format</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>A complete project description (max 500 words)</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>At least 3 screenshots or images of your project</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>A video demo (2-5 minutes) showcasing your project's functionality</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>Repository link with complete documentation</p>
              </li>
            </ul>
          </section>
          
          <section className="glowing-container-ultraviolet p-6 rounded-lg">
            <h2 className="text-lg neon-text-ultraviolet mb-4">Judging Criteria</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p><strong>Innovation (25%)</strong>: Originality and creativity of the idea</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p><strong>Technical Complexity (25%)</strong>: Technical difficulty and sophistication</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p><strong>Design & User Experience (20%)</strong>: Interface, usability, and visual appeal</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p><strong>Completion (15%)</strong>: How finished and polished the project is</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p><strong>Impact & Usefulness (15%)</strong>: Potential to solve real problems</p>
              </li>
            </ul>
          </section>
        </div>
        
        <div className="mt-12 text-center">
          <NeonButton to="/hackathons" color="magenta">
            View Hackathons
          </NeonButton>
        </div>
      </NeonCard>
    </div>
  );
};

export default SubmissionGuidelines;
