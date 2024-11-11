import { NavLink } from "react-router-dom";
import Input from "../../../components/ui/Forms";
import './style.scss'
import { BiArrowToLeft } from "react-icons/bi";

const AddSub = () => {
    return (
        <>
            <div className="form">
                <NavLink className={'form_link'} to={'/dashboard'} >بازگشت  <BiArrowToLeft /></NavLink>
                <h1>مشخصات  مشتری رو  وارد کنید</h1>
                <Input p={'نام مشتری راوارد کنید'} />
                <Input p={'شماره تماس مشتری راوارد کنید'} />
                <Input p={' تاریخ تولد راوارد کنید'} />
                <button className="form_btn">ثبت اطلاعات</button>
            </div>
        </>
    )
}

export default AddSub ;