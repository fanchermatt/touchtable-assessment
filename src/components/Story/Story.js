import React from "react";
import Card from "../Card/Card";
import { StoryStyles } from "./Story.styles";

const Story = (data) => {
  const root = data.data;
  return (
    <StoryStyles>
      <Card
        content={
          <React.Fragment>
            <div className='imgPlaceholder'></div>
            <h2>{root.headline}</h2>
            <p>{root.summary}</p>
            <p className='hidden' data-id={root.id}></p>
          </React.Fragment>
        }
      />
    </StoryStyles>
  );
};

export default Story;
