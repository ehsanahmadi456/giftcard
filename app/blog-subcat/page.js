import Layout from "@/components/layout";
import BlogSubcatPage from "@/components/pages/blog-subcat";

const API_URL = process.env.API_URL;

async function req() {
  const res = await fetch(`${API_URL}/data.php?op=blog_list`);
  const text = await res.text();

  try {
    const data = JSON.parse(text);
    return data.data || [];
  } catch (err) {
    return [];
  }
}

async function BlogSubcat() {
  const list = await req();

  return (
    <Layout>
      <BlogSubcatPage list={list.posts || []} />
    </Layout>
  );
}

export default BlogSubcat;
