import { authOptions } from "@/app/lib/AuthOptions";
import Navbar from "@/components/ui/Navbar/Navbar";
import { getServerSession } from "next-auth";

const PublicHeader = async () => {
  const items = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "Your Journeys", href: "/available-journies" },
    { key: "3", label: "About Us", href: "/about-us" },
    { key: "4", label: "Contact Us", href: "/contact-us" },
  ];
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navbar session={session ? true : false} items={items} hasSider />
    </>
  );
};

export default PublicHeader;
