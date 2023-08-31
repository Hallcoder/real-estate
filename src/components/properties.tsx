import { properties } from "../utils/constants";
import PropertyCard from "./propertyCard";

function Properties() {
    
    
    return (<div className="flex w-full flex-wrap items-center justify-center">
        {properties.map(prop =>{
    return <PropertyCard  name={prop.name} key={prop.id} location={prop.location} size={prop.size} status={prop.status} price={prop.price} amenities={prop.amenities} />
        })}
    </div>  );
}

export default Properties;