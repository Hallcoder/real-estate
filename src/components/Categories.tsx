import img1 from '../assets/apartment.jpg';
import img2 from '../assets/hero-bg.jpg';
import img3 from '../assets/hero-bg1.jpg';

const Categories = () => {
  const items = [
    { content: 'Apartments', cols: 2, image:img1}, // This item will span 2 columns
    { content: 'Residential Properties', cols: 1, image:img2 },
    { content: 'Hotels & Lodges', cols: 1, image:img3 },
    { content: 'Offices', cols: 2, image:img1 },
  ];

  return (
    <div className="sm:grid flex flex-wrap grid-cols-3 gap-6 mt-20 mx-8 rounded-md">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${
            item.cols === 2 ? 'col-span-2' : 'col-span-1'
          } `}
        >
          <div className="relative cursor-pointer sm:h-[60vh] m-2">
            <img src={item.image} alt="" className='object-fill transition-transform transform-gpu hover:scale-105 hover:shadow-lg hover:shadow-black shadow-gray-400 shadow-md rounded-[2%] h-full w-full'/>
            <p className='absolute w-2/6 bottom-[5%] left-[1%] font-semibold text-4xl text-white'>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
