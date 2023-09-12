import { useEffect, useState } from "react";
import { buildImage, client } from "../utils/constants";
import { useParams } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";

function ApartmentSelection() {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [property, setProperty] = useState<any>({});
  const [apartments, setApartments] = useState<any[]>([]);
  const handleClick = () => {};
  useEffect(() => {
    client
      .fetch(`*[_type == 'apartment' && _id == '${params.id}']`)
      .then((data) => {
        setProperty(data[0]);
        // console.log(dat);
        let block = data[0].blocks.find(
          (block) => block.blockNumber == params.blockNumber
        );
        console.log("ByBlock", block);
        if (block) {
          setApartments(block.apartments);
        }
        console.log(apartments);

        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="sm:grid flex flex-wrap grid-cols-3 gap-6 mt-20 mx-8 rounded-md">
      <h1 className="mx-auto text-3xl font-bold">Select an apartment</h1>
      {apartments.map((item, index) => (
        <div key={index} className={`col-span-2`} onClick={() => handleClick()}>
          <div className="relative cursor-pointer sm:h-[60vh] m-2">
            <img
              src={buildImage(item.apartmentImages[0].asset._ref).url()}
              alt=""
              className="object-fill transition-transform transform-gpu hover:scale-105 hover:shadow-lg hover:shadow-black brightness-75 shadow-gray-400 shadow-md rounded-[2%] h-full w-full"
            />
            <p className="absolute w-2/6 bottom-[15%] left-[1%] font-semibold text-4xl text-white">
              Apartment {item.apartmentNumber}
            </p>
            <p className="absolute w-2/6 bottom-[5%] left-[1%] font-semibold text-lg text-white">
              {item.features.rooms} rooms
            </p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex items-center justify-center mt-[18vh]">
      <Hourglass colors={["black", "#333"]} />
    </div>
  );
}

export default ApartmentSelection;
