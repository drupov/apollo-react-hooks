import React, { useState } from 'react';
import Overview from './components/Overview';
import Player from './components/Player';
import PlayerContext from './context/PlayerContext';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://apollo-react-hooks-drupal-graphql.lndo.site/graphql'
});

const App = () => {
  const [activePlayerId, setActivePlayerId] = useState(0);

  return (
    <ApolloProvider client={client}>
      <PlayerContext.Provider value={
        {
          activePlayerId: activePlayerId,
          setActivePlayerId: setActivePlayerId
        }
      }>
        {activePlayerId ? <Player /> : <Overview /> }
      </PlayerContext.Provider>
    </ApolloProvider>
  )
}

export default App;
