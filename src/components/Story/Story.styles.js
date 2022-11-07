import styled from "styled-components";

export const StoryStyles = styled.div`
  display: flex;

  .imgPlaceholder {
    width: 10em;
    height: 10em;
    background: var(--fpo-grey);
    border-radius: 10em;
    margin: 0 auto;
    margin-bottom: 2em;
    margin-top: 2em;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.5em;
    text-align: center;
    letter-spacing: 0.02em;
    color: var(--text-grey);
  }
  h2 {
    width: 100%;
    text-align: center;
    font-size: 2em;
    font-weight: 700;
    color: var(--main-bg);
  }
  .hidden {
    display: none;
  }
`;
