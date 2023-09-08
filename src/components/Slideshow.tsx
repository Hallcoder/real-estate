import Slider from 'react-slick';
import { motion } from 'framer-motion';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const NextArrow = (props) => (
    <div {...props} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer bg-black bg-opacity-50 px-2 py-1 rounded-full">
      <span>&#8594;</span>
    </div>
  );
  
  const PrevArrow = (props) => (
    <div {...props} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer bg-black bg-opacity-50 px-2 py-1 rounded-full">
      <span>&#8592;</span>
    </div>
  );
const Slideshow = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const Slide = ({ image, title, description, buttonText }) => (
    <div className="relative h-[90vh] w-full">
  <img src={image} alt={`Slide ${title}`} className="w-full h-full rounded-sm object-cover darkened-image" />
  <div className="absolute bottom-4 left-0 right-0 text-white text-center">
    <h2 className="text-4xl font-semibold mb-2">{title}</h2>
    <p className="text-2xl mb-4">{description}</p>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out"
    >
      {buttonText}
    </motion.button>
  </div>
</div>

  );

  

  return (
    <div className='w-full'> {/* Wrap the slider in a container */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Slide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
