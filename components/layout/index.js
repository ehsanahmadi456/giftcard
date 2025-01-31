import Footer from "./footer";
import Header from "./header";

function Layout({ children }) {
  return (
    <div>
      <main>
        <Header />
      </main>
      <section>{children}</section>
      <Footer />
    </div>
  );
}

export default Layout;
