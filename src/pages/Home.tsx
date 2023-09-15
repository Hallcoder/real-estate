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
  const [residentials, setResidentials] = useState([]);
  const [apartments, setApartments] = useState([]);
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Aloading, setALoading] = useState(true);
  const [Oloading, setOLoading] = useState(true);
  useEffect(() => {
    client.fetch("*[_type == 'property']").then((data) => {
      setResidentials(data);
      console.error("residentials", data);
      setLoading(false);
    });
    client.fetch("*[_type == 'apartment']").then((data) => {
      console.log("Apartments", data);
      setApartments(data);
      setALoading(false);
    });
    client.fetch("*[_type == 'office']").then((data) => {
      console.log("offices", data);
      setOffices(data);
      setOLoading(false);
    });

    let breadCrumbData = [{ label: "Home", link: "/" }];
    localStorage.setItem(
      "breadCrumbData",
      JSON.stringify([...new Set(breadCrumbData)])
    );
  }, []);

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
        <h1 className="font-semibold text-center text-3xl my-4">Residentials</h1>
        {!loading ? (
          <Properties properties={residentials} propertyType="residential" />
        ) : (
          <div className="flex items-center justify-center">
            <Audio color="black" />
          </div>
        )}
        <h5 className="text-center m-2 animate-bounce">
          Swipe <strong>&larr;</strong> or <strong>&rarr;</strong> to scroll{" "}
        </h5>
        <h1 className="font-semibold text-center text-3xl my-4">Apartments</h1>
        {!Aloading ? (
          <Properties properties={apartments} />
        ) : (
          <div className="flex items-center justify-center">
            <Audio color="black" />
          </div>
        )}
        <h1 className="font-semibold text-center text-3xl my-4">Offices</h1>
        {!Oloading ? (
          <Properties properties={offices} />
        ) : (
          <div className="flex items-center justify-center">
            <Audio color="black" />
          </div>
        )}
        <CategoryProperty />
        <Categories />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
