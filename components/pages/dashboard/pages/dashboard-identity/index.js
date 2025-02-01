import Detail from "../elements/detail";
import CallForm from "./CallForm";
import ListCart from "./listCart";

function DashboardIdentityPage() {
  return (
    <section className="flex flex-col gap-6 lg:w-4/5">
      <Detail />
      <CallForm />
      <ListCart />
    </section>
  );
}

export default DashboardIdentityPage;
