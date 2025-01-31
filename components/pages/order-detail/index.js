import React from "react";
import Payment from "./Payment";
import Detail from "./detail";

function OrderDetailPage() {
  return (
    <main className="flex flex-col w-full mx-auto mt-6 mb-12 max-w-screen-2xl lg:flex-row">
      <Detail />
      <Payment />
    </main>
  );
}

export default OrderDetailPage;
