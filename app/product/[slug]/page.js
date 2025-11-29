import Layout from "@/components/layout";
import ProductPage from "@/components/pages/product";
import { BasicURL } from "@/components/utils/path";

const API_URL = BasicURL;

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
  console.log('producttt',data);
  

  return (
    <Layout>
      <ProductPage prod={data.prod} prods={data.prods} />
    </Layout>
  );
}

export default Product;
