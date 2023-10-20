"use client";
import { confirmAllPendingBookings } from "@/services/booking/confirm-pending-booking";
import { useState } from "react";

function BookingConfirmationComponent() {
  const [confirmSuccess, setConfirmSuccess] = useState(false);

  const handleConfirmPendingBookings = async () => {
    await confirmAllPendingBookings();
  };

  return (
    <div>
      {confirmSuccess && (
        <div className="alert alert-success">
          All pending bookings have been Confirm successfully.
        </div>
      )}
      <button
        onClick={handleConfirmPendingBookings}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-5"
      >
        Confirm All Pending Bookings
      </button>
    </div>
  );
}

export default BookingConfirmationComponent;
