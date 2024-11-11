import { useEffect, useState } from "react";
import Loader from "../loader";
import "./style.scss";
import Image from "../../../assets/images/Raspberry_Mojito__10_Minutes_-removebg-preview.png";
const CardProducts = ({ name, image, price, onClick }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  });

  return (
    <>
      <div className="card_products">
        {loader && (
          <div className="card_loader">
            <Loader from={"image"} />
          </div>
        )}

        <div className="card_products_content">
          <img
            className="card_products_content_image"
            src={`http://localhost:5000/${image}`}
            alt={name}
          />
          <div className="card_products_content_text">
            <div className="card_products_contents_name">
              <span>نام</span>
              {name}
            </div>
            <div className="card_products_contents_name">
              <span>قیمت</span>
              {price}
            </div>
          </div>
          <button className="card_products_content_button" onClick={onClick}>
            افزودن به سفارش
          </button>
        </div>
      </div>
    </>
  );
};

export default CardProducts;
