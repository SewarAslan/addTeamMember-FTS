import Footer from "./Footer";
import Header from "./Header";
import MemberList from "./MemberList";
import MemberSearch from "./MemberSearch";
import "../App.css";
export default function AddMemberModal() {
  return (
    <>
      <Header />
      <div className="container">
        <MemberSearch />
        <MemberList />
        <Footer />
      </div>
    </>
  );
}
