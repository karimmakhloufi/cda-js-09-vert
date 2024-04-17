import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

let backend_url = "/graphql";
/*

if (typeof window !== "undefined") {
  if (window.location.origin.startsWith("http://localhost")) {
    backend_url = "http://localhost:4000";
  } else {
    backend_url = "/graphql";
  }
}
*/

console.log("backend url", backend_url);

const httpLink = createHttpLink({
  uri: backend_url,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("jwt");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
