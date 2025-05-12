
import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonCard from '@/components/ui/NeonCard';
import NeonButton from '@/components/ui/NeonButton';

const StartupSprint = () => {
  // Calculate time until June 1st, 2025
  const eventDate = new Date('2025-06-01T00:00:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = React.useState('');

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <GlitchHeading 
          text="24-Hour Startup Challenge" 
          className="text-4xl md:text-6xl mb-4"
          color="ultraviolet"
        />
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Build and launch a real startup in 24 hours</h2>
        <p className="text-xl neon-text-ultraviolet mb-8">June 1st, 2025 (Online Event)</p>
        
        <NeonCard color="ultraviolet" className="inline-block mb-8">
          <div className="text-2xl font-mono">{timeLeft}</div>
        </NeonCard>

        <div>
          <NeonButton to="/apply" color="ultraviolet" className="text-xl px-8 py-4">
            Apply Now 🚀
          </NeonButton>
        </div>
      </section>

      {/* What's the Challenge */}
      <section className="mb-16">
        <NeonCard color="magenta">
          <GlitchHeading 
            text="💡 What's the Challenge" 
            className="text-2xl mb-6"
            color="magenta"
          />
          <p className="text-gray-300 mb-6">
            Part of Maximally.in, an AI-driven learning & productivity platform for teens
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-neon-magenta">→</span>
              Team of 2–4
            </li>
            <li className="flex items-center gap-2">
              <span className="text-neon-magenta">→</span>
              Teens only (13–19)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-neon-magenta">→</span>
              Use AI + no-code tools to build real startups
            </li>
          </ul>
        </NeonCard>
      </section>

      {/* What You'll Build */}
      <section className="mb-16">
        <GlitchHeading 
          text="🚀 What You'll Build" 
          className="text-2xl mb-6"
          color="cyan"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '✅', title: 'MVP' },
            { icon: '🎨', title: 'Branding' },
            { icon: '🎤', title: '1-Minute Pitch Video' },
            { icon: '🧾', title: 'Pitch Deck' },
            { icon: '📈', title: 'Traction Proof' }
          ].map((item, i) => (
            <NeonCard key={i} color="cyan" className="text-center">
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="neon-text-cyan">{item.title}</div>
            </NeonCard>
          ))}
        </div>
      </section>

      {/* What You'll Get */}
      <section className="mb-16">
        <NeonCard color="magenta">
          <GlitchHeading 
            text="🎁 What You'll Get" 
            className="text-2xl mb-6"
            color="magenta"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '📦', text: 'Notion Startup Toolkit' },
              { icon: '🧠', text: 'Access to AI + no-code tools' },
              { icon: '👥', text: 'Mentors + feedback' },
              { icon: '📂', text: 'Launch & branding templates' },
              { icon: '⚡', text: 'Real launch experience in 24 hours' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <span className="text-2xl">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </NeonCard>
      </section>

      {/* Awards & Prizes */}
      <section className="mb-16">
        <GlitchHeading 
          text="🏆 Awards & Prizes" 
          className="text-2xl mb-6"
          color="ultraviolet"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Best Startup',
            'Most Creative',
            'Most Likely to Succeed',
            'Audience Favorite',
            'Best Pitch'
          ].map((prize, i) => (
            <NeonCard key={i} color="ultraviolet" className="text-center py-4">
              <div className="neon-text-ultraviolet">{prize}</div>
            </NeonCard>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <NeonCard color="cyan">
          <GlitchHeading 
            text="📅 Timeline" 
            className="text-2xl mb-6"
            color="cyan"
          />
          <div className="space-y-4 text-gray-300">
            <p><span className="neon-text-cyan">Start:</span> 12:00 AM IST</p>
            <p><span className="neon-text-cyan">Submit by:</span> 10:00 PM</p>
            <p><span className="neon-text-cyan">Winners Announced:</span> 11:30 PM</p>
            <p><span className="neon-text-cyan">Platforms:</span> Zoom, Discord, Notion</p>
          </div>
        </NeonCard>
      </section>

      {/* CTA */}
      <section className="text-center mb-16">
        <NeonButton to="/apply" color="ultraviolet" className="text-xl px-8 py-4 mb-4">
          Apply Now 🚀
        </NeonButton>
        <p className="text-gray-300">Limited to 100 teams only</p>
      </section>

      {/* Contact */}
      <section className="text-center">
        <div className="space-y-2 text-gray-300">
          <p>Email: hello@maximally.in</p>
          <p>Instagram: @maximally.in</p>
        </div>
      </section>
    </div>
  );
};

export default StartupSprint;
