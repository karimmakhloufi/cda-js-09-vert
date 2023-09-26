import { ReactNode } from "react";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="main-content">
      <Header />
      {children}
    </main>
  );
};
export default Layout;
