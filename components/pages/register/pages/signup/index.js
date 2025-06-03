"use client";

import { useState } from "react";
import Form from "./Form";
import CodeImg from "./CodeImg";
import Image from "next/image";
import Spin from "@/public/assets/icons/spinLoading.svg";
import { request } from "@/services/response";
import checkIsError from "./handleError";

function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: { value: "", error: { valid: false, text: "" } },
    email: { value: "", error: { valid: false, text: "" } },
    mobile: { value: "", error: { valid: false, text: "" } },
    landline: { value: "", error: { valid: false, text: "" } },
    pass1: { value: "", error: { valid: false, text: "" } },
    pass2: { value: "", error: { valid: false, text: "" } },
    code: { value: "", error: { valid: false, text: "" } },
    rules: { value: false, error: { valid: false, text: "" } },
  });

  const handleChange = (name, val) => {
    // setData({ ...data, [name]: { value: "value", ...data[name] } });
    setData({
      ...data,
      [name]: {
        ...data[name],
        value: val,
      },
    });
  };

  console.log(data);

  const handleReq = () => {
    setData(checkIsError(data, setData));

    if (true) {
      const { name, email, mobile, landline, pass1, pass2, code } = data;
      setLoading(true);
      request
        .signUp(name, email, mobile, landline, pass1, pass2, Number(code))
        .then((res) => {
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  return (
    <section className="flex flex-col w-full max-w-md gap-8 p-6 mx-auto lg:max-w-screen-2xl lg:px-12 xl:px-24 lg:order-1 lg:w-1/2 lg:justify-center">
      <h4 className="mb-8 font-bold text-center">ساخت حساب کاربری جدید</h4>
      <form action="" className="flex flex-col gap-8">
        <Form handleChange={handleChange} data={data} />
        <CodeImg />
        <div className="flex flex-col justify-start items-start gap-1 w-full">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rules"
              className="accent-primary cursor-pointer"
              onChange={(e) => {
                setData({
                  ...data,
                  rules: { value: e.target.checked, ...data.rules },
                });
              }}
            />
            <label htmlFor="rules" className="p-2 text-sm">
              قوانین و شرایط را می پذیرم.
            </label>
          </div>
          {data.rules.error.valid && (
            <p className="text-sm text-red-500">{data.rules.error.text}</p>
          )}
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleReq();
          }}
          className="p-3 px-12 flex justify-center items-center text-center text-white rounded-sm bg-primary lg:w-3/4 lg:mx-auto"
        >
          {loading ? (
            <Image src={Spin} alt="loading" width={25} height={25} />
          ) : (
            "ایجاد حساب کاربری"
          )}
        </button>
      </form>

      <span className="block">
        قبلا ثبت نام کرده اید؟
        <a href="#" className="text-primary">
          ورود به حساب کاربری
        </a>
      </span>
    </section>
  );
}

export default SignupPage;
