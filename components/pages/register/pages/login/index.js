"use client";


import Link from "next/link";
import Form from "./Form";
import CodeImg from "../signup/CodeImg";
import { useState } from "react";
import { request } from "@/services/response";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Spin from "@/public/assets/icons/spinLoading.svg";
import { toast } from "react-toastify";

function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    pass: "",
    code: "",
  });

  const handleChange = (name, value) => setData({ ...data, [name]: value });

  const reqLogin = (time, token, token_sign) => {
    const { email, pass, code } = data;

    request
      .login(email, pass, code, time, token, token_sign)
      .then((res) => {
        setLoading(false);
        if (res.status === "1") {
          router.push("/");
          Cookies.set("access_token", res.data.AStoken, {
            path: "/",
            secure: true,
            sameSite: "strict",
          });
        } else if (res.status === "0")
          res.data.map((item) => toast.error(item));
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const reqToken = () => {
    request
      .getLoginToken()
      .then((res) => {
        const detail = res.data;
        const { time, token, token_sign } = detail;
        reqLogin(time, token, token_sign);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleReq = () => {
    setLoading(true);
    reqToken();
  };

  const isFormValid = (formData) => {
    return Object.values(formData).every(
      (value) => String(value).trim() !== ""
    );
  };

  const onSubmitHandler = (e) => {
    if (!isFormValid(data)) return

    e.preventDefault();
    handleReq();
  }
  return (
    <section className="flex flex-col w-full max-w-md gap-8 p-6 mx-auto mb-12 lg:max-w-screen-2xl lg:px-12 xl:px-24 lg:order-1 lg:w-1/2 lg:justify-center">
      <h4 className="mb-12 font-bold text-center">ورود به حساب کاربری</h4>
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-8">
        <Form handleChange={handleChange} />
        <CodeImg />

        <button
          type="submit"
          disabled={!isFormValid(data)}
          onClick={onSubmitHandler}
          className={`p-3 px-12 flex justify-center items-center text-center text-white rounded-sm lg:w-3/4 lg:mx-auto
      ${isFormValid(data) ? "bg-primary" : "bg-[#bcbcbc]"}`}
        >
          {loading ? (
            <Image src={Spin} alt="loading" width={25} height={25} />
          ) : (
            "ورود به حساب کاربری"
          )}
        </button>
      </form>

      <Link href="/verification" className="block mt-6 text-secondary">
        فراموشی کلمه عبور
      </Link>
      <span className="block">
        حساب کاربری ندارید؟
        <Link href="/signup" className="text-primary">
          ساخت حساب کاربری جدید
        </Link>
      </span>
    </section>
  );
}

export default LoginPage;
