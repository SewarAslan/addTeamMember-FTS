import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faCircle } from "@fortawesome/free-regular-svg-icons";
import "./MemberListItem.css";
export default function MemberListItem({ name, selected }) {
  return (
    <div className={`memberListItem ${selected ? "selected" : ""}`}>
      <div className="memberInfo">
        <FontAwesomeIcon icon={faUser} className="userIcon" />
        <span className="memberName">{name}</span>
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
