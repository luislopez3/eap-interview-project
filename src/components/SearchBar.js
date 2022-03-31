import data from "../data";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder={data.startMySearch} />
      <button>Submit</button>
    </div>
  );
}
