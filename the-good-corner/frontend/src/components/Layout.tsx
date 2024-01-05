import { ReactNode } from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTH_INFO } from "@/graphql/queries/queries";
import { createContext } from "react";
import Header from "./Header";

export const UserContext = createContext({
  isLoggedIn: false,
  refetchLogin: () => {},
  role: "user",
});

const Layout = ({ children }: { children: ReactNode }) => {
  const { data, loading, error, refetch } = useQuery<{
    whoAmI: { isLoggedIn: boolean; role: string };
  }>(GET_AUTH_INFO);

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  if (data) {
    console.log("whoamidata", data);
    return (
      <UserContext.Provider
        value={{
          isLoggedIn: data.whoAmI.isLoggedIn,
          refetchLogin: refetch,
          role: data.whoAmI.role,
        }}
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
