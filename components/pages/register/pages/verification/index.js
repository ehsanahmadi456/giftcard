"use client";

import { useState, useRef } from "react";
import OTP from "./OTP";
import SendOTP from "./SendOTP";
import CheckCode from "./CheckCode";

function VerificationPage() {
  const [data, setData] = useState(["", "", "", "", "", "", "", ""]);
  const [phone, setPhone] = useState("");
  const inputsRef = useRef([]);
  const [tokenDetail, setTokenDetail] = useState();

  const handleChange = (idx, val) => {
    const newData = [...data];
    newData[idx] = val;
    setData(newData);

    if (val && idx < inputsRef.current.length - 1) {
      inputsRef.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (idx, e) => {
    if (e.key === "Backspace" && !data[idx] && idx > 0) {
      inputsRef.current[idx - 1].focus();
    }
  };

  return (
    <section className="flex flex-col w-full max-w-md gap-8 p-6 mx-auto lg:max-w-screen-md lg:px-12 xl:px-24 lg:order-1 lg:w-1/2 lg:justify-center">
      <h4 className="mb-8 font-bold text-center">
        کد ارسالی به شماره همراه خود را وارد نمایید.
      </h4>
      <div className="flex items-center justify-between font-medium">
        <input
          type="tel"
          value={phone}
          onChange={(e) => {
            if (e.target.value.length <= 11) {
              setPhone(e.target.value);
            }
          }}
          maxLength={11}
          inputMode="numeric"
          placeholder="09123456789"
          className="bg-transparent text-center border-2 rounded-md outline-none pt-1 no-spinner"
        />
        <SendOTP phone={phone} setTokenDetail={setTokenDetail} />
      </div>
      <form action="" className="flex flex-col gap-8">
        <div
          dir="ltr"
          className="flex items-center justify-center gap-4 mt-12 mb-12"
        >
          {Array(8)
            .fill("")
            .map((_, idx) => (
              <OTP
                key={idx}
                idx={idx}
                data={data}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                inputRef={(el) => (inputsRef.current[idx] = el)}
              />
            ))}
        </div>
        <CheckCode phone={phone} data={data} tokenDetail={tokenDetail} />
      </form>

      <span>در صورت عدم دریافت کد با شماره ۹۰۰۰۰۲۰۰-۰۲۱ تماس بگیرید.</span>
    </section>
  );
}

export default VerificationPage;
