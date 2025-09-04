import { useState } from "react";

function Item({ data }) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={(e) => {
        console.log(e);
        console.log(e.target);

        e &&
          e.target &&
          e.target.className &&
          e.target.className.includes &&
          e.target.className.includes("open") &&
          setActive(!active);
      }}
      className={`${data.class} ${active ? "active" : ""}`}
    >
      <div className="cursor-pointer flex items-center justify-between open">
        <h6 className="text-lg font-medium text-lowgray open">{data.head}</h6>
        <span
          className="cursor-pointer action-button open"
          onClick={() => setActive(!active)}
        >
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
      {data.description}
    </div>
  );
}

export default Item;
