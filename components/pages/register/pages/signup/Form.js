import EmailReg from "@/public/assets/icons/EmailReg";
import Field from "../../element/Field";
import UserReg from "@/public/assets/icons/UserReg";
import MobileReg from "@/public/assets/icons/MobileReg";
import PhoneReg from "@/public/assets/icons/PhoneReg";
import PasswordReg from "@/public/assets/icons/PasswordReg";
import ScanReg from "@/public/assets/icons/ScanReg";

function Form() {
  return (
    <>
      <Field
        label="نام و نام خانوادگی"
        type="text"
        icon={<UserReg />}
        placeholder="لطفا به فارسی وارد کنید."
      />
      <Field
        label="ایمیل"
        type="email"
        icon={<EmailReg />}
        placeholder="ایمیل خود را وارد کنید."
      />
      <Field
        label="تلفن همراه"
        type="number"
        icon={<MobileReg />}
        placeholder="لطفا به انگلیسی وارد کنید."
      />
      <Field
        label="تلفن ثابت"
        type="number"
        icon={<PhoneReg />}
        placeholder="لطفا به انگلیسی وارد کنید."
      />
      <Field
        label="رمز عبور"
        type="password"
        icon={<PasswordReg />}
        placeholder="رمز خود را وارد کنید."
      />
      <Field
        label="تکرار رمز عبور"
        type="password"
        icon={<PasswordReg />}
        placeholder="رمز خود را وارد کنید."
      />
      <Field
        label="کد امنیتی"
        type="number"
        icon={<ScanReg />}
        placeholder="کد زیر را به انگلیسی وارد کنید."
      />
    </>
  );
}

export default Form;
