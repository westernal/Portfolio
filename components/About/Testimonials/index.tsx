/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import Image from "next/image";
import { testimonials } from "../../../data/testimonials";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="testimonials">
      <Carousel ssr autoPlay infinite responsive={responsive}>
        {testimonials.map((item) => (
          <section className="testimonial-card" key={item.id}>
            <div className="testimonial flex">
              <div className="flex">
                {" "}
                <div className="testimonial-img">
                  <Image
                    src={item.avatar}
                    width={60}
                    height={60}
                    alt="Profile picture"
                  />
                </div>
                <div className="testimonial-title">
                  <p id="name">{item.name}</p>
                  <p className="testimonial-titles">{item.role}</p>
                </div>
              </div>
            </div>
            <div className="testimonial-info">
              <p>{item.description}</p>
            </div>
          </section>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;
