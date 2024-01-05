import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
  query AllCategories {
    allCategories {
      id
      name
    }
  }
`;

export const GET_AUTH_INFO = gql`
  query WhoAmI {
    whoAmI {
      isLoggedIn
      email
      role
    }
  }
`;
