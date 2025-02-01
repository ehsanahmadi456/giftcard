import React from "react";
import Cards from "./cards";

function Detail() {
  return (
    <div className="p-6 lg:px-8 xl:pr-24 lg:w-3/5">
      <section
        id="order-items"
        className="flex flex-col gap-4 lg:p-8 lg:bg-white lg:border-[1px] rounded-md"
      >
        <h4 className="font-medium lg:text-lg">جزئیات سفارش</h4>
        <div className="flex flex-col gap-6 p-8 border-b-[1px]">
          <div className="flex flex-col gap-1 text-sm">
            <span className="font-light text-lowgray">آدرس ایمیل</span>
            <span className="font-medium">testemail@gmail.com</span>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <span className="font-light text-lowgray">روش پرداخت</span>
            <div className="flex items-center justify-between">
              <span className="font-medium">پرداخت از طریق کیف پول</span>
              <span className="flex items-center text-secondary">
                تغییر روش پرداخت
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M15.0003 21.17C14.8103 21.17 14.6203 21.1 14.4703 20.95L7.95027 14.43C6.89027 13.37 6.89027 11.63 7.95027 10.57L14.4703 4.05002C14.7603 3.76002 15.2403 3.76002 15.5303 4.05002C15.8203 4.34002 15.8203 4.82002 15.5303 5.11002L9.01027 11.63C8.53027 12.11 8.53027 12.89 9.01027 13.37L15.5303 19.89C15.8203 20.18 15.8203 20.66 15.5303 20.95C15.3803 21.09 15.1903 21.17 15.0003 21.17Z"
                      fill="#F69625"
                    />
                  </svg>
                </i>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <span className="font-light text-lowgray">شماره فاکتور</span>
            <span className="font-medium">
              d1dc75f0-6a6e-4ad6-a9fc-8cde1971de86
            </span>
          </div>
        </div>
        <Cards />
        <article className="flex flex-col gap-8 border-b-[1px] py-4 last:border-none">
          <div className="flex items-center justify-between">
            <p>جمع محصولات</p>
            <p>۴۳۶٬۵۰۰ تومان</p>
          </div>
          <div className="flex items-center justify-between text-red-500">
            <p>تخفیف محصولات</p>
            <p>۴۳۶٬۵۰۰ تومان</p>
          </div>
          <div className="flex items-center justify-between">
            <p>مبلغ خیریه</p>
            <p>۴۳۶٬۵۰۰ تومان</p>
          </div>
        </article>
        <article className="flex flex-col gap-8 border-b-[1px] last:border-none py-4 lg:border-0">
          <div className="flex items-center justify-between font-bold">
            <p>جمع کل</p>
            <p>۴۳۶٬۵۰۰ تومان</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Detail;
