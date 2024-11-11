import { Outlet } from "react-router-dom";

const Mainlayouts = () => {
  return (
    <>
      <div className="">
        <Outlet />
      </div>
    </>
  );
};
export default Mainlayouts;
