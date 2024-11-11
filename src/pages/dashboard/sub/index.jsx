import { NavLink } from "react-router-dom";
import Input from "../../../components/ui/Forms";
import { BiArrowToLeft } from "react-icons/bi";
import TabelCulemn from "../../../components/ui/TabelClemn";
import './style.scss' ;

const Sub = () => {
    
    return (
        <>
            <div className="sub">
                <NavLink className={'sub_link'} to={'/dashboard'} >بازگشت <BiArrowToLeft/></NavLink>
                <div className="sub_serarch">
                    <Input p={'جستجو کنید'} />
                </div>
                <div className="sub_title">
                    <h1>لیست  مشتری ها</h1>
                </div>
                <div className="sub_content">
                    <TabelCulemn name={'ali'} number={24} count={1} date={'24/10/1403'} />
                </div>
            </div>
        </>
    )
}

export default Sub ;