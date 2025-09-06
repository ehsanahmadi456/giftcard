import Layout from "@/components/layout";
import BlogSinglePage from "@/components/pages/blog-single";

const API_URL = process.env.API_URL;

async function req(slug) {
  const resItem = await fetch(`${API_URL}/data.php?op=blog_data&id=${slug}`);
  const textItem = await resItem.text();
  const resList = await fetch(`${API_URL}/data.php?op=blog_list`);
  const textList = await resList.text();

  try {
    const item = JSON.parse(textItem);
    const list = JSON.parse(textList);

    return {
      item: item && item.data,
      list: list && list.data,
    };
  } catch (err) {
    return [];
  }
}

async function BlogSingle({ params }) {
  const { slug } = params;
  const data = await req(slug);

  return (
    <Layout>
      <BlogSinglePage item={data.item} list={data.list} />
    </Layout>
  );
}

export default BlogSingle;
