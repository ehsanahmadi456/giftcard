function Bottom() {
  return (
    <>
      <div className="flex gap-2 p-4 text-sm font-medium bg-gray-200 rounded-md">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 16V12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 8H12.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        هشدار قبل از خرید به این نکات توجه کنید
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4 lg:gap-8">
          <div
            id="selectBox"
            className="group font-medium w-1/2 lg:w-2/5 border-[1px] p-4 flex justify-between items-center relative"
          >
            <span className="text-lowgray">$</span>
            <input
              type="text"
              pattern="[0-9]+([\.,][0-9]+)?"
              className="w-full text-left bg-transparent outline-none placeholder:text-lowgray"
              placeholder="0.00-500.00"
            />
            <ul
              id="options"
              className="group-[.active]:flex flex-col bg-white absolute w-full text-left top-16 left-0 rounded-md shadow-md hidden"
            >
              <li className="p-2 border-b-[1px] last:border-none hover:bg-gray-200 transition-colors duration-200 ease-linear">
                5
              </li>
              <li className="p-2 border-b-[1px] last:border-none hover:bg-gray-200 transition-colors duration-200 ease-linear">
                10
              </li>
            </ul>
          </div>
          <span className="w-1/2 font-medium">۲۸۰٬۰۰۰ تومان</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center justify-center w-1/2 gap-2 p-4 text-sm text-white rounded-md bg-primary"
          >
            افزودن به سبد خرید
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z"
                fill="white"
              />
              <path
                d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z"
                fill="white"
              />
              <path
                d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z"
                fill="white"
              />
              <path
                d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="#"
            id="like"
            className="flex items-center w-1/2 gap-1 p-2 text-xs rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="fill-none stroke-lowgray"
              viewBox="0 0 18 18"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
            افزودن به علاقه مندی ها
          </a>
        </div>
        <div className="flex items-center gap-1 mt-4 text-xs text-lowgray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M3.11 16.44V21.44V16.44Z" fill="#13CD64" />
            <path
              d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56"
              stroke="#13CD64"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          تحویل از طریق ایمیل بلافاصله پس از خرید
        </div>
      </div>
    </>
  );
}

export default Bottom;
