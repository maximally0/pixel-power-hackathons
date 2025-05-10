
import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonButton from '@/components/ui/NeonButton';
import NeonCard from '@/components/ui/NeonCard';

const Students = () => {
  const benefits = [
    {
      title: 'Learn & Build',
      description: 'Gain hands-on experience building real projects. Learn new technologies and frameworks with support from mentors.',
      icon: '💡',
    },
    {
      title: 'Win Prizes',
      description: 'Compete for cash prizes, scholarships, internship opportunities, and awesome swag from our sponsors.',
      icon: '🏆',
    },
    {
      title: 'Networking',
      description: 'Connect with fellow students, mentors, and industry professionals. Build relationships that last beyond the hackathon.',
      icon: '🤝',
    },
    {
      title: 'Resume Building',
      description: 'Add your hackathon projects and achievements to your portfolio and resume to stand out to future employers.',
      icon: '📄',
    },
    {
      title: 'Mentorship',
      description: 'Get guidance from experienced developers, designers, and product managers from leading tech companies.',
      icon: '👨‍🏫',
    },
    {
      title: 'Fun Experience',
      description: 'Enjoy a fun, collaborative atmosphere with activities, games, and entertainment throughout the event.',
      icon: '🎮',
    }
  ];

  const faqs = [
    {
      question: 'Do I need programming experience to participate?',
      answer: 'Not at all! Our hackathons welcome participants of all skill levels. We have tracks for beginners and mentors to help you learn as you build.'
    },
    {
      question: 'How much does it cost to participate?',
      answer: 'All Maximally hackathons are completely free for students to participate in. We believe in making tech education and opportunities accessible to everyone.'
    },
    {
      question: 'Can I participate as an individual, or do I need a team?',
      answer: 'You can join as an individual or with a team. We have team formation activities at the beginning of each hackathon to help solo participants find teammates.'
    },
    {
      question: 'What if I don\'t have an idea for a project?',
      answer: 'Don\'t worry! Each hackathon includes suggested challenge tracks and prompt ideas. Our mentors can also help you brainstorm project concepts.'
    },
    {
      question: 'Do I need to stay awake for the entire hackathon?',
      answer: 'Absolutely not! We encourage participants to get proper rest. While our hackathons run for 24-48 hours, we expect you to take breaks and sleep.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <GlitchHeading 
          text="For Students" 
          className="text-4xl md:text-5xl mb-4"
        />
        <p className="text-gray-300 max-w-2xl mx-auto">
          Hackathons are the perfect opportunity for students to learn new skills, 
          build amazing projects, win prizes, and connect with other passionate technologists.
        </p>
      </div>

      {/* Benefits */}
      <section className="mb-16">
        <GlitchHeading 
          text="Why Participate?" 
          className="text-2xl md:text-3xl mb-8 text-center"
          color="cyan"
          level={2}
        />
        
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
          text="Ready to Join?" 
          className="text-2xl md:text-3xl mb-4"
          color="ultraviolet"
          level={2}
        />
        
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Registration is simple and free. Sign up for our upcoming hackathons on Devpost 
          and join our Discord community to stay updated on events, team formation, and more.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <NeonButton href="https://devpost.com/" color="ultraviolet">
            Join on Devpost
          </NeonButton>
          <NeonButton href="https://discord.gg/maximally" color="magenta">
            Join Discord
          </NeonButton>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <GlitchHeading 
          text="Frequently Asked Questions" 
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
