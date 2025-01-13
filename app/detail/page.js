import React from "react";

function Detail() {
  return (
    <div>
      <header>
        <div
          id="mobile-nav"
          className="flex justify-center items-center bg-white rounded-t-3xl shadow-[0_-35px_60px_-20px_rgba(0,0,0,0.3)] w-full fixed bottom-0 right-0 z-10 h-16 md:hidden transition-all duration-100 ease-linear overflow-hidden"
        >
          <div className="grid grid-cols-4 text-lowgray text-xs w-full max-w-sm sm:max-w-lg">
            <div className="group active flex flex-col justify-center items-center gap-3">
              <i className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="group-[.active]:hidden"
                >
                  <path
                    d="M12.5 18.75C12.09 18.75 11.75 18.41 11.75 18V15C11.75 14.59 12.09 14.25 12.5 14.25C12.91 14.25 13.25 14.59 13.25 15V18C13.25 18.41 12.91 18.75 12.5 18.75Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M18.1009 22.5599H6.90094C5.08094 22.5599 3.42094 21.1599 3.12094 19.3699L1.79094 11.3999C1.57094 10.1599 2.18094 8.56994 3.17094 7.77994L10.1009 2.22994C11.4409 1.14994 13.5509 1.15994 14.9009 2.23994L21.8309 7.77994C22.8109 8.56994 23.4109 10.1599 23.2109 11.3999L21.8809 19.3599C21.5809 21.1299 19.8809 22.5599 18.1009 22.5599ZM12.4909 2.92994C11.9609 2.92994 11.4309 3.08994 11.0409 3.39994L4.11094 8.95994C3.55094 9.40994 3.15094 10.4499 3.27094 11.1599L4.60094 19.1199C4.78094 20.1699 5.83094 21.0599 6.90094 21.0599H18.1009C19.1709 21.0599 20.2209 20.1699 20.4009 19.1099L21.7309 11.1499C21.8409 10.4499 21.4409 9.38994 20.8909 8.94994L13.9609 3.40994C13.5609 3.08994 13.0209 2.92994 12.4909 2.92994Z"
                    fill="#ACACAC"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="hidden group-[.active]:block"
                >
                  <path
                    d="M21.33 8.01002L14.78 2.77002C13.5 1.75002 11.5 1.74002 10.23 2.76002L3.67996 8.01002C2.73996 8.76002 2.16996 10.26 2.36996 11.44L3.62996 18.98C3.91996 20.67 5.48996 22 7.19996 22H17.8C19.49 22 21.09 20.64 21.38 18.97L22.64 11.43C22.82 10.26 22.25 8.76002 21.33 8.01002ZM13.25 18C13.25 18.41 12.91 18.75 12.5 18.75C12.09 18.75 11.75 18.41 11.75 18V15C11.75 14.59 12.09 14.25 12.5 14.25C12.91 14.25 13.25 14.59 13.25 15V18Z"
                    fill="#717171"
                  />
                </svg>
              </i>
              <span className="relative flex justify-center before:hidden group-[.active]:before:block before:absolute before:w-[75px] before:h-1 before:bg-[#717171] before:rounded-lg before:-bottom-2">
                خانه
              </span>
            </div>
            <div className="group flex flex-col justify-center items-center gap-3">
              <i className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="group-[.active]:hidden"
                >
                  <path
                    d="M7.5 10.75H5.5C3.08 10.75 1.75 9.42 1.75 7V5C1.75 2.58 3.08 1.25 5.5 1.25H7.5C9.92 1.25 11.25 2.58 11.25 5V7C11.25 9.42 9.92 10.75 7.5 10.75ZM5.5 2.75C3.92 2.75 3.25 3.42 3.25 5V7C3.25 8.58 3.92 9.25 5.5 9.25H7.5C9.08 9.25 9.75 8.58 9.75 7V5C9.75 3.42 9.08 2.75 7.5 2.75H5.5Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M19.5 10.75H17.5C15.08 10.75 13.75 9.42 13.75 7V5C13.75 2.58 15.08 1.25 17.5 1.25H19.5C21.92 1.25 23.25 2.58 23.25 5V7C23.25 9.42 21.92 10.75 19.5 10.75ZM17.5 2.75C15.92 2.75 15.25 3.42 15.25 5V7C15.25 8.58 15.92 9.25 17.5 9.25H19.5C21.08 9.25 21.75 8.58 21.75 7V5C21.75 3.42 21.08 2.75 19.5 2.75H17.5Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M19.5 22.75H17.5C15.08 22.75 13.75 21.42 13.75 19V17C13.75 14.58 15.08 13.25 17.5 13.25H19.5C21.92 13.25 23.25 14.58 23.25 17V19C23.25 21.42 21.92 22.75 19.5 22.75ZM17.5 14.75C15.92 14.75 15.25 15.42 15.25 17V19C15.25 20.58 15.92 21.25 17.5 21.25H19.5C21.08 21.25 21.75 20.58 21.75 19V17C21.75 15.42 21.08 14.75 19.5 14.75H17.5Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M7.5 22.75H5.5C3.08 22.75 1.75 21.42 1.75 19V17C1.75 14.58 3.08 13.25 5.5 13.25H7.5C9.92 13.25 11.25 14.58 11.25 17V19C11.25 21.42 9.92 22.75 7.5 22.75ZM5.5 14.75C3.92 14.75 3.25 15.42 3.25 17V19C3.25 20.58 3.92 21.25 5.5 21.25H7.5C9.08 21.25 9.75 20.58 9.75 19V17C9.75 15.42 9.08 14.75 7.5 14.75H5.5Z"
                    fill="#ACACAC"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="hidden group-[.active]:block"
                >
                  <path
                    d="M7.74 2H5.84C3.65 2 2.5 3.15 2.5 5.33V7.23C2.5 9.41 3.65 10.56 5.83 10.56H7.73C9.91 10.56 11.06 9.41 11.06 7.23V5.33C11.07 3.15 9.92 2 7.74 2Z"
                    fill="#717171"
                  />
                  <path
                    d="M19.1695 2H17.2695C15.0895 2 13.9395 3.15 13.9395 5.33V7.23C13.9395 9.41 15.0895 10.56 17.2695 10.56H19.1695C21.3495 10.56 22.4995 9.41 22.4995 7.23V5.33C22.4995 3.15 21.3495 2 19.1695 2Z"
                    fill="#717171"
                  />
                  <path
                    d="M19.1695 13.4301H17.2695C15.0895 13.4301 13.9395 14.5801 13.9395 16.7601V18.6601C13.9395 20.8401 15.0895 21.9901 17.2695 21.9901H19.1695C21.3495 21.9901 22.4995 20.8401 22.4995 18.6601V16.7601C22.4995 14.5801 21.3495 13.4301 19.1695 13.4301Z"
                    fill="#717171"
                  />
                  <path
                    d="M7.74 13.4301H5.84C3.65 13.4301 2.5 14.5801 2.5 16.7601V18.6601C2.5 20.8501 3.65 22.0001 5.83 22.0001H7.73C9.91 22.0001 11.06 20.8501 11.06 18.6701V16.7701C11.07 14.5801 9.92 13.4301 7.74 13.4301Z"
                    fill="#717171"
                  />
                </svg>
              </i>
              <span className="relative flex justify-center before:hidden group-[.active]:before:block before:absolute before:w-[75px] before:h-1 before:bg-[#717171] before:rounded-lg before:-bottom-2">
                دسته بندی
              </span>
            </div>
            <div className="group flex flex-col justify-center items-center gap-3">
              <i className="w-5 h-5 relative before:content-['0'] before:text-xs before:flex before:justify-center before:items-center before:text-white before:absolute before:w-[14px] before:h-[14px] before:bg-secondary before:rounded-full before:-top-[6px] before:-right-[6px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="group-[.active]:hidden"
                >
                  <path
                    d="M18.94 17.75H8.28999C7.29999 17.75 6.34999 17.33 5.67999 16.6C5.00999 15.87 4.67 14.89 4.75 13.9L5.58 3.94C5.61 3.63 5.49999 3.33001 5.28999 3.10001C5.07999 2.87001 4.79 2.75 4.48 2.75H2.75C2.34 2.75 2 2.41 2 2C2 1.59 2.34 1.25 2.75 1.25H4.49001C5.22001 1.25 5.90999 1.56 6.39999 2.09C6.66999 2.39 6.87 2.74 6.98 3.13H19.47C20.48 3.13 21.41 3.53 22.09 4.25C22.76 4.98 23.1 5.93 23.02 6.94L22.48 14.44C22.37 16.27 20.77 17.75 18.94 17.75ZM7.03 4.62L6.25 14.02C6.2 14.6 6.39 15.15 6.78 15.58C7.17 16.01 7.70999 16.24 8.28999 16.24H18.94C19.98 16.24 20.92 15.36 21 14.32L21.54 6.82001C21.58 6.23001 21.39 5.67001 21 5.26001C20.61 4.84001 20.07 4.60999 19.48 4.60999H7.03V4.62Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M17 22.75C15.9 22.75 15 21.85 15 20.75C15 19.65 15.9 18.75 17 18.75C18.1 18.75 19 19.65 19 20.75C19 21.85 18.1 22.75 17 22.75ZM17 20.25C16.72 20.25 16.5 20.47 16.5 20.75C16.5 21.03 16.72 21.25 17 21.25C17.28 21.25 17.5 21.03 17.5 20.75C17.5 20.47 17.28 20.25 17 20.25Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M9 22.75C7.9 22.75 7 21.85 7 20.75C7 19.65 7.9 18.75 9 18.75C10.1 18.75 11 19.65 11 20.75C11 21.85 10.1 22.75 9 22.75ZM9 20.25C8.72 20.25 8.5 20.47 8.5 20.75C8.5 21.03 8.72 21.25 9 21.25C9.28 21.25 9.5 21.03 9.5 20.75C9.5 20.47 9.28 20.25 9 20.25Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M21.75 8.75H9.75C9.34 8.75 9 8.41 9 8C9 7.59 9.34 7.25 9.75 7.25H21.75C22.16 7.25 22.5 7.59 22.5 8C22.5 8.41 22.16 8.75 21.75 8.75Z"
                    fill="#ACACAC"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="hidden group-[.active]:block"
                >
                  <path
                    d="M17 22.5C17.9665 22.5 18.75 21.7165 18.75 20.75C18.75 19.7835 17.9665 19 17 19C16.0335 19 15.25 19.7835 15.25 20.75C15.25 21.7165 16.0335 22.5 17 22.5Z"
                    fill="#717171"
                  />
                  <path
                    d="M9 22.5C9.9665 22.5 10.75 21.7165 10.75 20.75C10.75 19.7835 9.9665 19 9 19C8.0335 19 7.25 19.7835 7.25 20.75C7.25 21.7165 8.0335 22.5 9 22.5Z"
                    fill="#717171"
                  />
                  <path
                    d="M5.59 3.94L5.39 6.39C5.35 6.86 5.72 7.25 6.19 7.25H21.5C21.92 7.25 22.27 6.93 22.3 6.51C22.43 4.74 21.08 3.3 19.31 3.3H7.02C6.92 2.86 6.72 2.44 6.41 2.09C5.91 1.56 5.21 1.25 4.49 1.25H2.75C2.34 1.25 2 1.59 2 2C2 2.41 2.34 2.75 2.75 2.75H4.49C4.8 2.75 5.09 2.88 5.3 3.1C5.51 3.33 5.61 3.63 5.59 3.94Z"
                    fill="#717171"
                  />
                  <path
                    d="M21.2601 8.75H5.92005C5.50005 8.75 5.16005 9.07 5.12005 9.48L4.76005 13.83C4.62005 15.54 5.96005 17 7.67005 17H18.7901C20.2901 17 21.6101 15.77 21.7201 14.27L22.0501 9.6C22.0901 9.14 21.7301 8.75 21.2601 8.75Z"
                    fill="#717171"
                  />
                </svg>
              </i>
              <span className="relative flex justify-center before:hidden group-[.active]:before:block before:absolute before:w-[75px] before:h-1 before:bg-[#717171] before:rounded-lg before:-bottom-2">
                سبد خرید
              </span>
            </div>
            <div className="group flex flex-col justify-center items-center gap-3">
              <i className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="group-[.active]:hidden"
                >
                  <path
                    d="M12.1605 11.62C12.1305 11.62 12.1105 11.62 12.0805 11.62C12.0305 11.61 11.9605 11.61 11.9005 11.62C9.00055 11.53 6.81055 9.25 6.81055 6.44C6.81055 3.58 9.14055 1.25 12.0005 1.25C14.8605 1.25 17.1905 3.58 17.1905 6.44C17.1805 9.25 14.9805 11.53 12.1905 11.62C12.1805 11.62 12.1705 11.62 12.1605 11.62ZM12.0005 2.75C9.97055 2.75 8.31055 4.41 8.31055 6.44C8.31055 8.44 9.87055 10.05 11.8605 10.12C11.9105 10.11 12.0505 10.11 12.1805 10.12C14.1405 10.03 15.6805 8.42 15.6905 6.44C15.6905 4.41 14.0305 2.75 12.0005 2.75Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z"
                    fill="#ACACAC"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hidden group-[.active]:block"
                >
                  <path
                    d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
                    fill="#717171"
                  />
                  <path
                    d="M17.0809 14.15C14.2909 12.29 9.74094 12.29 6.93094 14.15C5.66094 15 4.96094 16.15 4.96094 17.38C4.96094 18.61 5.66094 19.75 6.92094 20.59C8.32094 21.53 10.1609 22 12.0009 22C13.8409 22 15.6809 21.53 17.0809 20.59C18.3409 19.74 19.0409 18.6 19.0409 17.36C19.0309 16.13 18.3409 14.99 17.0809 14.15Z"
                    fill="#717171"
                  />
                </svg>
              </i>
              <span className="relative flex justify-center group-[.active]:text-[#717171] before:hidden group-[.active]:before:block before:absolute before:w-[75px] before:h-1 before:bg-[#717171] before:rounded-lg before:-bottom-2">
                حساب کاربری
              </span>
            </div>
          </div>
        </div>

        <div className="w-full p-6 mx-auto max-w-screen-2xl lg:px-12 xl:px-24">
          <div className="flex justify-between">
            <div className="flex items-center justify-between w-full lg:w-3/5 xl:w-4/6 lg:justify-start lg:gap-4">
              <div className="flex items-center justify-center gap-1">
                <span className="rounded-full w-7 h-7 bg-primary"></span>
                <a href="#" className="text-xl font-bold">
                  گیفت کارت
                </a>
              </div>
              <div className="flex items-center lg:w-4/6 xl:w-3/4 lg:border lg:rounded lg:p-2 gap-2 max-w-lg border-[#D8D8D8]">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                      fill="#717171"
                    />
                    <path
                      d="M21.9999 22.7499C21.8099 22.7499 21.6199 22.6799 21.4699 22.5299L19.4699 20.5299C19.1799 20.2399 19.1799 19.7599 19.4699 19.4699C19.7599 19.1799 20.2399 19.1799 20.5299 19.4699L22.5299 21.4699C22.8199 21.7599 22.8199 22.2399 22.5299 22.5299C22.3799 22.6799 22.1899 22.7499 21.9999 22.7499Z"
                      fill="#292D32"
                    />
                  </svg>
                </i>
                <input
                  className="hidden bg-transparent outline-none lg:block placeholder:text-sm placeholder:text-lowgray"
                  type="text"
                  placeholder="جستجوی محصول..."
                />
              </div>
            </div>
            <div className="hidden gap-4 lg:flex">
              <span className="flex items-center justify-center gap-1 text-sm text-lowgray">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1359_711)">
                      <path
                        d="M23.575 2.4663C23.385 2.29249 23.1523 2.17238 22.9005 2.1183C22.6488 2.06421 22.3873 2.07811 22.1427 2.15857L1.04014 9.11486C0.465026 9.30443 0.0750263 9.8178 0.0465732 10.4226C0.0181669 11.0275 0.358245 11.5752 0.912964 11.818L6.13179 14.1014L7.70637 21.4043C7.77176 21.7076 7.92574 21.9779 8.25195 22.061C8.5819 22.145 8.81501 21.9647 9.0612 21.7804L12.934 18.8805L17.4616 22.5854C17.7253 22.8013 18.0477 22.9139 18.3763 22.9139C18.5355 22.9138 18.6936 22.8875 18.8444 22.8363C19.3209 22.6747 19.6742 22.2858 19.7893 21.796L24.0065 3.86618C24.0653 3.61554 24.0563 3.35377 23.9805 3.10775C23.9046 2.86173 23.7647 2.64033 23.575 2.4663ZM9.39856 15.4098C9.39598 15.4159 9.39345 15.4228 9.39106 15.431L8.51806 18.4811L7.54381 13.9626L14.243 10.2405L9.55925 15.1379C9.48579 15.2152 9.43085 15.3082 9.39856 15.4098ZM9.67564 19.5594L10.0722 18.174L10.4514 16.8489L11.8104 17.961L9.67564 19.5594ZM22.6344 3.54339L18.4173 21.4732C18.4151 21.4821 18.4123 21.4944 18.3917 21.5013C18.3713 21.5083 18.3613 21.5004 18.3543 21.4946L13.4 17.4404L13.3997 17.4401L11.1042 15.5617L18.4788 7.85088C18.5953 7.72901 18.6643 7.56939 18.6732 7.40099C18.6821 7.2326 18.6303 7.06659 18.5273 6.93311C18.4242 6.79962 18.2767 6.7075 18.1116 6.67348C17.9464 6.63946 17.7745 6.6658 17.6271 6.74772L6.70751 12.8147L1.478 10.5266C1.46206 10.5197 1.45329 10.5158 1.45456 10.4888C1.45582 10.462 1.46492 10.4589 1.48142 10.4535L22.584 3.49722C22.5942 3.49389 22.6057 3.49005 22.6227 3.50552C22.6397 3.52108 22.6369 3.53289 22.6344 3.54339Z"
                        fill="#8B8A92"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1359_711">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.0449219 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                پشتیبانی تلگرام: ۰۹۱۲۳۱۷۹۰۶۰
              </span>
              <span className="flex items-center justify-center gap-1 text-sm text-lowgray">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1359_707)">
                      <path
                        d="M5.0289 18.0211C5.09879 18.2819 5.22856 18.5344 5.4216 18.7622C5.61464 18.99 5.84001 19.1936 6.11222 19.3691C6.57202 19.6652 7.03892 19.8429 7.52936 19.9056C8.01256 19.9703 8.50868 19.9383 9.01579 19.8024C9.75472 19.6044 10.4978 19.219 11.2358 18.6408C11.9738 18.0625 12.6788 17.3612 13.3435 16.5386C14.0203 15.6974 14.6329 14.8065 15.1762 13.8735C15.7112 12.9397 16.1746 11.9667 16.5626 10.9629C16.9354 9.97791 17.1922 9.02392 17.3206 8.11213C17.447 7.19309 17.4093 6.35685 17.2075 5.60343C17.0755 5.11081 16.8623 4.66321 16.572 4.27513C16.2797 3.87981 15.8957 3.54789 15.4147 3.28854C14.8288 2.95638 14.2615 2.86768 13.7254 3.01132C13.5226 3.06568 13.3314 3.16349 13.1736 3.29896C13.0085 3.43636 12.8768 3.61141 12.7969 3.8347L11.7509 6.65398C11.6691 6.87003 11.6195 7.06189 11.597 7.23874C11.5726 7.40834 11.5771 7.57018 11.614 7.70782C11.6606 7.88169 11.7579 8.04197 11.904 8.18142C12.0428 8.3228 12.227 8.45979 12.4475 8.58707L13.1514 9.01185C13.2525 9.07019 13.3139 9.15466 13.345 9.27057C13.3605 9.32853 13.3668 9.38118 13.3679 9.44302C13.3617 9.5068 13.3516 9.55609 13.3487 9.60343C13.2824 9.87744 13.1413 10.2491 12.9235 10.7112C12.6984 11.1753 12.4536 11.6524 12.1797 12.1373C11.8914 12.6261 11.6098 13.082 11.3132 13.5109C11.0219 13.9306 10.7686 14.2314 10.5573 14.4278C10.5249 14.452 10.4873 14.4854 10.4424 14.5207C10.3903 14.558 10.3343 14.5807 10.2691 14.5982C10.1459 14.6312 10.0401 14.613 9.93903 14.5546L9.24287 14.1588C9.01323 14.0263 8.80248 13.9352 8.61256 13.8929C8.41876 13.8361 8.23855 13.8301 8.05744 13.8786C7.9198 13.9155 7.78267 13.9833 7.64077 14.0912C7.49886 14.1991 7.35747 14.3379 7.20936 14.5096L5.26762 16.8546C5.1142 17.0354 5.02457 17.2225 4.99341 17.425C4.96949 17.6255 4.97455 17.8182 5.0289 18.0211Z"
                        stroke="#8B8A92"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1359_707">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="matrix(-0.965926 0.258819 0.258819 0.965926 17.3867 0.477295)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                تلفن پشتیبانی: ۹۰۰۰۰۲۰۰
              </span>
            </div>
          </div>
          <div className="items-center justify-between hidden mt-8 md:flex">
            <nav>
              <ul className="flex gap-6">
                <li className="relative group">
                  <a
                    href="#"
                    className="relative flex justify-center items-center font-medium gap-1 after:w-0 after:origin-center after:rounded-full after:bg-primary after:h-[2px] after:absolute after:-bottom-1 group-hover:after:w-[100%] after:transition-all after:ease-linear after:duration-500"
                  >
                    خانه
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="#"
                    className="relative flex justify-center items-center font-medium gap-1 after:w-0 after:origin-center after:rounded-full after:bg-primary after:h-[2px] after:absolute after:-bottom-1 group-hover:after:w-[100%] after:transition-all after:ease-linear after:duration-500"
                  >
                    دسته بندی محصولات
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M19.9201 9.44995L13.4001 15.97C12.6301 16.74 11.3701 16.74 10.6001 15.97L4.08008 9.44995"
                        stroke="#0C0A18"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <div className="transition-all duration-500 opacity-0 group-hover:opacity-100 flex flex-col bg-white min-w-[140%] text-lowgray absolute top-[2.25rem] -right-1">
                    <a href="#" className="p-2 pb-3 border-b-[1px]">
                      دسته بندی محصولات
                    </a>
                    <a href="#" className="p-2 pb-3 border-b-[1px]">
                      دسته بندی محصولات
                    </a>
                    <a href="#" className="p-2 pb-3 border-b-[1px]">
                      دسته بندی محصولات
                    </a>
                  </div>
                </li>
                <li className="relative group">
                  <a
                    href="#"
                    className="relative flex justify-center items-center font-medium gap-1 after:w-0 after:origin-center after:rounded-full after:bg-primary after:h-[2px] after:absolute after:-bottom-1 group-hover:after:w-[100%] after:transition-all after:ease-linear after:duration-500"
                  >
                    تماس با ما
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="#"
                    className="relative flex justify-center items-center font-medium gap-1 after:w-0 after:origin-center after:rounded-full after:bg-primary after:h-[2px] after:absolute after:-bottom-1 group-hover:after:w-[100%] after:transition-all after:ease-linear after:duration-500"
                  >
                    بلاگ
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center justify-center gap-2">
              <a
                href="#"
                className="flex items-center justify-center gap-1 p-2 px-4 text-xs font-medium transition-all duration-300 ease-linear bg-gray-100 rounded-lg group text-primary hover:bg-primary hover:text-white"
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="transition-all duration-300 ease-linear fill-primary group-hover:fill-white"
                  >
                    <path d="M12.1596 11.62C12.1296 11.62 12.1096 11.62 12.0796 11.62C12.0296 11.61 11.9596 11.61 11.8996 11.62C8.99957 11.53 6.80957 9.25 6.80957 6.44C6.80957 3.58 9.13957 1.25 11.9996 1.25C14.8596 1.25 17.1896 3.58 17.1896 6.44C17.1796 9.25 14.9796 11.53 12.1896 11.62C12.1796 11.62 12.1696 11.62 12.1596 11.62ZM11.9996 2.75C9.96957 2.75 8.30957 4.41 8.30957 6.44C8.30957 8.44 9.86957 10.05 11.8596 10.12C11.9096 10.11 12.0496 10.11 12.1796 10.12C14.1396 10.03 15.6796 8.42 15.6896 6.44C15.6896 4.41 14.0296 2.75 11.9996 2.75Z" />
                    <path d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z" />
                  </svg>
                </i>
                ورود | ثبت نام
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-1 p-2 px-4 text-xs font-medium transition-colors duration-300 ease-linear rounded-lg text-lowgray hover:bg-gray-200"
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z"
                      fill="#7A7A7A"
                    />
                    <path
                      d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z"
                      fill="#7A7A7A"
                    />
                    <path
                      d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z"
                      fill="#7A7A7A"
                    />
                    <path
                      d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z"
                      fill="#7A7A7A"
                    />
                  </svg>
                </i>
                سبد خرید
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full p-6 mx-auto mt-8 mb-12 max-w-screen-2xl lg:px-12 xl:px-24">
        <section className="flex flex-col items-center gap-6 mb-16 md:flex-row lg:gap-12">
          <div className="w-full p-8 bg-white rounded-lg lg:p-0 md:bg-transparent lg:w-max">
            <img
              src="../public/assets/images/detail.png"
              className="mx-auto lg:mx-0 w-40 lg:w-[350px] xl:w-[400px] md:w-60 max-w-[400px]"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-lg font-bold">گیفت کارت اسپاتیفای</h2>
            <div className="flex gap-4">
              <div className="flex gap-1 text-xs text-lowgray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M11.9686 4.5341C11.9301 4.41022 11.8576 4.30087 11.7601 4.21961C11.6626 4.13836 11.5443 4.08878 11.4201 4.07703L7.95604 3.74886L6.58704 0.404284C6.48595 0.158559 6.25598 0 5.99999 0C5.74401 0 5.51394 0.158559 5.41351 0.404284L4.04451 3.74886L0.579941 4.07703C0.325946 4.10149 0.110881 4.28101 0.031427 4.5341C-0.00728901 4.65808 -0.0103006 4.79119 0.0227653 4.91694C0.0558312 5.04269 0.123522 5.15556 0.217452 5.24156L2.83599 7.63752L2.06393 11.186C2.00744 11.4469 2.10447 11.7167 2.31194 11.8732C2.42061 11.9557 2.55156 12.0001 2.68594 12C2.80113 12 2.91416 11.9674 3.01297 11.9056L5.99999 10.0419L8.98648 11.9056C9.09361 11.9725 9.21721 12.0051 9.34193 11.9993C9.46665 11.9936 9.58701 11.9497 9.68806 11.8732C9.89551 11.7167 9.99257 11.4469 9.93608 11.186L9.164 7.63755L11.7825 5.24158C11.8765 5.15559 11.9442 5.04272 11.9772 4.91697C12.0103 4.79122 12.0073 4.6581 11.9686 4.53412V4.5341Z"
                    fill="#FFC107"
                  />
                </svg>
                ۴ امتیاز
              </div>
              <div className="flex gap-1 text-xs text-lowgray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_297_2365)">
                    <path
                      d="M7.08317 15.8334H6.6665C3.33317 15.8334 1.6665 15.0001 1.6665 10.8334V6.66675C1.6665 3.33341 3.33317 1.66675 6.6665 1.66675H13.3332C16.6665 1.66675 18.3332 3.33341 18.3332 6.66675V10.8334C18.3332 14.1667 16.6665 15.8334 13.3332 15.8334H12.9165C12.6582 15.8334 12.4082 15.9584 12.2498 16.1667L10.9998 17.8334C10.4498 18.5667 9.54984 18.5667 8.99984 17.8334L7.74984 16.1667C7.6165 15.9834 7.30817 15.8334 7.08317 15.8334Z"
                      stroke="#ACACAC"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3301 9.16675H13.3384M9.99593 9.16675H10.0043M6.6626 9.16675H6.66926"
                      stroke="#ACACAC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_297_2365">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                ۱۲ دیدگاه
              </div>
            </div>
            <div className="flex items-center justify-between text-xs sm:justify-start sm:gap-16">
              <div className="flex items-center gap-2 text-lowgray">
                <img
                  src="../public/assets/images/country.png"
                  className="w-8 h-5"
                  alt=""
                />
                <span> کشور: آمریکا </span>
              </div>
              <div className="flex items-center gap-1 text-secondary">
                <a href="#">تغییر کشور</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M14.9998 21.17C14.8098 21.17 14.6198 21.1 14.4698 20.95L7.94979 14.43C6.88979 13.37 6.88979 11.63 7.94979 10.57L14.4698 4.05002C14.7598 3.76002 15.2398 3.76002 15.5298 4.05002C15.8198 4.34002 15.8198 4.82002 15.5298 5.11002L9.00979 11.63C8.52979 12.11 8.52979 12.89 9.00979 13.37L15.5298 19.89C15.8198 20.18 15.8198 20.66 15.5298 20.95C15.3798 21.09 15.1898 21.17 14.9998 21.17Z"
                    fill="#F69625"
                  />
                </svg>
              </div>
            </div>
            <p className="text-sm leading-loose text-lowgray">
              اسپاتیفای محتوای صوتی ضبط‌شده را با حق نشر دیجیتال ارائه می‌دهد که
              شامل بیش از ۱۰۰ میلیون آهنگ و پنج میلیون پادکست از شرکت‌های ناشر
              موسیقی و شرکت‌های رسانه‌ای است.به عنوان یک سرویس پریمیوم،
              ویژگی‌های اساسی آن همراه با تبلیغات، محدود و رایگان هستند، در حالی
              که ویژگی‌های اضافی مانند کیفیت پخش بهتر و گوش‌دادن موسیقی به صورت
              آفلاین از طریق پرداخت اشتراک ارائه داده می‌شود.
            </p>
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
          </div>
        </section>
        <section id="dropdowns" className="flex flex-col gap-6 mb-16">
          <div className="flex flex-col border-b-[1px] pb-8 gap-8 w-full group">
            <div className="flex items-center justify-between">
              <h6 className="text-lg font-medium text-lowgray">نحوه استفاده</h6>
              <span className="cursor-pointer action-button">
                <svg
                  className="hidden group-[.active]:block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.92 15.3C19.8555 15.3 19.7949 15.2777 19.7436 15.2264L13.2236 8.7064C12.5483 8.03114 11.4517 8.03114 10.7765 8.7064L4.25647 15.2264C4.16173 15.3211 3.99831 15.3211 3.90357 15.2264C3.80884 15.1317 3.80884 14.9682 3.90357 14.8735L10.4236 8.35351C11.2871 7.48996 12.7012 7.48731 13.5773 8.35434C13.5776 8.35461 13.5779 8.35489 13.5781 8.35517L20.0965 14.8735C20.1893 14.9664 20.1912 15.1252 20.102 15.2207C20.0363 15.2792 19.9682 15.3 19.92 15.3Z"
                    fill="#0C0A18"
                    stroke="#0C0A18"
                  />
                </svg>
                <svg
                  className="group-[.active]:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 16.3C11.428 16.3 10.8566 16.0795 10.4236 15.6465L3.90357 9.12646C3.80884 9.03172 3.80884 8.86831 3.90357 8.77357C3.99831 8.67883 4.16173 8.67883 4.25647 8.77357L10.7765 15.2936C11.4517 15.9688 12.5483 15.9688 13.2236 15.2936L19.7436 8.77357C19.8383 8.67883 20.0017 8.67883 20.0965 8.77357C20.1912 8.86831 20.1912 9.03172 20.0965 9.12646L20.45 9.48001L20.0965 9.12646L13.5765 15.6465C13.1434 16.0795 12.572 16.3 12 16.3Z"
                    fill="#0C0A18"
                    stroke="#0C0A18"
                  />
                </svg>
              </span>
            </div>
            <p className="text-sm text-lowgray leading-loose h-0 hidden group-[.active]:h-max group-[.active]:flex transition-all duration-300 ease-linear">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
          <div className="swiper--1 overflow-visible flex flex-col gap-8 border-b-[1px] pb-8 w-full group">
            <div className="flex items-center justify-between">
              <h6 className="text-lg font-medium text-lowgray">
                نظرات کاربران
              </h6>
              <span className="cursor-pointer action-button">
                <svg
                  className="hidden group-[.active]:block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.92 15.3C19.8555 15.3 19.7949 15.2777 19.7436 15.2264L13.2236 8.7064C12.5483 8.03114 11.4517 8.03114 10.7765 8.7064L4.25647 15.2264C4.16173 15.3211 3.99831 15.3211 3.90357 15.2264C3.80884 15.1317 3.80884 14.9682 3.90357 14.8735L10.4236 8.35351C11.2871 7.48996 12.7012 7.48731 13.5773 8.35434C13.5776 8.35461 13.5779 8.35489 13.5781 8.35517L20.0965 14.8735C20.1893 14.9664 20.1912 15.1252 20.102 15.2207C20.0363 15.2792 19.9682 15.3 19.92 15.3Z"
                    fill="#0C0A18"
                    stroke="#0C0A18"
                  />
                </svg>
                <svg
                  className="group-[.active]:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 16.3C11.428 16.3 10.8566 16.0795 10.4236 15.6465L3.90357 9.12646C3.80884 9.03172 3.80884 8.86831 3.90357 8.77357C3.99831 8.67883 4.16173 8.67883 4.25647 8.77357L10.7765 15.2936C11.4517 15.9688 12.5483 15.9688 13.2236 15.2936L19.7436 8.77357C19.8383 8.67883 20.0017 8.67883 20.0965 8.77357C20.1912 8.86831 20.1912 9.03172 20.0965 9.12646L20.45 9.48001L20.0965 9.12646L13.5765 15.6465C13.1434 16.0795 12.572 16.3 12 16.3Z"
                    fill="#0C0A18"
                    stroke="#0C0A18"
                  />
                </svg>
              </span>
            </div>
            <div className="hidden group-[.active]:flex">
              <div className="hidden h-0 group-[.active]:h-max lg:group-[.active]:flex flex-col items-center border-[1px] w-1/4 rounded-lg p-4">
                <div className="flex items-center justify-center gap-1 text-sm">
                  <span className="text-base font-medium">5</span> از 5 امتیاز
                  <div className="flex gap-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M12.4686 4.5341C12.4301 4.41022 12.3576 4.30087 12.2601 4.21961C12.1626 4.13836 12.0443 4.08878 11.9201 4.07703L8.45604 3.74886L7.08704 0.404284C6.98595 0.158559 6.75598 0 6.49999 0C6.24401 0 6.01394 0.158559 5.91351 0.404284L4.54451 3.74886L1.07994 4.07703C0.825946 4.10149 0.610881 4.28101 0.531427 4.5341C0.492711 4.65808 0.489699 4.79119 0.522765 4.91694C0.555831 5.04269 0.623522 5.15556 0.717452 5.24156L3.33599 7.63752L2.56393 11.186C2.50744 11.4469 2.60447 11.7167 2.81194 11.8732C2.92061 11.9557 3.05156 12.0001 3.18594 12C3.30113 12 3.41416 11.9674 3.51297 11.9056L6.49999 10.0419L9.48648 11.9056C9.59361 11.9725 9.71721 12.0051 9.84193 11.9993C9.96665 11.9936 10.087 11.9497 10.1881 11.8732C10.3955 11.7167 10.4926 11.4469 10.4361 11.186L9.664 7.63755L12.2825 5.24158C12.3765 5.15559 12.4442 5.04272 12.4772 4.91697C12.5103 4.79122 12.5073 4.6581 12.4686 4.53412V4.5341Z"
                        fill="#FFC107"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M12.4686 4.5341C12.4301 4.41022 12.3576 4.30087 12.2601 4.21961C12.1626 4.13836 12.0443 4.08878 11.9201 4.07703L8.45604 3.74886L7.08704 0.404284C6.98595 0.158559 6.75598 0 6.49999 0C6.24401 0 6.01394 0.158559 5.91351 0.404284L4.54451 3.74886L1.07994 4.07703C0.825946 4.10149 0.610881 4.28101 0.531427 4.5341C0.492711 4.65808 0.489699 4.79119 0.522765 4.91694C0.555831 5.04269 0.623522 5.15556 0.717452 5.24156L3.33599 7.63752L2.56393 11.186C2.50744 11.4469 2.60447 11.7167 2.81194 11.8732C2.92061 11.9557 3.05156 12.0001 3.18594 12C3.30113 12 3.41416 11.9674 3.51297 11.9056L6.49999 10.0419L9.48648 11.9056C9.59361 11.9725 9.71721 12.0051 9.84193 11.9993C9.96665 11.9936 10.087 11.9497 10.1881 11.8732C10.3955 11.7167 10.4926 11.4469 10.4361 11.186L9.664 7.63755L12.2825 5.24158C12.3765 5.15559 12.4442 5.04272 12.4772 4.91697C12.5103 4.79122 12.5073 4.6581 12.4686 4.53412V4.5341Z"
                        fill="#FFC107"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M12.4686 4.5341C12.4301 4.41022 12.3576 4.30087 12.2601 4.21961C12.1626 4.13836 12.0443 4.08878 11.9201 4.07703L8.45604 3.74886L7.08704 0.404284C6.98595 0.158559 6.75598 0 6.49999 0C6.24401 0 6.01394 0.158559 5.91351 0.404284L4.54451 3.74886L1.07994 4.07703C0.825946 4.10149 0.610881 4.28101 0.531427 4.5341C0.492711 4.65808 0.489699 4.79119 0.522765 4.91694C0.555831 5.04269 0.623522 5.15556 0.717452 5.24156L3.33599 7.63752L2.56393 11.186C2.50744 11.4469 2.60447 11.7167 2.81194 11.8732C2.92061 11.9557 3.05156 12.0001 3.18594 12C3.30113 12 3.41416 11.9674 3.51297 11.9056L6.49999 10.0419L9.48648 11.9056C9.59361 11.9725 9.71721 12.0051 9.84193 11.9993C9.96665 11.9936 10.087 11.9497 10.1881 11.8732C10.3955 11.7167 10.4926 11.4469 10.4361 11.186L9.664 7.63755L12.2825 5.24158C12.3765 5.15559 12.4442 5.04272 12.4772 4.91697C12.5103 4.79122 12.5073 4.6581 12.4686 4.53412V4.5341Z"
                        fill="#FFC107"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M12.4686 4.5341C12.4301 4.41022 12.3576 4.30087 12.2601 4.21961C12.1626 4.13836 12.0443 4.08878 11.9201 4.07703L8.45604 3.74886L7.08704 0.404284C6.98595 0.158559 6.75598 0 6.49999 0C6.24401 0 6.01394 0.158559 5.91351 0.404284L4.54451 3.74886L1.07994 4.07703C0.825946 4.10149 0.610881 4.28101 0.531427 4.5341C0.492711 4.65808 0.489699 4.79119 0.522765 4.91694C0.555831 5.04269 0.623522 5.15556 0.717452 5.24156L3.33599 7.63752L2.56393 11.186C2.50744 11.4469 2.60447 11.7167 2.81194 11.8732C2.92061 11.9557 3.05156 12.0001 3.18594 12C3.30113 12 3.41416 11.9674 3.51297 11.9056L6.49999 10.0419L9.48648 11.9056C9.59361 11.9725 9.71721 12.0051 9.84193 11.9993C9.96665 11.9936 10.087 11.9497 10.1881 11.8732C10.3955 11.7167 10.4926 11.4469 10.4361 11.186L9.664 7.63755L12.2825 5.24158C12.3765 5.15559 12.4442 5.04272 12.4772 4.91697C12.5103 4.79122 12.5073 4.6581 12.4686 4.53412V4.5341Z"
                        fill="#FFC107"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M12.4686 4.5341C12.4301 4.41022 12.3576 4.30087 12.2601 4.21961C12.1626 4.13836 12.0443 4.08878 11.9201 4.07703L8.45604 3.74886L7.08704 0.404284C6.98595 0.158559 6.75598 0 6.49999 0C6.24401 0 6.01394 0.158559 5.91351 0.404284L4.54451 3.74886L1.07994 4.07703C0.825946 4.10149 0.610881 4.28101 0.531427 4.5341C0.492711 4.65808 0.489699 4.79119 0.522765 4.91694C0.555831 5.04269 0.623522 5.15556 0.717452 5.24156L3.33599 7.63752L2.56393 11.186C2.50744 11.4469 2.60447 11.7167 2.81194 11.8732C2.92061 11.9557 3.05156 12.0001 3.18594 12C3.30113 12 3.41416 11.9674 3.51297 11.9056L6.49999 10.0419L9.48648 11.9056C9.59361 11.9725 9.71721 12.0051 9.84193 11.9993C9.96665 11.9936 10.087 11.9497 10.1881 11.8732C10.3955 11.7167 10.4926 11.4469 10.4361 11.186L9.664 7.63755L12.2825 5.24158C12.3765 5.15559 12.4442 5.04272 12.4772 4.91697C12.5103 4.79122 12.5073 4.6581 12.4686 4.53412V4.5341Z"
                        fill="#FFC107"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center circular"></div>
              </div>
              <div className="swiper-wrapper md:gap-4 md:flex-col h-0 lg:w-3/4 hidden group-[.active]:h-max group-[.active]:flex transition-all duration-300 ease-linear">
                <article className="swiper-slide flex flex-col p-4 border-[1px] w-3/5 gap-4 rounded-md flex-shrink-0 md:border-0 md:gap-6">
                  <div className="flex items-center gap-2 text-xs text-lowgray md:gap-4">
                    <img
                      src="../public/assets/images/user.png"
                      className="w-10 h-10 rounded-full md:h-14 md:w-14"
                      alt=""
                    />
                    <div className="flex flex-col gap-2">
                      علیرضا مهران
                      <span>۱۴۰۲/۰۳/۱۶</span>
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M11.9686 4.5341C11.9301 4.41022 11.8576 4.30087 11.7601 4.21961C11.6626 4.13836 11.5443 4.08878 11.4201 4.07703L7.95604 3.74886L6.58704 0.404284C6.48595 0.158559 6.25598 0 5.99999 0C5.74401 0 5.51394 0.158559 5.41351 0.404284L4.04451 3.74886L0.579941 4.07703C0.325946 4.10149 0.110881 4.28101 0.031427 4.5341C-0.00728901 4.65808 -0.0103006 4.79119 0.0227653 4.91694C0.0558312 5.04269 0.123522 5.15556 0.217452 5.24156L2.83599 7.63752L2.06393 11.186C2.00744 11.4469 2.10447 11.7167 2.31194 11.8732C2.42061 11.9557 2.55156 12.0001 2.68594 12C2.80113 12 2.91416 11.9674 3.01297 11.9056L5.99999 10.0419L8.98648 11.9056C9.09361 11.9725 9.21721 12.0051 9.34193 11.9993C9.46665 11.9936 9.58701 11.9497 9.68806 11.8732C9.89551 11.7167 9.99257 11.4469 9.93608 11.186L9.164 7.63755L11.7825 5.24158C11.8765 5.15559 11.9442 5.04272 11.9772 4.91697C12.0103 4.79122 12.0073 4.6581 11.9686 4.53412V4.5341Z"
                            fill="#FFC107"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    پشتیبانی خیلی خوبی دارن و راحت تونستم استفاده کنم. حتما
                    پیشنهاد میکنم! یکی از بهترین سایت های خرید گیفت کارت توی
                    ایران هست.
                  </p>
                </article>
                <article className="swiper-slide flex flex-col p-4 border-[1px] w-3/5 gap-4 rounded-md flex-shrink-0 md:border-0 md:gap-6">
                  <div className="flex items-center gap-2 text-xs text-lowgray md:gap-4">
                    <img
                      src="../public/assets/images/user.png"
                      className="w-10 h-10 rounded-full md:h-14 md:w-14"
                      alt=""
                    />
                    <div className="flex flex-col gap-2">
                      علیرضا مهران
                      <span>۱۴۰۲/۰۳/۱۶</span>
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M11.9686 4.5341C11.9301 4.41022 11.8576 4.30087 11.7601 4.21961C11.6626 4.13836 11.5443 4.08878 11.4201 4.07703L7.95604 3.74886L6.58704 0.404284C6.48595 0.158559 6.25598 0 5.99999 0C5.74401 0 5.51394 0.158559 5.41351 0.404284L4.04451 3.74886L0.579941 4.07703C0.325946 4.10149 0.110881 4.28101 0.031427 4.5341C-0.00728901 4.65808 -0.0103006 4.79119 0.0227653 4.91694C0.0558312 5.04269 0.123522 5.15556 0.217452 5.24156L2.83599 7.63752L2.06393 11.186C2.00744 11.4469 2.10447 11.7167 2.31194 11.8732C2.42061 11.9557 2.55156 12.0001 2.68594 12C2.80113 12 2.91416 11.9674 3.01297 11.9056L5.99999 10.0419L8.98648 11.9056C9.09361 11.9725 9.21721 12.0051 9.34193 11.9993C9.46665 11.9936 9.58701 11.9497 9.68806 11.8732C9.89551 11.7167 9.99257 11.4469 9.93608 11.186L9.164 7.63755L11.7825 5.24158C11.8765 5.15559 11.9442 5.04272 11.9772 4.91697C12.0103 4.79122 12.0073 4.6581 11.9686 4.53412V4.5341Z"
                            fill="#FFC107"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    پشتیبانی خیلی خوبی دارن و راحت تونستم استفاده کنم. حتما
                    پیشنهاد میکنم! یکی از بهترین سایت های خرید گیفت کارت توی
                    ایران هست.
                  </p>
                </article>
                <article className="swiper-slide flex flex-col p-4 border-[1px] w-3/5 gap-4 rounded-md flex-shrink-0 md:border-0 md:gap-6">
                  <div className="flex items-center gap-2 text-xs text-lowgray md:gap-4">
                    <img
                      src="../public/assets/images/user.png"
                      className="w-10 h-10 rounded-full md:h-14 md:w-14"
                      alt=""
                    />
                    <div className="flex flex-col gap-2">
                      علیرضا مهران
                      <span>۱۴۰۲/۰۳/۱۶</span>
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M11.9686 4.5341C11.9301 4.41022 11.8576 4.30087 11.7601 4.21961C11.6626 4.13836 11.5443 4.08878 11.4201 4.07703L7.95604 3.74886L6.58704 0.404284C6.48595 0.158559 6.25598 0 5.99999 0C5.74401 0 5.51394 0.158559 5.41351 0.404284L4.04451 3.74886L0.579941 4.07703C0.325946 4.10149 0.110881 4.28101 0.031427 4.5341C-0.00728901 4.65808 -0.0103006 4.79119 0.0227653 4.91694C0.0558312 5.04269 0.123522 5.15556 0.217452 5.24156L2.83599 7.63752L2.06393 11.186C2.00744 11.4469 2.10447 11.7167 2.31194 11.8732C2.42061 11.9557 2.55156 12.0001 2.68594 12C2.80113 12 2.91416 11.9674 3.01297 11.9056L5.99999 10.0419L8.98648 11.9056C9.09361 11.9725 9.21721 12.0051 9.34193 11.9993C9.46665 11.9936 9.58701 11.9497 9.68806 11.8732C9.89551 11.7167 9.99257 11.4469 9.93608 11.186L9.164 7.63755L11.7825 5.24158C11.8765 5.15559 11.9442 5.04272 11.9772 4.91697C12.0103 4.79122 12.0073 4.6581 11.9686 4.53412V4.5341Z"
                            fill="#FFC107"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    پشتیبانی خیلی خوبی دارن و راحت تونستم استفاده کنم. حتما
                    پیشنهاد میکنم! یکی از بهترین سایت های خرید گیفت کارت توی
                    ایران هست.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="similar" className="overflow-visible swiper--2">
          <h4 className="mb-8 text-lg font-bold">محصولات مشابه</h4>
          <div className="flex items-center swiper-wrapper md:gap-4">
            <a
              href="#"
              className="flex-shrink-0 w-2/5 p-3 text-center transition-all duration-100 ease-linear bg-white rounded-md swiper-slide md:w-1/4 hover:shadow-md"
            >
              <img
                src="../public/assets/images/product.png"
                className="rounded-md"
                alt=""
              />
              <p className="mt-3 font-medium text-lowgray">نتفلیکس</p>
            </a>
            <a
              href="#"
              className="flex-shrink-0 w-2/5 p-3 text-center transition-all duration-100 ease-linear bg-white rounded-md swiper-slide md:w-1/4 hover:shadow-md"
            >
              <img
                src="../public/assets/images/product.png"
                className="rounded-md"
                alt=""
              />
              <p className="mt-3 font-medium text-lowgray">نتفلیکس</p>
            </a>
            <a
              href="#"
              className="flex-shrink-0 w-2/5 p-3 text-center transition-all duration-100 ease-linear bg-white rounded-md swiper-slide md:w-1/4 hover:shadow-md"
            >
              <img
                src="../public/assets/images/product.png"
                className="rounded-md"
                alt=""
              />
              <p className="mt-3 font-medium text-lowgray">نتفلیکس</p>
            </a>
          </div>
        </section>
      </main>
      <footer className="w-full mt-auto bg-white">
        <div className="grid grid-cols-1 gap-12 p-6 mt-12 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-16 lg:max-w-screen-2xl lg:mx-auto lg:px-12 xl:px-24">
          <div>
            <div className="flex items-center gap-1 mb-8">
              <span className="rounded-full w-7 h-7 bg-primary"></span>
              <a href="#" className="font-bold">
                گیفت کارت
              </a>
            </div>
            <div className="flex flex-col gap-8">
              <span className="flex items-center gap-1 text-sm text-lowgray">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1359_711)">
                      <path
                        d="M23.575 2.4663C23.385 2.29249 23.1523 2.17238 22.9005 2.1183C22.6488 2.06421 22.3873 2.07811 22.1427 2.15857L1.04014 9.11486C0.465026 9.30443 0.0750263 9.8178 0.0465732 10.4226C0.0181669 11.0275 0.358245 11.5752 0.912964 11.818L6.13179 14.1014L7.70637 21.4043C7.77176 21.7076 7.92574 21.9779 8.25195 22.061C8.5819 22.145 8.81501 21.9647 9.0612 21.7804L12.934 18.8805L17.4616 22.5854C17.7253 22.8013 18.0477 22.9139 18.3763 22.9139C18.5355 22.9138 18.6936 22.8875 18.8444 22.8363C19.3209 22.6747 19.6742 22.2858 19.7893 21.796L24.0065 3.86618C24.0653 3.61554 24.0563 3.35377 23.9805 3.10775C23.9046 2.86173 23.7647 2.64033 23.575 2.4663ZM9.39856 15.4098C9.39598 15.4159 9.39345 15.4228 9.39106 15.431L8.51806 18.4811L7.54381 13.9626L14.243 10.2405L9.55925 15.1379C9.48579 15.2152 9.43085 15.3082 9.39856 15.4098ZM9.67564 19.5594L10.0722 18.174L10.4514 16.8489L11.8104 17.961L9.67564 19.5594ZM22.6344 3.54339L18.4173 21.4732C18.4151 21.4821 18.4123 21.4944 18.3917 21.5013C18.3713 21.5083 18.3613 21.5004 18.3543 21.4946L13.4 17.4404L13.3997 17.4401L11.1042 15.5617L18.4788 7.85088C18.5953 7.72901 18.6643 7.56939 18.6732 7.40099C18.6821 7.2326 18.6303 7.06659 18.5273 6.93311C18.4242 6.79962 18.2767 6.7075 18.1116 6.67348C17.9464 6.63946 17.7745 6.6658 17.6271 6.74772L6.70751 12.8147L1.478 10.5266C1.46206 10.5197 1.45329 10.5158 1.45456 10.4888C1.45582 10.462 1.46492 10.4589 1.48142 10.4535L22.584 3.49722C22.5942 3.49389 22.6057 3.49005 22.6227 3.50552C22.6397 3.52108 22.6369 3.53289 22.6344 3.54339Z"
                        fill="#8B8A92"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1359_711">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.0449219 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                پشتیبانی تلگرام: ۰۹۱۲۳۱۷۹۰۶۰
              </span>
              <span className="flex items-center gap-1 text-sm text-lowgray">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1359_707)">
                      <path
                        d="M5.0289 18.0211C5.09879 18.2819 5.22856 18.5344 5.4216 18.7622C5.61464 18.99 5.84001 19.1936 6.11222 19.3691C6.57202 19.6652 7.03892 19.8429 7.52936 19.9056C8.01256 19.9703 8.50868 19.9383 9.01579 19.8024C9.75472 19.6044 10.4978 19.219 11.2358 18.6408C11.9738 18.0625 12.6788 17.3612 13.3435 16.5386C14.0203 15.6974 14.6329 14.8065 15.1762 13.8735C15.7112 12.9397 16.1746 11.9667 16.5626 10.9629C16.9354 9.97791 17.1922 9.02392 17.3206 8.11213C17.447 7.19309 17.4093 6.35685 17.2075 5.60343C17.0755 5.11081 16.8623 4.66321 16.572 4.27513C16.2797 3.87981 15.8957 3.54789 15.4147 3.28854C14.8288 2.95638 14.2615 2.86768 13.7254 3.01132C13.5226 3.06568 13.3314 3.16349 13.1736 3.29896C13.0085 3.43636 12.8768 3.61141 12.7969 3.8347L11.7509 6.65398C11.6691 6.87003 11.6195 7.06189 11.597 7.23874C11.5726 7.40834 11.5771 7.57018 11.614 7.70782C11.6606 7.88169 11.7579 8.04197 11.904 8.18142C12.0428 8.3228 12.227 8.45979 12.4475 8.58707L13.1514 9.01185C13.2525 9.07019 13.3139 9.15466 13.345 9.27057C13.3605 9.32853 13.3668 9.38118 13.3679 9.44302C13.3617 9.5068 13.3516 9.55609 13.3487 9.60343C13.2824 9.87744 13.1413 10.2491 12.9235 10.7112C12.6984 11.1753 12.4536 11.6524 12.1797 12.1373C11.8914 12.6261 11.6098 13.082 11.3132 13.5109C11.0219 13.9306 10.7686 14.2314 10.5573 14.4278C10.5249 14.452 10.4873 14.4854 10.4424 14.5207C10.3903 14.558 10.3343 14.5807 10.2691 14.5982C10.1459 14.6312 10.0401 14.613 9.93903 14.5546L9.24287 14.1588C9.01323 14.0263 8.80248 13.9352 8.61256 13.8929C8.41876 13.8361 8.23855 13.8301 8.05744 13.8786C7.9198 13.9155 7.78267 13.9833 7.64077 14.0912C7.49886 14.1991 7.35747 14.3379 7.20936 14.5096L5.26762 16.8546C5.1142 17.0354 5.02457 17.2225 4.99341 17.425C4.96949 17.6255 4.97455 17.8182 5.0289 18.0211Z"
                        stroke="#8B8A92"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1359_707">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="matrix(-0.965926 0.258819 0.258819 0.965926 17.3867 0.477295)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                تلفن پشتیبانی: ۹۰۰۰۰۲۰۰
              </span>
            </div>
          </div>
          <div className="flex row-span-2 gap-32 lg:justify-around lg:gap-0">
            <div className="flex flex-col gap-6">
              <span className="font-medium">خدمات:</span>
              <ul className="flex flex-col gap-4 text-lowgray font-sm lg:gap-6">
                <li>
                  <a href="#">خانه</a>
                </li>
                <li>
                  <a href="#">خانه</a>
                </li>
                <li>
                  <a href="#">خانه</a>
                </li>
                <li>
                  <a href="#">خانه</a>
                </li>
                <li>
                  <a href="#">خانه</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <span className="font-medium">دسترسی سریع:</span>
              <ul className="flex flex-col gap-4 text-lowgray font-sm lg:gap-6">
                <li>
                  <a href="#">خانه</a>
                </li>
                <li>
                  <a href="#">خانه</a>
                </li>
                <li>
                  <a href="#">خانه</a>
                </li>
                <li>
                  <a href="#">خانه</a>
                </li>
                <li>
                  <a href="#">خانه</a>
                </li>
              </ul>
            </div>
          </div>
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
          <div className="flex flex-col items-center justify-center gap-6 lg:order-2">
            <p className="hidden font-medium lg:block">
              ما را در شبکه های اجتماعی دنبال کنید:
            </p>
            <div className="flex items-center justify-center gap-8 lg:order-2">
              <a
                href="#"
                className="bg-[#F3F3F3] rounded-full h-12 w-12 flex justify-center items-center"
              >
                <i>
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6 1.89999C18.9 2.19999 18.1 2.4 17.3 2.5C18.1 2 18.8 1.2 19.1 0.300003C18.3 0.800003 17.5 1.1 16.5 1.3C15.8 0.500003 14.7 0 13.6 0C11.4 0 9.59999 1.8 9.59999 4C9.59999 4.3 9.6 4.59999 9.7 4.89999C6.4 4.69999 3.39999 3.1 1.39999 0.699997C1.09999 1.3 0.899994 2 0.899994 2.7C0.899994 4.1 1.6 5.3 2.7 6C2 6 1.39999 5.8 0.899994 5.5C0.899994 7.4 2.29999 9.09999 4.09999 9.39999C3.79999 9.49999 3.4 9.5 3 9.5C2.7 9.5 2.5 9.49999 2.2 9.39999C2.7 11 4.2 12.2 6 12.2C4.6 13.3 2.9 13.9 1 13.9C0.7 13.9 0.4 13.9 0 13.8C1.8 14.9 3.9 15.6 6.2 15.6C13.6 15.6 17.6 9.5 17.6 4.2V3.7C18.4 3.4 19.1 2.69999 19.6 1.89999Z"
                      fill="#62666D"
                    />
                  </svg>
                </i>
              </a>
              <a
                href="#"
                className="bg-[#F3F3F3] rounded-full h-12 w-12 flex justify-center items-center"
              >
                <i>
                  <svg
                    width="12"
                    height="23"
                    viewBox="0 0 12 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65708 12.3648H11.3793L11.9637 8.56055H7.65632V6.48134C7.65632 4.90099 8.16957 3.49962 9.63891 3.49962H12V0.179741C11.5852 0.123382 10.7078 0 9.04996 0C5.58819 0 3.55867 1.8393 3.55867 6.0297V8.56055H0V12.3648H3.55867V22.821C4.26344 22.9276 4.97729 23 5.71007 23C6.37245 23 7.01893 22.9391 7.65708 22.8522V12.3648Z"
                      fill="#7A7A7A"
                    />
                  </svg>
                </i>
              </a>
              <a
                href="#"
                className="bg-[#F3F3F3] rounded-full h-12 w-12 flex justify-center items-center"
              >
                <i>
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.29766 0.377799C7.69509 -0.171138 5.69057 0.311056 4.48846 1.17571C4.44722 1.01447 4.30023 0.894489 4.1255 0.894489H0.375933C0.168957 0.894489 0.000976562 1.06247 0.000976562 1.26945V12.5181C0.000976562 12.7251 0.168957 12.8931 0.375933 12.8931H4.1255C4.33248 12.8931 4.50046 12.7251 4.50046 12.5181V4.43408C5.10639 3.91214 5.88705 3.74566 6.52598 4.01713C7.14541 4.27885 7.50011 4.91777 7.50011 5.76892V12.5181C7.50011 12.7251 7.6681 12.8931 7.87507 12.8931H11.6246C11.8316 12.8931 11.9996 12.7251 11.9996 12.5181V5.01376C11.9569 1.93237 10.5073 0.791751 9.29766 0.377799Z"
                      fill="#7A7A7A"
                    />
                  </svg>
                </i>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-16 lg:order-4">
            <a href="#">
              <img src="../public/assets/images/cert1.png" alt="" />
            </a>
            <a href="#">
              <img src="../public/assets/images/cert2.png" alt="" />
            </a>
            <a href="#">
              <img src="../public/assets/images/cert3.png" alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Detail;
