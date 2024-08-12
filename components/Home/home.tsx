import Link from "next/link";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <section className="about center" id="home-page">
      <section className="info ">
        <div className="flex name">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="first-name"
          >
            ALI
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="last-name"
          >
            NAVIDI
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="title "
        >
          Frontend Developer
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          viewport={{ once: true }}
          className="  resume-btn column-mobile"
        >
          <Link href="/Ali Navidi Resume.pdf" download={true} id="resume">
            <button className="btn secondary-btn  from-top resume ">
              Resume
            </button>
          </Link>
          <Link href="mailto:ali_navidi24@yahoo.com?subject=Hi Ali, I Want to Hire You!">
            <button className="btn  from-top resume ">Hire Me</button>
          </Link>
        </motion.div>
      </section>
    </section>
  );
};

export default HomePage;
