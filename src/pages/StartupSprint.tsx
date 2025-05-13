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
          text="MNCB: Maximally No Code Buildup" 
          className="text-4xl md:text-6xl mb-4"
          color="ultraviolet"
        />
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">India's fastest teen startup challenge</h2>
        <p className="text-xl text-gray-300 mb-4">
          In just 24 hours, teens from across the country team up to go from idea → MVP → pitch — without writing a single line of code.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          Build real products using no-code tools, get mentored by founders and creators, and pitch to a panel of judges.
          It's startup energy, Gen Z-style: fast, fun, and fearless.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="bg-purple-900/30 px-4 py-2 rounded-full text-gray-300">June 1st, 2025</span>
          <span className="bg-purple-900/30 px-4 py-2 rounded-full text-gray-300">Ages 13-19</span>
        </div>

        <NeonCard color="ultraviolet" className="inline-block mb-8">
          <div className="text-2xl font-mono">{timeLeft}</div>
        </NeonCard>

        <div>
          <NeonButton href="https://tally.so/r/wMgZkg" color="ultraviolet" className="text-xl px-8 py-4">
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

      {/* Regulations */}
      <section className="mb-16">
        <NeonCard color="magenta">
          <GlitchHeading 
            text="📋 Regulations" 
            className="text-2xl mb-6"
            color="magenta"
          />
          <div className="space-y-4 text-gray-300">
            <p><span className="neon-text-magenta">Event Duration:</span> June 1 - June 2, 2024</p>
            <p><span className="neon-text-magenta">Team Size Options:</span></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Solo (1 person)</li>
              <li>Duo (2 people)</li>
              <li>Trio (3 people)</li>
              <li>Squad (4 people)</li>
            </ul>
            <p><span className="neon-text-magenta">Submission Platforms:</span> Luma and Devpost</p>
          </div>
        </NeonCard>
      </section>

      {/* Judging Criteria */}
      <section className="mb-16">
        <NeonCard color="cyan">
          <GlitchHeading 
            text="⚖️ Judging Criteria" 
            className="text-2xl mb-6"
            color="cyan"
          />
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-lg neon-text-cyan mb-2">1. Clarity of Problem & Solution (20%)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Is the problem real and clearly explained?</li>
                <li>Does the solution make sense and directly solve it?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg neon-text-cyan mb-2">2. Execution (25%)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Did they build something real in 24 hours?</li>
                <li>Is there a working demo, mockup, or usable product?</li>
                <li>How resourceful were they with the team?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg neon-text-cyan mb-2">3. Originality & Creativity (15%)</h3>
              <ul className="list-disc pl-6">
                <li>Is the idea fresh or approached differently?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg neon-text-cyan mb-2">4. Teamwork & Presentation (15%)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Is the pitch clear, confident, and engaging?</li>
                <li>Did the team collaborate well and explain their roles?</li>
              </ul>
            </div>
          </div>
        </NeonCard>
      </section>

      {/* Pitch Template */}
      <section className="mb-16">
        <NeonCard color="ultraviolet">
          <GlitchHeading 
            text="🎤 Pitch Template" 
            className="text-2xl mb-6"
            color="ultraviolet"
          />
          <div className="space-y-4 text-gray-300">
            <p>Your pitch should cover these key points:</p>
            <ol className="list-decimal pl-6 space-y-3">
              <li><span className="neon-text-ultraviolet">Problem solved:</span> What issue are you addressing?</li>
              <li><span className="neon-text-ultraviolet">Project overview:</span> Brief description of your solution</li>
              <li><span className="neon-text-ultraviolet">Target audience:</span> Who will use your product?</li>
              <li><span className="neon-text-ultraviolet">Team contributions:</span> List team members and their roles</li>
              <li><span className="neon-text-ultraviolet">User acquisition:</span> How will you get users?</li>
              <li><span className="neon-text-ultraviolet">Market fit:</span> Why does your idea make sense now?</li>
            </ol>
          </div>
        </NeonCard>
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
        <NeonButton href="https://tally.so/r/wMgZkg" color="ultraviolet" className="text-xl px-8 py-4 mb-4">
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