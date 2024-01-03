import { gql } from "@apollo/client";

export const CREATE_NEW_AD = gql`
  mutation Mutation($adData: AdInput!) {
    createNewAd(adData: $adData) {
      id
    }
  }
`;

export const REGISTER = gql`
  mutation Mutation($newUserData: UserInput!) {
    register(newUserData: $newUserData)
  }
`;
