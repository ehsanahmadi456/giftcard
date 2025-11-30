"use client";
import { useEffect, useState } from "react";
import Item from "./Item";
import Cookies from "js-cookie";

function List() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      setLoading(true);
      setError(null);

      const accessToken = Cookies.get("access_token");
      if (!accessToken) {
        setError("لطفا ابتدا وارد شوید");
        setLoading(false);
        return;
      }

      const myHeaders = new Headers();
      myHeaders.append("Cookie", `AStoken=${accessToken}`);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/members/favorite.php?op=list`,
        {
          method: "GET",
          headers: myHeaders,
          credentials: "include",
        }
      );

      const data = await response.json();
      if (data.status === "1" && data.data && Array.isArray(data.data)) {
        setList(data.data);
      } else {
        setList([]);
        if (data.status === "0") {
          setError("خطا در دریافت لیست علاقه‌مندی‌ها");
        }
      }
    } catch (err) {
      console.error("Error fetching wishlist:", err);
      setError("خطا در بارگذاری لیست علاقه‌مندی‌ها");
      setList([]);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/members/favorite.php?op=remove&id=${productId}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (result.status === "1") {
        fetchWishlist();
      } else {
        alert("خطا در حذف محصول");
      }
    } catch (err) {
      console.error("Error removing from wishlist:", err);
      alert("خطا در حذف محصول");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col text-sm md:bg-white md:px-8 md:py-4 rounded-md lg:border-[1px] gap-4 w-full md:text-xs lg:text-sm">
        <h2 className="font-bold">لیست علاقه‌مندی‌ها</h2>
        <div className="text-center py-8 text-gray-500">در حال بارگذاری...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col text-sm md:bg-white md:px-8 md:py-4 rounded-md lg:border-[1px] gap-4 w-full md:text-xs lg:text-sm">
        <h2 className="font-bold">لیست علاقه‌مندی‌ها</h2>
        <div className="text-center py-8 text-red-500">{error}</div>
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div className="flex flex-col text-sm md:bg-white md:px-8 md:py-4 rounded-md lg:border-[1px] gap-4 w-full md:text-xs lg:text-sm">
        <h2 className="font-bold">لیست علاقه‌مندی‌ها</h2>
        <div className="text-center py-8 text-gray-500">
          لیست علاقه‌مندی‌های شما خالی است
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col text-sm md:bg-white md:px-8 md:py-4 rounded-md lg:border-[1px] gap-4 w-full md:text-xs lg:text-sm">
      <h2 className="font-bold">لیست علاقه‌مندی‌ها</h2>

      <div className="items-center justify-between text-center gap-4 p-4 hidden md:flex bg-gray-50 rounded-md">
        <p className="w-2/12 font-medium">شناسه محصول</p>
        <p className="w-6/12 font-medium">نام محصول</p>
        <p className="w-4/12 font-medium">عملیات</p>
      </div>

      <div className="flex flex-col gap-4">
        {list.map((item) => (
          <Item
            data={item}
            key={item.id}
            onRemove={() => handleRemoveItem(item.pid)}
          />
        ))}
      </div>

      <div className="flex justify-between items-center mt-4 pt-4 border-t">
        <span className="text-sm text-gray-600">
          تعداد: {list.length} محصول
        </span>
        <button
          onClick={fetchWishlist}
          className="px-4 py-2 text-sm bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        >
          بروزرسانی لیست
        </button>
      </div>
    </div>
  );
}

export default List;
