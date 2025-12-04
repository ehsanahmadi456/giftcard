import Detail from "./Detail";
import List from "./List";
import Namad from "./Namad";
import Searchbar from "./Searchbar";
import SocialMedias from "./SocialMedias";

function Footer() {
  const serviceLinks = [
    { href: "/", label: "خانه" },
    { href: "/products", label: "محصولات" },
    { href: "/about", label: "درباره ما" },
    { href: "/contact", label: "تماس با ما" },
    { href: "/faq", label: "سوالات متداول" },
  ];

  const quickLinks = [
    { href: "/terms", label: "قوانین و مقررات" },
    { href: "/privacy", label: "حریم خصوصی" },
    { href: "/guide", label: "راهنمای خرید" },
    { href: "/blog", label: "بلاگ" },
    { href: "/support", label: "پشتیبانی" },
  ];

  return (
    <footer className="w-full mt-auto md:pb-0 pb-20" dir="rtl">
      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 p-6 sm:p-8 md:p-12 lg:py-8 lg:px-12 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-12 xl:gap-x-16 lg:max-w-screen-2xl lg:mx-auto xl:px-24 bg-[#fafafa] lg:bg-transparent">
        <Detail />
        <div className="flex flex-col sm:flex-row row-span-2 gap-8 sm:gap-16 md:gap-24 lg:gap-32 lg:justify-around">
          <List title="خدمات" links={serviceLinks} />
          <List title="دسترسی سریع" links={quickLinks} />
        </div>
        <Searchbar />
        <SocialMedias />
        <Namad />
      </div>
    </footer>
  );
}

export default Footer;
