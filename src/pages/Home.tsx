import BlankBar from "../components/BlankBar";
import Search from "../components/search";
import SearchHeader from "../components/searchHeader";
import PropertiesHeader from "../components/propertiesHeader";
import Properties from "../components/properties";
import CategoryProperty from "../components/CategoryProperty";
import Categories from "../components/Categories";
import Slideshow from "../components/Slideshow";
import { slides } from "../utils/constants";
import Footer from "../components/Footer";

function Home() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// Log the width to the console
console.log(`Screen width in pixels: ${screenWidth}`);
  return (
    <div>
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
      <main id="#search" className="w-full">
        <SearchHeader />
        <Search />
        <BlankBar />
        <PropertiesHeader />
        <Properties />
        <CategoryProperty />
        <Categories />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
