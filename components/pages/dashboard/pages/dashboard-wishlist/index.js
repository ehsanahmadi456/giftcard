import Detail from "../elements/detail";
import List from "./list";

function DashboardWishlistPage() {
  return (
    <section className="flex flex-col gap-6 lg:w-4/5">
      <Detail />
      <List />
    </section>
  );
}

export default DashboardWishlistPage;
