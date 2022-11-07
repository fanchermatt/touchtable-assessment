import { StoriesStyles } from "./Stories.styles";
import Story from "../Story/Story";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import NavigationUI from "../NavigationUI/NavigationUI";

const Stories = (stories) => {
  /* stories is passed as an object, transform it back to an array in order to use map later */
  const data = Object.values(stories.stories[0]);

  return (
    <StoriesStyles>
      <Swiper
        spaceBetween={0}
        slidesPerView={"auto"}
        centeredSlides={true}
        allowTouchMove={false}
        onSlideChange={() => {}}
        loop={true}
        modules={[Pagination]}
        pagination={{
          type: "fraction",
        }}
      >
        {/* Map through and create story for each story given*/}
        {data.map((story) => (
          <SwiperSlide>
            <Story key={story.id} data={story} />
          </SwiperSlide>
        ))}
        {/* Call NavigationUI from inside swiper to pass context down to useSwiper to be able to navigate*/}
        <NavigationUI></NavigationUI>
      </Swiper>
    </StoriesStyles>
  );
};

export default Stories;
