import { FC, ReactNode, useRef, useState } from 'react';

export interface ICarouselSlider {
  items: any[];
  renderItem: (...args: any) => ReactNode;
}

const CarouselSlider: FC<ICarouselSlider> = ({ items, renderItem }) => {
  const sliderItemRef = useRef<null | HTMLDivElement>(null);
  const [sliderIndex, setSliderIndex] = useState(8);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: any) => {
    if (sliderItemRef.current && sliderItemRef.current.offsetLeft) {
      setIsDragging(true);
      setStartX(e.pageX - sliderItemRef.current.offsetLeft); // Store mouse X position
      setScrollLeft(sliderItemRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return; // Stop movement if not dragging
    e.preventDefault();
    if (sliderItemRef.current && sliderItemRef.current.offsetLeft) {
      const currentMousePosition = e.pageX - sliderItemRef.current.offsetLeft;
      const walk = currentMousePosition - startX;
      sliderItemRef.current.scrollLeft = scrollLeft - walk;
      setSliderIndex(items.length);
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleScroll = () => {
    if (sliderItemRef.current) {
      if (sliderIndex <= items.length) {
        setSliderIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <div className=''>
      <div
        className='flex gap-3 overflow-x-scroll mx-3 cursor-grabbing'
        ref={sliderItemRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onScroll={handleScroll}
      >
        {items.slice(0, sliderIndex).map((item) => {
          return <div>{renderItem(item)}</div>;
        })}
      </div>
    </div>
  );
};

export default CarouselSlider;
