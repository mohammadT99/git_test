import { useEffect } from "react";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import CardBox from "../../components/ui/CardBox";
import "./style.scss";
const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookie.get("user")) {
      navigate("/login");
    }
  });
  return (
    <div className="dashboard">
      <CardBox name={" محصولات"} href={"/dashboard/products"} />
      <CardBox name={"سفارش گیری"} href={"/dashboard/viter"} />
      <CardBox name={" کاربران"} />
      <CardBox name={" فاکتور ها"} href={"/dashboard/bill"} />
      <CardBox name={"  گالری عکس"} href={"/dashboard/bill"} />
      <CardBox name={"رزرو ها"} href={"/dashboard/bill"} />
    </div>
  );
};

export default Dashboard;
