import Blog from "@/public/assets/images/blog.png";
import Image from "next/image";

function Left() {
  return (
    <article className="flex flex-col max-w-lg gap-6 mx-auto lg:flex-row lg:row-span-1 lg:max-w-none">
      <Image
        src={Blog}
        className="rounded-lg w-fit lg:w[160px] lg:h-[140px]"
        alt=""
      />
      <div className="flex flex-col gap-6">
        <h6 className="font-medium">بررسی ایکس باکس سری اس مایکروسافت</h6>
        <div className="flex justify-between lg:flex-col lg:gap-6">
          <div className="flex gap-4">
            <span className="flex items-center justify-center gap-1 text-sm text-lowgray">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 6.25C7.59 6.25 7.25 5.91 7.25 5.5V2.5C7.25 2.09 7.59 1.75 8 1.75C8.41 1.75 8.75 2.09 8.75 2.5V5.5C8.75 5.91 8.41 6.25 8 6.25Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M16 6.25C15.59 6.25 15.25 5.91 15.25 5.5V2.5C15.25 2.09 15.59 1.75 16 1.75C16.41 1.75 16.75 2.09 16.75 2.5V5.5C16.75 5.91 16.41 6.25 16 6.25Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M8.5 15C8.37 15 8.24 14.97 8.12 14.92C7.99 14.87 7.89 14.8 7.79 14.71C7.61 14.52 7.5 14.27 7.5 14C7.5 13.87 7.53 13.74 7.58 13.62C7.63 13.5 7.7 13.39 7.79 13.29C7.89 13.2 7.99 13.13 8.12 13.08C8.48 12.93 8.93 13.01 9.21 13.29C9.39 13.48 9.5 13.74 9.5 14C9.5 14.06 9.49 14.13 9.48 14.2C9.47 14.26 9.45 14.32 9.42 14.38C9.4 14.44 9.37 14.5 9.33 14.56C9.3 14.61 9.25 14.66 9.21 14.71C9.02 14.89 8.76 15 8.5 15Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M12 15C11.87 15 11.74 14.97 11.62 14.92C11.49 14.87 11.39 14.8 11.29 14.71C11.11 14.52 11 14.27 11 14C11 13.87 11.03 13.74 11.08 13.62C11.13 13.5 11.2 13.39 11.29 13.29C11.39 13.2 11.49 13.13 11.62 13.08C11.98 12.92 12.43 13.01 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.06 12.99 14.13 12.98 14.2C12.97 14.26 12.95 14.32 12.92 14.38C12.9 14.44 12.87 14.5 12.83 14.56C12.8 14.61 12.75 14.66 12.71 14.71C12.52 14.89 12.26 15 12 15Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M15.5 15C15.37 15 15.24 14.97 15.12 14.92C14.99 14.87 14.89 14.8 14.79 14.71C14.75 14.66 14.71 14.61 14.67 14.56C14.63 14.5 14.6 14.44 14.58 14.38C14.55 14.32 14.53 14.26 14.52 14.2C14.51 14.13 14.5 14.06 14.5 14C14.5 13.74 14.61 13.48 14.79 13.29C14.89 13.2 14.99 13.13 15.12 13.08C15.49 12.92 15.93 13.01 16.21 13.29C16.39 13.48 16.5 13.74 16.5 14C16.5 14.06 16.49 14.13 16.48 14.2C16.47 14.26 16.45 14.32 16.42 14.38C16.4 14.44 16.37 14.5 16.33 14.56C16.3 14.61 16.25 14.66 16.21 14.71C16.02 14.89 15.76 15 15.5 15Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M8.5 18.5C8.37 18.5 8.24 18.47 8.12 18.42C8 18.37 7.89 18.3 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.37 7.53 17.24 7.58 17.12C7.63 16.99 7.7 16.88 7.79 16.79C8.16 16.42 8.84 16.42 9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21C9.02 18.39 8.76 18.5 8.5 18.5Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M12 18.5C11.74 18.5 11.48 18.39 11.29 18.21C11.11 18.02 11 17.76 11 17.5C11 17.37 11.03 17.24 11.08 17.12C11.13 16.99 11.2 16.88 11.29 16.79C11.66 16.42 12.34 16.42 12.71 16.79C12.8 16.88 12.87 16.99 12.92 17.12C12.97 17.24 13 17.37 13 17.5C13 17.76 12.89 18.02 12.71 18.21C12.52 18.39 12.26 18.5 12 18.5Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M15.5 18.5C15.24 18.5 14.98 18.39 14.79 18.21C14.7 18.12 14.63 18.01 14.58 17.88C14.53 17.76 14.5 17.63 14.5 17.5C14.5 17.37 14.53 17.24 14.58 17.12C14.63 16.99 14.7 16.88 14.79 16.79C15.02 16.56 15.37 16.45 15.69 16.52C15.76 16.53 15.82 16.55 15.88 16.58C15.94 16.6 16 16.63 16.06 16.67C16.11 16.7 16.16 16.75 16.21 16.79C16.39 16.98 16.5 17.24 16.5 17.5C16.5 17.76 16.39 18.02 16.21 18.21C16.02 18.39 15.76 18.5 15.5 18.5Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M20.5 10.34H3.5C3.09 10.34 2.75 9.99997 2.75 9.58997C2.75 9.17997 3.09 8.83997 3.5 8.83997H20.5C20.91 8.83997 21.25 9.17997 21.25 9.58997C21.25 9.99997 20.91 10.34 20.5 10.34Z"
                    fill="#ACACAC"
                  />
                  <path
                    d="M16 23.25H8C4.35 23.25 2.25 21.15 2.25 17.5V9C2.25 5.35 4.35 3.25 8 3.25H16C19.65 3.25 21.75 5.35 21.75 9V17.5C21.75 21.15 19.65 23.25 16 23.25ZM8 4.75C5.14 4.75 3.75 6.14 3.75 9V17.5C3.75 20.36 5.14 21.75 8 21.75H16C18.86 21.75 20.25 20.36 20.25 17.5V9C20.25 6.14 18.86 4.75 16 4.75H8Z"
                    fill="#ACACAC"
                  />
                </svg>
              </i>
              ۱۴۰۲/۰۳/۱۶
            </span>
            <span className="flex items-center justify-center gap-1 text-sm text-lowgray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.9999 16.83C9.60992 16.83 7.66992 14.89 7.66992 12.5C7.66992 10.11 9.60992 8.16998 11.9999 8.16998C14.3899 8.16998 16.3299 10.11 16.3299 12.5C16.3299 14.89 14.3899 16.83 11.9999 16.83ZM11.9999 9.66998C10.4399 9.66998 9.16992 10.94 9.16992 12.5C9.16992 14.06 10.4399 15.33 11.9999 15.33C13.5599 15.33 14.8299 14.06 14.8299 12.5C14.8299 10.94 13.5599 9.66998 11.9999 9.66998Z"
                  fill="#ACACAC"
                />
                <path
                  d="M12.0001 21.52C8.24008 21.52 4.69008 19.32 2.25008 15.5C1.19008 13.85 1.19008 11.16 2.25008 9.49998C4.70008 5.67998 8.25008 3.47998 12.0001 3.47998C15.7501 3.47998 19.3001 5.67998 21.7401 9.49998C22.8001 11.15 22.8001 13.84 21.7401 15.5C19.3001 19.32 15.7501 21.52 12.0001 21.52ZM12.0001 4.97998C8.77008 4.97998 5.68008 6.91998 3.52008 10.31C2.77008 11.48 2.77008 13.52 3.52008 14.69C5.68008 18.08 8.77008 20.02 12.0001 20.02C15.2301 20.02 18.3201 18.08 20.4801 14.69C21.2301 13.52 21.2301 11.48 20.4801 10.31C18.3201 6.91998 15.2301 4.97998 12.0001 4.97998Z"
                  fill="#ACACAC"
                />
              </svg>
              ۱۶۲ بازدید
            </span>
          </div>
          <a
            href="#"
            className="flex items-center justify-center text-primary lg:justify-start"
          >
            متن کامل
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
          </a>
        </div>
      </div>
    </article>
  );
}

export default Left;
