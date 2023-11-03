import { graphql } from "../../gql/";

export const GET_ALL_CATEGORIES = graphql(/* GraphQL */ `
  query GetAllCategories {
    allCategories {
      id
      name
    }
  }
`);
