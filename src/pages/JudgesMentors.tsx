
import React from 'react';
import GlitchHeading from '@/components/ui/GlitchHeading';
import NeonCard from '@/components/ui/NeonCard';
import NeonButton from '@/components/ui/NeonButton';

const JudgesMentors = () => {
  const maximallyMentors2025 = [
    {
      name: "Rahul Chandra",
      role: "Tech Mentor"
    },
    {
      name: "Priyanshu Sharma",
      role: "Tech Mentor"
    }
  ];

  const codequest2025Judges = [
    {
      name: "Dussan Freire",
      role: "Sr. Data Scientist - Fractal Analytics - Seattle, US"
    },
    {
      name: "Vinothkumar Kolluru",
      role: "Expert in ML, data analytics, Python, R, SQL, and AWS cloud solutions"
    },
    {
      name: "Dr. Olivia Adams",
      role: "Software Engineer - American Express - United States"
    },
    {
      name: "Priya Devarajulu",
      role: "Software leader, AI/ML expert, published author"
    },
    {
      name: "Dr. Thomas Fischer",
      role: "Tech Expert - SAP Concur - Washington, United States"
    },
    {
      name: "Ravi Laudya",
      role: "Tech expert with 19+ years in software architecture and AI automation"
    },
    {
      name: "Omkar Gorde",
      role: "Cyber forensics expert at Mumbai CyberPolice"
    },
    {
      name: "Nina Rodriguez",
      role: "Senior Site Reliability Engineer at Broadcom - Chicago"
    },
    {
      name: "Advait Patel",
      role: "Principal Enterprise Architect - Elevance Health"
    },
    {
      name: "Sadhasivam M",
      role: "Principal Enterprise Architect - AI/ML & Healthcare Analytics"
    },
    {
      name: "Angelina Samoilova",
      role: "Entrepreneur & Sales Leader - Los Angeles"
    },
    {
      name: "Bhanuprakash Madupati",
      role: "Senior Software Engineer - Full Stack & Azure Expert"
    },
    {
      name: "Sujay Jain",
      role: "Senior Software Engineer at Netflix - San Francisco"
    },
    {
      name: "Oleksandr Khrustalov",
      role: "Principal Software Engineer at proSapient"
    },
    {
      name: "Bharath Sagi",
      role: "Senior Data Scientist at Starbucks"
    },
    {
      name: "Sravan Chittimalla",
      role: "Senior Backend Software Engineer at Glo Digital"
    },
    {
      name: "Nimit Patel",
      role: "Principal Data Scientist II at McKinsey & Company"
    },
    {
      name: "Vishal Shah",
      role: "Data Analyst & Machine Learning Expert"
    },
    {
      name: "Yanjia Guo",
      role: "Co-Founder of Mathos.ai"
    },
    {
      name: "Romina Gomez",
      role: "Lead Frontend Engineer at Struck Studio"
    },
    {
      name: "Yichen Wang",
      role: "Quantitative Associate - Cryptocurrency & Finance"
    },
    {
      name: "Nikhil Sonti",
      role: "Co-Founder & CEO at Felafax AI"
    },
    {
      name: "Raj Jaiswal",
      role: "Founder & CTO at Neyon Labs"
    },
    {
      name: "Louison Dumont",
      role: "Founder at Bitproof, Inc. - Lisbon"
    },
    {
      name: "Nastassia Shahun",
      role: "Senior IT Business Analyst at Flip"
    },
    {
      name: "Aditya Mehra",
      role: "Chief Technical Officer at Infinict"
    },
    {
      name: "Madhuri S Sarma",
      role: "VP of Engineering at Carta"
    },
    {
      name: "Sourav Sethia",
      role: "Business Intelligence Engineer at Amazon"
    },
    {
      name: "Tommy Tran",
      role: "Software Engineer at Ramp"
    },
    {
      name: "Gabriel Labrada",
      role: "Director of Engineering at Process Street"
    },
    {
      name: "Zekun Wei",
      role: "Data Scientist at Microsoft - San Francisco"
    },
    {
      name: "Varre Samyukta",
      role: "Senior Data Engineer at Mastercard"
    },
    {
      name: "Olga Badiukova",
      role: "Oracle Database Administrator at CS Ltd"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <GlitchHeading 
          text="Judges & Mentors" 
          className="text-4xl md:text-5xl mb-4"
        />
        <p className="text-gray-300 max-w-2xl mx-auto">
          Join our community of industry professionals and help shape the next generation of tech innovators.
        </p>
      </div>

      {/* Maximally Mentors 2025 */}
      <section className="mb-16">
        <GlitchHeading 
          text="🌟 Maximally Mentors 2025" 
          className="text-2xl md:text-3xl mb-4"
          color="magenta"
          level={2}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {maximallyMentors2025.map((mentor, index) => (
            <NeonCard key={index} color="magenta">
              <h3 className="text-xl mb-2 neon-text">{mentor.name}</h3>
              <p className="text-gray-300">{mentor.role}</p>
            </NeonCard>
          ))}
        </div>
      </section>

      {/* CodeQuest 2025 Judges */}
      <section className="mb-16">
        <GlitchHeading 
          text="🏆 CodeQuest 2025 Judges" 
          className="text-2xl md:text-3xl mb-4"
          color="cyan"
          level={2}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {codequest2025Judges.map((judge, index) => (
            <NeonCard key={index} color="cyan">
              <h3 className="text-xl mb-2 neon-text-cyan">{judge.name}</h3>
              <p className="text-gray-300">{judge.role}</p>
            </NeonCard>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <NeonCard color="magenta">
          <h2 className="text-2xl mb-4 neon-text">Become a Judge</h2>
          <p className="text-gray-300 mb-6">
            As a judge, you'll evaluate innovative projects, provide valuable feedback, and help identify promising talent.
          </p>
          <NeonButton to="/contact" color="magenta">Apply as Judge</NeonButton>
        </NeonCard>

        <NeonCard color="cyan">
          <h2 className="text-2xl mb-4 neon-text-cyan">Become a Mentor</h2>
          <p className="text-gray-300 mb-6">
            Share your expertise, guide participants through technical challenges, and make a lasting impact on aspiring developers.
          </p>
          <NeonButton to="/contact" color="cyan">Apply as Mentor</NeonButton>
        </NeonCard>
      </div>
    </div>
  );
};

export default JudgesMentors;
