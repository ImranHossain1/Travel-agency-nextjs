"use server";
export const getAvailableSeats = async (availableJourneyId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bus-schedule/availableSits/${availableJourneyId}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
