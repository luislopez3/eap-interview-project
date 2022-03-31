import "./index.css";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Blogs from "./components/Blogs";
import Listings from "./components/Listings";

export default function App() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Blogs />
      <Listings />
    </>
  );
}
