import logo from "../assets/logo-no-background.png";
import { MdLocationPin,MdCall ,MdAccessTime} from "react-icons/md";
function InfoHeader() {
  return (
    <div className="flex  bg-[#333333] justify-center h-[18vh] max-w-[100%] infoHeader">
      <div className="flex items-center sm:w-3/12 w-6/12 justify-center  text-center">
        <img src={logo} alt="" className="h-24 text-center w-6/12 m-2 ml-6" />
      </div>
      <article className="w-9/12 sm:flex hidden  justify-around">
      <div className="flex justify-center items-center">
        <div>
          <MdLocationPin className="text-6xl text-[#D9C8B8]" />
        </div>
        <div className="flex flex-col text-white font-semibold text-md">
          <p>Dream Homes Rwanda Ltd</p>
          <p>21 KG 2 Ave, Kigali</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <MdCall className="text-6xl text-[#D9C8B8]" />
        </div>
        <div className="flex flex-col text-white font-semibold text-md">
          <p className="text-sm text-[#D9C8B8]">Call:</p>
          <p>+250788305955</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <MdAccessTime className="text-6xl text-[#D9C8B8]" />
        </div>
        <div className="flex flex-col text-white font-semibold text-md">
          <p className="text-sm text-[#D9C8B8]">Opening hours:</p>
          <p>+250788305955</p>
        </div>
      </div>
      </article>
    </div>
  );
}

export default InfoHeader;
