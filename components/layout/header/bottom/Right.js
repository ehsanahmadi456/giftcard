import ArrowBottomHeader from "@/public/assets/icons/ArrowBottomHeader";
import Link from "next/link";

function Right() {
  const link = [
    { link: "#", name: "خانه" },
    {
      link: "#",
      name: "دسته بندی محصولات",
      list: [
        { link: "#", name: "دسته بندی محصولات" },
        { link: "#", name: "دسته بندی محصولات" },
        { link: "#", name: "دسته بندی محصولات" },
      ],
    },
    { link: "#", name: "تماس با ما" },
    { link: "#", name: "بلاگ" },
  ];

  return (
    <nav>
      <ul className="flex gap-6">
        {link.map((item, idx) => (
          <li key={idx} className="relative group">
            <Link
              href={item.link}
              className="relative flex justify-center items-center font-medium gap-1 after:w-0 after:origin-center after:rounded-full after:bg-primary after:h-[2px] after:absolute after:-bottom-1 group-hover:after:w-[100%] after:transition-all after:ease-linear after:duration-500"
            >
              {item.name}
              {item.list && !!item.list.length && <ArrowBottomHeader />}
            </Link>

            {item.list && !!item.list.length && (
              <div
                className="absolute top-[2.25rem] -right-1 min-w-[140%] bg-white text-lowgray flex flex-col
                              opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
                              transition-all duration-500"
              >
                {item.list.map((i, idx) => (
                  <Link
                    key={idx}
                    href={i.link}
                    className="p-2 pb-3 border-b-[1px]"
                  >
                    {i.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Right;
