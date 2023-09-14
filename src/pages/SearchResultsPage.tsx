import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import PropertyCard from "../components/propertyCard";
import { buildImage } from "../utils/constants";

function SearchResultsPage() {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  useEffect(() => {
    setSearchResults(
      JSON.parse(localStorage.getItem("searchResults") as string)
    );
  }, []);
  return (
    <div className="flex flex-col flex-wrap gap-2">
      <h1 className="text-center text-3xl my-4">
        Found <strong>"{searchResults.length}"</strong> properties that match
        your search
      </h1>
      <div className="flex flex-row flex-wrap">
        {searchResults.map((res, index) => {
          return (
            <PropertyCard
              property={res}
              image={buildImage(res.image.asset._ref).url()}
              id={res._id}
              reserty={res}
              className={true}
              name={res.name}
              width="here"
              key={index}
              location={res.address.fullAddress}
              size={res.size}
              status={res.status}
              price={res.price}
              amenities={res.amenities}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default SearchResultsPage;
