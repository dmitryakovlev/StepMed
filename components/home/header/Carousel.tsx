import React from "react";
import { FC } from "react";
import Carousel from "nuka-carousel";
import Image from "next/image";
import { homeCarousel, HomeCarousel } from "@data";

const CarouselImage: FC<HomeCarousel> = (carousel) => (
  <div>
    <Image
      className="header__carousel-img"
      src={carousel.link}
      layout="fill"
      alt={carousel.alt}
    ></Image>
    <p className="header__carousel-text">{carousel.text}</p>
  </div>
);

export default class extends React.Component {
  render() {
    return (
      <Carousel
        defaultControlsConfig={{
          nextButtonText: "Следующий",
          prevButtonText: "Предыдущий",
        }}
        autoplay={true}
        wrapAround={true}
        easing="easeQuadIn"
        autoplayInterval={3000}
        speed={500}
      >
        {homeCarousel.map((carousel) => (
          <CarouselImage {...carousel} key={carousel.id} />
        ))}
      </Carousel>
    );
  }
}
