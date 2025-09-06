import CardBlog from "@/components/elements/CardBlog";

function Cards({ list }) {
  return (
    <section
      id="all-blog"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4"
    >
      {list.map((item, idx) => (
        <CardBlog data={item} key={idx} />
      ))}
    </section>
  );
}

export default Cards;
