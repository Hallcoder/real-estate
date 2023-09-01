import { useEffect } from "react";
import { CiGrid42 } from "react-icons/ci";
import { AiFillPrinter } from "react-icons/ai";
import BreadCrumb from "../components/breadcrumb";
import { properties, slides } from "../utils/constants";
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
// import { useParams } from "react-router-dom";
const PropertyPage: React.FC<any> = () => {
  useEffect(() => {}, []);
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

  const nearby = ["hospital", "school", "restaurant"];
  // const params = useParams();
  return (
    <div className="bgImg flex flex-col h-screen bg-white">
      <BreadCrumb name={"Kibagabaga"} />
      <p className="font-bold text-5xl flex items-center text-white m-8">
        Kibagabaga Apartments
      </p>
      <div className="flex bg-white">
        <div className="bg-white mt-5 w-9/12">
          <p className="text-lg m-2">
            <strong>From $1300 -</strong> Apartment with good rooms nearby basic
            infrastructure and home facilities provided./ For RENT
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
                  <p className="font-semibold text-lg">4</p>
                  <p>Baths</p>
                </span>
              </span>
              <span className="flex items-center">
                <TbBed className="text-3xl" />
                <span className="flex m-2 flex-col">
                  <p className="font-semibold text-lg">8</p>
                  <p>bedrooms</p>
                </span>
              </span>
              <span className="flex items-center">
                <CiGrid42 className="text-3xl" />
                <span className="flex m-2 flex-col">
                  <p className="font-semibold text-lg">1200</p>
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
          <div className="flex  w-full">
            <Gallery slides={slides} />
          </div>
          <div className="w-[75vw]">
            <BlankBar title={"Description"} />
            <p className="ml-2">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
              eos! Corporis reprehenderit nulla culpa, magni repudiandae iste
              tempora, odio repellendus nesciunt molestiae itaque aliquid error
              beatae, corrupti sunt tempore est.
              <br />
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam iste officiis reprehenderit a. Dicta incidunt, dolore
              dolorum veritatis a dignissimos id possimus odit, neque, adipisci
              dolores fuga quam at nostrum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
              <br />
              <br /> Deleniti, distinctio dolor quidem laborum impedit veniam
              nobis laudantium quo, asperiores omnis magnam ullam at optio a
              architecto. Ullam fuga reprehenderit nulla.
            </p>
            <BlankBar title="Address" />
            <span className="flex w-3/6 justify-between my-10">
              <ul className="ml-4 text-lg">
                <li>
                  <strong className="font-semibold">Address: </strong>Kigali,
                  Kibagabaga, Rwanda
                </li>
                <li>
                  <strong className="font-semibold">City: </strong>Kigali
                </li>
                <li>
                  <strong className="font-semibold">District: </strong>Gasabo
                </li>
                <li>
                  <strong className="font-semibold">Sector: </strong>Kibagabaga
                </li>
              </ul>
              <ul className="text-lg">
                <li>
                  <strong className="font-semibold">Road: </strong>KG 245 ST
                </li>
                <li>
                  <strong className="font-semibold">Zip: </strong>250
                </li>
              </ul>
            </span>
            {true && (
              <div>
                <BlankBar title="What's Nearby" />
                <NearBy nearby={nearby} />
              </div>
            )}
            <div>
              <BlankBar title="Additional Features" />
              <AdditionalFeatures />
            </div>
            <div>
              <Contact />
              <BlankBar title="Agent" />
              <Agent />
            </div>
          </div>
          <BackToTopButton />
        </div>
        <div>
          <SideFeaturedProperties properties={properties} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyPage;
