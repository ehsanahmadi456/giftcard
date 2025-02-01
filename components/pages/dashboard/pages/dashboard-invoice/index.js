import Detail from "./detail";
import Order from "./Order";

function DashboardInvoicePage() {
  return (
    <main className="flex flex-col w-full mx-auto mt-6 mb-12 max-w-screen-2xl lg:flex-row-reverse">
      <Order />
      <Detail />
    </main>
  );
}

export default DashboardInvoicePage;
