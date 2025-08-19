import Layout from "@/components/layout";
import CartPage from "@/components/pages/cart";
import { cookies } from "next/headers";

const API_URL = "https://gift-card.ir";

async function req() {
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
    const res = await fetch(`${API_URL}/members/cart.php`, requestOptions);
    const text = await res.text();

    try {
      const data = JSON.parse(text);
      return data || [];
    } catch {
      return [];
    }
  } catch (err) {
    console.error("Cart API error:", err);
    return [];
  }
}

export default async function Cart() {
  const cart = await req();

  return (
    <Layout>
      <CartPage data={cart} />
    </Layout>
  );
}
