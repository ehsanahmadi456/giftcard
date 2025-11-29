function Personal({ data, isLoading }) {
  if (isLoading) {
    return (
      <div className="text-sm bg-white px-8 py-4 rounded-md lg:border">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-sm bg-white px-8 py-4 rounded-md lg:border">
      <h4 className="font-bold">اطلاعات شخصی</h4>
      <div className="flex flex-wrap justify-between gap-2 mt-4 border-b pb-4">
        <span className="text-gray-500 w-1/2">نام و نام خانوادگی:</span>
        <p className="order-2 w-1/2">{data?.name || '-'}</p>
      </div>
      <div className="flex flex-wrap justify-between gap-2 mt-4 border-b last:border-none pb-4">
        <span className="text-gray-500 w-1/2">ایمیل</span>
        <p className="order-2 w-1/2 flex items-center gap-2">
          {data?.email || '-'}
        </p>
      </div>
    </div>
  );
}

export default Personal;
