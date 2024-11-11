import { NavLink } from "react-router-dom";
import style from "./style.module.scss";

const ImageBox = ({ src, title }) => {
  return (
    <>
      <div className={style.image_box}>
        <img src={src} width={250} className={style.image_box_image} alt="" />
        <div className={style.image_box_title}>
          {title}
          <NavLink to={"/reserve"} className={style.image_box_title_link}>
            جهت رزو کلیک کنید
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ImageBox;
