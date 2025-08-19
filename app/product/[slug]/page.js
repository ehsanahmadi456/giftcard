import Layout from "@/components/layout";
import ProductPage from "@/components/pages/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function req(slug) {
  const res = await fetch(`${API_URL}/data.php?op=prod_data&id=${slug}`);
  const text = await res.text();

  try {
    const data = JSON.parse(text);
    return data || [];
  } catch (err) {
    return [];
  }
}

async function Product({ params: { slug } }) {
  const data = await req(slug);

  return (
    <Layout>
      <ProductPage data={data} />
    </Layout>
  );
}

export default Product;
