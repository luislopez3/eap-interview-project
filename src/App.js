import "./index.css";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Blogs from "./components/Blogs";
import Listings from "./components/Listings";
import Form from "./components/Form";

export default function App() {
  return (
    <>
      {/* Header */}
      <Hero />
      <SearchBar />
      <Blogs />
      <Listings />
      <Form />
      {/* Footer */}
    </>
  );
}
