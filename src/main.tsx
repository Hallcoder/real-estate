import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import "./index.css";
import About from "./pages/about.tsx";
import Buy from "./pages/buy.tsx";
import App from "./App";
import Rent from "./pages/Rent.tsx";
import Header from "./components/Header.tsx";
import InfoHeader from "./components/infoHeader.tsx";
import PropertyPage from "./pages/propertyPage.tsx";
import Footer from "./components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <InfoHeader />
    <Header />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<PropertyPage />} />
    </Routes>
  </BrowserRouter>
);
