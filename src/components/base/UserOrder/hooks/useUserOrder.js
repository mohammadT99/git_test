import { useState } from "react";
import Api from "../../../../libs/axios";
import { toast } from "react-toastify";

const useUserOrder = (initialValues = "") => {
  const [product, setproduct] = useState([]);
  const [value, setValue] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [orderList, setOrderList] = useState([]);

  const FeachingProducts = async () => {
    try {
      setLoading(true);
      const response = await Api.get(`products/show-products`);
      if (response) {
        setproduct(response.data.data.data);

        setLoading(false);
      }
    } catch (e) {}
  };

  const onHanddleviter = (order) => {
    const orderexist = orderList.some((item) => item.id === order.id);
    if (!orderexist) {
      setOrderList([...orderList, order]);
      toast("add products");
      console.log("mohamad", orderList);
    } else {
      toast("product on incrate");
    }
  };

  return { FeachingProducts, product, loading, onHanddleviter, orderList };
};

export default useUserOrder;
