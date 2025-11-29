import { useEffect, useState } from "react";

function CardFormModal({ isOpen, onClose, editData, onSubmit, type = 'card' }) {
    const [formData, setFormData] = useState({ value: '', id: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
  
    useEffect(() => {
      if (editData) {
        setFormData({
          value: type === 'card' ? editData.kart : editData.sheba,
          id: editData.id
        });
      } else {
        setFormData({ value: '', id: '' });
      }
    }, [editData, type]);
  
    const handleSubmit = async () => {
      setError('');
      
      if (!formData.value) {
        setError(type === 'card' ? 'لطفا شماره کارت را وارد کنید' : 'لطفا شماره شبا را وارد کنید');
        return;
      }
  
      if (type === 'card' && formData.value.length !== 16) {
        setError('شماره کارت باید 16 رقم باشد');
        return;
      }
  
      if (type === 'sheba' && !formData.value.startsWith('IR')) {
        setError('شماره شبا باید با IR شروع شود');
        return;
      }
  
      setIsLoading(true);
      const success = await onSubmit(formData);
      setIsLoading(false);
      
      if (success) {
        onClose();
        setFormData({ value: '', id: '' });
      }
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-6 max-w-md w-full">
          <h3 className="text-lg font-bold mb-4">
            {editData ? (type === 'card' ? 'ویرایش کارت بانکی' : 'ویرایش شبا') : (type === 'card' ? 'افزودن کارت بانکی' : 'افزودن شبا')}
          </h3>
          
          <div className="mb-4">
            <label className="block text-sm mb-2">
              {type === 'card' ? 'شماره کارت (16 رقم)' : 'شماره شبا'}
            </label>
            <input
              type="text"
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={type === 'card' ? '1234567890123456' : 'IR000000000000000000000000'}
              maxLength={type === 'card' ? 16 : 26}
            />
          </div>
  
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
  
          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
            >
              {isLoading ? 'در حال ثبت...' : 'ثبت'}
            </button>
            <button
              onClick={() => {
                onClose();
                setFormData({ value: '', id: '' });
                setError('');
              }}
              className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              انصراف
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default CardFormModal;