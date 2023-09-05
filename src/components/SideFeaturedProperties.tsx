import PropertyCard from "./propertyCard";

function SideFeaturedProperties({properties}) {
  return <div className="flex flex-col space-y-2 mt-4 w-full">
    <h1 className="text-center font-semibold">Featured Properties</h1>
{properties.map(property =>{
    const {amenities,name,size,price,location,status} = property;
    return <PropertyCard width={'auto'} amenities={amenities} location={location} name={name} price={price} size={size} status={status}/>
})}
  </div>;
}

export default SideFeaturedProperties;
