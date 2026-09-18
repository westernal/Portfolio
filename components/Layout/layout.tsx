import Header from "./Header/header";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* Off-screen until focused. Without it, every keyboard visitor tabs
          through the header and all sixteen marquee logos before reaching
          the page itself. */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main className="home" id="main-content" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
