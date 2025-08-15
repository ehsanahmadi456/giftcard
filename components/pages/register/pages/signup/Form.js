import EmailReg from "@/public/assets/icons/EmailReg";
import Field from "../../element/Field";
import UserReg from "@/public/assets/icons/UserReg";
import MobileReg from "@/public/assets/icons/MobileReg";
import PhoneReg from "@/public/assets/icons/PhoneReg";
import PasswordReg from "@/public/assets/icons/PasswordReg";
import ScanReg from "@/public/assets/icons/ScanReg";

function Form({ handleChange }) {
  return (
    <>
      <Field
        label="نام و نام خانوادگی"
        type="text"
        icon={<UserReg />}
        name="name"
        handleChange={handleChange}
        placeholder="لطفا به فارسی وارد کنید."
      />
      <Field
        label="ایمیل"
        type="email"
        dir="ltr"
        icon={<EmailReg />}
        name="email"
        handleChange={handleChange}
        placeholder="ایمیل خود را وارد کنید."
      />
      <Field
        label="تلفن همراه"
        type="number"
        icon={<MobileReg />}
        dir="ltr"
        name="mobile"
        handleChange={handleChange}
        placeholder="لطفا به انگلیسی وارد کنید."
      />
      <Field
        label="تلفن ثابت"
        dir="ltr"
        type="number"
        icon={<PhoneReg />}
        name="landline"
        handleChange={handleChange}
        placeholder="لطفا به انگلیسی وارد کنید."
      />
      <Field
        label="رمز عبور"
        dir="ltr"
        type="password"
        icon={<PasswordReg />}
        name="pass1"
        handleChange={handleChange}
        placeholder="رمز خود را وارد کنید."
      />
      <Field
        label="تکرار رمز عبور"
        dir="ltr"
        type="password"
        icon={<PasswordReg />}
        name="pass2"
        handleChange={handleChange}
        placeholder="رمز خود را وارد کنید."
      />
      <Field
        label="کد امنیتی"
        dir="ltr"
        type="number"
        icon={<ScanReg />}
        name="code"
        handleChange={handleChange}
        placeholder="کد زیر را به انگلیسی وارد کنید."
      />
    </>
  );
}

export default Form;
