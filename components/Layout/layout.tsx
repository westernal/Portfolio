import { ReactElement } from "react";
import Header from "./Header/header";
import HeadTags from "../../utils/headTags";
import { useEffect, useState } from "react";
import Loader from "./Loader/loader";

const Layout = ({ children }: { children: ReactElement }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3100);
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
