import { ReactElement } from "react";
import Header from "./Header/header";
import HeadTags from "../../utils/headTags";
import { useEffect, useState } from "react";
import Loader from "./Loader/loader";

const Layout = ({ children }: { children: ReactElement }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);
  return loading ? (
    <Loader />
  ) : (
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
