import { useState } from "react";
import Image from "next/image";
import { request } from "@/services/response";
import Spin from "@/public/assets/icons/spinLoading.svg";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function SendReq({ data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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

  return (
    <button
      type="submit"
      disabled={!isFormValid(data)}
      onClick={(e) => {
        e.preventDefault();
        handleReq();
      }}
      className={`p-3 px-12 flex justify-center items-center text-center text-white rounded-sm lg:w-3/4 lg:mx-auto
      ${isFormValid(data) ? "bg-primary" : "bg-[#bcbcbc]"}`}
    >
      {loading ? (
        <Image src={Spin} alt="loading" width={25} height={25} />
      ) : (
        "ورود به حساب کاربری"
      )}
    </button>
  );
}

export default SendReq;
