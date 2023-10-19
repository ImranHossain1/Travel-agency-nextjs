import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const AdminSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Dashboard", href: "/admins/dashboard" },
    { key: "2", label: "My Profile", href: "/admins/my-profile" },
    {
      key: "3",
      label: "All Bookings",
      href: "/admins/all-bookings",
    },
    { key: "4", label: "Buses", href: "/admins/buses" },
    { key: "5", label: "Bus Schedules", href: "/admins/bus-schedule" },
    { key: "6", label: "Drivers", href: "/admins/drivers" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default AdminSidebar;
