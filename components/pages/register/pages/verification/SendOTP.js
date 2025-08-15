import { useState } from "react";
import ArrowRight from "@/public/assets/icons/ArrowRight";
import LoadingSvg from "@/public/assets/icons/LoadingSvg";
import { request } from "@/services/response";
import { toast } from "react-toastify";

function SendOTP({ phone, setTokenDetail }) {
  const [retry, setRetry] = useState(0);
  const [loading, setLoading] = useState(false);

  const reqCode = (time, token, token_sign) => {
    request
      .sendOtp(time, token, token_sign, phone)
      .then((res) => {
        setLoading(false);
        if (res.status === "0") {
          res.data.map((item) => toast.error(item));
          return;
        } else {
          res.data.map((item) => toast.success(item));
        }
        let newRetry = 181;
        const interval = setInterval(() => {
          newRetry--;
          setRetry(newRetry);
          if (newRetry <= 0) clearInterval(interval);
        }, 1000);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const reqToken = () => {
    setLoading(true);
    request
      .getLoginToken()
      .then((res) => {
        if (res && res.data) {
          setTokenDetail(res.data);
          const detail = res.data;
          const { time, token, token_sign } = detail;
          reqCode(time, token, token_sign);
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <button
      onClick={reqToken}
      disabled={phone.length !== 11}
      className={`flex items-center gap-0.5 text-sm font-normal text-secondary
      ${phone.length === 11 ? "opacity-100" : "opacity-60"}`}
    >
      {loading ? (
        <LoadingSvg color="#786ac2" />
      ) : (
        <>
          {retry ? (
            `${retry} ثانیه`
          ) : (
            <>
              <ArrowRight />
              ارسال کد
            </>
          )}
        </>
      )}
    </button>
  );
}

export default SendOTP;
