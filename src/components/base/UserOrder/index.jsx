import { useEffect, useState } from "react";
import "./style.scss";
import Loader from "../../ui/loader";
import useUserOrder from "./hooks/useUserOrder";
import CardProducts from "../../ui/CardProducts";
import Module from "../../ui/Module";
import { Button, Modal } from "antd";
const UserOrder = ({ id }) => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [order, setOrder] = useState([]);

  const { FeachingProducts, product, loading, onHanddleviter, orderList } =
    useUserOrder();

  const showProduct = () => {
    FeachingProducts("cold");
  };
  const handdleOk = () => {
    setIsOpen(false);
  };
  const handdleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    showProduct();
  }, []);
  return (
    <>
      <div className="user_order">
        <div className="user_order_module">
          {isOpen && (
            <Modal
              title="factor"
              open={isOpen}
              onOk={handdleOk}
              onCancel={handdleOk}
              onClose={handdleClose}
            ></Modal>
          )}
        </div>
        <div className="button">
          <h2 className="user_order_button_h2">لیست محصولات</h2>
          <button
            className="user_order_button"
            onClick={(prev) => setIsOpen(!isOpen)}
          >
            سفارشات
          </button>
        </div>
        {loading ? <Loader from={"page"} /> : null}
        <div className="user_order_content">
          {product.map((item, key) => {
            return (
              <CardProducts
                name={item.name}
                image={item.image}
                price={item.price}
                onClick={() => onHanddleviter(item)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserOrder;
