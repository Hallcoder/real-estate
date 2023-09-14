import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buildImage, client } from "../utils/constants";
import { Hourglass } from "react-loader-spinner";
const BlockSelection = () => {
  const params = useParams();
  const [property, setProperty] = useState<{ [key: string]: any }>({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    client
      .fetch(`*[_type == 'apartment' && _id == '${params.id}']`)
      .then((data) => {
        setProperty(data[0]);
        setLoading(false);
      });
  }, []);

  const handleClick = (blockNumber: any) => {
    navigate(`/apartmentSelection/${params.id}/${blockNumber}`);
  };
  return !loading ? (
    <div className="flex flex-col flex-wra gap-6 rounded-md">
      <h1 className="mx-auto text-3xl font-bold">Select a block</h1>
      <div className="flex justify-center">
        {" "}
        {property.blocks.map(
          (
            item: {
              blockNumber:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
              blockImage: { asset: { _ref: any } };
              apartments: string | any[];
            },
            index: Key | null | undefined
          ) => (
            <div
              key={index}
              className={``}
              onClick={() => handleClick(item.blockNumber)}
            >
              <div className="relative cursor-pointer h-auto sm:h-[40vh] m-2">
                <img
                  src={buildImage(item.blockImage.asset._ref).url()}
                  alt=""
                  className="object-fill transition-transform transform-gpu hover:scale-105 hover:shadow-lg hover:shadow-black brightness-75 shadow-gray-400 shadow-md rounded-[2%] h-full w-full"
                />
                <p className="absolute w-2/6 bottom-[15%] left-[1%] font-semibold text-4xl text-white">
                  Block {item.blockNumber}
                </p>
                <p className="absolute w-2/6 bottom-[5%] left-[1%] font-semibold text-lg text-white">
                  {item.apartments.length} apartments
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center mt-[18vh]">
      <Hourglass colors={["black", "#333"]} />
    </div>
  );
};

export default BlockSelection;
