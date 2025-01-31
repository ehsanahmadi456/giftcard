import Image from "next/image";
import User from "@/public/assets/images/user.png";

function Comments() {
  return (
    <section id="comments" className="bg-[#D9D9D9] mt-28">
      <div className="flex flex-col items-center justify-center gap-12 p-8 mx-auto max-w-screen-2xl">
        <h4 className="text-lg font-medium">نظرات مشتریان</h4>
        <div className="flex items-center justify-between w-full">
          <span className="p-2 bg-white rounded-sm shadow-md">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="rotate-180"
              >
                <path
                  d="M14.9998 21.17C14.8098 21.17 14.6198 21.1 14.4698 20.95L7.94979 14.43C6.88979 13.37 6.88979 11.63 7.94979 10.57L14.4698 4.05002C14.7598 3.76002 15.2398 3.76002 15.5298 4.05002C15.8198 4.34002 15.8198 4.82002 15.5298 5.11002L9.00979 11.63C8.52979 12.11 8.52979 12.89 9.00979 13.37L15.5298 19.89C15.8198 20.18 15.8198 20.66 15.5298 20.95C15.3798 21.09 15.1898 21.17 14.9998 21.17Z"
                  fill="#786AC2"
                />
              </svg>
            </i>
          </span>
          <div className="flex flex-col items-center justify-center max-w-lg gap-4 text-sm profile text-lowgray">
            <Image src={User} className="w-20 h-20 rounded-full" alt="" />
            <p>علیرضا مهران</p>
            <span>۱۴۰۲/۰۳/۰۷</span>
            <p className="font-medium leading-loose text-center text-black">
              کارشون خیلی خوبه من بارها از اینجا گیفت آیتونز خریدم! فقط کاش روی
              بعضی محصولات تخفیف می گذاشتید.
            </p>
          </div>
          <span className="p-2 bg-white rounded-sm shadow-md">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.9998 21.17C14.8098 21.17 14.6198 21.1 14.4698 20.95L7.94979 14.43C6.88979 13.37 6.88979 11.63 7.94979 10.57L14.4698 4.05002C14.7598 3.76002 15.2398 3.76002 15.5298 4.05002C15.8198 4.34002 15.8198 4.82002 15.5298 5.11002L9.00979 11.63C8.52979 12.11 8.52979 12.89 9.00979 13.37L15.5298 19.89C15.8198 20.18 15.8198 20.66 15.5298 20.95C15.3798 21.09 15.1898 21.17 14.9998 21.17Z"
                  fill="#786AC2"
                />
              </svg>
            </i>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Comments;
