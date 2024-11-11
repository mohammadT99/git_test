import ImageBox from "../../components/ui/imageBox";
import style from "./style.module.scss";
import image from "../../assets/images/5951987480507040604.jpg";
import UserNav from "../../components/base/UserNav";
const Gallery = () => {
  return (
    <>
      <UserNav />
      <div className={style.gallery}>
        <h1>گالری طرح</h1>
        <div className={style.gallery_content}>
          <ImageBox src={image} title={"طرح الفا"} />
          <ImageBox src={image} title={"tt"} />

          <ImageBox src={image} title={"tt"} />
          <ImageBox src={image} title={"tt"} />
          <ImageBox src={image} title={"tt"} />
          <ImageBox src={image} title={"tt"} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
