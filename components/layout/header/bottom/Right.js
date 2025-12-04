"use client";

import ArrowBottomHeader from "@/public/assets/icons/ArrowBottomHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Right() {
  const pathname = usePathname();

  const links = [
    { href: "/", name: "خانه" },
    {
      href: "/products",
      name: "دسته بندی محصولات",
    },
    { href: "/contact", name: "تماس با ما" },
    { href: "/blog", name: "بلاگ" },
  ];

  return (
    <nav>
      <ul className="flex gap-6">
        {links.map((item, idx) => {
          const isActive = pathname === item.href;

          return (
            <li key={idx} className="relative group">
              <Link
                href={item.href}
                className={`relative flex justify-center items-center font-medium gap-1
                after:origin-center after:rounded-full after:bg-primary after:h-[2px] after:absolute after:-bottom-1 
                after:transition-all ease-linear duration-500 
                ${isActive ? "after:w-[100%]" : "after:w-0 group-hover:after:w-[100%]"}`}
              >
                {item.name}
                {item.list && <ArrowBottomHeader />}
              </Link>

              {item.list && (
                <div
                  className="absolute top-[2.25rem] right-0 min-w-[180px] bg-white text-lowgray flex flex-col
                  opacity-0 pointer-events-none translate-y-3 group-hover:opacity-100 group-hover:pointer-events-auto
                  group-hover:translate-y-0 transition-all duration-300 shadow-lg rounded-md overflow-hidden"
                >
                  {/* {item.list.map((sub, subIdx) => (
                    <Link
                      key={subIdx}
                      href={sub.href}
                      className={`p-3 border-b last:border-0 hover:bg-gray-50 transition
                      ${pathname === sub.href ? "bg-primary/10 text-primary" : ""}`}
                    >
                      {sub.name}
                    </Link>
                  ))} */}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Right;
