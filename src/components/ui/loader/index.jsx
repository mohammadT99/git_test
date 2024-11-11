import { FallingLines, Rings, Triangle } from "react-loader-spinner";
import "./style.scss";

const Loader = ({ from, type }) => {
  return (
    <>
      {from === "page" && (
        <div className="pageloading">
          <Triangle
            color="#F79621"
            width="100"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        </div>
      )}
      {from === "image" && (
        <div className="image_loading">
          <Rings
            visible={true}
            height="80"
            width="80"
            color="#F79621"
            ariaLabel="rings-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </>
  );
};

export default Loader;
