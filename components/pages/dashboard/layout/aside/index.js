"use client";
import Menu from "./menu";
import Detail from "./detail";
const API_URL = "https://gift-card.ir";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

function Aside() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData();
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

      const res = await fetch(`${API_URL}/members/account.php`, requestOptions);
      const data = await res.json();
      setUser(data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    }
  };

  return (
    <aside className="w-full lg:border-[1px] lg:bg-white lg:w-1/5 lg:p-6 lg:rounded-lg lg:h-max shadow-sm">
      <div className="flex flex-col gap-4 items-center text-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-200">
          <FaUser className="w-10 h-10 text-gray-400" />
        </div>
        <div>
          <p className="font-bold text-lg text-gray-800">
            {user?.name ?? "نام کاربر"}
          </p>
          <p className="text-sm text-gray-600 mt-1">{user?.email}</p>
        </div>
      </div>
      <Detail />
      <Menu />
    </aside>
  );
}

export default Aside;
