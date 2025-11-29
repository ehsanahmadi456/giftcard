'use client'
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import Cards from "./cards";

function Detail({ orders, total }) {
  if (!orders || orders.length === 0) return null;

  const calculateTotal = () => {
    return orders.reduce((sum, order) => sum + (parseInt(order.price) || 0), 0);
  };

  const totalPrice = calculateTotal();
  const discount = 0;
  const charity = 0;
  const finalTotal = totalPrice - discount + charity;


  const formatPrice = (price) => {
    if (!price) return '۰';
    return new Intl.NumberFormat('fa-IR').format(price);
  };


  const firstOrder = orders[0];

  return (
    <div className="p-6 lg:px-8 xl:pr-24 lg:w-3/5">
      <section
        id="order-items"
        className="flex flex-col gap-4 lg:p-8 lg:bg-white lg:border-[1px] rounded-md"
      >
        <h4 className="font-medium lg:text-lg">جزئیات سفارش</h4>
        
        <div className="flex flex-col gap-6 p-8 border-b-[1px]">
          {/* UNDEFIND TO API*/}
          <div className="flex flex-col gap-1 text-sm">
            <span className="font-light text-lowgray">آدرس ایمیل</span>
            <span className="font-medium">testemail@gmail.com</span>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <span className="font-light text-lowgray">روش پرداخت</span>
            <div className="flex items-center justify-between">
              <span className="font-medium">پرداخت از طریق کیف پول</span>
              <span className="flex items-center gap-1 text-secondary cursor-pointer hover:text-orange-600">
                تغییر روش پرداخت
                <FaChevronLeft className="text-sm" />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <span className="font-light text-lowgray">شماره فاکتور</span>
            <span className="font-medium font-mono text-xs">
              {firstOrder.id}
            </span>
          </div>

          {firstOrder.date && (
            <div className="flex flex-col gap-1 text-sm">
              <span className="font-light text-lowgray">تاریخ سفارش</span>
              <span className="font-medium">
                {firstOrder.date}
              </span>
            </div>
          )}
        </div>

      
        <Cards orders={orders} />
        <article className="flex flex-col gap-8 border-b-[1px] py-4">
          <div className="flex items-center justify-between">
            <p>جمع محصولات</p>
            <p>{formatPrice(totalPrice)} تومان</p>
          </div>
          
          {discount > 0 && (
            <div className="flex items-center justify-between text-red-500">
              <p>تخفیف محصولات</p>
              <p>{formatPrice(discount)} تومان</p>
            </div>
          )}
          
          {charity > 0 && (
            <div className="flex items-center justify-between">
              <p>مبلغ خیریه</p>
              <p>{formatPrice(charity)} تومان</p>
            </div>
          )}
        </article>
        <article className="flex flex-col gap-8 py-4">
          <div className="flex items-center justify-between font-bold">
            <p>جمع کل</p>
            <p>{formatPrice(finalTotal)} تومان</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Detail;