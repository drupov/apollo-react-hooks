import React from 'react';
import Players from './Players';
import CreatePlayer from './CreatePlayer';

const Overview = () => {
  return (
    <React.Fragment>
      <Players />
      <CreatePlayer />
    </React.Fragment>
  );
}

export default Overview;
