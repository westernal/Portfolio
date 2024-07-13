import { ReactElement } from "react";
import Header from "./Header/header";
import HeadTags from "../../utils/headTags";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      <main className="home">
        <HeadTags />

        {children}
      </main>
    </>
  );
};

export default Layout;
