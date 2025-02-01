import UserProfile from "@/public/assets/images/user.png";
import Image from "next/image";
import Menu from "./menu";
import Detail from "./detail";

function Aside() {
  return (
    <aside className="w-full lg:border-[1px] lg:bg-white lg:w-1/5 lg:p-4 lg:rounded-md lg:h-max">
      <div className="flex flex-col gap-4 items-center">
        <Image
          src={UserProfile}
          alt="user profile"
          className="w-20 h-20 rounded-full"
        />
        <p className="font-bold lg:text-sm">alireza_mehran@gmail.com</p>
        <p className="text-sm">سطح کاربر</p>
      </div>
      <Detail />
      <Menu />
    </aside>
  );
}

export default Aside;
