import type { NextPage } from "next";
import About from "../components/about";
import Skills from "../components/skills";
import Jobs from "../components/recentJobs";
import Socials from "../components/socials";
import Blog from "../components/blog";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Projects from "../components/projects";
import Image from "next/image";

const Home: NextPage = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <div className="home" style={{ width: "100%", height: "100%" }}>
      <Parallax ref={parallax} pages={6}>
        <ParallaxLayer
          offset={2.4}
          speed={1}
          style={{ backgroundColor: "#87ceeb" }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={6}
          style={{
            backgroundImage: "url(/Images/stars.svg)",
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer offset={2.4} speed={0.8} style={{ opacity: 0.4 }}>
          <div style={{ display: "block", width: "20%", marginLeft: "55%" }}>
            <Image
              src={"/Images/sun-shining-in-the-sky-by-Vexels.svg"}
              alt={"sun"}
              width={150}
              height={150}
            />
          </div>
          <div style={{ display: "block", width: "10%", marginLeft: "15%" }}>
            <Image
              src={"/Images/cloud.svg"}
              alt="cloud"
              width={120}
              height={70}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.75} speed={0.5} style={{ opacity: 0.1 }}>
          <div style={{ display: "block", marginLeft: "70%" }}>
            <Image
              src={"/Images/cloud.svg"}
              alt="cloud"
              width={120}
              height={70}
            />
          </div>
          <div style={{ display: "block", width: "20%", marginLeft: "40%" }}>
            <Image
              src={"/Images/cloud.svg"}
              alt="cloud"
              width={120}
              height={70}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
          <div style={{ display: "block", width: "10%", marginLeft: "10%" }}>
            <Image
              src={"/Images/cloud.svg"}
              alt="cloud"
              width={120}
              height={70}
            />
          </div>
          <div style={{ display: "block", width: "20%", marginLeft: "75%" }}>
            <Image
              src={"/Images/cloud.svg"}
              alt="cloud"
              width={120}
              height={70}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <div style={{ display: "block", width: "20%", marginLeft: "60%" }}>
            <Image
              src={"/Images/cloud.svg"}
              alt="cloud"
              width={120}
              height={70}
            />
          </div>
          <div style={{ display: "block", width: "25%", marginLeft: "30%" }}>
            <Image
              src={"/Images/cloud.svg"}
              alt="cloud"
              width={120}
              height={70}
            />
          </div>
          <div style={{ display: "block", width: "10%", marginLeft: "80%" }}>
            <Image
              src={"/Images/server.svg"}
              alt="server"
              width={120}
              height={90}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.2} speed={-0.1} style={{ opacity: 0.4 }}>
          <div style={{ display: "block", width: "10%", marginLeft: "80%" }}>
            <Image
              src={"/Images/cloud.svg"}
              alt="cloud"
              width={120}
              height={70}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0.4} style={{ opacity: 0.6 }}>
          <p id="song">
            Cause you{"'"}re a sky, you{"'"}re a sky full of stars
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 0.6 }}>
          <div
            style={{
              display: "block",
              width: "20%",
              marginLeft: "75%",
              marginTop: "5%",
            }}
          >
            <Image
              src={"/Images/32dc9e08-9167-4792-b7a1-119df97022e4.svg"}
              alt="moon"
              width={150}
              height={150}
            />
          </div>
          <div
            style={{
              display: "block",
              width: "10%",
              marginLeft: "10%",
              marginTop: "5%",
            }}
          >
            <Image
              src={"/Images/cloud.svg"}
              alt="cloud"
              width={120}
              height={70}
            />
          </div>

          <div
            style={{
              display: "block",
              width: "15%",
              marginLeft: "5%",
              marginTop: "20%",
            }}
          >
            <Image
              src={"/Images/bash.svg"}
              alt="bash"
              width={120}
              height={90}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <About />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1}>
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.1}>
          <Skills />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Jobs />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.1}>
          <Blog />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Socials />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
