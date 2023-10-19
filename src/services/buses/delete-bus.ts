"use server";

import { Bus } from "@/interfaces/bus.interfaces";
import { revalidateTag } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export const deleteBus = async (id: string) => {
  const buses = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bus/${id}`, {
    method: "DELETE",
  });
  const { data } = await buses.json();
  revalidateTag("all-buses");
  //   redirect
};
