// TeamsProvider.js
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const TeamContext = createContext();

// Define the TeamsProvider component
const TeamsProvider = ({ children }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [allTeams, setAllTeams] = useState([]);

  const selectTeam = (team) => {
    setSelectedTeam(team);
  };

  const addTeam = (team) => {
    setAllTeams([...allTeams, team]);
  };

  // Fetch list of teams from mock API using useEffect
  useEffect(() => {
    // Mock API response (array of team names)
    const mockApiResponse = ['Team A', 'Team B', 'Team C'];
    
    setAllTeams(mockApiResponse);
  }, []);

  const contextValue = {
    selectedTeam,
    allTeams,
    selectTeam,
    addTeam,
  };

  return (
    <TeamContext.Provider value={contextValue}>
      {children}
    </TeamContext.Provider>
  );
};

export default TeamsProvider;
