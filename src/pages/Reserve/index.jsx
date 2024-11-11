import UserNav from "../../components/base/UserNav";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Forms";
import style from "./style.module.scss";

const Reserve = () => {
  return (
    <>
      <UserNav />
      <div className={style.reserve}>
        <div className={style.reserve_content}>
          <div className={style.reserve_content_title}>
            <h1>با سلام !</h1>
            <span>به بخش رزرو تم تولد خوش امدید!!</span>
          </div>
          <div className={style.reserve_contnt_form}>
            <div className={style.reserve_contnt_form_title}>
              خب حالا مشخصات رو وارد کن
            </div>
            <div className={style.reserve_contnt_form_content}>
              <Input name={"name"} p={"نام تم را وارد کنید"} />
              <Input name={"date"} p={"تاریخ مراسم را وارد کنید مثلا:دو اذر"} />
              <Input
                name={"houre"}
                p={"ساعت مراسم را وارد کنید مثلا:هشت شب "}
              />
              <Input name={"number"} p={"شماره تماس را وارد کنید "} />
              <button className={style.reserve_contnt_form_content_btn}>
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reserve;
