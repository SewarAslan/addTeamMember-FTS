import "./MemberSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function MemberSearch() {
  return (
    <div className="searchContainer">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
      <input type="text" placeholder="Find members" className="searchInput" />
    </div>
  );
}
