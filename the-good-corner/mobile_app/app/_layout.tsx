import { Stack } from "expo-router";
import Constants from "expo-constants";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";

export default function RootLayout() {
  let hostIP = "";
  if (Constants !== undefined) {
    if (Constants.expoConfig && Constants.expoConfig.hostUri) {
      hostIP = Constants.expoConfig.hostUri.split(`:`)[0];
    }
  }
  const client = new ApolloClient({
    uri: hostIP ? `http://${hostIP}:7000/graphql` : "http://produrl/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <ApolloProvider client={client}>
        <Stack>
          <Stack.Screen name="index" />
        </Stack>
      </ApolloProvider>
    </ApplicationProvider>
  );
}
