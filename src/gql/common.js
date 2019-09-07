import gql from "graphql-tag";

export const PLAYER = gql`
query Player ($id: Int!) {
  player(id: $id) {
    first_name
    last_name
  }
}
`;

export const PLAYERS = gql`
{
  players {
    items {
      id
      first_name
      last_name
    }
  }
}
`;

export const CREATE_PLAYER = gql`
mutation CreatePlayer ($first_name: String!, $last_name: String!) {
  createPlayer (data: {first_name: $first_name, last_name: $last_name}) {
    id
  }
}
`;
