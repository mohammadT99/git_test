import { RiUserUnfollowFill } from "react-icons/ri";
import "./style.scss";
import Factor from "../Factor";
import { useState } from "react";

const Module = ({ from, initialstate }) => {
  const [value, setvalue] = useState(initialstate);
  return (
    <>
      {from === "factor" && (
        <>
          <Factor value={value} />
        </>
      )}
    </>
  );
};

export default Module;
