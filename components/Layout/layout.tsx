import Header from "./Header/header";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="home">{children}</main>
    </div>
  );
};

export default Layout;
