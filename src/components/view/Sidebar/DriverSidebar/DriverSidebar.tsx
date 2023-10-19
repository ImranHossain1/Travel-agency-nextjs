import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const DoctorSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Dashboard", href: "/drivers/dashboard" },
    { key: "2", label: "My Schedules", href: "/drivers/my-schedule" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default DoctorSidebar;
