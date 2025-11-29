function CallForm({ data, isLoading }) {
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
      <h4 className="font-bold">اطلاعات تماس</h4>
      <div className="flex flex-wrap justify-between gap-2 mt-4 border-b pb-4">
        <span className="text-gray-500 w-1/2">شماره تلفن ثابت:</span>
        <p className="order-2 w-1/2 flex items-center gap-2">
          {data?.landline || '-'}
          {data?.landline_verify === 'y' && <CheckCircle className="w-4 h-4 text-green-500" />}
        </p>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-2 mt-4 border-b last:border-none pb-4">
        <span className="text-gray-500 w-1/2 lg:w-auto">شماره تلفن همراه:</span>
        <p className="order-2 w-1/2 lg:w-auto lg:order-1 flex items-center gap-2">
          {data?.mobile || '-'}
          {data?.mobile_verify === 'y' && <CheckCircle className="w-4 h-4 text-green-500" />}
        </p>
      </div>
    </div>
  );
}

export default CallForm;