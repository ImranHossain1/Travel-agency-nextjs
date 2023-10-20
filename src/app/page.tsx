import PublicHeader from "@/components/view/Header/PublicHeader/PublicHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/AuthOptions";
import Banner from "../components/view/Components/Home/Banner/Banner";
import BookingProcess from "@/components/view/Components/Home/BookingProcess/BookingProcess";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <PublicHeader />
      <Banner></Banner>
      <BookingProcess></BookingProcess>
    </div>
  );
}
