import Footer from "./footer";
import Header from "./header";

function Layout({ children, bgwhite }) {
  return (
    <div>
      <main className={bgwhite ? "bg-[#FAFAFE]" : ""}>
        <Header />
      </main>
      <section>{children}</section>
      <Footer />
    </div>
  );
}

export default Layout;
