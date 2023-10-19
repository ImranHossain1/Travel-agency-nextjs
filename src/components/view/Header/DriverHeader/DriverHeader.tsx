import { authOptions } from "@/app/lib/AuthOptions";
import Navbar from "@/components/ui/Navbar/Navbar";
import { getServerSession } from "next-auth";

const DriverHeader = async () => {
  const items = [
    { key: "1", label: "Dashboard", href: "/Driver/my-profile" },
    { key: "2", label: "My Profile", href: "/Driver/my-profile" },
    { key: "3", label: "My Schedule", href: "/Driver/my-schedule" },
  ];
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navbar session={session ? true : false} items={items} hasSider />
    </>
  );
};

export default DriverHeader;
