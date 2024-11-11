import { useState, useEffect } from "react";
import Api from "../../../libs/axios";
import "./style.scss";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Bill = () => {
  const [bills, setBills] = useState([]);
  const [offers, setOffers] = useState([]);
  const [sub, setSub] = useState([]);
  const navigate = useNavigate();

  const showBills = async () => {
    try {
      const { data } = await Api.get("/products/card-show");
      if (data.data) {
        setBills(data.data.data); // Assume data.data.data is the structure where bills are stored
        // Optionally, extract offers from bills if offers are part of bills
        setOffers(data.data.data.flatMap((bill) => bill.items)); // Assuming 'items' contains offers
      }
    } catch (error) {
      console.error("Error fetching bills:", error); // Log error to debug
    }
  };

  const calculateTotalPrice = () => {
    return offers.reduce((total, offer) => offer.quantity, 0); // Assuming each offer has price and quantity
  };

  useEffect(() => {
    showBills();
  }, []);

  return (
    <div className="bills">
      {bills.length > 0 ? (
        bills.map((item, key) => (
          <div className="card-bills" key={key}>
            <div className="card-bills_title">
              <span>نام میز:</span> {item.user}
            </div>
            {item.items.map((i, index) => (
              <div key={index}>
                <p>{i.quantity}</p> {/* Assuming 'i' has a price property */}
              </div>
            ))}
            <div className="total"></div>
            <Button
              name={"تصویه "}
              onClick={() => {
                navigate("/dashboard/addsub");
              }}
            />
          </div>
        ))
      ) : (
        <p>فاکتوری وجود ندارد</p>
      )}
    </div>
  );
};

export default Bill;
