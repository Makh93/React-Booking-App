import { FaUserAlt, FaUserFriends } from "react-icons/fa";
import "../Components/booking.css";
import React, { useState } from "react";

export default function Booking() {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const [guests, setGuests] = useState(0);

 

  return (
    <div className="Booking">
      <div className="calendar">
        <h4>CHECK-IN </h4>
        <input
          style={{
            padding: "10px",
            border: "none",
            fontSize: "20px",
            fontweight: "400",
          }}
          type="date"
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>
      <div className="calendar">
        <h4>CHECK-OUT </h4>
        <input
          style={{
            padding: "10px",
            border: "none",
            fontSize: "20px",
            fontWeight: "400",
          }}
          type="date"
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>

      <div className="calendar">
        <h4>
          Guests <FaUserAlt />{" "}
        </h4>
        <input
          on
          style={{
            padding: "10px",
            border: "none",
            fontSize: "20px",
            fontWeight: "400",
            width: "100px",
          }}
          type="number"
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <div className="calendar">
        <h4>
          Children <FaUserFriends />
        </h4>
        <input
          style={{
            padding: "10px",
            border: "none",
            fontSize: "20px",
            fontWeight: "400",
            width: "100px",
          }}
          type="number"
        />
      </div>

      {/*<button   onClick= {handleAvailability}className='check'>Check Availability</button>*/}

      {guests === 0 ? (
        <div className="availability">
          <p>Check Availability</p>
        </div>
      ) : guests > 2 ? (
        <div className="availability">
          <p>
            Apartments are the best Choice for a Family trip. Proceed to our
            Page <b>'Rooms'</b>.
          </p>
        </div>
      ) : (
        <div className="availability">
          <p>
            A room with view Lake will be available from {checkInDate} to{" "}
            {checkOutDate}
          </p>
        </div>
      )}
    </div>
  );
}
