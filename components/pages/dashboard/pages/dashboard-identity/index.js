'use client'

import { useEffect, useState } from "react";
import Detail from "./Detail";
import CallForm from './CallForm'
import ListCart from "./listCart";

export default function DashboardIdentityPage() {
  const [accountData, setAccountData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAccountData();
  }, []);

  const fetchAccountData = async () => {
    try {
      const response = await fetch('https://gift-card.ir/members/account.php', {
        credentials: 'include'
      });
      
      const result = await response.json();
      if (result.status === '1') {
        setAccountData(result.data);
      }
    } catch (error) {
      console.error('Error fetching account data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-6 lg:w-4/5">
      <Detail stats={{ totalCards: 0, totalSheba: 0 }} />
      <CallForm data={accountData} isLoading={isLoading} />
      <ListCart />
    </section>
  );
}