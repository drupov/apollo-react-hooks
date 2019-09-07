import React, { useContext } from 'react';
import PlayerContext from '../context/PlayerContext';
import { useQuery } from '@apollo/react-hooks';
import { PLAYERS } from '../gql/common';

const Players = () => {
  const context = useContext(PlayerContext);
  const { data, loading, error } = useQuery(PLAYERS);
  
  if (error) {
    return error.message;
  }

  return (
    <React.Fragment>
      <h1>Players</h1>
      {
        loading
        ?
        <p>Loading...</p>
        :
        data.players.items.map((item) => (
          <button key={item.id} onClick={() => context.setActivePlayerId(item.id)}>
            {item.first_name} {item.last_name} ({item.id})
          </button>
        ))
      }
    </React.Fragment>
  );
}

export default Players;
