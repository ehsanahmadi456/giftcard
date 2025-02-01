import Detail from "../elements/detail";
import List from "./list";
import Payment from "./Payment";

function DashboardWalletPage() {
  return (
    <section className="flex flex-col gap-6 lg:w-4/5">
      <Detail />
      <Payment />
      <List />
    </section>
  );
}

export default DashboardWalletPage;
