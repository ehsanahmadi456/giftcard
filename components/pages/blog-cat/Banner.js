function Banner({ data = [] }) {
  if (!Array.isArray(data)) return null;

  return (
    <section className="w-full mb-12 max-w-screen-2xl lg:px-12 xl:px-24 mx-auto mt-6 lg:grid grid-cols-4 grid-rows-2 gap-4 rounded-lg text-white lg:h-80 xl:h-96 2xl:h-[430px]">
      {data.map((cat, idx) => (
        <div
          key={cat.id || idx}
          className="relative overflow-hidden rounded-lg block z-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-slate-800 before:from-10% before:opacity-60 before:z-[-5]"
          style={{ backgroundImage: `url('/assets/images/blog.png')` }}
        >
          <p className="absolute font-medium bottom-4 right-4">{cat.name}</p>
        </div>
      ))}
    </section>
  );
}

export default Banner;
