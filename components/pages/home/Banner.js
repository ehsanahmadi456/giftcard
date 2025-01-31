import Hero from "@/public/assets/images/hero.png";
import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <section
      id="hero"
      className="flex items-center justify-between p-6 mx-auto mt-12 mb-20 max-w-screen-2xl md:mb-24 lg:px-12 xl:px-24"
    >
      <div className="flex flex-col gap-8 justify-items-start md:w-2/5">
        <h1 className="text-2xl font-bold leading-loose md:text-4xl md:leading-loose">
          خرید انواع
          <span className=""> گیفت کارت </span>
          با <br />
          تحویل فوری
        </h1>
        <p className="font-medium leading-loose text-lowgray">
          مجموعه ما به عنوان اولین فروشگاه خرید گیفت کارت های آیتونز اپل، گوگل
          پلی، پلی استیشن، استیم و ... این امکان را برای شما فراهم می کند تا
          بدون نیاز به کارت های بین المللی پرداخت های درون برنامه ای انجام دهید.
        </p>
        <Link
          href="#"
          className="p-4 px-5 bg-primary text-white font-medium rounded-lg w-max hover:bg-[#6352B8] transition-all duration-300 ease-linear"
        >
          مشاهده محصولات
        </Link>
      </div>
      <div className="relative items-center justify-center hidden md:flex">
        <Image src={Hero} className="z-10 w-[300px] h-[396px]" alt="" />
        <div className="h-5/6 w-11/12 bg-primary absolute bottom-[1px] left-1 rounded-lg z-[-1]"></div>
        <div className="h-5/6 w-11/12 bg-[#E1DEF1] absolute bottom-[1px] rounded-lg z-[-2] rotate-12"></div>
      </div>
    </section>
  );
}

export default Banner;
