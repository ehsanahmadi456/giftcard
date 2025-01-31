function Searchbar() {
  return (
    <div className="flex flex-col gap-6 lg:order-3">
      <p className="font-medium">در خبرنامه ما عضو شوید:</p>
      <div className="flex justify-between bg-[#F3F3F3] rounded-md overflow-hidden max-w-xl mx-auto w-full">
        <input
          type="email"
          placeholder="ایمیل خود را وارد نمایید"
          className="p-4 bg-transparent placeholder:text-lowgray placeholder:text-sm"
        />
        <a
          href="#"
          className="flex items-center justify-center p-2 px-4 bg-primary"
        >
          <i>
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7599 25.0932C12.5066 25.0932 12.2533 24.9999 12.0533 24.7999L3.95992 16.7066C3.57326 16.3199 3.57326 15.6799 3.95992 15.2932L12.0533 7.19991C12.4399 6.81325 13.0799 6.81325 13.4666 7.19991C13.8533 7.58658 13.8533 8.22658 13.4666 8.61325L6.07992 15.9999L13.4666 23.3866C13.8533 23.7732 13.8533 24.4132 13.4666 24.7999C13.2799 24.9999 13.0133 25.0932 12.7599 25.0932Z"
                fill="white"
              />
              <path
                d="M27.3336 17H4.89355C4.34689 17 3.89355 16.5467 3.89355 16C3.89355 15.4533 4.34689 15 4.89355 15H27.3336C27.8802 15 28.3336 15.4533 28.3336 16C28.3336 16.5467 27.8802 17 27.3336 17Z"
                fill="white"
              />
            </svg>
          </i>
        </a>
      </div>
    </div>
  );
}

export default Searchbar;
