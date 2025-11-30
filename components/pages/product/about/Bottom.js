"use client";
import { useState, useEffect } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaInfoCircle,
  FaShoppingCart,
  FaTruck,
  FaPlus,
  FaMinus,
  FaTrash,
} from "react-icons/fa";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Bottom({ data }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const [cartItem, setCartItem] = useState(null);
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    checkFavoriteStatus();
    fetchCartData();
  }, [data.id]);

  const checkFavoriteStatus = async () => {
    try {
      const accessToken = Cookies.get("access_token");
      if (!accessToken || !data.id) return;

      const myHeaders = new Headers();
      myHeaders.append("Cookie", `AStoken=${accessToken}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        credentials: "include",
      };

      const response = await fetch(
        `${API_URL}/members/favorite.php?op=infavorite&id=${data.id}`,
        requestOptions
      );
      const result = await response.json();

      setIsFavorite(result.status === "1");
    } catch (error) {
      console.error("Error checking favorite status:", error);
    }
  };

  const fetchCartData = async () => {
    try {
      const accessToken = Cookies.get("access_token");
      if (!accessToken) return;

      const myHeaders = new Headers();
      myHeaders.append("Cookie", `AStoken=${accessToken}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        credentials: "include",
      };

      const response = await fetch(
        `${API_URL}/members/cart.php?op=query`,
        requestOptions
      );
      const result = await response.json();

      if (result.status === "1" && result.data) {
        setCartData(result.data);
        const currentItem = result.data.find(
          (item) => item.id === data.id.toString()
        );
        setCartItem(currentItem);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const handleCartAction = async (action) => {
    try {
      setCartLoading(true);
      const accessToken = Cookies.get("access_token");

      if (!accessToken) {
        alert("لطفا ابتدا وارد شوید");
        return;
      }

      const myHeaders = new Headers();
      myHeaders.append("Cookie", `AStoken=${accessToken}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        credentials: "include",
      };

      const response = await fetch(
        `${API_URL}/members/cart.php?op=add&id=${data.id}&act=${action}`,
        requestOptions
      );
      const result = await response.json();

      if (result.status === "1") {
        await fetchCartData();

        if (action === "a") {
          alert("تعداد محصول افزایش یافت");
        } else if (action === "m") {
          if (result.data && parseInt(result.data.quantity) === 0) {
            alert("محصول از سبد خرید حذف شد");
          } else {
            alert("تعداد محصول کاهش یافت");
          }
        }
      } else {
        alert("خطا در به روزرسانی سبد خرید");
      }
    } catch (error) {
      console.error("Error updating cart:", error);
      alert("خطا در ارتباط با سرور");
    } finally {
      setCartLoading(false);
    }
  };

  const handleAddToCart = async () => {
    await handleCartAction("a");
  };

  const handleIncreaseQuantity = async () => {
    await handleCartAction("a");
  };

  const handleDecreaseQuantity = async () => {
    await handleCartAction("m");
  };

  const handleRemoveFromCart = async () => {
    await handleCartAction("m");
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      handleRemoveFromFavorite();
    } else {
      handleAddToFavorite();
    }
  };

  const handleAddToFavorite = async () => {
    try {
      setFavoriteLoading(true);
      const accessToken = Cookies.get("access_token");

      if (!accessToken) {
        alert("لطفا ابتدا وارد شوید");
        return;
      }

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      const formdata = new URLSearchParams();
      formdata.append("op", "add");
      formdata.append("id", data.id);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
        credentials: "include",
      };

      const response = await fetch(
        `${API_URL}/members/favorite.php`,
        requestOptions
      );
      const result = await response.json();

      if (result.status === "1") {
        setIsFavorite(true);
        alert("به علاقه‌مندی‌ها اضافه شد");
      } else {
        alert("خطا در افزودن به علاقه‌مندی‌ها");
      }
    } catch (error) {
      console.error("Error adding to favorite:", error);
      alert("خطا در ارتباط با سرور");
    } finally {
      setFavoriteLoading(false);
    }
  };
  const handleRemoveFromFavorite = async () => {
    try {
      setFavoriteLoading(true);
      const accessToken = Cookies.get("access_token");

      if (!accessToken) {
        alert("لطفا ابتدا وارد شوید");
        return;
      }

      const myHeaders = new Headers();
      myHeaders.append("Cookie", `AStoken=${accessToken}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        credentials: "include",
      };

      const response = await fetch(
        `${API_URL}/members/favorite.php?op=remove&id=${data.id}`,
        requestOptions
      );
      const result = await response.json();

      if (result.status === "1") {
        setIsFavorite(false);
        alert("از علاقه‌مندی‌ها حذف شد");
      } else {
        alert("خطا در حذف از علاقه‌مندی‌ها");
      }
    } catch (error) {
      console.error("Error removing from favorite:", error);
      alert("خطا در ارتباط با سرور");
    } finally {
      setFavoriteLoading(false);
    }
  };

  return (
    <>
      <div className="flex gap-2 p-4 text-sm font-medium bg-gray-200 rounded-md">
        <FaInfoCircle className="w-5 h-5" />
        هشدار قبل از خرید به این نکات توجه کنید
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="group font-medium w-1/2 lg:w-2/5 border-[1px] p-4 flex justify-between items-center relative">
            <span className="text-lowgray">$</span>
            <input
              type="text"
              pattern="[0-9]+([\.,][0-9]+)?"
              className="w-full text-left bg-transparent outline-none placeholder:text-lowgray"
              placeholder="0.00-500.00"
            />
            <ul className="group-[.active]:flex flex-col bg-white absolute w-full text-left top-16 left-0 rounded-md shadow-md hidden">
              <li className="p-2 border-b-[1px] last:border-none hover:bg-gray-200 transition-colors duration-200 ease-linear">
                5
              </li>
              <li className="p-2 border-b-[1px] last:border-none hover:bg-gray-200 transition-colors duration-200 ease-linear">
                10
              </li>
            </ul>
          </div>
          <span className="w-1/2 font-medium">{data.price} تومان</span>
        </div>

        <div className="flex items-center gap-4">
          {/* دکمه سبد خرید */}
          {cartItem ? (
            <div className="flex items-center justify-between w-1/2 gap-2 p-2 bg-white border rounded-md">
              <button
                onClick={handleDecreaseQuantity}
                disabled={cartLoading}
                className="flex items-center justify-center w-8 h-8 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50"
              >
                {cartItem.quantity > 1 ? (
                  <FaMinus className="w-3 h-3" />
                ) : (
                  <FaTrash className="w-3 h-3" />
                )}
              </button>

              <span className="font-medium mx-2">{cartItem.quantity}</span>

              <button
                onClick={handleIncreaseQuantity}
                disabled={cartLoading}
                className="flex items-center justify-center w-8 h-8 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50"
              >
                <FaPlus className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              disabled={cartLoading}
              className="flex items-center text-nowrap justify-center w-1/2 gap-2 p-4 text-sm text-white rounded-md bg-primary hover:bg-[#6352B8] transition-colors duration-200 disabled:opacity-50"
            >
              {cartLoading ? "در حال افزودن..." : "افزودن به سبد خرید"}
              <FaShoppingCart className="w-5 h-5" />
            </button>
          )}

          {/* دکمه علاقه‌مندی */}
          <button
            onClick={handleFavoriteClick}
            disabled={favoriteLoading}
            className={`flex items-center justify-center w-1/2 text-nowrap gap-2 p-4 text-sm rounded-md transition-colors duration-200 ${
              isFavorite
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {favoriteLoading ? (
              "در حال پردازش..."
            ) : (
              <>
                {isFavorite ? (
                  <FaHeart className="w-4 h-4" />
                ) : (
                  <FaRegHeart className="w-4 h-4" />
                )}
                {isFavorite
                  ? "حذف از علاقه‌مندی‌ها"
                  : "افزودن به علاقه‌مندی‌ها"}
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 mt-4 text-xs text-green-600">
          <FaTruck className="w-4 h-4" />
          تحویل از طریق ایمیل بلافاصله پس از خرید
        </div>
      </div>
    </>
  );
}

export default Bottom;
