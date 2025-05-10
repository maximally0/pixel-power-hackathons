
import React from 'react';
import NeonCard from '@/components/ui/NeonCard';
import GlitchHeading from '@/components/ui/GlitchHeading';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <NeonCard color="ultraviolet" className="mb-12">
        <GlitchHeading
          text="Privacy Policy"
          className="text-2xl md:text-3xl mb-8 text-center"
          color="ultraviolet"
        />
        
        <div className="space-y-8 text-sm">
          <section className="glowing-container-ultraviolet p-6 rounded-lg">
            <h2 className="text-lg neon-text-ultraviolet mb-4">Information We Collect</h2>
            <p className="mb-4">We collect the following types of information:</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p><strong>Account Information:</strong> Name, email address, and profile picture when you register.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p><strong>Hackathon Participation:</strong> Project details, submissions, and team information.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p><strong>Technical Information:</strong> IP addresses, browser type, device information, and cookies.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p><strong>Communications:</strong> Messages sent through our platform or to our support team.</p>
              </li>
            </ul>
          </section>
          
          <section className="glowing-container p-6 rounded-lg">
            <h2 className="text-lg neon-text mb-4">How We Use Your Information</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>To provide, maintain, and improve our hackathon platform.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>To communicate with you about hackathons, events, and updates.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>To connect participants with potential sponsors or opportunities.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-magenta mr-3 mt-1 rounded-sm"></span>
                <p>To ensure compliance with our terms and conditions.</p>
              </li>
            </ul>
          </section>
          
          <section className="glowing-container-cyan p-6 rounded-lg">
            <h2 className="text-lg neon-text-cyan mb-4">Data Security</h2>
            <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal data, including:</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>Encryption of sensitive information.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>Regular security assessments and updates.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>Limited employee access to personal information.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-cyan mr-3 mt-1 rounded-sm"></span>
                <p>Staff training on data protection practices.</p>
              </li>
            </ul>
          </section>
          
          <section className="glowing-container-ultraviolet p-6 rounded-lg">
            <h2 className="text-lg neon-text-ultraviolet mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p>Access your personal data that we process.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p>Request correction of inaccurate data.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p>Request deletion of your data (right to be forgotten).</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3 mt-1 rounded-sm"></span>
                <p>Object to or restrict the processing of your data.</p>
              </li>
            </ul>
          </section>
          
          <section className="glowing-container p-6 rounded-lg">
            <h2 className="text-lg neon-text mb-4">Contact Us</h2>
            <p className="mb-2">If you have questions about this Privacy Policy, please contact us at:</p>
            <p className="neon-text">privacy@maximally.com</p>
          </section>
        </div>
      </NeonCard>
    </div>
  );
};

export default PrivacyPolicy;
