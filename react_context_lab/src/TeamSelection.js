// TeamSelection.js
import React from 'react';
import useTeamContext from './useTeamContext';

const TeamSelection = () => {
  const { selectedTeam, selectTeam, allTeams } = useTeamContext();

  const handleTeamChange = (event) => {
    const newSelectedTeam = event.target.value;
    selectTeam(newSelectedTeam);
  };

  return (
    <div>
      <h2>Select a Team:</h2>
      <select value={selectedTeam} onChange={handleTeamChange}>
        <option value="">Select a team...</option>
        {allTeams.map((team) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
      </select>
      {selectedTeam && <p>Selected Team: {selectedTeam}</p>}
    </div>
  );
};

export default TeamSelection;
