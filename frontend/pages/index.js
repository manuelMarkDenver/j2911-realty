import Head from "next/head";

import About from "../components/home/about";
import Banner from "../components/home/banner";
import Contact from "../components/home/contact";
import FeaturedProperties from "../components/home/featured-properties";
import Testimonials from "../components/home/testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <FeaturedProperties />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
