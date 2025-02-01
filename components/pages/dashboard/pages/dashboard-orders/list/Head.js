function Head() {
  return (
    <div className="flex flex-col text-lowgray gap-8 md:flex-row md:items-center">
      <div className="flex items-center gap-2">
        <i>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.58335 18.1248C4.87502 18.1248 1.04169 14.2915 1.04169 9.58317C1.04169 4.87484 4.87502 1.0415 9.58335 1.0415C14.2917 1.0415 18.125 4.87484 18.125 9.58317C18.125 14.2915 14.2917 18.1248 9.58335 18.1248ZM9.58335 2.2915C5.55835 2.2915 2.29169 5.5665 2.29169 9.58317C2.29169 13.5998 5.55835 16.8748 9.58335 16.8748C13.6084 16.8748 16.875 13.5998 16.875 9.58317C16.875 5.5665 13.6084 2.2915 9.58335 2.2915Z"
              fill="#717171"
            />
            <path
              d="M18.3333 18.9585C18.175 18.9585 18.0167 18.9002 17.8917 18.7752L16.225 17.1085C15.9833 16.8669 15.9833 16.4669 16.225 16.2252C16.4667 15.9835 16.8667 15.9835 17.1083 16.2252L18.775 17.8919C19.0167 18.1335 19.0167 18.5335 18.775 18.7752C18.65 18.9002 18.4917 18.9585 18.3333 18.9585Z"
              fill="#717171"
            />
          </svg>
        </i>
        <span>جستجوی سفارش ها:</span>
      </div>
      <div className="flex md:gap-6">
        <input
          type="date"
          className="bg-transparent w-1/2 border-[1px] rounded-sm text-center py-2 px-4"
        />
        <input
          type="date"
          className="bg-transparent w-1/2 border-[1px] rounded-sm text-center py-2 px-4"
        />
      </div>
    </div>
  );
}

export default Head;
