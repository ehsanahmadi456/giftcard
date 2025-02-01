import Xbox from "@/public/assets/images/xbox.png";
import Image from "next/image";

function Order() {
  return (
    <div className="pt-6 lg:px-8 xl:pl-12 lg:w-2/5">
      <div className="flex flex-col gap-4 lg:gap-8 items-center lg:bg-white p-4 w-full text-sm lg:border-[1px]">
        <div className="flex flex-col gap-4 justify-center items-center mx-auto">
          <i>
            <svg
              width="51"
              height="50"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5 4.1665C14.0208 4.1665 4.66663 13.5207 4.66663 24.9998C4.66663 36.479 14.0208 45.8332 25.5 45.8332C36.9791 45.8332 46.3333 36.479 46.3333 24.9998C46.3333 13.5207 36.9791 4.1665 25.5 4.1665ZM35.4583 20.2082L23.6458 32.0207C23.3541 32.3123 22.9583 32.479 22.5416 32.479C22.125 32.479 21.7291 32.3123 21.4375 32.0207L15.5416 26.1248C14.9375 25.5207 14.9375 24.5207 15.5416 23.9165C16.1458 23.3123 17.1458 23.3123 17.75 23.9165L22.5416 28.7082L33.25 17.9998C33.8541 17.3957 34.8541 17.3957 35.4583 17.9998C36.0625 18.604 36.0625 19.5832 35.4583 20.2082Z"
                fill="#6BB927"
              />
            </svg>
          </i>
          <h4 className="font-medium lg:text-lg lg:block text-center">
            سفارش شما با موفقیت انجام شد.
          </h4>
        </div>
        <div className="p-4 flex flex-col gap-4 bg-gradient-to-bl from-[#f2f1f4] via-[#e8e6ef] to-[#f2f1f4] rounded-md">
          <div className="flex items-center gap-2 font-medium">
            <Image src={Xbox} alt="" className="w-12 h-12 rounded-md" />
            <div className="flex flex-col gap-4">
              گیفت کارت ایکس باکس
              <span className="">$10.0</span>
            </div>
          </div>
          <p className="text-sm">کد گیفت کارت:</p>
          <div className="flex items-center gap-16 sm:gap-32 lg:gap-16 text-sm">
            <p className="text-xs">NAA3U5BEBFVL75JJ</p>
            <div className="flex items-center gap-1 text-xs">
              <i>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.325 17.5625H5.175C2.2425 17.5625 0.9375 16.2575 0.9375 13.325V10.175C0.9375 7.2425 2.2425 5.9375 5.175 5.9375H8.325C11.2575 5.9375 12.5625 7.2425 12.5625 10.175V13.325C12.5625 16.2575 11.2575 17.5625 8.325 17.5625ZM5.175 7.0625C2.85 7.0625 2.0625 7.85 2.0625 10.175V13.325C2.0625 15.65 2.85 16.4375 5.175 16.4375H8.325C10.65 16.4375 11.4375 15.65 11.4375 13.325V10.175C11.4375 7.85 10.65 7.0625 8.325 7.0625H5.175Z"
                    fill="#717171"
                  />
                  <path
                    d="M12.825 13.0625H12C11.6925 13.0625 11.4375 12.8075 11.4375 12.5V10.175C11.4375 7.85 10.65 7.0625 8.325 7.0625H6C5.6925 7.0625 5.4375 6.8075 5.4375 6.5V5.675C5.4375 2.7425 6.7425 1.4375 9.675 1.4375H12.825C15.7575 1.4375 17.0625 2.7425 17.0625 5.675V8.825C17.0625 11.7575 15.7575 13.0625 12.825 13.0625ZM12.5625 11.9375H12.825C15.15 11.9375 15.9375 11.15 15.9375 8.825V5.675C15.9375 3.35 15.15 2.5625 12.825 2.5625H9.675C7.35 2.5625 6.5625 3.35 6.5625 5.675V5.9375H8.325C11.2575 5.9375 12.5625 7.2425 12.5625 10.175V11.9375Z"
                    fill="#717171"
                  />
                </svg>
              </i>
              <span className="text-lowgray">کپی کردن کد</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
