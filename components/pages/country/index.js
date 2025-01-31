import CountryImg from "@/public/assets/images/country.png";
import Card from "./Card";

function CountryPage() {
  const list = [
    { name: "گیفت کارت اپل آمریکا", img: CountryImg },
    { name: "گیفت کارت اپل آمریکا", img: CountryImg },
    { name: "گیفت کارت اپل آمریکا", img: CountryImg },
    { name: "گیفت کارت اپل آمریکا", img: CountryImg },
    { name: "گیفت کارت اپل آمریکا", img: CountryImg },
    { name: "گیفت کارت اپل آمریکا", img: CountryImg },
  ];

  return (
    <main className="w-full p-6 mx-auto max-w-screen-2xl lg:px-12 xl:px-24">
      <section className="grid justify-center w-full max-w-md grid-cols-1 gap-8 mx-auto mt-16 mb-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:max-w-xl lg:max-w-full">
        <h4 className="text-lg font-bold md:col-span-full">
          کشور مورد نظر را انتخاب کنید:
        </h4>
        {list.map((item, idx) => (
          <Card data={item} key={idx} />
        ))}
      </section>
    </main>
  );
}

export default CountryPage;
