"use server";

import { authOptions } from "@/app/lib/AuthOptions";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const cancelAllPendingBookings = async () => {
  const session: any = await getServerSession(authOptions);

  if (!session.accessToken) {
    redirect("/login");
    return;
  }

  try {
    // Send a DELETE request to cancel all pending bookings
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/booking/cancel-all-pending-booking`,
      {
        method: "DELETE",
        headers: {
          Authorization: session.accessToken,
        },
      }
    );

    if (response.status === 200) {
      // Successful cancellation, show a success alert to the user
      // You can use a library like react-toastify or a custom alert component here
      // to inform the user about the successful cancellation.
      console.log("All pending bookings have been cancelled successfully.");
    } else {
      // Handle error cases, e.g., if the server returns an error response
      console.error("Error cancelling pending bookings:", response.statusText);
    }

    // Perform any necessary revalidation or redirects as needed
    revalidateTag("all-bookings");
    redirect(`/my-bookings`);
  } catch (error) {
    // Handle any network or other unexpected errors
    console.error("Error cancelling pending bookings:", error);
  }
};
