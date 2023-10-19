import TravellerTable from "@/components/view/Traveller/TravellerTable";
import React from "react";
import { pendingColumn } from "./pending.column";
import { getAllPendingBookings } from "@/services/booking/get-user-pending";
import { PendingBooking } from "@/interfaces/pending.booking";
import Table from "@/components/ui/Table/Table";
import PendingComplete from "@/components/view/Traveller/PendingComplete";
import BookingCancellationComponent from "@/components/view/Traveller/PendingCanceled";

const PandingBookings = async () => {
  const data: any = await getAllPendingBookings();
  return (
    <TravellerTable title="All Pending Schedules">
      <Table<PendingBooking[]> columns={pendingColumn} data={data}></Table>
      <div className="flex justify-center mt-10">
        <PendingComplete />
        <BookingCancellationComponent />
      </div>
    </TravellerTable>
  );
};

export default PandingBookings;
