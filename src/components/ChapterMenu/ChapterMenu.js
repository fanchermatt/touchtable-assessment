import List from "../../images/icon-list.png";
import { StoryContext } from "../StoryContext/StoryContext";
import { useContext } from "react";
import { ChapterMenuStyles } from "./ChapterMenu.styles";

const ChapterMenu = () => {
  const { activeChapters } = useContext(StoryContext);

  const menu = () => {
    if (activeChapters) {
      return (
        <div className='menu'>
          <button className='top'>
            <img alt='' src={List} />
          </button>
          {Object.values(activeChapters).map((chapter, index) => (
            <li key={index} style={{ "--i": index }}>
              <button
                onClick={(e) =>
                  alert("Playing Chapter " + index + " - " + chapter)
                }
              >
                Chapter {index}
              </button>
            </li>
          ))}
        </div>
      );
    } else {
      return (
        <button className='top'>
          <img alt='' src={List} />
        </button>
      );
    }
  };

  const data = menu();
  return <ChapterMenuStyles>{data}</ChapterMenuStyles>;
};

export default ChapterMenu;
