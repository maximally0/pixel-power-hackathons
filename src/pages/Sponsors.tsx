
import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonButton from '@/components/ui/NeonButton';
import NeonCard from '@/components/ui/NeonCard';

const Sponsors = () => {
  const benefits = [
    {
      title: 'Talent Recruitment',
      description: 'Connect directly with skilled, motivated students who demonstrate problem-solving abilities in real time.',
      icon: '👥',
    },
    {
      title: 'Brand Visibility',
      description: 'Showcase your brand to thousands of tech-savvy students and professionals across our platform and events.',
      icon: '🔍',
    },
    {
      title: 'Product Feedback',
      description: 'Get valuable feedback on your APIs, tools, or products as participants use them to build projects.',
      icon: '💬',
    },
    {
      title: 'Community Engagement',
      description: 'Engage with the developer community through workshops, judging, and mentorship opportunities.',
      icon: '🤝',
    }
  ];

  const sponsorshipTiers = [
    {
      name: 'PLATINUM',
      color: 'cyan',
      features: [
        'Featured placement on all event materials',
        'Dedicated workshop/presentation slot',
        'First access to participant resumes',
        'Custom prize category',
        'Judging panel participation',
        '10 mentor spots for your team',
        'Post-event hiring mixer access'
      ]
    },
    {
      name: 'GOLD',
      color: 'magenta',
      features: [
        'Premium logo placement',
        'Workshop opportunity',
        'Access to participant resumes',
        'Custom prize category',
        'Judging panel participation',
        '5 mentor spots for your team'
      ]
    },
    {
      name: 'SILVER',
      color: 'ultraviolet',
      features: [
        'Logo on event materials',
        'Mentorship opportunities',
        'Access to participant resumes',
        'Judging panel participation',
        '2 mentor spots for your team'
      ]
    }
  ];

  const judgeInfo = [
    'Review and evaluate hackathon projects',
    'Provide valuable feedback to participants',
    'Network with sponsor companies and other judges',
    'Help identify promising talent and projects',
    'Flexible time commitment (typically 3-5 hours)',
    'Remote judging options available'
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <GlitchHeading 
          text="Sponsors & Judges" 
          className="text-4xl md:text-5xl mb-4"
        />
        <p className="text-gray-300 max-w-2xl mx-auto">
          Partner with Maximally to connect with talented students, showcase your brand, 
          and support the next generation of tech innovators.
        </p>
      </div>

      {/* Sponsor Benefits */}
      <section className="mb-16">
        <GlitchHeading 
          text="Why Sponsor?" 
          className="text-2xl md:text-3xl mb-8 text-center"
          color="cyan"
          level={2}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <NeonCard 
              key={index}
              color={index % 3 === 0 ? 'magenta' : index % 3 === 1 ? 'cyan' : 'ultraviolet'}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className={`text-xl mb-3 ${index % 3 === 0 ? 'neon-text' : index % 3 === 1 ? 'neon-text-cyan' : 'neon-text-ultraviolet'}`}>
                {benefit.title}
              </h3>
              <p className="text-gray-300">{benefit.description}</p>
            </NeonCard>
          ))}
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="mb-16">
        <GlitchHeading 
          text="Sponsorship Packages" 
          className="text-2xl md:text-3xl mb-8 text-center"
          color="magenta"
          level={2}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsorshipTiers.map((tier, index) => (
            <NeonCard 
              key={index}
              color={tier.color as 'magenta' | 'cyan' | 'ultraviolet'}
              className="flex flex-col h-full"
            >
              <h3 className={`text-2xl mb-6 text-center ${tier.color === 'magenta' ? 'neon-text' : tier.color === 'cyan' ? 'neon-text-cyan' : 'neon-text-ultraviolet'}`}>
                {tier.name}
              </h3>
              
              <ul className="mb-8 space-y-3 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-300">
                    <span className={`inline-block w-3 h-3 ${tier.color === 'magenta' ? 'bg-neon-magenta' : tier.color === 'cyan' ? 'bg-neon-cyan' : 'bg-neon-ultraviolet'} mr-3 mt-1.5`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <NeonButton 
                to="/contact" 
                color={tier.color as 'magenta' | 'cyan' | 'ultraviolet'} 
                className="mt-auto"
              >
                Inquire
              </NeonButton>
            </NeonCard>
          ))}
        </div>
      </section>

      {/* Judges Section */}
      <section className="mb-16 glowing-container-ultraviolet p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <GlitchHeading 
              text="Become a Judge" 
              className="text-2xl md:text-3xl mb-4"
              color="ultraviolet"
              level={2}
            />
            
            <p className="text-gray-300 mb-6">
              Industry professionals are invited to serve as judges for our hackathons. 
              This is an excellent opportunity to give back to the tech community, 
              discover emerging talent, and see cutting-edge projects.
            </p>
            
            <ul className="space-y-2 mb-6">
              {judgeInfo.map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            
            <NeonButton to="/contact" color="ultraviolet">
              Apply as Judge
            </NeonButton>
          </div>
          
          <div className="hidden md:block">
            <img src="/placeholder.svg" alt="Judge" className="w-full h-auto neon-border-ultraviolet" />
          </div>
        </div>
      </section>

      {/* Past Sponsors */}
      <section className="text-center">
        <GlitchHeading 
          text="Past Partners" 
          className="text-2xl md:text-3xl mb-8"
          color="cyan"
          level={2}
        />
        
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          We've had the pleasure of partnering with innovative companies and organizations 
          who share our mission of empowering student hackers.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-32 h-32 flex items-center justify-center glowing-container">
              <span className="text-xl text-gray-400">Logo {index + 1}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
