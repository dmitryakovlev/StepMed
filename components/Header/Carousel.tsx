import React from "react";
import Carousel from "nuka-carousel";

export default class extends React.Component {
  render() {
    return (
      <Carousel
        defaultControlsConfig={{
          nextButtonStyle: {
            textTransform: "none",
          },
          nextButtonClassName: "header__carousel-btn",
          nextButtonText: "Следующий",
          prevButtonStyle: {
            textTransform: "none",
          },
          prevButtonClassName: "header__carousel-btn",
          prevButtonText: "Предыдущий",
          pagingDotsContainerClassName: "header__carousel-dots",
          pagingDotsClassName: "header__carousel-dot",
        }}
      >
        <div className="header__carousel-img"></div>
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    );
  }
}
