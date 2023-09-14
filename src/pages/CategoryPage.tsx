import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buildImage, client } from "../utils/constants";
import { Hourglass } from "react-loader-spinner";
import PropertyCard from "../components/propertyCard";

function CategoryPage() {
  const params = useParams();
  let [properties, setProperties] = useState<any[]>([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    client.fetch(`*[_type == '${params.category}']`).then((data) => {
      setProperties(data);
      setLoading(false);
    });
  });
  return !loading ? (
    <div className="flex flex-col">
      <h1 className="text-center text-3xl my-4">
        Found <strong>"{properties.length}"</strong> properties of{" "}
        <strong>{params.category}{" "}</strong>
        category
      </h1>
      <div className="flex flex-wrap">
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
    </div>
  ) : (
    <div className="mx-auto my-[10vh]"><Hourglass colors={["#333","black"]}/></div>
  );
}

export default CategoryPage;
