import MemberListItem from "./MemberListItem";
import "./MemberList.css";
export default function MemberList() {
  const members = [
    { id: 1, name: "Carolien Bloeme", selected: false },
    { id: 2, name: "Sun Jun", selected: true },
    { id: 3, name: "Song Bao", selected: false },
    { id: 4, name: "Olivia Arribas", selected: true },
    { id: 5, name: "Bonginkosi Mdladlana", selected: false },
    { id: 6, name: "Arina Belomestnykh", selected: true },
    { id: 7, name: "Jacqueline Likoki", selected: false },
  ];
  return (
    <div className="memberList">
      {members.map((member) => (
        <MemberListItem
          key={member.id}
          name={member.name}
          selected={member.selected}
        />
      ))}
    </div>
  );
}
