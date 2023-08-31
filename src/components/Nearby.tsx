import { FaHospital, FaSchool, FaHotel, FaUtensils } from 'react-icons/fa'; // Import icons from React Icons

const Nearby = ({ nearby }) => {
  const iconMap = {
    hospital: FaHospital,
    school: FaSchool,
    hotel: FaHotel,
    restaurant: FaUtensils,
  };

  const nearbyFacilities = nearby.map((facility, index) => {
    const FacilityIcon = iconMap[facility.toLowerCase()]; // Get the corresponding icon based on the facility type
    return (
      <div key={index} className="flex items-center text-lg space-x-2 mb-2">
        <div className="w-4 h-4">
          <FacilityIcon /> {/* Render the selected icon */}
        </div>
        <p>{facility.toUpperCase()}</p>
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
