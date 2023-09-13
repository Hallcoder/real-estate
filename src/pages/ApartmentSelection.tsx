import { useEffect, useState } from "react";
import { buildImage, client } from "../utils/constants";
import { useNavigate, useParams } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";
import Footer from "../components/Footer";

function ApartmentSelection() {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  const [apartments, setApartments] = useState<any[]>([]);
  const handleClick = (item: any) => {
    localStorage.setItem("currentApartment", JSON.stringify(item));
    let breadcrumbData = JSON.parse(
      localStorage.getItem("breadCrumbData") as string
    );
    breadcrumbData.push({
      label: item.apartmentNumber,
      link: `/apartment/${params.blockNumber}`,
    });
    localStorage.setItem(
      "breadCrumbData",
      JSON.stringify([...new Set(breadcrumbData)])
    );
    navigate(`/apartment/${params.blockNumber}`);
  };

  useEffect(() => {
    const handlePopstate = (e) => {
      e.preventDefault();
      let breadCrumbData = JSON.parse(
        localStorage.getItem("breadCrumbData") as string
      );
      breadCrumbData.pop();
      localStorage.setItem(
        "breadCrumbData",
        JSON.stringify([...new Set(breadCrumbData)])
      );
    };
    client
      .fetch(`*[_type == 'apartment' && _id == '${params.id}']`)
      .then((data) => {
        let block = data[0].blocks.find(
          (block: any) => block.blockNumber == params.blockNumber
        );
        if (block) {
          setApartments(block.apartments);
        }
        setLoading(false);
      });
    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  return !loading ? (
    <div className="flex flex-col items-center w-full flex-wrap mt-10  rounded-md">
      <h1 className="mx-auto my-2 text-3xl font-bold">Select an apartment</h1>
      <div className="flex items-center sm:flex-row flex-col h-full justify-center">
        {apartments.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer w-2/3 sm:w-1/3 sm:h-[40vh] m-2"
            onClick={() => handleClick(item)}
          >
            <img
              src={buildImage(item.apartmentImages[0].asset._ref).url()}
              alt=""
              className="object-cover transition-transform transform-gpu hover:scale-105 hover:shadow-lg hover:shadow-black brightness-75 shadow-gray-400 shadow-md rounded-[2%] h-full w-full"
            />
            <p className="absolute w-3/6 bottom-[15%] left-[1%] font-semibold text-4xl text-white">
              Apartment {item.apartmentNumber}
            </p>
            <p className="absolute w-2/6 bottom-[5%] left-[1%] font-semibold text-lg text-white">
              {item.features.rooms} rooms
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  ) : (
    <div className="flex items-center justify-center mt-[18vh]">
      <Hourglass colors={["black", "#333"]} />
    </div>
  );
}

export default ApartmentSelection;
