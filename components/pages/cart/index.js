'use client'

import { useEffect, useState } from "react";
import PaymentMethod from "./Payment";
import OrderSummary from "./order";

export default function CartPage({ initialData }) {
  const [cartItems, setCartItems] = useState([]);
  const [totals, setTotals] = useState({ totalCount: 0, totalPrice: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log('🔄 CartPage Render - initialData:', initialData);
  console.log('🔄 CartPage Render - cartItems:', cartItems);
  console.log('🔄 CartPage Render - totals:', totals);

  const calculateTotals = (items) => {
    console.log('🧮 Calculating totals for items:', items);
    
    const totalCount = items.reduce((sum, item) => {
      const count = Number(item.count) || 0;
      console.log(`  Item ${item.id}: count = ${count}`);
      return sum + count;
    }, 0);
    
    const totalPrice = items.reduce((sum, item) => {
      const price = Number(item.totalPrice) || 0;
      console.log(`  Item ${item.id}: totalPrice = ${price}`);
      return sum + price;
    }, 0);
    
    console.log('✅ Calculated totals:', { totalCount, totalPrice });
    
    return { totalCount, totalPrice };
  };

  const fetchCart = async () => {
    console.log('📡 Fetching cart...');
    try {
      const res = await fetch(`https://gift-card.ir/members/cart.php?op=query`, {
        credentials: 'include'
      });
      const data = await res.json();
      console.log('📥 Cart API Response:', data);

      if (data.status === "1" && data.data) {
        const formattedItems = data.data.map(item => ({
          id: item[0],
          count: item[1],
          totalPrice: item[2]
        }));
        
        console.log('✨ Formatted items:', formattedItems);
        setCartItems(formattedItems);
        
        const newTotals = calculateTotals(formattedItems);
        setTotals(newTotals);
      } else {
        setCartItems([]);
        setTotals({ totalCount: 0, totalPrice: 0 });
      }
    } catch (err) {
      console.error("❌ Error fetching cart:", err);
      setError("خطا در دریافت سبد خرید");
    }
  };

  const updateCartItem = async (productId, action) => {
    console.log(`🔄 Updating cart item ${productId} with action: ${action}`);
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://gift-card.ir//members/cart.php?op=add&id=${productId}&act=${action}`, {
        method: 'POST',
        credentials: 'include'
      });
      const data = await res.json();
      console.log('📥 Update response:', data);

      if (data.status === "1") {
        await fetchCart();
      } else {
        setError("خطا در به‌روزرسانی سبد خرید");
      }
    } catch (err) {
      console.error("❌ Error updating cart:", err);
      setError("خطا در اتصال به سرور");
    } finally {
      setIsLoading(false);
    }
  };

  const removeCartItem = async (productId) => {
    const item = cartItems.find(i => i.id === productId);
    if (!item) return;

    console.log(`🗑️ Removing item ${productId}, count: ${item.count}`);
    setIsLoading(true);
    
    for (let i = 0; i < item.count; i++) {
      await updateCartItem(productId, 'm');
    }
    
    setIsLoading(false);
  };

  const handleCheckout = async (paymentMethod) => {
    console.log('💳 Checkout with method:', paymentMethod);
    setIsLoading(true);
    setError(null);

    try {
      const useCredit = paymentMethod.includes('wallet') ? 'y' : 'n';
      
      const res = await fetch(`https://gift-card.ir/members/cart.php?op=maker_order&credit=${useCredit}&donate=0`, {
        method: 'POST',
        credentials: 'include'
      });
      const data = await res.json();
      console.log('📥 Order response:', data);

      if (data.status === "1" && data.oid) {
        window.location.href = `https://gift-card.ir/order.php?oid=${data.oid}`;
      } else if (data.redirect_url) {
        window.location.href = data.redirect_url;
      } else {
        setError(data.msg || "خطا در ثبت سفارش");
      }
    } catch (err) {
      console.error("❌ Error creating order:", err);
      setError("خطا در اتصال به سرور");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log('🎬 Initial useEffect');
    
    if (initialData && initialData.length > 0) {
      console.log('📦 Using initialData:', initialData);
      setCartItems(initialData);
      const newTotals = calculateTotals(initialData);
      setTotals(newTotals);
    } else {
      console.log('🔍 No initialData, fetching from API');
      fetchCart();
    }
  }, []);

  return (
    <main className="flex flex-col w-full gap-8 p-6 mx-auto mt-6 mb-12 max-w-screen-2xl lg:px-8 xl:px-24 lg:flex-row">
      {error && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50">
          {error}
        </div>
      )}

      <PaymentMethod 
        onCheckout={handleCheckout} 
        isLoading={isLoading}
        hasItems={cartItems.length > 0}
      />

      <OrderSummary
        items={cartItems.map(item => ({
          id: item.id,
          props: {
            item,
            onUpdate: updateCartItem,
            onRemove: removeCartItem,
            isLoading
          }
        }))}
        totals={totals}
        isLoading={isLoading}
      />
    </main>
  );
}