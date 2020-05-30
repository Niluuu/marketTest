import React from "react";
import Header from "./components/header";
import SliderSection from "./components/sliderSection";
import Tabs from "./components/tabs";
import Products from "./components/products";
import ButicProducts from "./components/buticProducts";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <SliderSection />
      <Tabs />
      <Products />
      <ButicProducts />
      <Footer />
    </div>
  );
}

export default App;
