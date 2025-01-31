import CardBlog from "@/components/elements/CardBlog";

function MostView() {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
      {list.map((item, idx) => (
        <CardBlog data={item} key={idx} />
      ))}
    </div>
  );
}

export default MostView;
