import PropertyCard from "./propertyCard";

function SideFeaturedProperties({ properties }) {
  return (
    <div className="flex flex-col space-y-2 mt-4 w-11/12">
      <h1 className="text-center font-semibold">Featured Properties</h1>
      {properties.map((property,index) => {
        const { amenities, name, size, price, location, status } = property;
        return (
          <PropertyCard
            property={property}
            key={index}
            image={''}
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
