import Header from "./components/Header/Header";
import Stories from "./components/Stories/Stories";
import { getStories } from "./hooks/getStories";
import { StoryContext } from "./components/StoryContext/StoryContext";
import React, { useState } from "react";

function App() {
  //state to pass storyID for retrieval of information on the story in focus
  const [storyID, setStoryID] = useState(null);

  return (
    <React.Fragment>
      <StoryContext.Provider value={{ storyID, setStoryID }}>
        <Header />
        <Stories stories={getStories} />
      </StoryContext.Provider>
    </React.Fragment>
  );
}

export default App;
