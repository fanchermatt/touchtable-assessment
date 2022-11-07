import styled from "styled-components";

export const NavigationStyles = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .innerContainer {
    width: 7.5em;
    height: 7.5em;
    background: var(--nav-grey-gradient);
    border-radius: 50%;
    border: 0.5em solid var(--nav-grey);
    display: flex;
    align-items: center;

    flex-wrap: wrap;
    justify-content: space-around;

    box-shadow: 0px 10px 45px 5px rgba(26, 26, 26, 0.25);
    transition: 0.1s;
  }
  .innerContainerHidden {
    width: 7.5em;
    height: 7.5em;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 0.75em;
  }
  .container {
    padding-right: 7.5em;
  }

  .container img {
    width: 2em;
    height: auto;
    transform: translateY(2px);
  }

  .top {
    cursor: pointer;

    width: 100%;
    height: 2em;
  }
  .middle {
    cursor: pointer;
    height: 3.5em;
  }
  .check {
    background: var(--main-highlight-gradient);
    border-radius: 2em;
    border: 0.25em solid var(--nav-grey);
  }

  .arrow {
  }
  .arrow img {
    width: 1em;
    height: auto;
  }
  .bottom {
    cursor: pointer;
    width: 100%;
    height: 2em;
  }

  .break {
    flex-basis: 100%;
    height: 0;
  }
`;
