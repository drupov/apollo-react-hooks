import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_PLAYER, PLAYERS } from '../gql/common';

const CreatePlayer = () => {
  const [createPlayer, { loading }] = useMutation(CREATE_PLAYER);

  return (
    <React.Fragment>
      <h1>Create new player</h1>
      {loading ? <p>Saving player...</p> : ''}
      <form
        onSubmit={event => {
          event.preventDefault();
          const firstName = event.target.first_name.value;
          const lastName = event.target.last_name.value;

          if (!firstName || !lastName) {
            alert('First or last name must be filled out.');
            return;
          }

          createPlayer({
            variables: {first_name: firstName, last_name: lastName},
            refetchQueries: [{ query: PLAYERS }]
          }).then((res) => {
            console.log(`Player with id ${res.data.createPlayer.id} added successfully.`);
          });

          event.target.first_name.value = '';
          event.target.last_name.value = '';
        }}
      >
        <label htmlFor="first_name">First name</label>
        <input type="text" name="first_name" />
        <br />
        <label htmlFor="last_name">Last name</label>
        <input type="text" name="last_name" />
        <br />
        <button type="submit">Create player</button>
      </form>
    </React.Fragment>
  );
}

export default CreatePlayer;
