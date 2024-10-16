import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import ButtonUi from 'components/ButtonUI';
import formatTime from 'helpers/toDateFormat';
import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from 'context/ContextProvider';

const SelectedMovieSection = () => {
  const {
    state: { Featured }
  }: any = useContext(AppContext);
  const coverImagePath = require(`assets/${Featured.CoverImage}`);
  const titleImagePath = require(`assets/${Featured.TitleImage}`);
  const [isVideo, setIsVideo] = useState('');
  const videRef = useRef<null | HTMLVideoElement>(null);
  const timeOutRef = useRef<any>(0);

  useEffect(() => {
    if (Featured.VideoUrl) {
      timeOutRef.current = setTimeout(() => {
        setIsVideo(Featured.VideoUrl);
      }, 2000);
    }
    return () => {
      clearTimeout(timeOutRef.current);
    };
  }, [Featured]);
  useEffect(() => {
    if (isVideo && videRef.current) {
      videRef.current.play();
    }
  }, [isVideo]);
  return (
    <section className='w-full'>
      <div
        className='w-full bg-cover bg-no-repeat min-h-96 flex flex-col justify-center items-start h-full'
        style={{ backgroundImage: !isVideo ? `url(${coverImagePath})` : '' }}
      >
        {isVideo && (
          <div className=' w-full flex justify-center items-center'>
            <video ref={videRef} style={{ height: '320px' }}>
              <source src={isVideo} type='video/mp4' />
              <source src='movie.ogg' type='video/ogg' />
            </video>
          </div>
        )}
        {!isVideo && (
          <div>
            <p className='text-gray-500'>{Featured.Category}</p>
            <p className='text-white'>
              {Featured.ReleaseYear}&nbsp;
              {Featured.MpaRating}&nbsp;
              {formatTime(Number(Featured.Duration) || 0)}
            </p>
            <p className='text-white'>{Featured.Description}</p>
            <img src={titleImagePath} alt={Featured.Title} className='w-96' />
          </div>
        )}
        {!isVideo && (
          <div className='flex mt-5'>
            <ButtonUi onClick={() => {}} className=' bg-white'>
              <FontAwesomeIcon icon={faPlay} />
              <span> Play</span>
            </ButtonUi>
            <ButtonUi
              onClick={() => {}}
              className=' text-white ml-2 bg-gradient-to-r from-[#2727F5] to-[#001671]'
            >
              More Info
            </ButtonUi>
          </div>
        )}
      </div>
    </section>
  );
};

export default SelectedMovieSection;
