import React, { useContext } from 'react';
import PlayerContext from '../context/PlayerContext';
import { useQuery } from '@apollo/react-hooks';
import { PLAYER } from '../gql/common';

const Player = () => {
  const context = useContext(PlayerContext);

  const { data, loading, error } = useQuery(PLAYER, {variables: {id: context.activePlayerId}});

  if (error) {
    return error.message;
  }

  return (
    <React.Fragment>
      <h1>Player data</h1>
      {
        loading
        ?
        <p>Loading...</p>
        :
        <React.Fragment>
          <p>First name: {data.player.first_name}</p>
          <button onClick={() => context.setActivePlayerId(0)}>Return to players list</button>
        </React.Fragment>
      }
    </React.Fragment>
  );
}

export default Player;
