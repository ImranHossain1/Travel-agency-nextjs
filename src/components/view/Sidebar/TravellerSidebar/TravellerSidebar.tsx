import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const PatientSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Dashboard", href: "/dashboard" },
    { key: "2", label: "My Bookings", href: "/my-bookings" },
    { key: "3", label: "My Pending Bookings", href: "/my-pending-bookings" },
    { key: "4", label: "My Profile", href: "/my-profile" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default PatientSidebar;
