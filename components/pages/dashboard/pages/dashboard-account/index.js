import Detail from "../elements/detail";
import Call from "./form/Call";
import Personal from "./form/Personal";
import Security from "./form/Security";

function DashboardAccountPage() {
  return (
    <section className="hidden lg:flex flex-col gap-6 lg:w-4/5">
      <Detail />
      <Personal />
      <Call />
      <Security />
    </section>
  );
}

export default DashboardAccountPage;
