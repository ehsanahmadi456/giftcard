"use client";
import { useState } from "react";
import Cookies from "js-cookie";

const API_URL = "https://gift-card.ir";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanCardNumber = cardNumber.replace(/\D/g, "");

    if (!cleanCardNumber.trim()) {
      setMessage("لطفا شماره کارت را وارد کنید");
      return;
    }
    if (cleanCardNumber.length !== 16) {
      setMessage("شماره کارت باید 16 رقمی باشد");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const accessToken = Cookies.get("access_token");

      if (!accessToken) {
        setMessage("لطفا ابتدا وارد شوید");
        return;
      }
      const myHeaders = new Headers();
      myHeaders.append("Cookie", `AStoken=${accessToken}`);

      const formdata = new URLSearchParams();
      formdata.append("op", "add");
      formdata.append("kart", cleanCardNumber);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
        credentials: "include",
      };

      const response = await fetch(
        `${API_URL}/members/hesab.php`,
        requestOptions
      );
      const result = await response.json();

      if (result.status) {
        setMessage("کارت بانکی با موفقیت ثبت شد");
        setCardNumber("");
      } else {
        setMessage(result.message || "خطا در ثبت کارت بانکی");
      }
    } catch (error) {
      console.error("Error adding card:", error);
      setMessage("خطا در ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  };

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");

    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, "$1 ");

    return formatted;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  return (
    <div className="flex flex-col text-sm bg-white p-8 rounded-md lg:border-[1px] gap-4 w-full shadow-sm max-w-sm md:max-w-md lg:max-w-lg">
      <div className="text-center mb-4">
        <h2 className="font-bold text-lg">ثبت کارت بانکی</h2>
        <p className="text-gray-600 text-sm mt-2">
          شماره کارت بانکی خود را برای تراکنش‌های آینده ثبت کنید
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="relative p-3 px-6 border-[1px] rounded-sm flex items-center gap-2">
          <input
            type="text"
            placeholder="شماره کارت بانکی خود را وارد کنید"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength={19} // 16 رقم + 3 فاصله
            className="w-full bg-transparent outline-none placeholder:text-xs text-left font-mono"
            dir="ltr"
          />
        </div>

        {message && (
          <div
            className={`p-3 rounded-sm text-center text-sm ${
              message.includes("موفقیت")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="p-3 px-12 text-center text-white rounded-sm bg-primary hover:bg-[#6352B8] transition-all duration-300 ease-linear disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "در حال ثبت..." : "ثبت کارت بانکی"}
        </button>
      </form>
    </div>
  );
}

export default Payment;
