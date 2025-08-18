import UserProfile from "@/public/assets/images/user.png";
import Item from "./Item";
import Star from "@/public/assets/icons/Star";

function Comments() {
  const list = [
    {
      name: "علیرضا مهران",
      date: "۱۴۰۲/۰۳/۱۶",
      img: UserProfile,
      text: "پشتیبانی خیلی خوبی دارن و راحت تونستم استفاده کنم. حتما پیشنهاد میکنم! یکی از بهترین سایت های خرید گیفت کارت توی ایران هست.",
    },
    {
      name: "علیرضا مهران",
      date: "۱۴۰۲/۰۳/۱۶",
      img: UserProfile,
      text: "پشتیبانی خیلی خوبی دارن و راحت تونستم استفاده کنم. حتما پیشنهاد میکنم! یکی از بهترین سایت های خرید گیفت کارت توی ایران هست.",
    },
    {
      name: "علیرضا مهران",
      date: "۱۴۰۲/۰۳/۱۶",
      img: UserProfile,
      text: "پشتیبانی خیلی خوبی دارن و راحت تونستم استفاده کنم. حتما پیشنهاد میکنم! یکی از بهترین سایت های خرید گیفت کارت توی ایران هست.",
    },
    {
      name: "علیرضا مهران",
      date: "۱۴۰۲/۰۳/۱۶",
      img: UserProfile,
      text: "پشتیبانی خیلی خوبی دارن و راحت تونستم استفاده کنم. حتما پیشنهاد میکنم! یکی از بهترین سایت های خرید گیفت کارت توی ایران هست.",
    },
  ];

  return (
    <div className="hidden group-[.active]:flex">
      <div className="hidden h-0 group-[.active]:h-max lg:group-[.active]:flex flex-col items-center border-[1px] w-1/4 rounded-lg p-4">
        <div className="flex items-center justify-center gap-1 text-sm">
          <span className="text-base font-medium">5</span> از 5 امتیاز
          <div className="flex gap-1 mr-2">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center circular"></div>
      </div>
      <div className="swiper-wrapper md:gap-4 md:flex-col h-0 lg:w-3/4 hidden group-[.active]:h-max group-[.active]:flex transition-all duration-300 ease-linear">
        {list.map((item, idx) => (
          <Item data={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
