"use client";

import { useState } from "react";

function Item({ title, detail }) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`group flex flex-col p-4 gap-4 border-[1px] rounded-md cursor-pointer
      ${active ? "active" : ""}`}
    >
      <div className="flex items-center gap-2 action-button">
        <i className="group-[.active]:block hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.6668 12.4905H8.3335"
              stroke="#786AC2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.6857 2.5H7.31429C4.04762 2.5 2 4.81208 2 8.08516V16.9148C2 20.1879 4.0381 22.5 7.31429 22.5H16.6857C19.9619 22.5 22 20.1879 22 16.9148V8.08516C22 4.81208 19.9619 2.5 16.6857 2.5Z"
              stroke="#786AC2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </i>
        <i className="group-[.active]:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.0001 8.82727V16.1536"
              stroke="#786AC2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6668 12.4905H8.3335"
              stroke="#786AC2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.6857 2.5H7.31429C4.04762 2.5 2 4.81208 2 8.08516V16.9148C2 20.1879 4.0381 22.5 7.31429 22.5H16.6857C19.9619 22.5 22 20.1879 22 16.9148V8.08516C22 4.81208 19.9619 2.5 16.6857 2.5Z"
              stroke="#786AC2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </i>
        <h6>{title}</h6>
      </div>
      <p className="hidden text-lowgray text-sm group-[.active]:block">
        {detail}
      </p>
    </div>
  );
}

export default Item;
