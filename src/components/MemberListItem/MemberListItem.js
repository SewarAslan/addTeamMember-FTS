import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircle } from "@fortawesome/free-regular-svg-icons";
import "./MemberListItem.css";

export default function MemberListItem({ name, selected }) {
  // Generate initials from name
  const getInitials = (fullName) => {
    return fullName
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .substring(0, 2);
  };

  return (
    <div className={`memberListItem ${selected ? "selected" : ""}`}>
      <div className="memberInfo">
        <div className="avatarContainer">
          <div className="userIcon">{getInitials(name)}</div>
        </div>
        <p className="memberName">{name}</p>
      </div>
      <div className="memberCheck">
        {selected ? (
          <FontAwesomeIcon icon={faCircleCheck} className="checkIcon" />
        ) : (
          <FontAwesomeIcon icon={faCircle} className="checkIcon" />
        )}
      </div>
    </div>
  );
}
