import searchIcon from 'assets/icons/ICON-Search.png';
import homeIcon from 'assets/icons/Group 46.png';
import videoIcon from 'assets/icons/Group 56.png';
import moviesIcon from 'assets/icons/Group 54.png';
import maskIcon from 'assets/icons/Group 53.png';
import timeIcon from 'assets/icons/Group 47.png';
import { ReactNode } from 'react';

export interface INavigation {
  id: number;
  icon: string;
  className: string;
  altText: string;
  imgSize: string;
  title: string;
}
export const HARDCODE_NAVBAR: INavigation[] = [
  {
    id: 1,
    icon: searchIcon,
    className: ' cursor-pointer min-w-14 h-14 flex justify-center items-center',
    altText: 'Search',
    imgSize: 'w-6 h-6',
    title: 'Search'
  },
  {
    id: 2,
    icon: homeIcon,
    className:
      ' cursor-pointer  min-w-14 h-14 flex justify-center items-center',
    altText: 'Home',
    imgSize: 'w-6 h-6',
    title: 'Home'
  },
  {
    id: 3,
    icon: videoIcon,
    className:
      ' cursor-pointer  min-w-14 h-14 flex justify-center items-center',
    altText: 'Video',
    imgSize: 'w-6 h-6',
    title: 'TV shows'
  },
  {
    id: 4,
    icon: moviesIcon,
    className: ' cursor-pointer min-w-14 h-14 flex justify-center items-center',
    altText: 'Movies',
    imgSize: 'w-6 h-6',
    title: 'Movies'
  },
  {
    id: 5,
    icon: maskIcon,
    className:
      ' cursor-pointer  min-w-14 h-14 flex justify-center items-center',
    altText: 'Mask',
    imgSize: 'w-6 h-6',
    title: 'Genres'
  },
  {
    id: 6,
    icon: timeIcon,
    className:
      ' cursor-pointer  min-w-14 h-14 flex justify-center items-center',
    altText: 'Time',
    imgSize: 'w-6 h-6',
    title: 'Watch Later'
  }
];
