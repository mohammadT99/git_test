import { useEffect, useState } from "react";
import "./style.scss";
import useUserOrder from "../../base/UserOrder/hooks/useUserOrder";

const Factor = ({ value }) => {
  const [factorItem, setFactorItem] = useState(value);
  useEffect(() => {
    console.log("text --------->>", factorItem);
  });
  return (
    <>
      <div className="factor">
        {factorItem.map((item, key) => {
          console.log(factorItem);

          return <>{item.name}</>;
        })}
      </div>
    </>
  );
};

export default Factor;
