import { useEffect, useState } from "react";
import { buildImage, client } from "../utils/constants";
import { Hourglass } from "react-loader-spinner";
import PropertyCard from "../components/propertyCard";

function Rent() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    client
      .fetch(
        "*[(_type == 'office' || _type == 'property' || _type == 'apartment') && status=='rent' ]"
      )
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  }, []);
  return loading ? (
    <div className="flex items-center justify-center mt-10">
      <Hourglass colors={["black", "#333"]} />
    </div>
  ) : (
    <div className="pt-4 flex items-center justify-center  flex-wrap">
      {properties.map((prop, index) => {
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
}

export default Rent;
