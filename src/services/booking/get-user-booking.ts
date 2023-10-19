"use server";

import { authOptions } from "@/app/lib/AuthOptions";
import { Bus } from "@/interfaces/bus.interfaces";
import { PendingBooking } from "@/interfaces/pending.booking";
import { getServerSession } from "next-auth";

export const getAllBookings = async (): Promise<Booking[]> => {
  const session: any = await getServerSession(authOptions);
  const { accessToken } = session;
  const pendingBooking = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/get-user-bookings`,
    {
      headers: {
        "content-type": "application/json",
        Authorization: accessToken,
      },
      cache: "no-cache",
    }
  );
  const { data } = await pendingBooking.json();

  if (pendingBooking.ok && data) {
    return data;
  } else {
    return [];
  }
};
