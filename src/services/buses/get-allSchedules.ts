"use server";

import { Bus } from "@/interfaces/bus.interfaces";
import { BusSchedule } from "@/interfaces/busSchedules.interface";

export const getAllBusSchedules = async (): Promise<BusSchedule[]> => {
  const buses = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/bus-schedule/?limit=20`,
    {
      headers: { "content-type": "application/json" },
      cache: "no-cache",
    }
  );
  const { data } = await buses.json();

  if (buses.ok && data) {
    return data;
  } else {
    return [];
  }
};
