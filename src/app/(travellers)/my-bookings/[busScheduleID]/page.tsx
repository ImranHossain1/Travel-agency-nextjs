import AvailableSeats from "@/components/view/Components/Services/AvailableSeats";
import SingleJourney from "@/components/view/Components/Services/SingleJourney";
import { getAvailableSeats } from "@/services/journies/getAvailableSeats";
import { getJourney } from "@/services/journies/getJournies";
import React from "react";
interface Props {
  params: {
    busScheduleID: string;
  };
}
const BusSchedule = async (props: Props) => {
  const { busScheduleID } = props.params;
  console.log(busScheduleID);
  const schedule = await getJourney(busScheduleID);

  const availableSits = await getAvailableSeats(busScheduleID);

  return (
    <>
      <SingleJourney data={schedule.data}></SingleJourney>
      <AvailableSeats
        availableSeats={availableSits.data}
        busScheduleId={busScheduleID}
      ></AvailableSeats>
    </>
  );
};

export default BusSchedule;
