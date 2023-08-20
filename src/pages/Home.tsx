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
  return (
    <div>
      <header>
      <div className="h-4/6 w-full">
        <Slideshow slides={slides} />
      </div>
      </header>
      <p className="w-11/12 text-center m-16">
        Please use the tool below to help ease your property search. Choose your
        desired fields from the corresponding menu to go straight to your
        desired property options (for example: Type: Houses, Location: Any,
        Status: For Rent) to see all houses for rent that we have listed.
      </p>
      <main id="#search">
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
