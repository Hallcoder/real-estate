import Footer from "../components/Footer";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import Slideshow from "../components/Slideshow";
import { agents, services, slides } from "../utils/constants";
import ServiceCard from "../components/ServiceCard";
import AgentCard from "../components/AgentCard";
function About() {
  return (
    <div>
      <main className="flex items-center flex-col">
        <MdOutlineRealEstateAgent className="text-5xl mt-10" />
        <h2 className="text-center text-3xl my-12">
          <strong>Dream Homes</strong>, Crafting Your Dreams Into Reality!
        </h2>
        <p className="text-xl m-8">
          Dream Homes, your trusted real estate partner since 2017, has been
          shaping the vibrant real estate landscape of Rwanda. With an
          unwavering commitment to excellence, we bring you a wealth of
          expertise in the local market. Our mission is to provide unparalleled
          guidance and turn your property dreams into reality. Discover the
          Dream Homes difference and let us lead you on a journey to find your
          perfect home.
        </p>
        <div className="w-[98%]">
          <Slideshow slides={slides} />
        </div>
        <h2 className="my-12 text-3xl">
          <strong>Features & Services</strong>
        </h2>
        <div className="flex text-xl justify-center gap-8 mx-6 cursor-pointer items-center">
          {services.map((serv, index) => {
            return <ServiceCard {...serv} key={index} />;
          })}
        </div>
        <h2 className="my-20 text-4xl">
          <h1>Our</h1><strong>Agents</strong>
        </h2>
        <div className="flex gap-24 m-2">
            {agents.map((agent,index)=> {
              return <AgentCard {...agent} key={index}/>
            }) }
          </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
