import Detail from "../elements/detail";
import List from "./list";
import Payment from "./Payment";
import { cookies } from "next/headers";

const API_URL = "https://gift-card.ir";

async function DashboardWalletPage() {
  let stats = { wallet: 0, rewards: 0, totalOrders: 0 };
  let transactions = [];

  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  const myHeaders = new Headers();
  myHeaders.append("Cookie", `AStoken=${accessToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
    cache: "no-store",
  };

  try {
    const res = await fetch(
      `${API_URL}/members/credit.php?op=list`,
      requestOptions
    );

    const data = await res.json();
    console.log('✴members/credit.php?op=list -RESPONSE- : ✴',data);
    
    if (data?.data) {
      transactions = data.data.rows || [];

      let walletBalance = 0;
      transactions.forEach((transaction) => {
        if (transaction.type === 2) {
          walletBalance += parseInt(transaction.amount);
        } else if (
          transaction.type === 1 ||
          transaction.type === 3 ||
          transaction.type === 4
        ) {
          walletBalance -= parseInt(transaction.amount);
        }
      });

      stats = {
        wallet: walletBalance,
        rewards: 10000,
        totalOrders: transactions.length,
      };
    }
  } catch (err) {
    console.error("خطا در دریافت تراکنش‌ها:", err);
  }

  return (
    <section className="flex flex-col gap-6 lg:w-4/5">
      <Detail stats={stats} />
      <Payment />
      <List transactions={transactions} />
    </section>
  );
}

export default DashboardWalletPage;
