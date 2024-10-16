import CarouselSlider from 'components/CarouselSlider';
import { AppContext } from 'context/ContextProvider';
import { Featured } from 'context/types';
import getChoosenFromStorage from 'helpers/getChoosenFromStorage';
import sortByDate from 'helpers/sortByDate';
import sortByPopupularity from 'helpers/sortByPopupularity';
import storeSelectedMovies from 'helpers/storeSelectedMovies';
import { useContext } from 'react';
function setUrlImage(imagePath: string) {
  return require(`assets/${imagePath}`);
}
const SliderSection = ({ items }: { items: any[] | null }) => {
  const { state, dispatch }: any = useContext(AppContext);
  const sortedByDate = sortByDate(state.TendingNow);

  return (
    <section aria-labelledby='trending-now' className='-mt-8'>
      <h3 id='trending-now' className='text-[#f1f1f1] ml-2 text-2xl'>
        Trending Now
      </h3>
      <CarouselSlider
        items={sortedByDate}
        renderItem={(item) => {
          return (
            <img
              src={setUrlImage(item.CoverImage)}
              className='min-w-36 object-cover w-full select-none'
              draggable={false}
              onClick={() => {
                storeSelectedMovies(item.Id);
                dispatch({ type: Featured.SELECT, payload: item });
              }}
            />
          );
        }}
      />
    </section>
  );
};

export default SliderSection;
