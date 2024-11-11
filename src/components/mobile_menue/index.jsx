import { IoHomeOutline } from "react-icons/io5";
import { TfiReceipt, TfiShoppingCartFull } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const MenueMobile = () => {
  return (
    <>
      <div className="menue_mobile">
        <div className="menue_mobile_content">
          <NavLink className={'menue_mobile_content_link'} to={"/dashboard"}>
            <IoHomeOutline />
            خانه
          </NavLink>
          <NavLink className={'menue_mobile_content_link'} to={"/dashboard"}>
          <TfiShoppingCartFull />
            محصولات
          </NavLink>
          <NavLink className={'menue_mobile_content_link'} to={"/dashboard/bill"}>
          <TfiReceipt />
            فاکتور
          </NavLink>
          <NavLink className={'menue_mobile_content_link'} to={"/dashboard"}>
            <IoHomeOutline />
            کاربران
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MenueMobile;
