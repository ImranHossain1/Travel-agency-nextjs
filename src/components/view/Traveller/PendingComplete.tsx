"use client";
import React, { useState } from "react";
import { Button } from "antd";
import { authOptions } from "@/app/lib/AuthOptions";
import { getServerSession } from "next-auth";

const PendingComplete = () => {
  const [isComplete, setIsComplete] = useState(false);

  const handleCompleteBooking = async () => {
    const session: any = await getServerSession(authOptions);
    const { accessToken } = session;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/booking/complete-booking`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
          },
        }
      );

      if (response.ok) {
        setIsComplete(true);
        // You can perform further actions upon successful completion
      } else {
        // Handle error scenarios
        console.error("Failed to complete booking");
      }
    } catch (error) {
      console.error("Error while completing booking:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "10px",
      }}
    >
      <Button
        type="primary"
        onClick={handleCompleteBooking}
        disabled={isComplete}
      >
        Complete Booking
      </Button>
    </div>
  );
};

export default PendingComplete;
