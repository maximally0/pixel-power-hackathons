
import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonButton from '@/components/ui/NeonButton';
import NeonCard from '@/components/ui/NeonCard';

const Students = () => {
  const benefits = [
    {
      title: 'Learn by Building',
      description: 'Gain hands-on experience with real tools, tech, and teammates. Workshops built for beginners and creators who hate fluff. Mentors who\'ve actually built stuff — not just read about it.',
      icon: '💡',
    },
    {
      title: 'Win Real Prizes',
      description: 'Cash, tech, scholarships, internships, swag. Sponsor-backed rewards and surprise drops. Recognition that actually matters on college apps and resumes.',
      icon: '🏆',
    },
    {
      title: 'Meet Your Future Co-Founders',
      description: 'Work with students from around the world. Team formation is built in — find your squad, fast. Build connections that last beyond the event.',
      icon: '🤝',
    },
    {
      title: 'Boost Your Resume',
      description: 'Show colleges and companies you don\'t just consume — you create. Every project you build is portfolio gold. Employers love students who hustle and ship.',
      icon: '📄',
    },
    {
      title: 'Real Mentorship',
      description: 'Get unstuck instantly with 1:1 help from devs, designers, and founders. Office hours, feedback sessions, and workshops built around you. Ask anything — no judgment, just growth.',
      icon: '👨‍🏫',
    },
    {
      title: 'Yeah, It\'s Also Just Fun',
      description: 'Side quests, games, meme battles, live streams. Zero cringe. Maximum energy. Sleep when it\'s over.',
      icon: '🎮',
    }
  ];

  const faqs = [
    {
      question: 'Do I need programming experience?',
      answer: 'Nope. Our events are beginner-friendly with dedicated tracks and mentors to help you learn fast.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Nothing. Maximally hackathons are 100% free for all students, always.'
    },
    {
      question: 'Can I join solo?',
      answer: 'Yes. Come with a team or join solo — we\'ll help you squad up at the start of every event.'
    },
    {
      question: 'What if I don\'t have an idea?',
      answer: 'No stress. Every hackathon has challenge prompts and optional tracks to help spark ideas.'
    },
    {
      question: 'Do I need to stay up the whole time?',
      answer: 'Definitely not. Build at your own pace. Sleep is cool. Rested minds build better.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <GlitchHeading 
          text="💥 For Students: Build. Win. Launch." 
          className="text-4xl md:text-5xl mb-4"
        />
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Maximally is more than just a hackathon — it's your launchpad.
          No experience? No team? No idea what you're doing? Perfect.
          You'll learn fast, build bold, and come out with something real.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <NeonButton href="https://devpost.com/" color="magenta">
            Join on Devpost
          </NeonButton>
          <NeonButton href="https://discord.gg/maximally" color="cyan">
            Hop into Discord
          </NeonButton>
        </div>
      </div>

      {/* Benefits */}
      <section className="mb-16">
        <GlitchHeading 
          text="🎯 Why Join a Student Hackathon?" 
          className="text-2xl md:text-3xl mb-8 text-center"
          color="cyan"
          level={2}
        />
        <p className="text-gray-300 text-center mb-8">
          Forget classroom theory. This is startup speed — packed into one weekend.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* CTA */}
      <section className="mb-16 glowing-container-ultraviolet p-8 text-center">
        <GlitchHeading 
          text="🚀 Ready to Build Something Real?" 
          className="text-2xl md:text-3xl mb-4"
          color="ultraviolet"
          level={2}
        />
        
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          It's 100% free. You don't need to be a coder.
          All you need is the guts to show up and try.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <NeonButton href="https://devpost.com/" color="ultraviolet">
            Register on Devpost
          </NeonButton>
          <NeonButton href="https://discord.gg/maximally" color="magenta">
            Join the Community on Discord
          </NeonButton>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <GlitchHeading 
          text="❓ Student FAQ" 
          className="text-2xl md:text-3xl mb-8 text-center"
          color="magenta"
          level={2}
        />
        
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="glowing-container p-6">
              <h3 className="text-xl mb-3 neon-text">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Students;
