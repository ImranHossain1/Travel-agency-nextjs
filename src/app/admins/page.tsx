import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../lib/AuthOptions";

const AllAdminsByAdmin = async () => {
  const session = await getServerSession(authOptions);

  return <div>AllAdminsByAdmin</div>;
};

export default AllAdminsByAdmin;
