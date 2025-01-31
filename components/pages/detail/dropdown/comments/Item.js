import Image from "next/image";
import React from "react";

function Item({ data }) {
  return (
    <article className="swiper-slide flex flex-col p-4 border-[1px] w-3/5 gap-4 rounded-md flex-shrink-0 md:border-0 md:gap-6">
      <div className="flex items-center gap-2 text-xs text-lowgray md:gap-4">
        <Image
          src={data.img}
          className="w-10 h-10 rounded-full md:h-14 md:w-14"
          alt=""
        />
        <div className="flex flex-col gap-2">
          {data.name}
          <span>{data.date}</span>
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
      <p className="text-sm leading-relaxed">{data.text}</p>
    </article>
  );
}

export default Item;
