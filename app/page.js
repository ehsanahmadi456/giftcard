import HomePage from "@/components/pages/home";
import Layout from "@/components/layout";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchProducts() {
  const limit = 8;

  const res = await fetch(`${API_URL}/data.php?op=cat_list&limit=${limit}`);

  const text = await res.text();

  try {
    const data = JSON.parse(text);
    return data.data || [];
  } catch (err) {
    return [];
  }
}

export default async function Home() {
  const products = await fetchProducts();
  console.log(products);

  return (
    <Layout bgwhite={true}>
      <HomePage products={products.cats || []} />
    </Layout>
  );
}
