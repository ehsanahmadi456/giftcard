import Banner from "./Banner";
import Cards from "./cards";
import MostView from "./mostView";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://gift-card.ir";

export const dynamic = 'force-dynamic';

async function getCategories() {
  try {
    const res = await fetch(`${API_URL}/data.php?op=blog_cat_list&limit=5`, {
      next: { revalidate: 60 },
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    return data?.data?.blog_cats || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

async function getPosts(categoryId = 0, page = 1, perPage = 6) {
  try {
    const url = categoryId
      ? `${API_URL}/data.php?op=blog_list&cat_id=${categoryId}&pp=${perPage}&page=${page}`
      : `${API_URL}/data.php?op=blog_list&pp=${perPage}&page=${page}`;

    const res = await fetch(url, { 
      next: { revalidate: 60 }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();

    return {
      posts: data?.data?.posts || [],
      totalPages: data?.data?.total_pages || 1,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { posts: [], totalPages: 1 };
  }
}

async function getPopularPosts(categoryId = 0) {
  try {
    const url = categoryId
      ? `${API_URL}/data.php?op=blog_list&cat_id=${categoryId}&pp=20&page=1`
      : `${API_URL}/data.php?op=blog_list&pp=20&page=1`;

    const res = await fetch(url, { 
      next: { revalidate: 60 }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    const posts = data?.data?.posts || [];
    const sorted = posts.sort((a, b) => (b.view || 0) - (a.view || 0));
    return sorted.slice(0, 6);
  } catch (error) {
    console.error("Error fetching popular posts:", error);
    return [];
  }
}

export default async function BlogCatPage({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const categoryId = Number(searchParams?.cat) || 0;

  const [categories, blogData, popular] = await Promise.all([
    getCategories(),
    getPosts(categoryId, page),
    getPopularPosts(categoryId),
  ]);

  return (
    <main className="w-full mx-auto mb-12 max-w-screen-2xl">
      <Banner data={categories} />
      
      {blogData.posts.length === 0 && (
        <div className="p-6 text-center text-red-500">
          هیچ پستی یافت نشد! لطفا API را بررسی کنید.
        </div>
      )}

      <Cards data={blogData.posts} />

      <section id="new-cat" className="p-6 mt-8 lg:px-12 xl:px-24">
        <h4 className="mb-8 text-lg font-medium text-lowgray">
          پربازدید ترین های این دسته
        </h4>
        <MostView data={popular} />
      </section>
    </main>
  );
}