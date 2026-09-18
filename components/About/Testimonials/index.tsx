"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "../../../data/testimonials";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: { breakpoint: { max: 4000, min: 1100 }, items: 2 },
  tablet: { breakpoint: { max: 1100, min: 700 }, items: 2 },
  mobile: { breakpoint: { max: 700, min: 0 }, items: 1 },
};

const Testimonials = () => {
  /** Set by the toggle below, and by the OS reduced-motion setting. */
  const [paused, setPaused] = useState(false);
  /** Auto-advancing quotes out from under someone reading them with a keyboard. */
  const [focusWithin, setFocusWithin] = useState(false);

  // The carousel's autoplay is a JS interval, so the `prefers-reduced-motion`
  // block in style.css — which only reaches CSS animations — never touched it.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setPaused(query.matches);

    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  const playing = !paused && !focusWithin;

  return (
    <section className="testimonials" aria-label="Recommendations">
      <h3 className="subheading">
        What people I&apos;ve worked with say
        <span className="subheading-note">
          {testimonials.length} recommendations from CEOs, designers and
          engineers
        </span>
      </h3>

      <div
        onFocusCapture={() => setFocusWithin(true)}
        onBlurCapture={() => setFocusWithin(false)}
      >
        {/* Arrows sit inside the track and land on top of the quote text, so
            navigation is dots + drag instead. */}
        <Carousel
          ssr
          infinite
          autoPlay={playing}
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
      </div>

      {/* WCAG 2.2.2: anything that moves on its own for more than five seconds
          needs a way to stop it that doesn't depend on hovering. */}
      <button
        type="button"
        className="carousel-toggle"
        onClick={() => setPaused((previous) => !previous)}
      >
        <span aria-hidden="true">{paused ? "▶" : "❚❚"}</span>
        {paused ? "Play recommendations" : "Pause recommendations"}
      </button>
    </section>
  );
};

export default Testimonials;
