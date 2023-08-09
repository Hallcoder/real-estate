import apartment from "../assets/apartment.jpg";
import { CiGrid42 } from "react-icons/ci";
import {MdLocationPin} from "react-icons/md";
import { TbBed,TbBath } from "react-icons/tb";
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
  return (
    <div className="flex flex-col rounded-md cursor-pointer  m-2 shadow-md">
      <div className="relative ">
        <img src={apartment} alt="apartment view" className="shadow-md" />
        <button className="bg-[#333333] p-3 text-white top-[87%] left-[38%] rounded-md absolute">
          ${price}
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
          <div className="flex items-center justify-around w-4/12">
            <TbBed />{amenities.bed}
            <TbBath />{amenities.bath}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
