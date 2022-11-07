import styled from "styled-components";

export const ChapterMenuStyles = styled.div`
  li {
    position: absolute;
    list-style: none;
    z-index: -1000;
    background: var(--main-highlight-gradient);
    border-radius: 50%;
    height: 4em;
    width: 4em;
    border: 0.25em solid var(--nav-grey);
  }

  .menu .active {
    position: absolute;
  }

  .active .top {
    background: white;
    transition: 0.5s;
    height: 4em;
    width: 4em;
    border-radius: 50%;
    border: 0.5em solid var(--nav-grey);
  }
  .active .top img {
    width: 1em;
  }

  .active li {
    display: flex;
    position: absolute;
    list-style: none;
    transition: 0.5s;
    transition-delay: calc(0.1s * var(--i));
    transform: rotate(calc(360deg / 8 * var(--i)));
    transform-origin: 150px;
    right: 260px;
    bottom: 100px;
    z-index: 1000;
  }

  .active li button {
    transform: rotate(calc(360deg / -8 * var(--i)));
  }
`;
