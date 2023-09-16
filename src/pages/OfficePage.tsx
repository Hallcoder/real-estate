import { useEffect, useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { Audio } from "react-loader-spinner";
import SearchIcon from "@mui/icons-material/Search";
import BreadCrumb from "../components/breadcrumb";
import { buildImage, properties } from "../utils/constants";
import Gallery from "../components/Gallery";
import { TbBrandOffice, TbSpace } from "react-icons/tb";
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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import SideFeaturedProperties from "../components/SideFeaturedProperties";
import AdditionalFeatures from "../components/AdditionalFeatures";
import Contact from "../components/Contact";
import Agent from "../components/Agent";
import { Fab } from "@mui/material";
import { CiGrid42 } from "react-icons/ci";
import Nearby from "../components/Nearby";
const OfficePage: React.FC<any> = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<object[]>([]);
  const [office, setOffice] = useState<any>();
  useEffect(() => {
    let office = JSON.parse(
      localStorage.getItem("currentProperty") as string
    );
    console.log('Office',office);
    setOffice(office);
    setLoading(false);
  }, []);
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
    console.log("gpt here", office);
    if (office) {
      let images: Array<object> = [];
      for (var image of office.images) {
        console.log(image);
        images.push({
          image: buildImage(image.asset._ref).url(),
        });
      }
      setImages(images);
    }
  }, [office]);

  const getBreadCrumbData = () => {
    let data: any[] = JSON.parse(
      localStorage.getItem("breadCrumbData") as string
    );
    data.push({
      label: office.name,
      link: `/office/${office._id}`,
    });
    return data;
  };
  // const params = useParams();
  return !loading ? (
    <div className="bgImg flex flex-col sm:h-screen bg-white">
      <BreadCrumb breadCrumbData={getBreadCrumbData()} />
      <p className="font-bold text-5xl flex items-center text-white m-8">
        {office.name}
      </p>
      <div className="sm:flex-row flex-col flex bg-white">
        <div className="bg-white mt-5 w-full sm:w-9/12">
          <p className="text-lg m-2">
            <strong>From ${office.price} -</strong> Apartment with good rooms
            nearby basic infrastructure and home facilities provided./ For{" "}
            <strong>{office.status}</strong>
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
                <TbBrandOffice className="text-3xl" />
                <span className="flex m-2 flex-col">
                  <p className="font-semibold text-lg">
                    {office.amenities.meetingRooms}
                  </p>
                  <p>Meeting rooms</p>
                </span>
              </span>
              <span className="flex items-center">
                <TbSpace className="text-3xl" />
                <span className="flex m-2 flex-col">
                  <p className="font-semibold text-lg">
                    {office.amenities.offices}
                  </p>
                  <p>Office Rooms</p>
                </span>
              </span>
              <span className="flex items-center">
                <CiGrid42 className="text-3xl" />
                <span className="flex m-2 flex-col">
                  <p className="font-semibold text-lg">{office.size}</p>
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
            <p className="ml-2"> {office.description}</p>
            <BlankBar title="Address" />
            <span className="flex w-3/6 justify-between my-10">
              <ul className="ml-4 text-lg">
                <li>
                  <strong className="font-semibold">Address: </strong>{office.address.fullAddress}
                </li>
                <li>
                  <strong className="font-semibold">City: </strong>{office.address.city}
                </li>
                <li>
                  <strong className="font-semibold">District: </strong>{office.address.district}
                </li>
                <li>
                  <strong className="font-semibold">Sector: </strong>{office.address.sector}
                </li>
              </ul>
              <ul className="text-lg">
                <li>
                  <strong className="font-semibold">Road: </strong>{office.address.street}
                </li>
                <li>
                  <strong className="font-semibold">Zip: </strong>{office.address.zipCode}
                </li>
              </ul>
            </span>
            {office.nearByFacilities && (
              <div>
                <BlankBar title="What's Nearby" />
                <Nearby nearby={office.nearByFacilities} />
              </div>
            )}
            <div>
              <BlankBar title="Additional Features" />
              <AdditionalFeatures
                additional={office.additionalAmenities}
              />
            </div>
            <div>
              <Contact property={office}/>
              <BlankBar title="Agent" />
              <Agent agentInfo={office.agentInfo} />
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

export default OfficePage;
