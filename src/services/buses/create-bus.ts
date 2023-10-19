"use server";

import { authOptions } from "@/app/lib/AuthOptions";
import { Bus } from "@/interfaces/bus.interfaces";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createBus = async (data: any) => {
  const session: any = await getServerSession(authOptions);
  console.log(session, "Hello session");
  const buses = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bus`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
      Authorization: session.accessToken!,
    },
    cache: "no-cache",
  });
  const { data: BusData } = await buses.json();
  revalidateTag("all-buses");
  redirect(`/admins/doctors/`);
};
