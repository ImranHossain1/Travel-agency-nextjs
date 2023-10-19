"use client";
import { cancelAllPendingBookings } from "@/services/booking/cancelled-pending-booking";
import { useState } from "react";

function BookingCancellationComponent() {
  const [cancellationSuccess, setCancellationSuccess] = useState(false);

  const handleCancelPendingBookings = async () => {
    await cancelAllPendingBookings();
  };

  return (
    <div>
      {cancellationSuccess && (
        <div className="alert alert-success">
          All pending bookings have been cancelled successfully.
        </div>
      )}
      <button
        onClick={handleCancelPendingBookings}
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
      >
        Cancel All Pending Bookings
      </button>
    </div>
  );
}

export default BookingCancellationComponent;
