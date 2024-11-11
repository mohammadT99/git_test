import { useEffect, useState } from "react";
import Api from "../../libs/axios";
import { toast } from "react-toastify";
import "./style.scss";
import Button from "../ui/Button";
import Input from "../ui/Forms";
import { FaPlus } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import { CgAdd } from "react-icons/cg";

const Sidebar = ({ id = "hot" }) => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [numberTable, setNumberTable] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(0);

  const showProducts = async () => {
    try {
      console.log(id);

      const { data } = await Api.get(`/products/show-products/${id}`);
      if (data.data) {
        setProducts(data.data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addCart = async () => {
    try {
      const { data } = await Api.post("/products/card", {
        userId: numberTable,
        productId: productId,
        quantity: Number(quantity), // Ensure it's a number
      });
      if (data) {
        toast.success("به فاکتور اضافه شد");
        setOrder([]);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const incrementNumber = () => {
    setQuantity(quantity + 1);
  };
  const discrement = () => {
    setQuantity(quantity - 1);
  };
  useEffect(() => {
    showProducts();
  }, [id]);

  return (
    <>
      <div className="sidebar_content">
        <div className="sidebar">
          {products.map((item) => (
            <div
              key={item._id} // Ensure a unique key for each element
              className="sidebar_item"
              onClick={() => {
                setSelectedProductId(item._id);
                setIsOpen(true);
                if (!isOpen) {
                  setIsOpen(true);
                }
                setOrder([item]);
              }}
            >
              <img
                src={`http://localhost:5000/${item.image}`}
                alt=""
                className="sidebar_item_image"
              />
              <div className="sidebar_item_content">
                <div className="sidebar_item_na me">
                  <p className="sidebar_item_name_p">
                    نام محصول<span>{item.name}</span>
                  </p>
                  <p className="sidebar_item_name_p">
                    قیمت<span>${item.price}</span>
                  </p>
                </div>
                <button
                  className="sidebar_item_btn"
                  onClick={() => {
                    if (!isOpen) {
                      setIsOpen(true);
                    }
                  }}
                >
                  <CgAdd size={24} />
                  افزودن
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="module">
          {order.map((o) => (
            <div className="module_card" key={o._id}>
              <img
                className="module_card_image"
                src={`http://localhost:5000/${o.image}`}
                alt=""
              />
              <div className="module_card_name">
                <p> نام محصول</p>
                <span>{o.name}</span>
              </div>
              <div className="module_card_name">
                <p> قیمت</p>
                <span>{o.price}</span>
              </div>
              <div className="input-content">
                <Input
                  name={"userId"}
                  value={numberTable}
                  p={"شماره میز"}
                  onChange={(e) => setNumberTable(e.target.value)}
                />
              </div>
              <div className="add_number">
                <button className="increment" onClick={incrementNumber}>
                  <FaPlus />
                </button>
                <p>{quantity}</p>
                <button className="increment" onClick={discrement}>
                  <IoRemoveOutline />
                </button>
              </div>
            </div>
          ))}
          <div className="btn-sub">
            <button className=" module_header_btn_module ">
              افزودن به سفارش
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
