import SearchBar from "./SearchBar";
import SearchBarShortcuts from "./SearchBarShortcuts";

function SearchBanner() {
  return (
    <div className="search-banner">
      <SearchBar />
      <SearchBarShortcuts />
    </div>
  );
}

export default SearchBanner;
