import { FaCheckCircle, FaCircle, FaClock, FaCreditCard, FaEdit, FaTrash } from "react-icons/fa";

function formatCardNumber(cardNumber) {
    if (!cardNumber) return "-";
    const str = cardNumber.toString();
    return str.replace(/(\d{4})(?=\d)/g, "$1-");
  }
  

function CardItem({ data, onEdit, onDelete }) {
    const getStatusIcon = (status) => {
      switch(status) {
        case 'y':
          return <FaCheckCircle className="w-5 h-5 text-green-500" title="تایید شده" />;
        case 'p':
          return <FaClock className="w-5 h-5 text-yellow-500" title="در انتظار تایید" />;
        case 'n':
          return <FaCircle className="w-5 h-5 text-red-500" title="تایید نشده" />;
        default:
          return null;
      }
    };
  
    const getStatusText = (status) => {
      switch(status) {
        case 'y': return 'تایید شده';
        case 'p': return 'در انتظار تایید';
        case 'n': return 'تایید نشده';
        default: return '-';
      }
    };
  
    return (
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 border-b last:border-none hover:bg-gray-50">
        <div className="w-full md:w-1/12 font-bold md:text-center">{data.id}</div>
        <div className="w-full md:w-2/12 flex items-center gap-2">
          <FaCreditCard className="w-5 h-5 text-blue-600" />
          <span>{data.name}</span>
        </div>
        <div className="w-full md:w-3/12 font-mono text-sm">{formatCardNumber(data.kart)}</div>
        <div className="w-full md:w-3/12 font-mono text-xs bg-gray-100 p-2 rounded">
          {data.sheba || '-'}
        </div>
        <div className="w-full md:w-2/12 flex items-center gap-2">
          {getStatusIcon(data.status)}
          <span className="text-sm">{getStatusText(data.status)}</span>
        </div>
        <div className="w-full md:w-1/12 flex gap-2 justify-end">
          {data.status !== 'y' && (
            <button
              onClick={() => onEdit(data)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded"
              title="ویرایش"
            >
              <FaEdit className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => onDelete(data.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded"
            title="حذف"
          >
            <FaTrash className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  export default CardItem