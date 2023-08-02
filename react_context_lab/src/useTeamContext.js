// useTeamContext.js
import { useContext } from 'react';
import { TeamContext } from './TeamContext';

// Custom hook to access TeamContext data
const useTeamContext = () => {
  const context = useContext(TeamContext);

  if (!context) {
    throw new Error('useTeamContext must be used within a TeamContext.Provider');
  }

  return context;
};

export default useTeamContext;
