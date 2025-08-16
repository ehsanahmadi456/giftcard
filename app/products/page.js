import Layout from "@/components/layout";
import ProductsPage from "@/components/pages/products";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function req() {
  const res = await fetch(`${API_URL}/data.php?op=cat_list`);
  const text = await res.text();

  try {
    const data = JSON.parse(text);
    return data.data || [];
  } catch (err) {
    return [];
  }
}

async function Products() {
  const list = await req();

  return (
    <Layout>
      <ProductsPage list={list.cats} />
    </Layout>
  );
}

export default Products;
