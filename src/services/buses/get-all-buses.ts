"use server";

import { authOptions } from "@/app/lib/AuthOptions";
import { Bus } from "@/interfaces/bus.interfaces";
import { getServerSession } from "next-auth";

export const getAllBuses = async (): Promise<Bus[]> => {
  const session: any = await getServerSession(authOptions);
  const { accessToken } = session;
  const buses = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bus?limit=20`, {
    headers: { "content-type": "application/json", Authorization: accessToken },
    next: {
      revalidate: 24 * 60 * 60,
      tags: ["all-buses"],
    },
  });
  const { data } = await buses.json();
  //   console.log(data);

  if (buses.ok && data) {
    return data;
  } else {
    return [];
  }
};
