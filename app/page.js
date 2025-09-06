import HomePage from "@/components/pages/home";
import Layout from "@/components/layout";

const API_URL = process.env.API_URL;

async function req() {
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
  const list = await req();

  return (
    <Layout bgwhite={true}>
      <HomePage products={list.cats || []} />
    </Layout>
  );
}
