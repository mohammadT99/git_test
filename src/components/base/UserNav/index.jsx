import { NavLink } from "react-router-dom";
import style from "./style.module.scss";

const UserNav = () => {
  return (
    <>
      <div className={style.usernav}>
        <NavLink className={style.usernav_navlink} to={"/"}>
          خانه
        </NavLink>
        <NavLink className={style.usernav_navlink} to={"/gallery"}>
          گالری
        </NavLink>
        <NavLink className={style.usernav_navlink} to={"/comments"}>
          نظرات
        </NavLink>
        <NavLink className={style.usernav_navlink} to={"/addreserve"}>
          ثبت درخواست رزو
        </NavLink>
      </div>
    </>
  );
};

export default UserNav;
