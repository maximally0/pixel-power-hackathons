
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

  const companyTiers = [
    {
      name: 'PLATINUM',
      color: 'cyan',
      price: '$500',
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
      price: '$200',
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
      price: '$100',
      features: [
        'Logo on event materials',
        'Mentorship opportunities',
        'Access to participant resumes',
        'Judging panel participation',
        '2 mentor spots for your team'
      ]
    }
  ];

  const individualTiers = [
    {
      name: 'SUPPORTER PLUS',
      color: 'magenta',
      price: '$100',
      features: [
        'Name recognition on event materials',
        'Exclusive mentor badge',
        'Early access to hackathon projects',
        'Invitation to VIP networking events'
      ]
    },
    {
      name: 'SUPPORTER',
      color: 'cyan',
      price: '$50',
      features: [
        'Name recognition on event materials',
        'Mentor badge',
        'Access to hackathon projects'
      ]
    }
  ];

  const currentSponsors = [
    'Felafex',
    'CodeDay',
    'CodeCrafters',
    'AzebThemes',
    'AWS'
  ];

  return (
    <div className="container mx-auto px-4 py-16">
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

      <section className="mb-16">
        <GlitchHeading 
          text="Company Sponsorship Tiers" 
          className="text-2xl md:text-3xl mb-8 text-center"
          color="magenta"
          level={2}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyTiers.map((tier, index) => (
            <NeonCard 
              key={index}
              color={tier.color as 'magenta' | 'cyan' | 'ultraviolet'}
              className="flex flex-col h-full"
            >
              <h3 className={`text-2xl mb-2 text-center ${tier.color === 'magenta' ? 'neon-text' : tier.color === 'cyan' ? 'neon-text-cyan' : 'neon-text-ultraviolet'}`}>
                {tier.name}
              </h3>
              <p className={`text-xl mb-6 text-center ${tier.color === 'magenta' ? 'neon-text' : tier.color === 'cyan' ? 'neon-text-cyan' : 'neon-text-ultraviolet'}`}>
                {tier.price}
              </p>
              
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

      <section className="mb-16">
        <GlitchHeading 
          text="Individual Sponsorship Tiers" 
          className="text-2xl md:text-3xl mb-8 text-center"
          color="ultraviolet"
          level={2}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {individualTiers.map((tier, index) => (
            <NeonCard 
              key={index}
              color={tier.color as 'magenta' | 'cyan'}
              className="flex flex-col h-full"
            >
              <h3 className={`text-2xl mb-2 text-center ${tier.color === 'magenta' ? 'neon-text' : 'neon-text-cyan'}`}>
                {tier.name}
              </h3>
              <p className={`text-xl mb-6 text-center ${tier.color === 'magenta' ? 'neon-text' : 'neon-text-cyan'}`}>
                {tier.price}
              </p>
              
              <ul className="mb-8 space-y-3 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-300">
                    <span className={`inline-block w-3 h-3 ${tier.color === 'magenta' ? 'bg-neon-magenta' : 'bg-neon-cyan'} mr-3 mt-1.5`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <NeonButton 
                to="/contact" 
                color={tier.color as 'magenta' | 'cyan'} 
                className="mt-auto"
              >
                Become a Supporter
              </NeonButton>
            </NeonCard>
          ))}
        </div>
      </section>

      <section className="text-center">
        <GlitchHeading 
          text="Current Sponsors" 
          className="text-2xl md:text-3xl mb-8"
          color="cyan"
          level={2}
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {currentSponsors.map((sponsor, index) => (
            <div key={index} className="text-xl text-gray-300 font-pixel">
              {sponsor}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
