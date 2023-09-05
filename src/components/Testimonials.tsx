import { useState, useEffect } from "react";

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment currentIndex to scroll to the next testimonial
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Adjust the interval as needed (e.g., 5000ms = 5 seconds)

    return () => clearInterval(interval);
  }, [testimonials]);

  // Function to display three testimonials in a row
  const displayThreeTestimonials = () => {
    const displayedTestimonials = [];

    for (let i = 0; i < 3; i++) {
      const testimonialIndex = (currentIndex + i) % testimonials.length;
      const testimonial = testimonials[testimonialIndex];

      (displayedTestimonials as Array<any>).push(
        <div key={testimonialIndex} className="w-1/3">
          <div className="p-4 rounded-lg">
            <div className="text-4xl text-gray-500 mb-4">
            </div>
            <p className="text-lg mb-4">{testimonial.quote}</p>
            <p className="text-lg font-semibold">
              - {testimonial.name}, {testimonial.occupation}
            </p>
          </div>
        </div>
      );
    }

    return displayedTestimonials;
  };

  return (
    <div className="flex flex-wrap gap-2 border">
      {displayThreeTestimonials()}
    </div>
  );
};

export default Testimonials;
