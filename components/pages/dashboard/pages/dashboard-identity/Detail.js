function Detail({ stats }) {
  return (
    <div className="hidden items-center text-xs lg:flex justify-around mb-4 bg-white p-4 rounded-md border">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-gray-500">کارت‌های بانکی</p>
        <p className="font-semibold">{stats?.totalCards || 0} کارت</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-gray-500">شبا‌های بانکی</p>
        <p className="font-semibold">{stats?.totalSheba || 0} شبا</p>
      </div>
    </div>
  );
}

export default Detail;
