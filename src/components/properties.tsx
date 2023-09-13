import { useEffect, useState } from "react";
import PropertyCard from "./propertyCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { buildImage } from "../utils/constants";
interface Props {
  properties: any[];
}

const Properties: React.FC<Props> = ({ properties }) => {
  console.log("Properties", properties.length);
  const [slidesToShow, setSlidesToShow] = useState(1); // Default number of slides to show

  // Define your breakpoints and the number of slides to show at each breakpoint
  const breakpoints = [
    { breakpoint: 1024, slidesToShow: 4 },
    { breakpoint: 768, slidesToShow: 3},
    { breakpoint: 632, slidesToShow: 2},
    { breakpoint: 400, slidesToShow: 1 },
  ];

  // Update the number of slides to show based on the viewport width
  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      for (const breakpoint of breakpoints) {
        // Use for...of loop here
        if (screenWidth >= breakpoint.breakpoint) {
          setSlidesToShow(breakpoint.slidesToShow);
          return; // Exit the loop once a matching breakpoint is found
        }
      }
    };

    // Add a listener for window resize events
    window.addEventListener("resize", updateSlidesToShow);

    // Initial update
    updateSlidesToShow();

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);
  //  alert(slidesToShow)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Number of items to show at once
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 2000, // Duration for automatic sliding (2 seconds in this example)
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {properties.map((prop, index) => {
          return (
            <PropertyCard
              image={buildImage(prop.image.asset._ref).url()}
              id={prop._id}
              property={prop}
              className={true}
              name={prop.name}
              key={index}
              width="here"
              location={prop.address.fullAddress}
              size={prop.size}
              status={prop.status}
              price={prop.price}
              amenities={prop.amenities}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Properties;
