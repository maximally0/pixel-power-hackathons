
import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonButton from '@/components/ui/NeonButton';
import NeonCard from '@/components/ui/NeonCard';

const Host = () => {
  const features = [
    {
      title: 'Custom Branding',
      description: 'Fully branded event with your organization\'s logo, colors, and messaging throughout the platform and communications.',
    },
    {
      title: 'Registration & Participant Management',
      description: 'Complete registration system with participant tracking, team formation, and communication tools.',
    },
    {
      title: 'Discord Community Setup',
      description: 'Custom Discord server setup with channels for announcements, team formation, mentorship, and more.',
    },
    {
      title: 'Judging Platform',
      description: 'Comprehensive judging system with customizable criteria, judge assignment, and scoring tools.',
    },
    {
      title: 'Sponsor Management',
      description: 'Tools for managing sponsor relationships, including logo placement, prize distribution, and mentor coordination.',
    },
    {
      title: 'Workshops & Mentorship',
      description: 'Organization of technical workshops and mentorship sessions with industry experts.',
    },
    {
      title: 'Prize Distribution',
      description: 'Handling of prize distribution to winners, including cash prizes, swag, and special awards.',
    },
    {
      title: 'Post-Event Analytics',
      description: 'Detailed analytics and reports on participation, engagement, project quality, and overall event success.',
    }
  ];

  const clients = [
    {
      name: 'TechU University',
      quote: 'Working with Maximally allowed us to run a successful hackathon with minimal effort from our staff. Their platform and support made the entire process smooth and engaging for our students.',
      role: 'Director of Computer Science'
    },
    {
      name: 'InnovateCorp',
      quote: 'Maximally helped us connect with talented students through our sponsored hackathon. The quality of projects and engagement exceeded our expectations.',
      role: 'Head of Innovation'
    },
    {
      name: 'CodeClub High School',
      quote: 'Our students had an incredible experience at our Maximally-powered hackathon. Many of them had never coded before, but the supportive environment helped them create amazing projects.',
      role: 'Computer Science Teacher'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <GlitchHeading 
          text="Host a Hackathon" 
          className="text-4xl md:text-5xl mb-4"
        />
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our Hackathon-as-a-Service offering makes it easy for schools, clubs, and 
          companies to run their own customized hackathon events with professional support.
        </p>
      </div>

      {/* Services Overview */}
      <section className="mb-16">
        <GlitchHeading 
          text="What We Offer" 
          className="text-2xl md:text-3xl mb-8 text-center"
          color="cyan" 
          level={2}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <NeonCard 
              key={index}
              color={index % 3 === 0 ? 'magenta' : index % 3 === 1 ? 'cyan' : 'ultraviolet'}
            >
              <h3 className={`text-xl mb-3 ${index % 3 === 0 ? 'neon-text' : index % 3 === 1 ? 'neon-text-cyan' : 'neon-text-ultraviolet'}`}>
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </NeonCard>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16 glowing-container-cyan p-8">
        <GlitchHeading 
          text="Client Testimonials" 
          className="text-2xl md:text-3xl mb-8 text-center"
          color="cyan"
          level={2}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-black/50 p-6 border border-neon-cyan/30">
              <p className="text-gray-300 mb-4 italic">"{client.quote}"</p>
              <p className="text-neon-cyan font-semibold">{client.name}</p>
              <p className="text-gray-400 text-sm">{client.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <GlitchHeading 
          text="How It Works" 
          className="text-2xl md:text-3xl mb-8 text-center"
          color="ultraviolet"
          level={2}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <ol className="space-y-6 relative border-l-2 border-dashed border-neon-ultraviolet ml-4">
              <li className="ml-6">
                <div className="absolute w-4 h-4 bg-neon-ultraviolet rounded-full -left-[0.44rem]"></div>
                <h3 className="text-xl mb-2 neon-text-ultraviolet">Initial Consultation</h3>
                <p className="text-gray-300">We'll discuss your goals, audience, timeline, and budget to create a tailored hackathon plan.</p>
              </li>
              <li className="ml-6">
                <div className="absolute w-4 h-4 bg-neon-ultraviolet rounded-full -left-[0.44rem]"></div>
                <h3 className="text-xl mb-2 neon-text-ultraviolet">Custom Platform Setup</h3>
                <p className="text-gray-300">We'll set up a branded hackathon platform, including registration, project submission, and judging systems.</p>
              </li>
              <li className="ml-6">
                <div className="absolute w-4 h-4 bg-neon-ultraviolet rounded-full -left-[0.44rem]"></div>
                <h3 className="text-xl mb-2 neon-text-ultraviolet">Event Execution</h3>
                <p className="text-gray-300">Our team will handle technical support, mentorship coordination, and day-of operations.</p>
              </li>
              <li className="ml-6">
                <div className="absolute w-4 h-4 bg-neon-ultraviolet rounded-full -left-[0.44rem]"></div>
                <h3 className="text-xl mb-2 neon-text-ultraviolet">Post-Event Analysis</h3>
                <p className="text-gray-300">We'll provide comprehensive analytics and feedback to measure the success of your hackathon.</p>
              </li>
            </ol>
          </div>
          
          <div className="glowing-container-ultraviolet p-6">
            <GlitchHeading 
              text="Perfect For" 
              className="text-xl mb-4"
              color="ultraviolet"
              level={3}
            />
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-300">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3"></span>
                Universities and colleges hosting tech events
              </li>
              <li className="flex items-center text-gray-300">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3"></span>
                High school coding clubs and STEM programs
              </li>
              <li className="flex items-center text-gray-300">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3"></span>
                Companies looking to engage with student talent
              </li>
              <li className="flex items-center text-gray-300">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3"></span>
                Tech communities building their networks
              </li>
              <li className="flex items-center text-gray-300">
                <span className="inline-block w-3 h-3 bg-neon-ultraviolet mr-3"></span>
                Non-profits promoting tech education and access
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <GlitchHeading 
          text="Ready to Host Your Own Hackathon?" 
          className="text-2xl md:text-3xl mb-4"
          color="magenta"
          level={2}
        />
        
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today to get a personalized quote and start planning your custom hackathon event.
        </p>
        
        <NeonButton to="/contact" color="magenta" className="px-10 py-3">
          Get a Quote
        </NeonButton>
      </section>
    </div>
  );
};

export default Host;
