export interface PendingBooking {
  userId: string;
  busScheduleId: string;
  bookingStatus: string;
  paymentStatus: string;

  bus_SitId: string;
  bus_Schedule: {
    id: string;
    startTime: string;
    endTime: string;
    startDate: string;
    endDate: string;
    startingPoint: string;
    endPoint: string;
    dayOfWeek: string;
    bookedSit: 0;
    PendingSit: -1;
    busFare: 800;
    status: string;
    busId: string;
    driverId: string;
  };
  Bus_Sit: {
    sitNumber: string;
    busId: string;
  };
}
