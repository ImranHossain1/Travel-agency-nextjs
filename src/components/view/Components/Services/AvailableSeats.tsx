"use client";
import { createBookings } from "@/services/booking/create-bookings";
import React, { useState } from "react";
import { message } from "antd";

interface Seat {
  id: string;
  sitNumber: string;
  busId: string;
  createdAt: string;
  updatedAt: string;
}

interface AvailableSeatsProps {
  availableSeats: Seat[];
  busScheduleId: string;
}

const AvailableSeats: React.FC<AvailableSeatsProps> = ({
  availableSeats,
  busScheduleId,
}) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleAddSeat = () => {
    setSelectedSeats([...selectedSeats, ""]);
  };

  const handleSeatChange = (index: number, seatNumber: string) => {
    const updatedSelectedSeats = [...selectedSeats];
    updatedSelectedSeats[index] = seatNumber;
    setSelectedSeats(updatedSelectedSeats);
  };

  const handleDeleteSeat = (index: number) => {
    const updatedSelectedSeats = [...selectedSeats];
    updatedSelectedSeats.splice(index, 1);
    setSelectedSeats(updatedSelectedSeats);
  };

  const availableSeatsToRender = availableSeats.filter(
    (seat) => !selectedSeats.includes(seat.sitNumber)
  );

  const canSubmit = selectedSeats.length > 0;

  const handleSubmit = async () => {
    if (!canSubmit) {
      // Show an error message if no seats are selected
      message.error("Please select at least one seat before submitting.");
      return;
    }

    const selectedSeatIds = selectedSeats.map((seatNumber) => {
      const selectedSeat = availableSeats.find(
        (seat) => seat.sitNumber === seatNumber
      );
      return { bus_SitId: selectedSeat ? selectedSeat.id : "" };
    });

    try {
      const response = await createBookings({
        sits: selectedSeatIds,
        busScheduleId: busScheduleId,
      });
      // Handle the response as needed
      message.success("Booking confirmed. Please complete your payment!");
    } catch (error) {
      message.error("Please Sign in!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Available Seats</h2>
      <form className="space-y-4">
        {selectedSeats.map((seatNumber, index) => (
          <div key={index} className="space-y-2">
            <label className="text-sm font-medium">
              Select Seat {index + 1}:
            </label>
            <select
              value={seatNumber}
              onChange={(e) => handleSeatChange(index, e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">-- Select a seat --</option>
              {availableSeatsToRender.map((seat) => (
                <option key={seat.id} value={seat.sitNumber}>
                  {seat.sitNumber}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => handleDeleteSeat(index)}
              className="text-red-500 hover-text-red-700 cursor-pointer mt-2"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddSeat}
          className="px-4 py-2 bg-blue-500 text-white rounded hover-bg-blue-600"
        >
          Add Seat
        </button>
        {canSubmit && (
          <button
            type="button"
            onClick={handleSubmit}
            style={{ marginTop: "16px" }}
            className="px-4 py-2 bg-green-500 text-white rounded hover-bg-green-600"
          >
            Submit Booking
          </button>
        )}
      </form>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Selected Seats:</h3>
        <ul className="list-disc pl-6">
          {selectedSeats.map((seatNumber, index) => (
            <li key={index} className="text-base">
              Seat {index + 1}: {seatNumber}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AvailableSeats;
