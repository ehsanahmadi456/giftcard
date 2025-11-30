'use client'
import { useEffect, useState } from "react";
import Item from "./Item";
import { FaPlus } from "react-icons/fa";
import CardFormModal from "./CardFormModal";
import CardItem from "./CartItem";

export default function ListCart() {
  const [cards, setCards] = useState([]);
  const [sheba, setSheba] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showShebaModal, setShowShebaModal] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [editingSheba, setEditingSheba] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    await Promise.all([fetchCards(), fetchSheba()]);
    setIsLoading(false);
  };

  const fetchCards = async () => {
    try {
      const formData = new FormData();
      formData.append('op', 'list');

      const response = await fetch('https://gift-card.ir/members/hesab.php', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });

      const result = await response.json();
      if (result.status === '1' && Array.isArray(result.data)) {
        setCards(result.data);
      }
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const fetchSheba = async () => {
    try {
      const formData = new FormData();
      formData.append('op', 'list');

      const response = await fetch('https://gift-card.ir/members/sheba.php', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });

      const result = await response.json();
      if (result.status === '1' && Array.isArray(result.data)) {
        setSheba(result.data);
      }
    } catch (error) {
      console.error('Error fetching sheba:', error);
    }
  };

  const handleAddCard = async (formData) => {
    try {
      const data = new FormData();
      data.append('op', 'add');
      data.append('kart', formData.value);
      if (formData.id) data.append('id', formData.id);

      const response = await fetch('https://gift-card.ir/members/hesab.php', {
        method: 'POST',
        body: data,
        credentials: 'include'
      });

      const result = await response.json();
      if (result.status === '1') {
        setMessage({ type: 'success', text: 'کارت با موفقیت ثبت شد' });
        await fetchCards();
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
        return true;
      } else {
        setMessage({ type: 'error', text: result.msg || 'خطا در ثبت کارت' });
        return false;
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'خطا در ارتباط با سرور' });
      return false;
    }
  };

  const handleAddSheba = async (formData) => {
    try {
      const data = new FormData();
      data.append('op', 'add');
      data.append('sheba', formData.value);
      if (formData.id) data.append('id', formData.id);

      const response = await fetch('https://gift-card.ir/members/sheba.php', {
        method: 'POST',
        body: data,
        credentials: 'include'
      });

      const result = await response.json();
      if (result.status === '1') {
        setMessage({ type: 'success', text: 'شبا با موفقیت ثبت شد' });
        await fetchSheba();
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
        return true;
      } else {
        setMessage({ type: 'error', text: result.msg || 'خطا در ثبت شبا' });
        return false;
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'خطا در ارتباط با سرور' });
      return false;
    }
  };

  const handleDeleteCard = async (id) => {
    if (!confirm('آیا از حذف این کارت اطمینان دارید؟')) return;

    try {
      const formData = new FormData();
      formData.append('op', 'del');
      formData.append('id', id);

      const response = await fetch('https://gift-card.ir/members/hesab.php', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });

      const result = await response.json();
      if (result.status === '1') {
        setMessage({ type: 'success', text: 'کارت با موفقیت حذف شد' });
        await fetchCards();
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
      } else {
        setMessage({ type: 'error', text: result.msg || 'خطا در حذف کارت' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'خطا در ارتباط با سرور' });
    }
  };

  const handleDeleteSheba = async (id) => {
    if (!confirm('آیا از حذف این شبا اطمینان دارید؟')) return;

    try {
      const formData = new FormData();
      formData.append('op', 'del');
      formData.append('id', id);

      const response = await fetch('https://gift-card.ir/members/sheba.php', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });

      const result = await response.json();
      if (result.status === '1') {
        setMessage({ type: 'success', text: 'شبا با موفقیت حذف شد' });
        await fetchSheba();
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
      } else {
        setMessage({ type: 'error', text: result.msg || 'خطا در حذف شبا' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'خطا در ارتباط با سرور' });
    }
  };

  // Merge cards and sheba for display
  const mergedList = cards.map((card, idx) => ({
    ...card,
    sheba: sheba[idx]?.sheba || '-'
  }));

  return (
    <div className="flex flex-col text-sm md:bg-white md:px-8 md:py-4 rounded-md lg:border gap-4 w-full">
      {message.text && (
        <div className={`p-3 rounded-md ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message.text}
        </div>
      )}

      <div className="flex gap-4">
        <button
          onClick={() => {
            setEditingCard(null);
            setShowCardModal(true);
          }}
          className="p-2 px-4 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-all duration-300"
        >
          <FaPlus className="w-4 h-4 inline ml-1" /> ثبت کارت بانکی
        </button>
        
        <button
          onClick={() => {
            setEditingSheba(null);
            setShowShebaModal(true);
          }}
          className="p-2 px-4 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-all duration-300"
        >
          <FaPlus className="w-4 h-4 inline ml-1" /> ثبت شبا
        </button>
      </div>

      <h2 className="font-bold">کارت‌های بانکی و شبا</h2>

      {isLoading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      ) : (
        <>
          <div className="hidden md:flex items-center justify-between text-center gap-4 p-4 bg-gray-50 font-bold">
            <p className="w-1/12">ردیف</p>
            <p className="w-2/12">بانک</p>
            <p className="w-3/12">شماره کارت</p>
            <p className="w-3/12">شماره شبا</p>
            <p className="w-2/12">وضعیت</p>
            <p className="w-1/12">عملیات</p>
          </div>
          
          <div className="bg-white rounded-md shadow-sm">
            {mergedList.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                هیچ کارت بانکی ثبت نشده است
              </div>
            ) : (
              mergedList.map((item, idx) => (
                <CardItem
                  key={item.id}
                  data={{ ...item, id: idx + 1 }}
                  onEdit={(data) => {
                    setEditingCard(data);
                    setShowCardModal(true);
                  }}
                  onDelete={handleDeleteCard}
                />
              ))
            )}
          </div>
        </>
      )}

      <CardFormModal
        isOpen={showCardModal}
        onClose={() => {
          setShowCardModal(false);
          setEditingCard(null);
        }}
        editData={editingCard}
        onSubmit={handleAddCard}
        type="card"
      />

      <CardFormModal
        isOpen={showShebaModal}
        onClose={() => {
          setShowShebaModal(false);
          setEditingSheba(null);
        }}
        editData={editingSheba}
        onSubmit={handleAddSheba}
        type="sheba"
      />
    </div>
  );
}
