import { CiGrid42 } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdLocationPin, MdOutlineStarBorderPurple500 } from "react-icons/md";
import { TbBed, TbBath } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
// import withReactContent from "sweetalert2-react-content";
// import Swal from "sweetalert2";
type Props = {
  name: string;
  status: string;
  amenities: { bedrooms: number; baths: number };
  price: string | undefined;
  size: Number;
  id: string;
  location: string;
  width?: string;
  image: string;
  className: boolean;
  property:any;
  [key: string]: string | boolean | Number | object | undefined;
};
const PropertyCard: React.FC<Props> = ({
  price,
  image,
  status,
  amenities,
  name,
  id,
  className,
  size,
  location,
  width,
  property
}) => {
  // const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const handeClick = (e: any,property:any) => {
    e.preventDefault();
    if(property._type == "apartment"){
     navigate(`/blockSelection/${property._id}`)
    }
    navigate(`/${id}`);
  };
  return (
    <div
      className={`flex flex-col m-2 ${width ? "w-auto" : "sm:w-2/3"} border-4 ${
        className && "slider-item"
      } rounded-md min-h-fit h-[70vh] cursor-pointer  shadow-md`}
      onClick={(e) => handeClick(e,property)}
    >
      <div className="relative">
        <img
          src={image}
          alt="apartment view"
          className="shadow-md h-52 w-full"
        />
        {price && (
          <button className="bg-[#333333] p-3 w-7/12 text-white top-[87%] left-[21%] rounded-md absolute">
            ${price}
            {status.toLowerCase() == "sale" && " PER MONTH"}
          </button>
        )}
      </div>
      <div className="flex flex-col mt-10 justify-around items-center">
        <p className="text-orange-500 font-bold m-1">For {status}</p>
        <p className="font-semibold text-lg m-2">{name}</p>
        <hr />
        <p className="text-gray-400 flex items-center mb-2">
          <MdLocationPin />
          {location}
        </p>
        <div className="w-full h-[1px] bg-gray-200 mb-2"></div>
        <div className="flex justify-between w-full items-center p-3">
          <div className="flex ml-2">
            <CiGrid42 />
            <p className="text-xs">
              <strong className="font-semibold">{size.toString()}</strong> Sq M
            </p>
          </div>
          <button className="bg-white border-[#333333] border hover:text-white hover:bg-[#333333] p-4 text-xl rounded-full text-[#333333] font-semibold">
            <MdOutlineStarBorderPurple500 />
          </button>
          {amenities && (
            <div className="flex items-center justify-around w-4/12">
              <TbBed />
              {amenities.bedrooms}
              <button>+</button>
              <TbBath />
              {amenities.baths}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
