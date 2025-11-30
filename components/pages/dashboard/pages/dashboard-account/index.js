'use client'
import { useState , useEffect } from "react";
import Detail from "../elements/detail";
import Call from "./form/Call";
import Personal from "./form/Personal";
import Security from "./form/Security";

export default function DashboardAccountPage() {
  const [accountData, setAccountData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAccountData();
  }, []);

  const fetchAccountData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://gift-card.ir/members/account.php', {
        credentials: 'include'
      });
      
      const result = await response.json();
      
      if (result.status === '1') {
        setAccountData(result.data);
      } else {
        setError(result.msg || 'خطا در دریافت اطلاعات');
      }
    } catch (err) {
      setError('خطا در ارتباط با سرور');
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return (
      <section className="hidden lg:flex flex-col gap-6 lg:w-4/5">
        <div className="bg-red-100 text-red-700 p-4 rounded-md">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section className="hidden lg:flex flex-col gap-6 lg:w-4/5">
      <Detail stats={{ wallet: 0, rewards: 0, totalOrders: 0 }} />
      <Personal data={accountData} isLoading={isLoading} />
      <Call data={accountData} isLoading={isLoading} />
      <Security />
    </section>
  );
}