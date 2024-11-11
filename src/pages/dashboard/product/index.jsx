import { useState, useEffect } from "react";
import Api from "../../../libs/axios";
import "./style.scss";
import { NavLink, useSearchParams } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import Input from "../../../components/ui/Forms";
import CurrencyInput from "react-currency-input-field";
import { TbNewSection } from "react-icons/tb";
import Button from "../../../components/ui/Button";
import { toast } from "react-toastify";
import { AiFillCloseSquare } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModuleOpen, setIsModuleOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [singleProduct , setSingleProduct ]  = useState([])
  // Fetch products from the server
  const fetchProducts = async () => {
    try {
      const { data } = await Api.get("/products/show-products");
      setProducts(data.data.data);
      console.log(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products.");
    }
  };

  // Handle form submission for updating a product
  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("type", type);
    formData.append("image", image);

    const id = searchParams.get("id");
    if (!id) {
      toast.error("Product ID not found.");
      return;
    }

    try {
      const response = await Api.put(
        `/products/${id}`,
        {
          name: name,
          price: price,
          type: type,
          image: image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data) {
        toast.success(response.data.msg);
        fetchProducts(); // Refresh the product list after update
        setIsModuleOpen(false); // Close the update form
      }
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product.");
    }
  };
  const ShowProductOnModule = async () => {
    // Get the URL search parameters
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
  
    try {
      // Fetch product data from the API
      const response = await Api.get(`products/show-product/${id}`);
      const { data } = response;
      toast.success(data.msg)
      setSingleProduct(data.data)
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
    
  }, []);

  useEffect(() => {
    ShowProductOnModule()
  } , [isModuleOpen])

  return (
    <div className="products">
      <div className="products_header">
        <p>محصولات</p>
        <NavLink to="/dashboard/products/add" className="btn-primary">
          افرودن محصول
        </NavLink>
      </div>
      <div className="card_products">
        {products.map((item) => (
          <div key={item._id} className="card_products_box">
            <img
              width={100}
              src={`http://localhost:5000/${item.image}`}
              alt={item.name}
            />
            <p>{item.name}</p>

            <button
              className="btn_primary"
              onClick={() => {
                setSearchParams({ id: item._id });
                setIsModuleOpen((prev) => !prev);
              }}
            >
              <BiEditAlt color="#fff" />
              ویرایش محصول
            </button>
          </div>
        ))}
      </div>
      {isModuleOpen && (
        <div className="module">
          <div
            className=""
            onClick={() => {
              setIsModuleOpen((prev) => !prev);
            }}
          >
            <IoClose />
          </div>
          <p>محصول خود را ویرایش کنید</p>
          <Input
            name="name"
            value={singleProduct.name}
            type="text"
            placeholder="نام محصول را وارد کنید"
            p="نام محصول را وارد کنید"
            onChange={(e) => setName(e.target.value)}
          />
          <CurrencyInput
            id="input-example"
            name="input-name"
            placeholder="قیمت محصول را وارد کنید"
            value={singleProduct.price}
            decimalsLimit={2}
            className="input"
            onValueChange={(value) => setPrice(value)}
          />
          <Input
            name="type"
            value={singleProduct.type}
            type="text"
            p="نوع  را وارد کنید مثلا :دسر"
            placeholder="نوع محصول را وارد کنید مثلا :دسر "
            onChange={(e) => setType(e.target.value)}
          />
          <div className="image">
          {singleProduct.image ? (
              <img className="image_show" src={`http://localhost:5000/${singleProduct.image}`} width={150} alt="" />
            ):null}
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
          <Button type="submit" name="افزودن محصول" onClick={handleUpdate} />
        </div>
      )}
    </div>
  );
};

export default Product;
