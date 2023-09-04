import img from "../assets/agent.jpeg";
function Agent() {
  return (
    <div className="flex justify-around text-lg ">
      <img src={img} className="w-60 h-60 rounded-md m-2" alt="our agent" />
      <div>
        <h1 className="text-lg font-semibold text-[#333]">Mwenedata Apotre</h1>
        <span className="inline-block text-gray-400 mt-4">Mobile:</span> <span className="inline-block mt-4">+20791873565</span>
        <p className="mt-4">
          Experienced real estate agent offering expert guidance, personalized
          service, and a deep knowledge of the local market to help you find
          your dream home or maximize the value of your property.
        </p>
        <button className="p-2 mt-4 rounded-sm text-white bg-blue-950">Read more</button>
      </div>
    </div>
  );
}

export default Agent;
