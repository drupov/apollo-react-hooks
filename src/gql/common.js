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
