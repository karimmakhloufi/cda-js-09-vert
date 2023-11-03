import { gql } from "@apollo/client";

export const CREATE_NEW_AD = gql`
  mutation Mutation($adData: AdInput!) {
    createNewAd(adData: $adData) {
      id
    }
  }
`;
