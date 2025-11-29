import { Suspense } from 'react';
import Cards from "./cards";
import Navigation from "../../elements/Navigation";
import List from "./list";
import Banner from "./Banner";

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
    console.error('Error fetching categories:', error);
    return [];
  }
}

async function getPosts(page = 1, perPage = 6) {
  try {
    const res = await fetch(`${API_URL}/data.php?op=blog_list&pp=${perPage}&page=${page}`, {
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
    console.error('Error fetching posts:', error);
    return { posts: [], totalPages: 1 };
  }
}

async function getPopularPosts() {
  try {
    const res = await fetch(`${API_URL}/data.php?op=blog_list&pp=20&page=1`, {
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
    console.error('Error fetching popular posts:', error);
    return [];
  }
}

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;

  const [categories, blogData, popular] = await Promise.all([
    getCategories(),
    getPosts(page),
    getPopularPosts(),
  ]);

  return (
    <main className="w-full mx-auto mb-12 max-w-screen-2xl">
      <Banner data={categories} />
      
      {blogData.posts?.length === 0 && (
        <div className="p-6 text-center text-red-500">
          هیچ پستی یافت نشد! لطفا API را بررسی کنید.
        </div>
      )}
      
      <Cards data={blogData.posts} />
      
      {/* اضافه کردن Suspense */}
      <Suspense fallback={<div className="h-12" />}>
        <Navigation totalPages={blogData.totalPages} currentPage={page} />
      </Suspense>
      
      <List data={popular} />
    </main>
  );
}