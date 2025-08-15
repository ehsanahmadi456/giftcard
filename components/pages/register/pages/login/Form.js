"use client";

import { useState } from "react";
import Field from "../../element/Field";

// Icons
import CodeReg from "@/public/assets/icons/CodeReg";
import PassReg from "@/public/assets/icons/PassReg";
import EmailReg from "@/public/assets/icons/EmailReg";
import CodeImg from "../signup/CodeImg";
import SendReq from "./SendReq";

function Form() {
  const [data, setData] = useState({
    email: "",
    pass: "",
    code: "",
  });

  const handleChange = (name, value) => setData({ ...data, [name]: value });

  return (
    <form action="" className="flex flex-col gap-8">
      <Field
        label="ایمیل"
        type="email"
        handleChange={handleChange}
        name="email"
        icon={<EmailReg />}
        placeholder="ایمیل خود را وارد کنید."
      />
      <Field
        label="رمز عبور"
        type="password"
        handleChange={handleChange}
        name="pass"
        icon={<PassReg />}
        placeholder="رمز خود را وارد کنید."
      />
      <Field
        label="کد امنیتی"
        type="text"
        handleChange={handleChange}
        name="code"
        icon={<CodeReg />}
        placeholder="کد زیر را به انگلیسی وارد کنید."
      />
      {/* <div className="flex gap-4">
        <img src="../public/assets/images/captcha.png" alt="" />
        <div className="flex items-center gap-2 text-[#717171] text-xs">
          <RetryReg />
          بارگذاری مجدد
        </div>
      </div> */}
      <CodeImg />
      <SendReq data={data} />
    </form>
  );
}

export default Form;
