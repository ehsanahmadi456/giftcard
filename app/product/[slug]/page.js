import Layout from "@/components/layout";
import ProductPage from "@/components/pages/product";

const API_URL = process.env.API_URL;

async function req(slug) {
  const resProd = await fetch(`${API_URL}/data.php?op=prod_data&id=${slug}`);
  const textProd = await resProd.text();

  try {
    const prod = JSON.parse(textProd);
    let prods;
    if (prod && prod.data) {
      const resProds = await fetch(
        `${API_URL}/data.php?op=prod_list&cid=${prod.data.cid}`
      );
      const textProds = await resProds.text();
      prods = JSON.parse(textProds);
    }
    return {
      prod: (prod && prod.data) || [],
      prods: (prods && prods.data) || [],
    };
  } catch (err) {
    return [];
  }
}

async function Product({ params }) {
  const { slug } = params;
  const data = await req(slug);

  return (
    <Layout>
      <ProductPage prod={data.prod} prods={data.prods} />
    </Layout>
  );
}

export default Product;
