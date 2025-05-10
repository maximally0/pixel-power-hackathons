
import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonButton from '@/components/ui/NeonButton';
import NeonCard from '@/components/ui/NeonCard';

const Host = () => {
  const features = [
    {
      icon: "🎨",
      title: "Custom Branding",
      points: [
        "Your logo, colors, and messaging throughout the platform",
        "Fully branded email and Discord communications",
        "Polished event visuals to match your vibe"
      ]
    },
    {
      icon: "📋",
      title: "Registration & Team Management",
      points: [
        "Participant signups, team formation tools, and live dashboards",
        "Real-time communication and announcements",
        "GDPR-compliant and built for student safety"
      ]
    },
    {
      icon: "💬",
      title: "Discord Community Setup",
      points: [
        "Custom server setup with structured channels",
        "Automated roles, announcements, and onboarding",
        "Integrated mentor and help-desk support"
      ]
    },
    {
      icon: "🧠",
      title: "Workshops & Mentorship",
      points: [
        "Access to our mentor network of engineers, founders, and designers",
        "Curated beginner-friendly workshops based on your theme",
        "Live Q&A, office hours, and feedback sessions"
      ]
    },
    {
      icon: "🧑‍⚖️",
      title: "Judging & Submissions Platform",
      points: [
        "Custom challenge tracks and judging criteria",
        "Easy-to-use project submission and review system",
        "Judge assignment, scorecards, and auto-tallied results"
      ]
    },
    {
      icon: "💰",
      title: "Sponsor & Prize Management",
      points: [
        "Sponsor visibility: logos, shoutouts, challenge tracks",
        "Prize logistics, swag shipping, and winner payout",
        "Optional sponsor-mentor matching"
      ]
    }
  ];

  

  const steps = [
    {
      title: "Discovery Call",
      description: "We align on your audience, goals, and budget."
    },
    {
      title: "Platform Setup",
      description: "We build and brand your hackathon experience."
    },
    {
      title: "Launch & Execution",
      description: "We handle tech, support, mentors, and live ops."
    },
    {
      title: "Reporting & Follow-Up",
      description: "You get post-event insights, summaries, and highlights."
    }
  ];

  const perfectFor = [
    "Colleges and universities hosting tech events",
    "High school coding clubs and STEM programs",
    "Companies looking to reach Gen Z talent",
    "Developer communities growing their ecosystem",
    "Nonprofits driving access to tech education"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <GlitchHeading 
          text="🚀 Host a Hackathon with Maximally" 
          className="text-4xl md:text-5xl mb-4"
        />
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Run a world-class student hackathon — without the headache.
          We handle everything: branding, registration, logistics, mentorship, prizes, and more.
          You show up and inspire the next generation of builders.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NeonButton to="/contact" color="magenta">
            Get a Quote
          </NeonButton>
          <NeonButton to="/contact" color="cyan">
            Book a Free Consultation
          </NeonButton>
        </div>
      </div>

      {/* Features Grid */}
      <section className="mb-16">
        <GlitchHeading 
          text="🎯 What's Included" 
          className="text-2xl md:text-3xl mb-8 text-center"
          color="magenta"
          level={2}
        />
        <p className="text-gray-300 text-center mb-8">
          Every event is fully customized to your goals, audience, and brand.
          We're not just a platform. We're your partner.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <NeonCard 
              key={index}
              color={index % 3 === 0 ? 'magenta' : index % 3 === 1 ? 'cyan' : 'ultraviolet'}
            >
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <span>{feature.icon}</span>
                <span className="neon-text">{feature.title}</span>
              </h3>
              <ul className="space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-neon-cyan">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </NeonCard>
          ))}
        </div>
      </section>

      

      {/* How It Works */}
      <section className="mb-16">
        <GlitchHeading 
          text="🛠️ How It Works" 
          className="text-2xl md:text-3xl mb-8 text-center"
          color="ultraviolet"
          level={2}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <NeonCard key={index} color="ultraviolet">
              <div className="text-4xl mb-4">{index + 1}</div>
              <h3 className="text-xl mb-2 neon-text-ultraviolet">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </NeonCard>
          ))}
        </div>
      </section>

      {/* Perfect For */}
      <section className="mb-16">
        <GlitchHeading 
          text="✅ Perfect For" 
          className="text-2xl md:text-3xl mb-8 text-center"
          color="magenta"
          level={2}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {perfectFor.map((item, index) => (
            <div key={index} className="flex items-center gap-4 text-gray-300">
              <span className="text-neon-magenta">•</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <GlitchHeading 
          text="🎯 Ready to Host Your Own Hackathon?" 
          className="text-2xl md:text-3xl mb-4"
          color="cyan"
          level={2}
        />
        
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's bring your idea to life.
          Fast setup. Zero hassle. Unforgettable impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NeonButton to="/contact" color="magenta">
            Get a Quote
          </NeonButton>
          <NeonButton to="/contact" color="cyan">
            Book a Consultation
          </NeonButton>
        </div>
      </section>
    </div>
  );
};

export default Host;
