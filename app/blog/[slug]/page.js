import Layout from "@/components/layout";
import BlogSinglePage from "@/components/pages/blog-single";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://gift-card.ir";

export const dynamic = 'force-dynamic';

async function req(slug) {
  try {
    const resItem = await fetch(`${API_URL}/data.php?op=blog_data&id=${slug}`, {
      next: { revalidate: 60 }
    });
    
    if (!resItem.ok) {
      throw new Error(`HTTP error! status: ${resItem.status}`);
    }
    
    const textItem = await resItem.text();
    
    const resList = await fetch(`${API_URL}/data.php?op=blog_list`, {
      next: { revalidate: 60 }
    });
    
    if (!resList.ok) {
      throw new Error(`HTTP error! status: ${resList.status}`);
    }
    
    const textList = await resList.text();

    const item = JSON.parse(textItem);
    const list = JSON.parse(textList);

    return {
      item: item?.data || null,
      list: list?.data || null,
    };
  } catch (err) {
    console.error('Error fetching blog data:', err);
    return {
      item: null,
      list: null,
    };
  }
}

async function BlogSingle({ params }) {
  const { slug } = await params;
  const data = await req(slug);

  return (
    <Layout>
      <BlogSinglePage item={data.item} list={data.list} />
    </Layout>
  );
}

export default BlogSingle;