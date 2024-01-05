import { ReactNode } from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTH_INFO } from "@/graphql/queries/queries";
import { createContext } from "react";
import Header from "./Header";

export const UserContext = createContext({
  isLoggedIn: false,
  refetch: () => {},
});

const Layout = ({ children }: { children: ReactNode }) => {
  const { data, loading, error, refetch } = useQuery<{
    whoAmI: { isLoggedIn: boolean };
  }>(GET_AUTH_INFO, {
    onCompleted: () => {
      console.log("fetch login");
    },
  });

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Loading</p>;
  }
  if (data) {
    console.log("auth data", data.whoAmI);
    return (
      <UserContext.Provider
        value={{ isLoggedIn: data.whoAmI.isLoggedIn, refetch }}
      >
        <main className="main-content">
          <Header />
          {children}
        </main>
      </UserContext.Provider>
    );
  }
};
export default Layout;
