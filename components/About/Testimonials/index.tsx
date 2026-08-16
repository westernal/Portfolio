"use client";

import Image from "next/image";
import { testimonials } from "../../../data/testimonials";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: { breakpoint: { max: 4000, min: 1100 }, items: 2 },
  tablet: { breakpoint: { max: 1100, min: 700 }, items: 2 },
  mobile: { breakpoint: { max: 700, min: 0 }, items: 1 },
};

const Testimonials = () => {
  return (
    <section className="testimonials" aria-label="Recommendations">
      <h3 className="subheading">
        What people I&apos;ve worked with say
        <span className="subheading-note">
          {testimonials.length} recommendations from CEOs, designers and
          engineers
        </span>
      </h3>

      {/* Arrows sit inside the track and land on top of the quote text, so
          navigation is dots + drag instead. */}
      <Carousel
        ssr
        autoPlay
        infinite
        arrows={false}
        showDots
        autoPlaySpeed={7000}
        responsive={responsive}
        itemClass="testimonial-slide"
      >
        {testimonials.map((item) => (
          <figure className="testimonial-card" key={item.id}>
            <blockquote>
              <p>{item.description}</p>
            </blockquote>
            <figcaption className="testimonial-author">
              <div className="testimonial-img">
                <Image
                  src={item.avatar}
                  width={44}
                  height={44}
                  alt=""
                  sizes="44px"
                />
              </div>
              <div>
                <p className="testimonial-name">{item.name}</p>
                <p className="testimonial-role">{item.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;
