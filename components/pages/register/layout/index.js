import Header from "@/components/layout/header";

function Layout({ children }) {
  return (
    <>
    <Header/>
      <main className="flex flex-col lg:flex-row">
        <section className="flex flex-col gap-4 p-8 text-white bg-primary lg:order-2 lg:w-1/2 lg:justify-center lg:items-center lg:min-h-screen">
          <h2 className="text-xl font-bold text-center">فروشگاه گیفت کارت</h2>
          <p className="leading-loose">
            اولین فروشگاه خرید گیفت کارت اپل، گوگل پلی، استیم، پلی استیشن و ...
          </p>
        </section>
        {children}
      </main>
    </>
  );
}

export default Layout;
