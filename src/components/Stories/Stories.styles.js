import styled from "styled-components";

export const StoriesStyles = styled.main`
  padding: 2rem;
  display: flex;
  justify-content: space-around;

  .swiper {
    padding: 3em 0 0 0;
    max-width: 90em;
    height: fit-content;
  }
  .swiper-slide {
    width: 20%;
  }

  .swiper-slide-active {
    z-index: 1000;
  }
  .swiper-slide-active > div {
  }
  .swiper-slide-active > div > div {
    padding-top: 5em;
    padding-bottom: 3em;
    transform: translateY(-3em);
  }

  .swiper-slide-previous {
    z-index: 100;
  }

  .swiper-slide-next {
    z-index: 100;
  }
  .swiper-pagination {
    font-style: normal;
    font-weight: 500;
    font-size: 1.5em;
    text-align: center;
    letter-spacing: 0.02em;
    color: var(--white);
    bottom: 0px;
    transform: translateY(-10rem);
  }
`;
