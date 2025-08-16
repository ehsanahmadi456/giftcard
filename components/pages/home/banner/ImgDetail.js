import Link from "next/link";

function ImgDetail() {
  return (
    <div className="w-full min-h-[218px] bg-banner-head rounded-none lg:rounded-[8px] px-[24px] flex flex-col justify-center items-start gap-[16px]">
      <p className="text-[#2F2F2F] text-[16px] md:text-[24px] lg:text-[32px] leading-[32px] md:leading-[44px] lg:leading-[56px] font-bold">
        خرید انواع گیفت کارت با
        <br />
        تحویل فوری
      </p>
      <p className="text-[#7A7A7A] hidden lg:flex text-[16px] font-normal leading-[36px]">
        اولین فروشگاه خرید گیفت کارت های آیتونز اپل، گوگل
        <br />
        پلی، پلی استیشن، استیم و ...
      </p>
      <Link
        href="/products"
        className="py-[8px] lg:py-[9px] px-[16px] md:px-[17px] lg:px-[18px] bg-[#786AC2] rounded-[8px] leading-[26px] md:leading-[28px] lg:leading-[30px] text-[#FFF] text-[14px] lg:text-[16px] font-bold"
      >
        مشاهده محصولات
      </Link>
    </div>
  );
}

export default ImgDetail;
