import List from "../../images/icon-list.png";
import Close from "../../images/icon-x.png";
import { StoryContext } from "../StoryContext/StoryContext";
import { useContext } from "react";
import { ChapterMenuStyles } from "./ChapterMenu.styles";

const ChapterMenu = () => {
  const { activeChapters, menuOpen, setMenuOpen } = useContext(StoryContext);

  //toggle for menu open
  const handleMenu = (e) => {
    setMenuOpen((prev) => !prev);
    e.preventDefault();
  };

  const menu = () => {
    if (activeChapters) {
      return (
        <div className={menuOpen ? "menu active" : "menu"}>
          <button className='top' onClick={(e) => handleMenu(e)}>
            <img alt='' src={menuOpen ? Close : List} />
          </button>
          {Object.values(activeChapters).map((chapter, index) => (
            <li key={index} style={{ "--i": index }}>
              <button
                onClick={(e) =>
                  alert("Playing Chapter " + (index + 1) + " - " + chapter)
                }
              >
                Chapter {index + 1}
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
