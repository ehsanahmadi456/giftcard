"use client";

import { useState } from "react";
import Form from "./Form";
import CodeImg from "./CodeImg";
import Image from "next/image";
import Spin from "@/public/assets/icons/spinLoading.svg";
import { request } from "@/services/response";

function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "ehsan",
    email: "ehsanahmadi@gmail.com",
    mobile: "09222648955",
    landline: "02156592620",
    pass1: "adminehsan83",
    pass2: "adminehsan83",
    code: "",
    rules: false,
  });

  const handleChange = (name, value) => setData({ ...data, [name]: value });

  const handleReq = () => {
    const { name, email, mobile, landline, pass1, pass2, code } = data;
    setLoading(true);
    request
      .signUp(name, email, mobile, landline, pass1, pass2, Number(code))
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.data);
        setLoading(false);
      });
  };

  return (
    <section className="flex flex-col w-full max-w-md gap-8 p-6 mx-auto lg:max-w-screen-2xl lg:px-12 xl:px-24 lg:order-1 lg:w-1/2 lg:justify-center">
      <h4 className="mb-8 font-bold text-center">ساخت حساب کاربری جدید</h4>
      <form action="" className="flex flex-col gap-8">
        <Form handleChange={handleChange} data={data} />
        <CodeImg />
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rules"
            className="accent-primary cursor-pointer"
            onChange={(e) => {
              setData({ ...data, rules: e.target.checked });
            }}
          />
          <label htmlFor="rules" className="p-2 text-sm">
            قوانین و شرایط را می پذیرم.
          </label>
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
