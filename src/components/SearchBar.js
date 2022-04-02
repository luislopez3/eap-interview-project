import data from "../data";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input className="search-bar-text" type="search" placeholder={data.startMySearch} />
      <button>Submit</button>
    </div>
  );
}
