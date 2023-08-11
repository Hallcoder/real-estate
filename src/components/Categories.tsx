import img1 from '../assets/apartment.jpg';
import img2 from '../assets/hero-bg.jpg';
import img3 from '../assets/hero-bg1.jpg';

const Categories = () => {
  const items = [
    { content: 'Item 1', cols: 2, image:img1}, // This item will span 2 columns
    { content: 'Item 2', cols: 1, image:img2 },
    { content: 'Item 4', cols: 1, image:img3 },
    { content: 'Item 2', cols: 2, image:img1 },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-40 mx-8 rounded-md">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${
            item.cols === 2 ? 'col-span-2' : 'col-span-1'
          }`}
        >
          <div className="h-[60vh] m-2">
            <img src={item.image} alt="" className='object-fill rounded-[2  0%] h-full w-full'/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
