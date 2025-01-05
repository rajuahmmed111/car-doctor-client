import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingsRow from "./BookingsRow";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [selectedBookings, setSelectedBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }, []);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allBookingIds = bookings.map((booking) => booking._id);
      setSelectedBookings(allBookingIds);
    } else {
      setSelectedBookings([]);
    }
  };

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete this booking?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);

            // Show a toast notification
            toast.success("Booking deleted successfully!");
          }
        })
        .catch(() => {
          // Show an error toast if something goes wrong
          toast.error("Failed to delete the booking. Please try again.");
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}/confirm`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updated = bookings.map((booking) =>
            booking._id === id ? { ...booking, confirmed: true } : booking
          );
          setBookings(updated);

          // Show a toast notification
          toast.success("Booking confirmed successfully!");
        }
      })
      .catch(() => {
        // Show an error toast if something goes wrong
        toast.error("Failed to confirm the booking. Please try again.");
      });
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
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Bookings;
