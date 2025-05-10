
import React from 'react';
import { Link } from 'react-router-dom';
import NeonButton from '@/components/ui/NeonButton';
import GlitchHeading from '@/components/ui/GlitchHeading';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="mb-6 text-9xl font-bold tracking-wider neon-text animate-flicker">
          404
        </div>
        
        <GlitchHeading 
          text="Signal Lost" 
          className="text-4xl mb-6"
          color="cyan"
        />
        
        <p className="text-gray-300 mb-8">
          The digital pathway you're looking for doesn't exist or has been 
          deactivated. Check the URL or return to the grid.
        </p>
        
        <NeonButton to="/" color="magenta">
          Return to Grid
        </NeonButton>
      </div>
    </div>
  );
};

export default NotFound;
