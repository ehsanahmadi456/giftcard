import Layout from "@/components/layout";
import ProductsPage from "@/components/pages/products";
import { BasicURL } from "@/components/utils/path";

const API_URL = BasicURL;

async function reqCat() {
  const res = await fetch(`${API_URL}/data.php?op=cat_list`);
  const text = await res.text();

  try {
    const data = JSON.parse(text);
    return data.data || [];
  } catch (err) {
    return [];
  }
}

async function reqProd() {
  const res = await fetch(`${API_URL}/data.php?op=prod_list&cid=1`);
  const text = await res.text();

  try {
    const data = JSON.parse(text);
    return data.data || [];
  } catch (err) {
    return [];
  }
}

async function Products() {
  const cats = await reqCat();
  const prods = await reqProd();

  return (
    <Layout>
      <ProductsPage cats={cats.cats} prods={prods.prods} />
    </Layout>
  );
}

export default Products;
