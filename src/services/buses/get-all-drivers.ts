"use server";

import { authOptions } from "@/app/lib/AuthOptions";
import { Bus } from "@/interfaces/bus.interfaces";
import Driver from "@/interfaces/driver.interface";
import { getServerSession } from "next-auth";

export const getAllDrivers = async (): Promise<Driver[]> => {
  const buses = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/driver`, {
    cache: "no-cache",
  });
  const { data } = await buses.json();

  if (buses.ok && data) {
    return data;
  } else {
    return [];
  }
};
