import apartment from "../assets/apartment.jpg";
import { CiGrid42 } from "react-icons/ci";
import {MdLocationPin,MdOutlineStarBorderPurple500} from "react-icons/md";
import { TbBed,TbBath } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
type Props = {
  name: string;
  status: string;
  amenities: {bed:number,bath:number};
  price: string;
  size: Number;
  location:string;
};
const PropertyCard: React.FC<Props> = ({
  price,
  status,
  amenities,
  name,
  size,
  location
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-1/4 rounded-md cursor-pointer m-6 shadow-md" onClick={() => navigate('/propId')}>
      <div className="relative ">
        <img src={apartment} alt="apartment view" className="shadow-md" />
        <button className="bg-[#333333] p-3 w-7/12 text-white top-[87%] left-[21%] rounded-md absolute">
          ${price}{status.toLowerCase() == 'sale' && ' PER MONTH'}
        </button>
      </div>
      <div className="flex flex-col mt-10 justify-around items-center">
        <p className="text-orange-500 font-bold m-1">For {status}</p>
        <p className="font-semibold text-lg m-2">{name}</p>
        <hr />
        <p className="text-gray-400 flex items-center mb-2"><MdLocationPin />{location}</p>
        <div className="w-full h-[1px] bg-gray-200 mb-2"></div>
        <div className="flex justify-between w-full items-center p-3">
          <div className="flex ml-2">
            <CiGrid42 />
            <p className="text-xs">
              <strong className="font-semibold">{size.toString()}</strong> Sq M
            </p>
          </div>
        <button className="bg-white border-[#333333] border hover:text-white hover:bg-[#333333] p-4 text-xl rounded-full text-[#333333] font-semibold"><MdOutlineStarBorderPurple500 /></button>
          <div className="flex items-center justify-around w-4/12">
            <TbBed />{amenities.bed}
            <button >+</button>
            <TbBath />{amenities.bath}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
