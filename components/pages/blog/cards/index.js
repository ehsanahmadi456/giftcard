import React from "react";
import CardBlog from "@/components/elements/CardBlog";

function Cards() {
  const list = [
    {
      head: "بررسی ایکس باکس سری اس مایکروسافت",
      detail:
        "مایکروسافت با ایکس باکس سری اس، می‌خواهد تجربه‌ی نسل نهم کنسول‌های بازی را در ازای پرداخت مبلغ...",
      date: " ۱۴۰۲/۰۳/۱۶",
      view: "۱۶۲",
    },
    {
      head: "بررسی ایکس باکس سری اس مایکروسافت",
      detail:
        "مایکروسافت با ایکس باکس سری اس، می‌خواهد تجربه‌ی نسل نهم کنسول‌های بازی را در ازای پرداخت مبلغ...",
      date: " ۱۴۰۲/۰۳/۱۶",
      view: "۱۶۲",
    },
    {
      head: "بررسی ایکس باکس سری اس مایکروسافت",
      detail:
        "مایکروسافت با ایکس باکس سری اس، می‌خواهد تجربه‌ی نسل نهم کنسول‌های بازی را در ازای پرداخت مبلغ...",
      date: " ۱۴۰۲/۰۳/۱۶",
      view: "۱۶۲",
    },
  ];

  return (
    <section
      id="all-blog"
      className="grid grid-cols-1 p-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:px-12 xl:px-24"
    >
      {list.map((item, idx) => (
        <CardBlog data={item} key={idx} />
      ))}
    </section>
  );
}

export default Cards;
