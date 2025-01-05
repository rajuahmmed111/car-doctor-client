/* eslint-disable react/prop-types */
const BookingsRow = ({
  booking,
  isSelected,
  handleDelete,
  handleBookingConfirm,
}) => {
  const { _id, name, title, email, date, img, price, status } = booking;

  return (
    <tr
      className={`hover:bg-gray-50 ${
        isSelected ? "bg-gray-200" : ""
      } text-sm md:text-base`}
    >
      <td className="p-2">
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>

      <td className="p-2">
        <div className="avatar">
          <div className="w-16 rounded-full border border-gray-200 mx-auto">
            {img && <img src={img} alt="Booking" />}
          </div>
        </div>
      </td>
      <td className="p-2">{name}</td>
      <td className="p-2 break-all">{email}</td>
      <td className="p-2">{title}</td>
      <td className="p-2">{date}</td>
      <td className="p-2">${price}</td>
      <td className="p-2">
        {status === "confirm" ? (
          <span className="font-bold">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-xs bg-[#FF3811] text-white hover:bg-[#FF3811] hover:shadow-md"
          >
            Confirm
          </button>
        )}
      </td>
    </tr>
  );
};

export default BookingsRow;
