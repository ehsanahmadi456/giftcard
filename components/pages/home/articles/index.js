import { useEffect, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import routes from "@/services/routes";
import { callApi } from "@/services/callApi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from "next/link";

function Articles() {
  const [blogs, setBlogs] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    getBlogs()
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 1024)
  }

  const getBlogs = () => {
    callApi(routes.blog.list(5, 1))
      .then(res => {
        if (res.status === '1') {
          setBlogs(res.data.posts)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <section
      id="blog"
      className="p-4 sm:p-6 !pb-[60px] sm:!pb-[80px] !pt-0 mx-auto mt-0 md:mt-[10px] lg:mt-[40px] max-w-screen-2xl lg:px-12 xl:px-24"
    >
      <div className="flex items-center justify-between w-full mb-[20px] md:mb-[37px] lg:mb-[55px]">
        <h4 className="text-base sm:text-lg md:text-xl font-bold">مقالات جدید</h4>
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          <Link href="/blog" className="text-sm sm:text-base font-medium text-secondary md:text-lg">
            مشاهده همه
          </Link>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.57 6.43005L3.5 12.5001L9.57 18.5701M20.5 12.5001H3.67"
                stroke="#F69625"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </div>
      </div>
      
      {isMobile && blogs.length > 0 ? (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.2}
          className="pb-12"
        >
          {blogs.map((blog, idx) => (
            <SwiperSlide key={idx}>
              {idx === 0 ? <Right data={blog} /> : <Left data={blog} />}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:grid-rows-3">
          {blogs.length > 0 && <Right data={blogs[0]} />}
          {blogs.length > 1 && blogs.slice(1).map((blog, idx) =>
            <Left data={blog} key={idx} />
          )}
        </div>
      )}
    </section>
  );
}

export default Articles;