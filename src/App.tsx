import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import ProductDetails1 from "./pages/ProductDetails1";
import ProductDetails2 from "./pages/ProductDetails2";
import BlogListing from "./pages/BlogListing";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Credit from "./pages/Credit";
import TermsCondition from "./pages/TermsCondition";
import CancellationPolicy from "./pages/CancellationPolicy";
import HowItMade from "./pages/HowItMade";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SubscribeSave from "./pages/SubscribeSave";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-listing1":
        title = "";
        metaDescription = "";
        break;
      case "/product-details2":
        title = "";
        metaDescription = "";
        break;
      case "/product-details3":
        title = "";
        metaDescription = "";
        break;
      case "/product-details31":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/blog" element={<BlogListing/>} />
      <Route path="/contact-us" element={<Contact/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/credit" element={<Credit/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      <Route path="/cancellation-policy" element={<CancellationPolicy/>} />
      <Route path="/subscribe-save" element={<SubscribeSave/>} />
      <Route path="/terms-and-conditions" element={<TermsCondition/>} />
      <Route path="/how-it-made" element={<HowItMade/>} />
      <Route path="/product-listing1" element={<ProductListing />} />
      <Route path="/product-details2" element={<ProductDetails />} />
      <Route path="/product-details3" element={<ProductDetails1 />} />
      <Route path="/product-details31" element={<ProductDetails2 />} />
    </Routes>
  );
}
export default App;
