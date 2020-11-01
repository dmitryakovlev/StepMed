import React from "react";
import { FC } from "react";
import Carousel from "nuka-carousel";

const carouselData: Array<{
  id: number;
  link: string;
  alt: string;
  text: string;
}> = [
  {
    id: 0,
    link: "/images/Slide_1.jpg",
    alt: "Мы ценим ваше доверие",
    text: "Мы ценим ваше доверие",
  },
  {
    id: 1,
    link: "/images/Slide_2.jpg",
    alt: "Комфортные условия лечения",
    text: "Комфортные условия лечения",
  },
  {
    id: 2,
    link: "/images/Slide_3.jpg",
    alt: "Только качественные препараты",
    text: "Только качественные препараты",
  },
  {
    id: 3,
    link: "/images/Slide_4.jpg",
    alt: "Опытный персонал",
    text: "Опытный персонал",
  },
];

const CarouselImage: FC<{
  link: string;
  alt: string;
  text: string;
}> = ({ link, alt, text }) => (
  <div>
    <img className="header__carousel-img" src={link} alt={alt} />
    <p className="header__carousel-text">{text}</p>
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
        autoplayInterval={5000}
        speed={800}
      >
        {carouselData.map((carousel) => (
          <CarouselImage
            link={carousel.link}
            alt={carousel.alt}
            text={carousel.text}
            key={carousel.id}
          />
        ))}
      </Carousel>
    );
  }
}
