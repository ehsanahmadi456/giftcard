'use client';

import { useState, useEffect } from 'react';
import { FaMinus, FaPlus, FaShoppingCart, FaTrash } from 'react-icons/fa';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://gift-card.ir";

export default function CartItem({ item, onUpdate, onRemove, isLoading }) {
  const [productInfo, setProductInfo] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const res = await fetch(`https://gift-card.ir/data.php?op=prod_data&id=${item.id}`);
        const data = await res.json();
        if (data.status === "1" && data.data) {
          setProductInfo(data.data);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProductInfo();
  }, [item.id]);

  const imageUrl = productInfo?.imgpath ? `${API_URL}${productInfo.imgpath}` : null;

  return (
    <article className="flex flex-col gap-4 border-b pb-8 relative last:border-none">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0 overflow-hidden">
          {imageUrl && !imageError ? (
            <img
              src={imageUrl}
              alt={productInfo?.name || "محصول"}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FaShoppingCart className="w-8 h-8 text-gray-400" />
            </div>
          )}
        </div>

        <div className="flex-1">
          <h5 className="font-medium text-sm md:text-base">
            {productInfo?.name || `محصول ${item.id}`}
          </h5>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex border rounded-md">
          <button
            onClick={() => onUpdate(item.id, 'a')}
            disabled={isLoading}
            className="p-2 px-3 border-l hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="افزایش تعداد"
          >
            <FaPlus className="w-4 h-4" />
          </button>
          <span className="p-2 px-4 min-w-[50px] text-center">{item.count}</span>
          <button
            onClick={() => onUpdate(item.id, 'm')}
            disabled={isLoading}
            className="p-2 px-3 border-r hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="کاهش تعداد"
          >
            <FaMinus className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-medium text-sm md:text-base">
            {item.totalPrice.toLocaleString('fa-IR')} تومان
          </span>
          <button
            onClick={() => onRemove(item.id)}
            disabled={isLoading}
            className="text-red-500 hover:text-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="حذف محصول"
          >
            <FaTrash className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  );
}