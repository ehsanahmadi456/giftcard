'use client'

import { useState } from "react";
import { FaLock } from "react-icons/fa";

function Security() {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChangePassword = async () => {
    setMessage({ type: '', text: '' });

    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: 'رمز عبور جدید و تکرار آن مطابقت ندارند' });
      return;
    }

    if (newPassword.length < 6) {
      setMessage({ type: 'error', text: 'رمز عبور باید حداقل ۶ کاراکتر باشد' });
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('upnow', 'ok');
      formData.append('oldp', oldPassword);
      formData.append('password', newPassword);

      const response = await fetch('https://gift-card.ir/members/changepass.php', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });

      const result = await response.json();

      if (result.status === '1') {
        setMessage({ type: 'success', text: 'رمز عبور با موفقیت تغییر یافت' });
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setTimeout(() => {
          setShowChangePassword(false);
          setMessage({ type: '', text: '' });
        }, 2000);
      } else {
        setMessage({ type: 'error', text: result.msg || 'خطا در تغییر رمز عبور' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'خطا در ارتباط با سرور' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-sm bg-white px-8 py-4 rounded-md lg:border">
      <h4 className="font-bold">اطلاعات امنیتی</h4>
      
      {!showChangePassword ? (
        <div className="flex flex-col gap-8 mt-4 pb-4">
          <button
            onClick={() => setShowChangePassword(true)}
            className="flex items-center gap-4 text-blue-600 text-base w-max hover:text-blue-700"
          >
            <FaLock className="w-5 h-5" />
            تغییر رمز عبور
          </button>
          
          <div className="flex gap-16">
            <p className="text-gray-500">فعال سازی دو مرحله ای:</p>
            <div className="flex justify-between items-center gap-2">
              <input
                type="radio"
                name="pay-type"
                id="toman"
                className="hidden peer"
              />
              <div className="w-4 h-4 rounded-full border border-black mr-4 flex justify-center items-center before:w-3 before:h-3 before:rounded-full peer-checked:border-blue-600 text-blue-600 peer-checked:before:bg-blue-600"></div>
              <label htmlFor="toman" className="peer-checked:text-blue-600">
                رمز یکبار مصرف
              </label>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="pay-type"
              id="dollar"
              className="hidden peer"
            />
            <div className="w-4 h-4 rounded-full border border-black mr-4 flex justify-center items-center before:w-3 before:h-3 before:rounded-full peer-checked:border-blue-600 peer-checked:before:bg-blue-600"></div>
            <label htmlFor="dollar" className="peer-checked:text-blue-600">
              حساب گوگل
            </label>
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 mb-2">رمز عبور فعلی</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">رمز عبور جدید</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">تکرار رمز عبور جدید</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {message.text && (
              <div className={`p-3 rounded-md ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message.text}
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={handleChangePassword}
                disabled={isLoading}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
              >
                {isLoading ? 'در حال ثبت...' : 'تغییر رمز عبور'}
              </button>
              <button
                onClick={() => {
                  setShowChangePassword(false);
                  setOldPassword('');
                  setNewPassword('');
                  setConfirmPassword('');
                  setMessage({ type: '', text: '' });
                }}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Security;
