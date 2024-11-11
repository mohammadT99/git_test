import Input from "../../../components/ui/Forms";
import "./style.scss";
import image from "../../../assets/images/Ivar_logo.png";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import Api from "../../../libs/axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("ali");
  const [email, setEmail] = useState("ali@email.com");
  const [password, setPassword] = useState("12222");
  const navigate = useNavigate();
  const onhanndle = async () => {
    const test = {
      username: name,
      email: email,
      password: password,
    };
    try {
      const { data } = await Api.post("/auth/register", test);
      if (data.data.token) {
        Cookies.set("user", data.data.token);
        navigate("/");
        toast("hhhh");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="form_register">
        <form action="" className="form_content">
          <img src={image} alt="" width={150} />
          <h1> ثبت نام کنید</h1>
          <span>خوش امدید</span>
          <Input
            name={"username"}
            plaseholder={"نام خود را وارد کنید"}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type={"email"}
            name={"email"}
            plaseholder={"ایمیل خود را وارد کنید"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name={"password"}
            plaseholder={"رمز عبور خود را وارد کنید"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type={"button"} name={"ثبت نام"} onClick={onhanndle} />
        </form>
      </div>
    </>
  );
};

export default Register;
