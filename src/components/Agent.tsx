import img from "../assets/agent.jpeg";
function Agent({agentInfo}) {
  return (
    <div className="sm:flex-row flex flex-col items-center justify-center sm:justify-around text-lg ">
      <img src={img} className="w-60 h-60 rounded-md m-2" alt="our agent" />
      <div className="items-center flex flex-col">
        <h1 className="text-lg font-semibold text-[#333]">{agentInfo.name}</h1>
        <span className="inline-block text-gray-400 mt-4">Mobile:</span> <span className="inline-block mt-4">{agentInfo.telephone}</span>
        <p className="mt-4 w-8/12">
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
