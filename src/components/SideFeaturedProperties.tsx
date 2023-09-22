import PropertyCard from "./propertyCard";
import { buildImage } from "../utils/constants";

function SideFeaturedProperties() {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  let shuffledProperties = shuffleArray([...JSON.parse(localStorage.getItem('residentials') as string),...JSON.parse(localStorage.getItem('apartments') as string),...JSON.parse(localStorage.getItem('offices') as string)])
  return (
    <div className="flex flex-col justify-center space-y-2 mt-4 w-11/12">
      <h1 className="text-center font-semibold">Featured Properties</h1>
      {shuffledProperties.map((property,index) => {
        const { amenities, name, size, price, location, status } = property;
        return (
          <PropertyCard
            property={property}
            key={index}
            image={buildImage(property.image.asset._ref).url()}
            className={false}
            id={property._id}
            width={"auto"}
            amenities={amenities}
            location={location}
            name={name}
            price={price}
            size={size}
            status={status}
          />
        );
      })}
    </div>
  );
}

export default SideFeaturedProperties;
