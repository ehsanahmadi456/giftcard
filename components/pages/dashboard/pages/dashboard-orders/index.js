import { cookies } from "next/headers";
import Detail from "../elements/detail";
import List from "./list";

const API_URL = "https://gift-card.ir";

async function DashboardOrdersPage() {
  let orders = [];
  let stats = { wallet: 0, rewards: 0, totalOrders: 0 };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  const myHeaders = new Headers();
  myHeaders.append("Cookie", `AStoken=${accessToken}`);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  try {
    const res = await fetch(`${API_URL}/members/search.php`, requestOptions);

    const data = await res.json();
    console.log(data);

    if (data?.data) {
      orders = data.data.orders;
      stats = {
        wallet: 256000,
        rewards: 10000,
        totalOrders: data?.data?.length,
      };
    }
  } catch (err) {
    console.error("خطا در دریافت سفارش‌ها:", err);
  }

  return (
    <section className="flex flex-col gap-6 lg:w-4/5">
      <Detail stats={stats} />
      <List orders={orders} />
    </section>
  );
}

export default DashboardOrdersPage;
