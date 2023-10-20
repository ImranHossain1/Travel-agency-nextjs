import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const AdminSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Dashboard", href: "/admins/dashboard" },
    {
      key: "2",
      label: "All Bookings",
      href: "/admins/all-bookings",
    },
    { key: "3", label: "Buses", href: "/admins/buses" },
    { key: "4", label: "Create Bus", href: "/admins/buses/create" },

    { key: "5", label: "Bus Schedules", href: "/admins/bus-schedule" },
    { key: "6", label: "Drivers", href: "/admins/drivers" },
    { key: "7", label: "Create Drivers", href: "/admins/drivers/create" },
    { key: "8", label: "Create Admin", href: "/admins/admin/create" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default AdminSidebar;
