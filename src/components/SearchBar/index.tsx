import {
  Search,
  List
} from "react-feather";

export const SearchBar: React.FC = () => {
  return (
    <div className="search">
      <div className="search__option">
        <List />
      </div>
      <input className="search__bar" type="text" placeholder="Search flowers..."/>
      <div className="search__button-search">
        <Search />
      </div>
    </div>
  );
}
