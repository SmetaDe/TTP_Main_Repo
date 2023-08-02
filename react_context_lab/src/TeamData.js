import React from "react";
import useTeamContext from "./useTeamContext";

const TeamData = () => {
  const { team } = useTeamContext();

  return <div>{team ? `Data for ${team}` : "Please select a team"}</div>;
};

export default TeamData;