import Layout from "@/components/layout";
import BlogSubcatPage from "@/components/pages/blog-subcat";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://gift-card.ir";

export const dynamic = 'force-dynamic';

async function req() {
  try {
    const res = await fetch(`${API_URL}/data.php?op=blog_list`, {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const text = await res.text();
    const data = JSON.parse(text);
    return data.data || { posts: [] };
  } catch (err) {
    console.error('Error fetching blog subcategory data:', err);
    return { posts: [] };
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