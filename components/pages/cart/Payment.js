'use client'
import LoadingSvg from "@/public/assets/icons/LoadingSvg";
import { useState } from "react";

function PaymentMethod({ onCheckout, isLoading, hasItems }) {
  const [selectedMethod, setSelectedMethod] = useState('online');

  return (
    <section className="flex flex-col gap-6 pb-8 border-b lg:border lg:order-2 lg:p-8 lg:bg-white rounded-md h-max lg:pb-16 lg:w-2/5 lg:gap-8">
      <h4 className="font-medium lg:font-bold lg:text-xl">انتخاب روش پرداخت</h4>
      
      <div className="space-y-4">
        {[
          { id: 'online', label: 'پرداخت آنلاین' },
          { id: 'wallet-rial', label: 'کیف پول', extra: '(ریال)' },
          { id: 'wallet-dollar', label: 'کیف پول', extra: '(دلار)' }
        ].map((method) => (
          <div key={method.id} className="flex items-center gap-2">
            <input
              type="radio"
              name="pay-type"
              id={method.id}
              checked={selectedMethod === method.id}
              onChange={(e) => setSelectedMethod(e.target.id)}
              className="hidden peer"
            />
            <label
              htmlFor={method.id}
              className="flex-1 cursor-pointer peer-checked:text-secondary font-medium"
            >
              {method.label} {method.extra && <span className="text-xs">{method.extra}</span>}
            </label>
            <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex justify-center items-center peer-checked:border-secondary transition-colors">
              <div className="w-2.5 h-2.5 rounded-full peer-checked:bg-secondary transition-colors"></div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => onCheckout(selectedMethod)}
        disabled={isLoading || !hasItems}
        className="w-full p-4 mt-4 text-center text-white rounded-md bg-primary hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <LoadingSvg className="w-5 h-5 animate-spin" />
            در حال پردازش...
          </>
        ) : (
          'ادامه فرآیند خرید'
        )}
      </button>
    </section>
  );
}
export default PaymentMethod