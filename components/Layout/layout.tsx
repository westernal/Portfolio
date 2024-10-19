import { ReactElement, useCallback } from "react";
import Header from "./Header/header";
import HeadTags from "../../utils/headTags";
import { useState } from "react";
import Loader from "./Loader/loader";
import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ children }: { children: ReactElement }) => {
  const [loading, setLoading] = useState(true);

  const handleLoaderFinish = useCallback(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <AnimatePresence>
        {loading ? <Loader key="loader" onFinish={handleLoaderFinish} /> : null}
      </AnimatePresence>
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Header />
          <main className="home">
            <HeadTags />

            {children}
          </main>
        </motion.div>
      )}
    </>
  );
};

export default Layout;
