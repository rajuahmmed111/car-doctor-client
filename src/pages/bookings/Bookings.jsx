import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingsRow from "./BookingsRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [selectedBookings, setSelectedBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allBookingIds = bookings.map((booking) => booking._id);
      setSelectedBookings(allBookingIds);
    } else {
      setSelectedBookings([]);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 px-4">
      <h3 className="text-2xl font-bold text-center text-[#FF3811] mb-6">
        My Bookings: {bookings.length}
      </h3>

      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="table-auto w-full text-center border border-gray-200">
          {/* Table Head */}
          <thead className="bg-[#FF3811] text-white">
            <tr>
              <th className="p-2">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox bg-white"
                    onChange={handleSelectAll}
                    checked={
                      bookings.length > 0 &&
                      selectedBookings.length === bookings.length
                    }
                  />
                </label>
              </th>
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Title</th>
              <th className="p-2">Date</th>
              <th className="p-2">Price</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {bookings.map((booking) => (
              <BookingsRow
                key={booking._id}
                booking={booking}
                isSelected={selectedBookings.includes(booking._id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
