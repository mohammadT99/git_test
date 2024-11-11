import { useEffect } from "react";
import NavBar from "../../components/base/NavBar";
import Sidebar from "../../components/Sidebar";
import Cookies from "js-cookie";
import UserNav from "../../components/base/UserNav";
import UserOrder from "../../components/base/UserOrder";

const Home = () => {
  useEffect(() => {
    let _user = Cookies.get("user");
    if (!_user) {
      location.replace("/login");
    }
  }, []);
  return (
    <>
      <UserNav />
      <UserOrder />
    </>
  );
};

export default Home;
