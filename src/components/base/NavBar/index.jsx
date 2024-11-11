import { useState } from "react";
import Image1 from "../../../assets/images/Frame 122.png";
import Image2 from "../../../assets/images/image 2.png";
import Image3 from "../../../assets/images/image 3.png";
import Image4 from "../../../assets/images/image 4.png";
import Image5 from "../../../assets/images/image 5.png";
import Sidebar from "../../Sidebar";
const NavBar = () => {
  const [id, setId] = useState("cold");
  const navbaritem = [
    {
      name: "سرد",
      id: "cold",
      image: Image4,
    },
    {
      name: "گرم",
      id: "hot",
      image: Image3,
    },
    {
      name: "دسرها",
      id: "disetr",
      image: Image5,
    },
    {
      name: "صبحانه",
      id: "brackfast",
      image: Image1,
    },
  ];
  return (
    <>
      <div className="navbar">
        {navbaritem.map((item, key) => {
          return (
            <>
              <div className="navitem" onClick={() => setId(item.id)}>
                <img src={item.image} alt="" />
                <div className="navitem_p" id="p">
                  <p>{item.name}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="content">
        <Sidebar id={id} />
      </div>
    </>
  );
};

export default NavBar;
