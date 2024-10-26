/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import { testimonials } from "../../../data/testimonials";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { IconArrowLeft, IconArrowRight } from "../../../utils/icons";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={testimonials.length}
        isIntrinsicHeight={true}
        interval={5000}
        infinite
        isPlaying
      >
        <Slider>
          {testimonials.map((item) => (
            <Slide index={item.id} key={item.id}>
              <section className="testimonial-card">
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

                  <div className="flex control-btns">
                    {/* prevent user go back or next if there is not any testimonial left */}

                    <ButtonBack>
                      <div className="button-previus">
                        <IconArrowLeft />
                      </div>
                    </ButtonBack>

                    <ButtonNext>
                      <div className="button-next">
                        <IconArrowRight />
                      </div>
                    </ButtonNext>
                  </div>
                </div>
                <div className="testimonial-info">
                  <p>{item.description}</p>
                </div>
              </section>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </section>
  );
};

export default Testimonials;
