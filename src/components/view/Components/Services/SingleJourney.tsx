"use client";
import React from "react";

type Props = {
  data: any;
};
const SingleJourney = ({ data }: Props) => {
  const { bookedSit, bus } = data;
  const { totalSit } = bus;
  const availableSit = totalSit - bookedSit;
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 m-2 mx-auto">
        <h2 className="text-xl font-bold mb-2 text-center">Schedule Details</h2>

        <div className="flex flex-row space-x-2">
          <div className="w-1/2">
            <p>
              <strong>Start Date:</strong> {data.startDate}
            </p>
            <p>
              <strong>End Date:</strong> {data.endDate}
            </p>
            <p>
              <strong>Start Time:</strong> {data.startTime}
            </p>
            <p>
              <strong>End Time:</strong> {data.endTime}
            </p>
          </div>

          <div className="w-1/2">
            <p>
              <strong>Starting Point:</strong> {data.startingPoint}
            </p>
            <p>
              <strong>End Point:</strong> {data.endPoint}
            </p>
            <p>
              <strong>Day of the Week:</strong> {data.dayOfWeek}
            </p>
            <p>
              <strong>Available Seats:</strong> {availableSit}
            </p>
          </div>
        </div>

        <p>
          <strong>Bus Fare:</strong> {data.busFare}
        </p>
        <p>
          <strong>Status:</strong> {data.status}
        </p>
      </div>
    </div>
  );
};
export default SingleJourney;
