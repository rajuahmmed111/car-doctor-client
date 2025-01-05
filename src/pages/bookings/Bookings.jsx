import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (<div>
    <h3 className="text-3xl"> Your Bookings: {bookings.length}</h3>
  </div>);
};

export default Bookings;
