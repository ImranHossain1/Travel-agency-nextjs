import UserProfile from "@/components/view/User/UserProfile";
import { getUser } from "@/services/users/users";
import React from "react";

const page = async () => {
  const result: any = await getUser();

  return <UserProfile profileData={result}></UserProfile>;
};

export default page;
