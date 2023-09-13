import BlankBar from "../components/BlankBar";
import Search from "../components/search";
import SearchHeader from "../components/searchHeader";
import PropertiesHeader from "../components/propertiesHeader";
import Properties from "../components/properties";
import CategoryProperty from "../components/CategoryProperty";
import Categories from "../components/Categories";
import { Audio } from "react-loader-spinner";
import Slideshow from "../components/Slideshow";
// import { Audio } from "react-loader-spinner";
import { client, slides } from "../utils/constants";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Home() {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const [residentials, setResidentials] = useState([]);
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    client.fetch("*[_type == 'property']").then((data) => {
      setResidentials(data);
      console.error("residentials", data);
      setLoading(false);
    });
    client.fetch("*[_type == 'apartment']").then((data) => {
      console.log('Apartments',data)
      setApartments(data);
      setLoading(false);  
    });
  let breadCrumbData = [{label:'Home',link:'/'}];
  localStorage.setItem('breadCrumbData',JSON.stringify([...new Set(breadCrumbData)]));
  }, []);

  // Log the width to the console
  console.log(`Screen width in pixels: ${screenWidth}`);
  return (
    <div className="overflow-hidden">
      <header>
        <div className="sm:h-4/6 h-full w-full">
          <Slideshow slides={slides} />
        </div>
      </header>
      <p className="sm:w-10/12 w-full sm:ml-20 justify-center text-center my-16">
        Please use the tool below to help ease your property search. Choose your
        desired fields from the corresponding menu to go straight to your
        desired property options (for example: Type: Houses, Location: Any,
        Status: For Rent) to see all houses for rent that we have listed.
      </p>
      <main className="w-full">
        <SearchHeader />
        <Search />
        <BlankBar />
        <PropertiesHeader />
        {!loading ? <Properties properties={residentials} />:<div className="flex items-center justify-center">
          <Audio color="black"/>
        </div>}
        {
          !loading ? <Properties properties={apartments} />:<div className="flex items-center justify-center"><Audio color="black"/></div>
        }
        <CategoryProperty />
        <Categories />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
