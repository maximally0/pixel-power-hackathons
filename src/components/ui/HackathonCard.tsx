
import React from 'react';
import { Calendar } from 'lucide-react';
import NeonButton from './NeonButton';
import NeonCard from './NeonCard';

interface HackathonCardProps {
  title: string;
  date: string;
  description: string;
  devpostLink: string;
  discordLink: string;
  image?: string;
  past?: boolean;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  title,
  date,
  description,
  devpostLink,
  discordLink,
  image,
  past = false
}) => {
  return (
    <NeonCard 
      color={past ? 'cyan' : 'magenta'} 
      className="h-full flex flex-col"
    >
      
      <h3 className={`text-xl mb-2 ${past ? 'neon-text-cyan' : 'neon-text'}`}>
        {title}
      </h3>
      
      <div className="flex items-center mb-3 text-gray-300">
        <Calendar className="w-4 h-4 mr-2" />
        <span className="text-sm">{date}</span>
      </div>
      
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>
      
      <div className="flex flex-col sm:flex-row gap-2 mt-auto">
        {(!past || title === 'CodeQuest \'25') && (
          <NeonButton
            href={devpostLink}
            color="ultraviolet"
            className="w-full sm:w-1/2 text-sm"
          >
            Devpost
          </NeonButton>
        )}
        
        <NeonButton
          href={discordLink}
          color={past ? 'cyan' : 'magenta'}
          className={`w-full ${(!past || title === 'CodeQuest \'25') ? 'sm:w-1/2' : 'sm:w-full'} text-sm`}
        >
          Discord
        </NeonButton>
      </div>
    </NeonCard>
  );
};

export default HackathonCard;
