import React from "react";
import IntroSection from "./IntroSection";
import Hotoffer from "./Hotoffers/Hotoffer";
import HomeOutdoor from "./Homeoutdoor/HomeOutdoor";
import BannerForm from "./BannerForm";
import Recomanded from "./Recomanded";
import ExtraServices from "./ExtraServices";
import SubscribeSection from "./SubscribeSection";
import SuppliersByRegion from "./SuppliersByRegion";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <IntroSection />
      <Hotoffer />
      <HomeOutdoor
        apiUrl="https://dummyjson.com/products/"
        backgroundImageUrl="/image92.png"
        sectionTitle="Home and outdoor items"
        buttonText="Source now"
        category="furniture"
      />
      {/* <HomeOutdoor
        apiUrl="https://fakestoreapi.in/api/products"
        backgroundImageUrl="/image98.png"
        sectionTitle="Consumer electronics and gadgets"
        buttonText="Source now"
        category="audio"
      /> */}

      <BannerForm />

      <Recomanded />

      <ExtraServices />

      <SubscribeSection />

      {/* <SuppliersByRegion /> */}

      <Footer />
    </>
  );
};

export default Home;
