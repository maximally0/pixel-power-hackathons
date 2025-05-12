import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonButton from '@/components/ui/NeonButton';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <GlitchHeading 
          text="Contact Us" 
          className="text-4xl md:text-5xl mb-4"
        />
        <p className="text-gray-300 max-w-2xl mx-auto px-4 text-sm md:text-base">
          Have questions about our hackathons or services? Want to become a sponsor 
          or judge? Reach out to us through our channels below.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="glowing-container-cyan p-6">
          <GlitchHeading 
            text="Get In Touch" 
            className="text-xl mb-6"
            color="cyan"
            level={3}
          />

          <div className="space-y-8 px-4">
            <div>
              <p className="text-gray-300 font-semibold mb-2">Email</p>
              <a href="mailto:hello@maximally.in" className="neon-text-cyan hover:underline break-all">
                hello@maximally.in
              </a>
            </div>

            <div>
              <p className="text-gray-300 font-semibold mb-2">Discord</p>
              <a href="https://discord.gg/S2YyGtBWKa" target="_blank" rel="noopener noreferrer" className="neon-text-ultraviolet hover:underline break-all">
                discord.gg/S2YyGtBWKa
              </a>
            </div>

            <div>
              <p className="text-gray-300 font-semibold mb-2">Location</p>
              <p className="text-gray-300">
                Fully remote with team members worldwide
              </p>
            </div>

            <div className="mt-4">
              <NeonButton 
                href="https://tally.so/r/mOgqXg"
                color="cyan"
                className="w-full"
              >
                Contact Us
              </NeonButton>
            </div>
          </div>
          

          <div className="mt-8 pt-8 border-t border-neon-cyan/30">
            <p className="text-gray-300 mb-4">
              For urgent inquiries, please reach out to us on Discord for the fastest response.
            </p>

            <NeonButton href="https://discord.gg/S2YyGtBWKa" color="ultraviolet" className="w-full">
              Join Discord
            </NeonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
