import { ReactElement } from "react";
import Header from "./Header/header";
import Image from "next/image";
import ShootingStars from "./Effects/shootingStars";
import HeadTags from "../../utils/headTags";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      <AnimatedCursor color="255,255,255" />
      <main className="home">
        <section className="background-animations">
          <div className="moon reveal">
            <Image
              src={"/Images/32dc9e08-9167-4792-b7a1-119df97022e4.svg"}
              alt="moon"
              width={150}
              height={150}
            />
          </div>
        </section>

        <ShootingStars />

        <HeadTags />

        {children}
      </main>
    </>
  );
};

export default Layout;
