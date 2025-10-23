"use client";

import { useState } from "react";
import Field from "../../element/Field";

// Icons
import CodeReg from "@/public/assets/icons/CodeReg";
import PassReg from "@/public/assets/icons/PassReg";
import EmailReg from "@/public/assets/icons/EmailReg";

function Form({ handleChange }) {
  return (
    <>
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
    </>
  );
}

export default Form;
