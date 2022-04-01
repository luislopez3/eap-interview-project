import "./index.css";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Blogs from "./components/Blogs";
import Listings from "./components/Listings";
import Form from "./components/Form";
import Info from "./components/Info";
import About from "./components/About";

export default function App() {
  return (
    <>
      {/* Header */}
      <Hero />
      <SearchBar />
      <Blogs />
      <Listings />
      <Form />
      <Info />
      <About />
      {/* Footer */}
    </>
  );
}
