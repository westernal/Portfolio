import { ReactElement } from "react";
import Header from "./Header/header";
import HeadTags from "../../utils/headTags";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <Header />
      <main className="home">
        <HeadTags />

        {children}
      </main>
    </div>
  );
};

export default Layout;
