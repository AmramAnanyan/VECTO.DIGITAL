import { useState } from 'react';
import { HARDCODE_NAVBAR, INavigation } from './constant';
import {
  headerStyles,
  setActiveHeaderStyles,
  setActiveLiStyles
} from './styles';
const SideBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activIndex, setActivIndex] = useState(2);
  const handleMouseMove = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleNavigationClick = (id: number) => {
    setActivIndex(id);
  };
  return (
    <header
      className={`${headerStyles}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={setActiveHeaderStyles(isHovered)}
    >
      {isHovered && (
        <div className='flex justify-start items-center mb-8 w-52 ml-4 '>
          <img
            src='https://randomuser.me/api/portraits/men/15.jpg'
            alt=''
            className='w-10 h-10 rounded-full object-cover'
          />
          <span className='text-white font-bold ml-3 text-xl'>Daniel</span>
        </div>
      )}
      <nav>
        <ul className='flex flex-col items-center justify-between h-96'>
          {HARDCODE_NAVBAR.map(
            ({ icon, id, altText, className, imgSize, title }: INavigation) => {
              return (
                <li
                  key={id}
                  className={className}
                  onClick={() => handleNavigationClick(id)}
                  style={{
                    ...setActiveLiStyles(isHovered),
                    background: id === activIndex ? '#3B486D' : ''
                  }}
                >
                  <img
                    src={icon}
                    alt={altText}
                    className={`${imgSize} object-contain`}
                    style={{ marginLeft: isHovered ? '8px' : '' }}
                  />
                  {isHovered && (
                    <span className='text-white font-bold ml-3 text-xl'>
                      {title}
                    </span>
                  )}
                </li>
              );
            }
          )}
        </ul>
      </nav>
      {isHovered && (
        <div className='flex justify-start flex-col mb-8 w-52 text-start'>
          <p className='text-gray-400 font-bold ml-3 text-xl text-start'>
            LANGUAGE
          </p>
          <p className='text-gray-400 font-bold ml-3 text-xl'>GET HELP</p>
        </div>
      )}
    </header>
  );
};

export default SideBar;
