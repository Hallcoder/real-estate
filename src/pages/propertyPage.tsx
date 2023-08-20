import { useEffect } from "react";
import { CiGrid42 } from "react-icons/ci";
import BreadCrumb from "../components/breadcrumb";
import { slides } from "../utils/constants";
import Gallery from "../components/Gallery";
const PropertyPage: React.FC<any> = () => {
  
  useEffect(() => {}, []);
  return (
    <div className="bgImg flex flex-col h-auto">
      <BreadCrumb name={"Kibagabaga"} />
      <p className="font-bold text-5xl flex items-center text-white m-10">
        Kibagabaga Apartments
      </p>
      <div className=" bg-white mt-40">
        <p className="text-lg m-2">
          <strong>From $1300 -</strong> Apartment with good rooms nearby basic
          infrastructure and home facilities provided./ For RENT
        </p>
        <span className="flex justify-start ">
          <p className="font-semibold m-1">
            <strong className="text-gray-400">Created:</strong> February 20,
            2022
          </p>
          <p className="font-semibold m-1">
            <strong className="text-gray-400">Last Updated:</strong> June 21,
            2023
          </p>
        </span>
        <div>
          <div>
            <span>
              <CiGrid42 className="text-6xl" />
            </span>
            <span></span>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="my-5">
          <h1 className="text-start text-4xl m-4">
            <strong className="font-bold text-4xl ">GALLERY</strong>{" "}
          </h1>
        </div>
        <Gallery slides={slides}/>
      </div>
    </div>
  );
};

export default PropertyPage;
