import { Text, View, Image } from "react-native";
import { gql, useApolloClient, useQuery } from "@apollo/client";

const GET_ALL_ADS = gql`
  query GetAllAds {
    getAllAds {
      id
      title
      category {
        id
        name
      }
      description
      imageUrl
      location
      owner
      price
    }
  }
`;

export default function Index() {
  const { loading, error, data } = useQuery(GET_ALL_ADS);
  const client: any = useApolloClient();
  const backend_url = client.link.options.uri.split("/graphql")[0];

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;

  console.log(data);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.getAllAds.map((el: any) => (
        <View key={el.id}>
          <Text>{el.title}</Text>
          <Image
            style={{ width: 300, height: 200, resizeMode: "contain" }}
            src={backend_url + el.imageUrl}
          />
        </View>
      ))}
    </View>
  );
}
