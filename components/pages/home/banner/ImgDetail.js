import Link from "next/link";

function ImgDetail() {
  return (
    <div className="w-full bg-banner-head rounded-[8px] px-[24px] flex flex-col justify-center items-start gap-[16px]">
      <p className="text-[#2F2F2F] text-[32px] leading-[56px] font-bold">
        خرید انواع گیفت کارت با
        <br />
        تحویل فوری
      </p>
      <p className="text-[#7A7A7A] text-[16px] font-normal leading-[36px]">
        اولین فروشگاه خرید گیفت کارت های آیتونز اپل، گوگل
        <br />
        پلی، پلی استیشن، استیم و ...
      </p>
      <Link
        href="#"
        className="py-[9px] px-[18px] bg-[#786AC2] rounded-[8px] leading-[30px] text-[#FFF] text-[16px] font-bold"
      >
        مشاهده محصولات
      </Link>
    </div>
  );
}

export default ImgDetail;
