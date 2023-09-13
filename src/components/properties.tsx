import PropertyCard from "./propertyCard";
import { buildImage } from "../utils/constants";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
interface Props {
  properties: any[];
  propertyType?: "residential" | "apartment";
}

const Properties: React.FC<Props> = ({ properties, propertyType }) => {
  console.log("Properties", properties.length, propertyType);
  return (
    <div className="flex flex-row gap-4  w-full sm:w-11/12 mx-auto overflow-x-scroll">
      {properties
        .concat(properties)
        .concat(properties)
        .map((prop, index) => {
          return (
            <PropertyCard
              image={buildImage(prop.image.asset._ref).url()}
              id={prop._id}
              property={prop}
              className={true}
              name={prop.name}
              width="here"
              key={index}
              location={prop.address.fullAddress}
              size={prop.size}
              status={prop.status}
              price={prop.price}
              amenities={prop.amenities}
            />
          );
        })}
    </div>
  );
};

export default Properties;
