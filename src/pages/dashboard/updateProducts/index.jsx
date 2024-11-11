import { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Forms";
import { TbNewSection } from "react-icons/tb";
import "./style.scss";
import Api from "../../../libs/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CurrencyInput from "react-currency-input-field";
import { useSearchParams } from "react-router-dom";

const UpdateProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [searchParams , setSearchParams] = useSearchParams()

  const onHanddleForm = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if image is selected
    if (!image) {
      alert("Please select an image");
      return;
    }

    // Create a FormData object and append form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("type", type);
    formData.append("image", image);
    

    try {
        const params = searchParams.get(id)
        console.log(params);
        
      const { data } = await Api.put(`/products/${params}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (data) {
        toast.success(data.msg);
        navigate("/dashboard/products");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  const handleInput = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value) {
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    setPrice(value);
  };

  return (
    <>
      <div className="add_products">
        <h1>افزودن محصول</h1>
        <form onSubmit={onHanddleForm} className="form_add_products">
          <Input
            name={"name"}
            type={"text"}
            placeholder="نام محصول را وارد کنید"
            p={"نام محصول را وارد کنید"}
            onChange={(e) => setName(e.target.value)}
          />
          <CurrencyInput
            id="input-example"
            name="input-name"
            placeholder="قیمت محصول را وارد کنید"
           
            decimalsLimit={2}
            className="input"
            onValueChange={(value) => setPrice(value)}
          />
        
          <Input
            name={"type"}
            type={"text"}
            p={"نوع  را وارد کنید مثلا :دسر"}
            placeholder={"نوع محصول را وارد کنید مثلا :دسر "}
            onChange={(e) => setType(e.target.value)}
          />
          <div className="image">
            <label htmlFor="input" className="box_upload">
              <TbNewSection size={50} />
              افزودن عکس
            </label>
            <input
              type="file"
              className="input_form_add"
              id="input"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <Button type={"submit"} name={"افزودن محصول"} />
        </form>
      </div>
    </>
  );
};

export default UpdateProducts;
