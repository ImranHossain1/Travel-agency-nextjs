"use server";

import { authOptions } from "@/app/lib/AuthOptions";
import { Bus } from "@/interfaces/bus.interfaces";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createBookings = async (data: any) => {
  const session: any = await getServerSession(authOptions);

  if (!session.accessToken) {
    // If the user is not logged in, redirect to the login page and display an alert
    redirect("/login"); // Replace '/login' with the actual login page URL
    // You can also add an alert message here to inform the user
    return;
  }

  const buses = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/create-booking`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        Authorization: session.accessToken!,
      },
      cache: "no-cache",
    }
  );

  const { data: BusData } = await buses.json();
  revalidateTag("all-bookings");
  redirect(`/my-pending-bookings`);
};
