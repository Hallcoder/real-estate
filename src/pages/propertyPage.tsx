import { useEffect, useState } from "react";
import { CiGrid42 } from "react-icons/ci";
import { AiFillPrinter } from "react-icons/ai";
import { Audio } from "react-loader-spinner";
import SearchIcon from "@mui/icons-material/Search";
import BreadCrumb from "../components/breadcrumb";
import { buildImage, client, properties } from "../utils/constants";
import Gallery from "../components/Gallery";
import { TbBath, TbBed } from "react-icons/tb";
import Footer from "../components/Footer";
import {
  TwitterIcon,
  FacebookIcon,
  PinterestIcon,
  WhatsappIcon,
} from "react-share";
import {
  WhatsappShareButton,
  PinterestShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import BlankBar from "../components/BlankBar";
import BackToTopButton from "../components/BackToTop";
import NearBy from "../components/Nearby";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import SideFeaturedProperties from "../components/SideFeaturedProperties";
import AdditionalFeatures from "../components/AdditionalFeatures";
import Contact from "../components/Contact";
import Agent from "../components/Agent";
import { Fab } from "@mui/material";
import { useParams } from "react-router-dom";
const PropertyPage: React.FC<any> = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<object[]>([]);
  const [property, setProperty] = useState<any>({
    name: "",
    address: {},
    images: [],
    price: 0,
    amenities: {},
    agentInfo: {},
    description: "",
    status: "",
  });
  useEffect(() => {
    client
      .fetch(`*[_type == 'property' && _id =='${params.id}']`)
      .then((data) => {
        setProperty(data[0]);
        console.log(data);
        setLoading(false);       
      });
  }, []);

  // useEffect(() => {}, []);
  const MySwal = withReactContent(Swal);

  const OpenSharePopup = () => {
    MySwal.fire({
      title: <p>Share to your friends</p>,
      html: (
        <div className="gap-2">
          <TwitterShareButton
            children={
              <button className="m-2 flex items-center bg-[#00ACED] text-white p-2 rounded-sm">
                <TwitterIcon size={"26"} />
                Twitter
              </button>
            }
            url={"https://dreamhomes-ten.vercel.app"}
          />
          <FacebookShareButton
            children={
              <button className="m-2 flex items-center bg-[#3B5998] text-white p-2 rounded-sm">
                <FacebookIcon size={"26"} /> Facebook
              </button>
            }
            url={"https://dreamhomes-ten.vercel.app"}
          />
          <PinterestShareButton
            children={
              <button className="m-2 flex items-center bg-[#CB2128] text-white p-2 rounded-sm">
                <PinterestIcon size={"26"} /> Pinterest
              </button>
            }
            url={"https://dreamhomes-ten.vercel.app"}
            media={"https://dreamhomes-ten.vercel.app"}
          />
          <WhatsappShareButton
            children={
              <button className="m-2 flex items-center bg-[#25D366] text-white p-2 rounded-sm">
                <WhatsappIcon size={"26"} /> Whatsapp
              </button>
            }
            url={"https://dreamhomes-ten.vercel.app"}
          />
        </div>
      ),
    }).then(() => {
      return MySwal.fire(<p>Sharing is Caring!</p>);
    });
  };
  useEffect(() => {
    let images: Array<object> = [];
    for (var image of property.images) {
      console.log(image);
      images.push({
        image: buildImage(image.asset._ref).url(),
      });
    }
    setImages(images);
    console.log(typeof property.images);
  }, [property]);
  // const params = useParams();
  return !loading ? (
    <div className="bgImg flex flex-col sm:h-screen bg-white">
      <BreadCrumb
        breadCrumbData={JSON.parse(
          localStorage.getItem("breadCrumbData") as string
        )}
      />
      <p className="font-bold text-5xl flex items-center text-white m-8">
        {property.name}
      </p>
      <div className="sm:flex-row flex-col flex bg-white">
        <div className="bg-white mt-5 w-full sm:w-9/12">
          <p className="text-lg m-2">
            <strong>From ${property.price} -</strong> Apartment with good rooms
            nearby basic infrastructure and home facilities provided./ For{" "}
            <strong>{property.status.toUpperCase()}</strong>
          </p>
          <span className="flex justify-between my-4">
            <span className="flex">
              <p className="font-semibold m-1">
                <strong className="text-gray-400">Created:</strong> February 20,
                2022
              </p>
              <p className="font-semibold m-1">
                <strong className="text-gray-400">Last Updated:</strong> June
                21, 2023
              </p>
            </span>
            <span className="flex items-center justify-around w-16 mr-16 text-xl font-semibold cursor-pointer">
              <AiFillPrinter /> Print
            </span>
          </span>
          <div className="">
            <div className="flex my-4 justify-between w-full">
              <span className="flex items-center">
                <TbBath className="text-3xl" />
                <span className="flex m-2 flex-col">
                  <p className="font-semibold text-lg">
                    {property.amenities.baths}
                  </p>
                  <p>Baths</p>
                </span>
              </span>
              <span className="flex items-center">
                <TbBed className="text-3xl" />
                <span className="flex m-2 flex-col">
                  <p className="font-semibold text-lg">
                    {property.amenities.bedrooms}
                  </p>
                  <p>bedrooms</p>
                </span>
              </span>
              <span className="flex items-center">
                <CiGrid42 className="text-3xl" />
                <span className="flex m-2 flex-col">
                  <p className="font-semibold text-lg">{property.size}</p>
                  <p>Sq M</p>
                </span>
              </span>
              <button
                onClick={() => OpenSharePopup()}
                className="bg-blue-950 w-40 h-14 text-white p-2 rounded-md"
              >
                Share
              </button>
            </div>
          </div>
          <div className="my-5">
            <h1 className="text-start text-4xl m-4">
              <strong className="font-bold text-4xl ">GALLERY</strong>{" "}
            </h1>
          </div>
          <div className="flex w-full">
            <Gallery slides={images} />
          </div>
          <div className="sm:w-[75vw]">
            <BlankBar title={"Description"} />
            <p className="ml-2"> {property.description}</p>
            <BlankBar title="Address" />
            <span className="flex w-3/6 justify-between my-10">
              <ul className="ml-4 text-lg">
                <li>
                  <strong className="font-semibold">Address: </strong>
                  {property.address.fullAddress}
                </li>
                <li>
                  <strong className="font-semibold">City: </strong>
                  {property.address.city}
                </li>
                <li>
                  <strong className="font-semibold">District: </strong>
                  {property.address.district}
                </li>
                <li>
                  <strong className="font-semibold">Sector: </strong>
                  {property.address.sector}
                </li>
              </ul>
              <ul className="text-lg">
                <li>
                  <strong className="font-semibold">Road: </strong>
                  {property.address.street}
                </li>
                <li>
                  <strong className="font-semibold">Zip: </strong>
                  {property.address.zipCode}
                </li>
              </ul>
            </span>
            {true && (
              <div>
                <BlankBar title="What's Nearby" />
                <NearBy nearby={property.nearByFacilities} />
              </div>
            )}
            <div>
              <BlankBar title="Additional Features" />
              <AdditionalFeatures additional={property.additionalAmenities} />
            </div>
            <div>
              <Contact />
              <BlankBar title="Agent" />
              <Agent agentInfo={property.agentInfo} />
              <BlankBar />
            </div>
          </div>
          <BackToTopButton />
        </div>
        <div className="flex flex-col items-center">
          <SideFeaturedProperties properties={properties} />
        </div>
      </div>
      <span className="m-4 sticky bottom-2 mx-auto inline-block">
        <Fab color="inherit" variant="extended" aria-label="add">
          <SearchIcon />
          Search Property
        </Fab>
      </span>
      <Footer />
    </div>
  ) : (
    <div
      className={
        "flex items-center justify-center w-full mt-[10vh] sm:mt-[25vh]"
      }
    >
      <Audio color="black" />
    </div>
  );
};

export default PropertyPage;
