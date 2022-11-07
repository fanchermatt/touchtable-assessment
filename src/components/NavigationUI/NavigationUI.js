import { NavigationStyles } from "./NavigationUI.styles";
import { useSwiper } from "swiper/react";
import ChapterMenu from "../ChapterMenu/ChapterMenu";
import Checkmark from "../../images/icon-checkmark.png";
import Ellipse from "../../images/icon-ellipse.png";
import LeftArrow from "../../images/icon-arrow-left.png";
import RightArrow from "../../images/icon-arrow-right.png";
import React, { useEffect } from "react";
import { getStories } from "../../hooks/getStories";
import { useContext } from "react";
import { StoryContext } from "../StoryContext/StoryContext";

const NavigationUI = () => {
  const swiper = useSwiper();
  //bring in storyID state to set on swiper slide next
  const { storyID, setStoryID, setActiveChapters, menuOpen } =
    useContext(StoryContext);

  //function to set storyID state when needed
  const getStoryContext = async () => {
    //get story id from data-id attribute of hidden <p> tag of active swiper object, if swiper.activeIndex is available
    if (swiper.activeIndex) {
      await setStoryID(
        swiper.slides[swiper.activeIndex]
          .querySelector(".hidden")
          .getAttribute("data-id")
      );
    }
  };

  const slideNext = async () => {
    await swiper.slideNext();
    getStoryContext();
  };

  const slidePrev = async () => {
    await swiper.slidePrev();
    getStoryContext();
  };

  //everytime storyID is updated, get the chapters from the API and set them
  useEffect(() => {
    //if storyID is null and swiper is active, we need to set the initial storyID
    if (storyID == null && swiper.activeIndex) {
      setStoryID(
        swiper.slides[swiper.activeIndex]
          .querySelector(".hidden")
          .getAttribute("data-id")
      );
    }
    let stories = { getStories };
    stories = Object.values(stories.getStories);
    if (storyID !== null) {
      setActiveChapters(stories.find((story) => story.id === storyID).chapters);
    }
  }, [
    storyID,
    setActiveChapters,
    setStoryID,
    swiper.slides,
    swiper.activeIndex,
  ]);

  return (
    <React.Fragment>
      <NavigationStyles>
        <div className='container'>
          <div className={menuOpen ? "innerContainerHidden" : "innerContainer"}>
            <ChapterMenu></ChapterMenu>
            {/*if menuOpen is true, remove menu so chapter menu can appear in place*/}
            {menuOpen ? null : (
              <>
                <div className='break'></div>
                <button className='middle arrow' onClick={slidePrev}>
                  <img alt='' src={LeftArrow} />
                </button>
                <button
                  className='middle check'
                  onClick={(e) => alert("playing story width id: " + storyID)}
                >
                  <img alt='' src={Checkmark} />
                </button>
                <button className='middle arrow' onClick={slideNext}>
                  <img alt='' src={RightArrow} />
                </button>
                <div className='break'></div>
                <button className='bottom'>
                  <img alt='' src={Ellipse} />
                </button>
              </>
            )}
          </div>
        </div>
      </NavigationStyles>
    </React.Fragment>
  );
};

export default NavigationUI;
