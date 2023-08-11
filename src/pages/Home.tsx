import Hero from "../components/Hero";
import BlankBar from "../components/BlankBar";
import Search from "../components/search";
import SearchHeader from "../components/searchHeader";
import PropertiesHeader from "../components/propertiesHeader";
import Properties from "../components/properties";
import CategoryProperty from "../components/CategoryProperty";
import Categories from "../components/Categories";

function Home() {
    return ( 
        <div>
          <Hero />
          <p className="w-11/12 text-center m-16">Please use the tool below to help ease your property search. Choose your desired fields from the corresponding menu to go straight to your desired property options (for example: Type: Houses, Location: Any, Status: For Rent) to see all houses for rent that we have listed.</p>
          <main id='#search'>
          <SearchHeader />
          <Search />
          <BlankBar />
          <PropertiesHeader  />
          <Properties />
          <CategoryProperty />
          <Categories />
          </main>
        </div>
     );
}

export default Home;