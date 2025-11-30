import AccountA from "@/public/assets/icons/AccountA";
import AccountLoginA from "@/public/assets/icons/AccountLoginA";
import ExitA from "@/public/assets/icons/ExitA";
import HeartA from "@/public/assets/icons/HeartA";
import MoneyA from "@/public/assets/icons/MoneyA";
import OrderA from "@/public/assets/icons/OrderA";
import ServiceA from "@/public/assets/icons/ServiceA";
import Item from "./Item";

function Menu() {
  const list = [
    { 
      name: "حساب من", 
      icon: <AccountA />, 
      menu: true,
      href: "/dashboard-account"
    },
    { 
      name: "سفارش ها", 
      icon: <OrderA />, 
      menu: true,
      href: "/dashboard-orders"
    },
    { 
      name: "احراز هویت", 
      icon: <AccountLoginA />, 
      menu: true,
      href: "/dashboard-identity"
    },
    { 
      name: "کیف پول", 
      icon: <MoneyA />, 
      menu: true,
      href: "/dashboard-wallet"
    },
    { 
      name: "علاقه مندی ها", 
      icon: <HeartA />, 
      menu: true,
      href: "/dashboard-wishlist"
    },
    { 
      name: "پشتیبانی", 
      icon: <ServiceA />, 
      menu: true,
      href: "#"
    },
    { 
      name: "خروج", 
      icon: <ExitA />, 
      menu: false,
      href: null,
      isLogout: true
    },
  ];

  return (
    <div className="flex flex-col gap-4 mt-12 text-sm">
      {list.map((item, idx) => (
        <Item data={item} key={idx} />
      ))}
    </div>
  );
}

export default Menu;