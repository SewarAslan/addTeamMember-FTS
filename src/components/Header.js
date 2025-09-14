import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-icon-container">
        <FontAwesomeIcon icon={faUserPlus} className="header-icon" />
      </div>
      <h1 className="header-title">Add Team Members</h1>
      <p className="header-subtitle">Front-end Development Team</p>
    </div>
  );
}
