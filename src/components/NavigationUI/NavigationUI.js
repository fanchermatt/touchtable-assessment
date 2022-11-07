import { NavigationStyles } from "./NavigationUI.styles";
import { useSwiper } from "swiper/react";
import ChapterMenu from "../ChapterMenu/ChapterMenu";
import List from "../../images/icon-list.png";
import Ellipse from "../../images/icon-ellipse.png";
import LeftArrow from "../../images/icon-arrow-left.png";
import RightArrow from "../../images/icon-arrow-right.png";
import React from "react";
import { useContext } from "react";
import { StoryContext } from "../StoryContext/StoryContext";

const NavigationUI = () => {
  const swiper = useSwiper();
  //bring in storyID state to set on swiper slide next
  const { setStoryID } = useContext(StoryContext);

  const slideNext = () => {
    swiper.slideNext();
    setStoryID("");
  };

  const slidePrev = () => {
    swiper.slidePrev();
    setStoryID("");
  };
  return (
    <React.Fragment>
      <NavigationStyles>
        <div className='container'>
          <div className='innerContainer'>
            <button className='top' href=''>
              <img alt='' src={List} />
            </button>
            {/* breaks to get to next row */}
            <div className='break'></div>
            {/*on click, slide prev and set story id for later use */}
            <button className='middle arrow' onClick={slidePrev}>
              <img alt='' src={LeftArrow} />
            </button>

            {/*on click, slide next and set story id for later use */}
            <button className='middle arrow' onClick={slideNext}>
              <img alt='' src={RightArrow} />
            </button>
            {/* breaks to get to next row */}
            <div className='break'></div>
            <button className='bottom'>
              <img alt='' src={Ellipse} />
            </button>
          </div>
        </div>
      </NavigationStyles>
    </React.Fragment>
  );
};

export default NavigationUI;
