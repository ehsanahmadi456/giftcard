import { request } from "@/services/response";
import Image from "next/image";
import { toast } from "react-toastify";
import Spin from "@/public/assets/icons/spinLoading.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";

function CheckCode({ phone, data, tokenDetail }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const isActiv = phone.length === 11 && data.every((item) => item !== "");

  const handleReq = (e) => {
    e.preventDefault();
    setLoading(true);
    const { time, token, token_sign } = tokenDetail;

    request
      .checkOtp(time, token, token_sign, data)
      .then((res) => {
        setLoading(false);
        if (res.status === "0") {
          res.data.map((item) => toast.error(item));
          return;
        } else {
          router.push("/");
          res.data.map((item) => toast.success(item));
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <button
      type="submit"
      disabled={!isActiv}
      onClick={handleReq}
      className={`p-3 px-12 text-center grid justify-items-center text-white rounded-sm lg:w-3/4 lg:mx-auto
          ${isActiv ? "bg-primary" : "bg-[#bcbcbc]"}`}
    >
      {loading ? (
        <Image src={Spin} alt="loading" width={25} height={25} />
      ) : (
        "بررسی کد"
      )}
    </button>
  );
}

export default CheckCode;
