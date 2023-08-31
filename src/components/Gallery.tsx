import { useState, useRef, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
interface SplideInstance {
  splide: any;
  sync: any;
  go: (index: number) => void;
  // sync:();
}

const Gallery:React.FC<{slides:any}> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSliderRef = useRef<SplideInstance>(null);
  const thumbnailSliderRef = useRef<SplideInstance>(null);

  const handleThumbnailClick = (index:number) => {
    setCurrentSlide(index);
    mainSliderRef.current!.go(index);
  };

  useEffect(() => {
    thumbnailSliderRef.current!.sync(mainSliderRef.current!.splide);
  }, []);

  return (
    <div className="gallery-container w-11/12 ml-2 rounded-md">
      <Splide
        options={{
          type: 'fade',
          perPage: 1,
          pagination: true,
          autoWidth: false,
          start:3,
          cover: true,
          heightRatio: 0.6,
        }}
        ref={mainSliderRef}
        onMove={(splide:any) => setCurrentSlide(splide.index)}
      >
        {slides.map((slide:any, index:number) => (
          <SplideSlide key={index}>
            <img src={slide.image} alt={`Slide ${index}`} className="gallery-image" />
          </SplideSlide>
        ))}
      </Splide>
      <div className="relative flex items-center justify-center mt-4">
        <Splide
          options={{
            type: 'slide',
            perPage: 4,
            focus: 'center',
            pagination: false,
            arrows: false,
            breakpoints: {
              640: {
                perPage: 3,
              },
            },
          }}
          className="gallery-thumbnails"
          ref={thumbnailSliderRef}
        >
          {slides.map((slide:any, index:number) => (
            <SplideSlide key={index}>
              <img
                src={slide.image}
                alt={`Thumbnail ${index}`}
                className={`thumbnail-image h-28 w-40 rounded-md cursor-pointer ${
                  currentSlide === index ? 'border-2 border-blue-500' : 'border border-gray-300 brightness-50'
                }`}
                onClick={() => handleThumbnailClick(index)}
              />
            </SplideSlide>
          ))}
        </Splide>
        
      </div>
    </div>
  );
};

export default Gallery;
