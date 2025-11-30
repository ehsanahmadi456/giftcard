import Layout from "@/components/layout";
import CartPage from "@/components/pages/cart";
import { cookies } from "next/headers";

async function getCartData() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("AStoken")?.value;

  if (!accessToken) {
    return [];
  }

  const myHeaders = new Headers();
  myHeaders.append("Cookie", `AStoken=${accessToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    cache: 'no-store'
  };

  try {
    const res = await fetch(
      `https://gift-card.ir/members/cart.php?op=query`,
      requestOptions
    );

    const data = await res.json();

    if (data.status === "1" && data.data) {
  
      return data.data.map(item => ({
        id: item[0],
        count: item[1],
        totalPrice: item[2]
      }));
    }
    // ✔✔✔✔

    return [];
  } catch (err) {
    console.error("Cart API error:", err);
    return [];
  }
}

export default async function Cart() {
  const cartData = await getCartData();
  
  return (
    <Layout>
      <CartPage initialData={cartData} />
    </Layout>
  );
}