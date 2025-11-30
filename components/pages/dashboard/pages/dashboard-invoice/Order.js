'use client'
import { useState } from "react";
import { FaCheckCircle, FaCopy } from "react-icons/fa";
import ExtraFieldsForm from "./ExtraFieldsForm";

function Order({ orders }) {
  const [copied, setCopied] = useState(null);

  if (!orders || orders.length === 0) {
    return (
      <div className="pt-6 lg:px-8 xl:pl-12 lg:w-2/5">
        <div className="flex flex-col gap-4 lg:gap-8 items-center lg:bg-white p-4 w-full text-sm lg:border-[1px] rounded-md">
          <p className="text-gray-500">سفارشی یافت نشد</p>
        </div>
      </div>
    );
  }

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="pt-6 lg:px-8 xl:pl-12 lg:w-2/5">
      <div className="flex flex-col gap-4 lg:gap-8 items-center lg:bg-white p-4 w-full text-sm lg:border-[1px] rounded-md">
        {/* پیام موفقیت */}
        <div className="flex flex-col gap-4 justify-center items-center mx-auto">
          <FaCheckCircle className="text-[#6BB927] text-5xl" />
          <h4 className="font-medium lg:text-lg text-center">
            سفارش شما با موفقیت انجام شد.
          </h4>
        </div>

        {/* نمایش اولین سفارش (آخرین خرید) */}
        {orders.slice(0, 1).map((order, index) => {
          const needsExtraFields = order.field_extra === 'y' && 
            (!order['1field_extra'] || !order['2field_extra'] || !order['3field_extra']);

          return (
            <div key={order.id} className="p-4 flex flex-col gap-4 bg-gradient-to-bl from-[#f2f1f4] via-[#e8e6ef] to-[#f2f1f4] rounded-md w-full">
              <div className="flex items-center gap-2 font-medium">
                {/* لوگوی محصول */}
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-md flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm">{order.name_prod}</span>
                  <span className="text-xs">${order.price || '10.0'}</span>
                </div>
              </div>

              {/* اگر نیاز به دریافت اطلاعات اضافی هست */}
              {needsExtraFields ? (
                <ExtraFieldsForm 
                  orderId={order.id}
                  label1={order.label_1field}
                  label2={order.label_2field}
                  label3={order.label_3field}
                />
              ) : order.field_extra === 'y' && order['1field_extra'] ? (
                <>
                  <p className="text-sm font-medium">اطلاعات تحویل:</p>
                  <div className="flex flex-col gap-2 text-xs">
                    {order.label_1field && order['1field_extra'] && (
                      <div>
                        <span className="text-gray-600">{order.label_1field}: </span>
                        <span className="font-medium">{order['1field_extra']}</span>
                      </div>
                    )}
                    {order.label_2field && order['2field_extra'] && (
                      <div>
                        <span className="text-gray-600">{order.label_2field}: </span>
                        <span className="font-medium">{order['2field_extra']}</span>
                      </div>
                    )}
                    {order.label_3field && order['3field_extra'] && (
                      <div>
                        <span className="text-gray-600">{order.label_3field}: </span>
                        <span className="font-medium">{order['3field_extra']}</span>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm">کد گیفت کارت:</p>
                  <div className="flex items-center gap-4 sm:gap-16 lg:gap-4 text-sm">
                    <p className="text-xs font-mono">
                      {order.code || 'NAAP U8BEBFVL75JJ'}
                    </p>
                    <button
                      onClick={() => handleCopy(order.code || 'NAAPU8BEBFVL75JJ', index)}
                      className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900"
                    >
                      <FaCopy />
                      <span className="text-lowgray whitespace-nowrap">
                        {copied === index ? 'کپی شد!' : 'کپی کردن کد'}
                      </span>
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Order;