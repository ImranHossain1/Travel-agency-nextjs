import TravellerTable from "@/components/view/Traveller/TravellerTable";
import React from "react";
import { getAllPendingBookings } from "@/services/booking/get-user-pending";
import { PendingBooking } from "@/interfaces/pending.booking";
import Table from "@/components/ui/Table/Table";
import PendingComplete from "@/components/view/Traveller/PendingComplete";
import BookingCancellationComponent from "@/components/view/Traveller/PendingCanceled";
import BookingConfirmationComponent from "@/components/view/Traveller/PendingDone";
import { bookingColumn } from "./booking.column";
import { Booking } from "@/interfaces/booking.interface";
import { getAllUserBookings } from "@/services/booking/get-my-booking";

const MyBookings = async () => {
  const data: any = await getAllUserBookings();
  return (
    <TravellerTable title="All Pending Schedules">
      <Table<Booking[]> columns={bookingColumn} data={data}></Table>
    </TravellerTable>
  );
};

export default MyBookings;
