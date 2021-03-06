import "./index.css";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Blogs from "./components/Blogs";
import Listings from "./components/Listings";
import Form from "./components/Form";
import Info from "./components/Info";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import TestimonialSlider from "./components/TestimonialSlider";

export default function App() {
  return (
    <main>
      {/* Header */}
      <Hero />
      <SearchBar />
      <Blogs />
      <Listings />
      <Form />
      <Info />
      <About />
      <CallToAction />
      <TestimonialSlider />
      {/* Footer */}
    </main>
  );
}
