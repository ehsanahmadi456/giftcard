"use client";
import { useState, useEffect } from "react";
import Detail from "./detail";
import Order from "./Order";

function DashboardInvoicePage() {
  const [ordersData, setOrdersData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setIsLoading(true);

      const formData = new URLSearchParams();
      formData.append("status", "y"); // فقط سفارش‌های موفق

      const response = await fetch("https://gift-card.ir/members/search.php", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const result = await response.json();

      console.log("API Response:", result); // برای دیباگ

      if (result.data && result.status === "1") {
        setOrdersData(result.data);
      } else if (
        result.data === 0 ||
        (result.data && result.data.length === 0)
      ) {
        // اگر هیچ سفارشی نبود
        setError("هیچ سفارشی یافت نشد");
      } else {
        setError("داده ای برای نمایش ندارید");
      }
    } catch (err) {
      setError("خطا در ارتباط با سرور");
      console.error("Fetch Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <main className="flex flex-col w-full mx-auto mt-6 mb-12 max-w-screen-2xl lg:flex-row-reverse">
        <div className="flex items-center justify-center w-full p-8">
          <div className="text-center">در حال بارگذاری...</div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex flex-col w-full mx-auto mt-6 mb-12 max-w-screen-2xl lg:flex-row-reverse">
        <div className="flex items-center justify-center w-full p-8">
          <div className="bg-yellow-100 text-yellow-700 p-4 rounded-md">
            {error}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col w-full mx-auto mt-6 mb-12 max-w-screen-2xl lg:flex-row-reverse">
      <Order orders={ordersData.orders} />
      <Detail orders={ordersData.orders} total={ordersData.total} />
    </main>
  );
}

export default DashboardInvoicePage;
