'use client'
import { useState } from "react";
import { FaSave } from "react-icons/fa";

function ExtraFieldsForm({ orderId, label1, label2, label3 }) {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const formData = new URLSearchParams();
      formData.append('op', 'update_extra_field');
      formData.append('id', orderId);
      if (field1) formData.append('extra_field1', field1);
      if (field2) formData.append('extra_field2', field2);
      if (field3) formData.append('extra_field3', field3);

      const response = await fetch('https://gift-card.ir/members/storage.php', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      const result = await response.json();

      if (result.status === '1' || response.ok) {
        setMessage({ 
          type: 'success', 
          text: 'اطلاعات با موفقیت ثبت شد. صفحه در حال بارگذاری مجدد...' 
        });
    
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setMessage({ 
          type: 'error', 
          text: result.msg || 'خطا در ثبت اطلاعات' 
        });
      }
    } catch (err) {
      setMessage({ 
        type: 'error', 
        text: 'خطا در ارتباط با سرور' 
      });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
      <p className="text-sm font-medium text-orange-600">
        لطفاً اطلاعات زیر را برای تحویل سفارش وارد کنید:
      </p>

      {label1 && (
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">{label1}</label>
          <input
            type="text"
            value={field1}
            onChange={(e) => setField1(e.target.value)}
            className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
      )}

      {label2 && (
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">{label2}</label>
          <input
            type="text"
            value={field2}
            onChange={(e) => setField2(e.target.value)}
            className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
      )}

      {label3 && (
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">{label3}</label>
          <input
            type="text"
            value={field3}
            onChange={(e) => setField3(e.target.value)}
            className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
      )}

      {message.text && (
        <div className={`p-3 rounded-md text-sm ${
          message.type === 'success' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {message.text}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <FaSave />
        {isSubmitting ? 'در حال ثبت...' : 'ثبت اطلاعات'}
      </button>
    </form>
  );
}

export default ExtraFieldsForm;