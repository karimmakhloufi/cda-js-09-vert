import { gql } from "@apollo/client";

export const CREATE_NEW_AD = gql`
  mutation CreateNewAd($adData: AdInput!) {
    createNewAd(adData: $adData) {
      id
    }
  }
`;

export const REGISTER = gql`
  mutation Register($newUserData: UserInput!) {
    register(newUserData: $newUserData)
  }
`;
