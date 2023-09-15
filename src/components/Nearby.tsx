import { FaHospital, FaSchool, FaChurch, FaShoppingCart, FaRegBuilding, FaDochub } from 'react-icons/fa'; // Import icons from React Icons

const Nearby = ({ nearby }) => {
  console.log(nearby)
  const iconMap = {
    health: FaHospital,
    education: FaSchool,
    service:FaDochub,
    governmentservice: FaRegBuilding,
    commerce: FaShoppingCart,
    religion:FaChurch,
  };

  const nearbyFacilities = nearby.map((facility, index) => {
    const FacilityIcon = iconMap[facility.type.replace(/\s/g,"").toLowerCase()]; 
    return (
      <div key={index} className="flex items-center text-lg space-x-2 mb-2">
        <div className="w-4 h-4">
          <FacilityIcon /> {/* Render the selected icon */}
        </div>
        <p>{facility.name.toUpperCase()}</p>
      </div>
    );
  });

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Nearby Facilities</h2>
      {nearbyFacilities}
    </div>
  );
};

export default Nearby;
