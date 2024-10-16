import { useContext } from 'react';
import SideBar from '../../components/SideBar';

import SelectedMovieSection from 'components/SelectedMovieSection';
import PageWrapper from 'pages/PageWrapper';
import SliderSection from 'components/SliderSection';
import { AppContext } from 'context/ContextProvider';
import sortByPopupularity from 'helpers/sortByPopupularity';
import getChoosenFromStorage from 'helpers/getChoosenFromStorage';

const HomePage = () => {
  const { state }: any = useContext(AppContext);

  return (
    <PageWrapper>
      <SideBar />
      <main className='w-full overflow-x-hidden ml-36'>
        <SelectedMovieSection />
        <SliderSection
          items={sortByPopupularity(state.TendingNow, getChoosenFromStorage())}
        />
      </main>
    </PageWrapper>
  );
};

export default HomePage;
