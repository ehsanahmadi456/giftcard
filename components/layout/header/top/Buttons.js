"use client";

import ShopHeader from "@/public/assets/icons/ShopHeader";
import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
const API_URL = "https://gift-card.ir";

function Buttons() {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetchUserData();
    fetchCartData();
    
    const interval = setInterval(fetchCartData, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchUserData = async () => {
    try {
      const accessToken = Cookies.get("access_token");

      if (!accessToken) {
        setUser(null);
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

      const res = await fetch(`https://gift-card.ir/members/account.php`, requestOptions);
      const data = await res.json();
      setUser(data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    }
  };

  const fetchCartData = async () => {
    try {
      const res = await fetch(`https://gift-card.ir/members/cart.php?op=query`, {
        credentials: 'include'
      });
      const data = await res.json();

      if (data.status === "1" && data.data) {
        const itemsWithDetails = await Promise.all(
          data.data.map(async (item) => {
            try {
              const prodRes = await fetch(`https://gift-card.ir/data.php?op=prod_data&id=${item[0]}`);
              const prodData = await prodRes.json();
              
              const unitPrice = Number(prodData.data?.price) || 0;
              const count = Number(item[1]) || 0;
              
              const calculatedTotal = unitPrice * count;
              
              return {
                id: item[0],
                count: count,
                unitPrice: unitPrice,
                totalPrice: calculatedTotal,
                name: prodData.data?.name || `محصول ${item[0]}`,
                image: prodData.data?.imgpath || null
              };
            } catch {
              return {
                id: item[0],
                count: Number(item[1]) || 0,
                unitPrice: 0,
                totalPrice: 0,
                name: `محصول ${item[0]}`,
                image: null
              };
            }
          })
        );
        
        const totalCount = itemsWithDetails.reduce((sum, item) => {
          const count = Number(item.count) || 0;
          return sum + count;
        }, 0);
        
        const totalPrice = itemsWithDetails.reduce((sum, item) => {
          const price = Number(item.totalPrice) || 0;
          return sum + price;
        }, 0);
        
        setCartCount(totalCount);
        setCartTotal(totalPrice);
        setCartItems(itemsWithDetails);
      } else {
        setCartCount(0);
        setCartTotal(0);
        setCartItems([]);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setCartCount(0);
      setCartTotal(0);
      setCartItems([]);
    }
  };

  const updateCartInDropdown = async (productId, action) => {
    try {
      const res = await fetch(`https://gift-card.ir/members/cart.php?op=add&id=${productId}&act=${action}`, {
        method: 'POST',
        credentials: 'include'
      });
      const data = await res.json();

      if (data.status === "1") {
        await fetchCartData();
      }
    } catch (err) {
      console.error("Error updating cart:", err);
    }
  };

  const handleLogout = () => {
    Cookies.remove("access_token");
    setUser(null);
    setCartCount(0);
    setCartItems([]);
    setCartTotal(0);
    window.location.reload();
  };

  return (
    <div className="hidden gap-4 lg:flex">
      {user?.name ? (
        <>
          <div className="relative group">
            <Link
              href="/dashboard-account"
              className="flex items-center justify-center gap-1 p-2 px-4 text-xs font-medium transition-all duration-300 ease-linear bg-gray-100 rounded-lg group text-primary group-hover:bg-primary group-hover:text-white"
            >
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="transition-all duration-300 ease-linear fill-primary group-hover:fill-white"
                >
                  <path d="M12.1596 11.62C12.1296 11.62 12.1096 11.62 12.0796 11.62C12.0296 11.61 11.9596 11.61 11.8996 11.62C8.99957 11.53 6.80957 9.25 6.80957 6.44C6.80957 3.58 9.13957 1.25 11.9996 1.25C14.8596 1.25 17.1896 3.58 17.1896 6.44C17.1796 9.25 14.9796 11.53 12.1896 11.62C12.1796 11.62 12.1696 11.62 12.1596 11.62ZM11.9996 2.75C9.96957 2.75 8.30957 4.41 8.30957 6.44C8.30957 8.44 9.86957 10.05 11.8596 10.12C11.9096 10.11 12.0496 10.11 12.1796 10.12C14.1396 10.03 15.6796 8.42 15.6896 6.44C15.6896 4.41 14.0296 2.75 11.9996 2.75Z" />
                  <path d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z" />
                </svg>
              </i>
              {user.name || "پروفایل"}
            </Link>
            <Menu onLogout={handleLogout} user={user} />
          </div>

          <div className="relative group">
            <Link
              href="/cart"
              className="flex items-center justify-center gap-1 p-2 px-4 text-xs font-medium transition-colors duration-300 ease-linear rounded-lg text-lowgray group-hover:bg-gray-200 relative"
            >
              <div className="relative">
                <ShopHeader />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </div>
              سبد خرید
            </Link>
            
            <div className="flex-col p-4 bg-white absolute z-50 left-0 w-64 text-xs hidden group-hover:flex rounded-lg shadow-lg border max-h-96 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  سبد خرید شما خالی است
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-4 max-h-64 overflow-y-auto">
                    {cartItems.map((item) => (
                      <article key={item.id} className="flex flex-col gap-4 relative border-b pb-4 last:border-b-0">
                        <div className="flex items-center gap-2 font-medium">
                          {item.image ? (
                            <Image
                              src={`https://gift-card.ir${item.image}`}
                              alt={item.name}
                              width={32}
                              height={32}
                              className="w-8 h-8 rounded-md object-cover"
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center">
                              <ShopHeader />
                            </div>
                          )}
                          <span className="text-xs">{item.name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex border-[1px] rounded-md max-w-max">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                updateCartInDropdown(item.id, 'a');
                              }}
                              className="p-2 px-3 border-l-[1px] cursor-pointer hover:bg-gray-100 transition-colors"
                            >
                              +
                            </button>
                            <span className="p-2 px-3 border-l-[1px]">{item.count}</span>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                updateCartInDropdown(item.id, 'm');
                              }}
                              className="p-2 px-3 cursor-pointer hover:bg-gray-100 transition-colors"
                            >
                              -
                            </button>
                          </div>
                          <span>{Number(item.totalPrice).toLocaleString('fa-IR')} تومان</span>
                        </div>
                      </article>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t mt-4">
                    <Link
                      href="/cart"
                      className="p-2 bg-primary text-white font-medium rounded-md w-max hover:bg-[#6352B8] transition-all duration-300 ease-linear"
                    >
                      مشاهده سبد خرید
                    </Link>
                    <span className="font-medium">{cartTotal.toLocaleString('fa-IR')} تومان</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="relative group">
          <Link
            href="/login"
            className="flex items-center justify-center gap-1 p-2 px-4 text-xs font-medium transition-all duration-300 ease-linear bg-gray-100 rounded-lg group text-primary group-hover:bg-primary group-hover:text-white"
          >
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="transition-all duration-300 ease-linear fill-primary group-hover:fill-white"
              >
                <path d="M12.1596 11.62C12.1296 11.62 12.1096 11.62 12.0796 11.62C12.0296 11.61 11.9596 11.61 11.8996 11.62C8.99957 11.53 6.80957 9.25 6.80957 6.44C6.80957 3.58 9.13957 1.25 11.9996 1.25C14.8596 1.25 17.1896 3.58 17.1896 6.44C17.1796 9.25 14.9796 11.53 12.1896 11.62C12.1796 11.62 12.1696 11.62 12.1596 11.62ZM11.9996 2.75C9.96957 2.75 8.30957 4.41 8.30957 6.44C8.30957 8.44 9.86957 10.05 11.8596 10.12C11.9096 10.11 12.0496 10.11 12.1796 10.12C14.1396 10.03 15.6796 8.42 15.6896 6.44C15.6896 4.41 14.0296 2.75 11.9996 2.75Z" />
                <path d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z" />
              </svg>
            </i>
            ورود | ثبت نام
          </Link>
          <Menu onLogout={handleLogout} user={user} />
        </div>
      )}
    </div>
  );
}

export default Buttons;