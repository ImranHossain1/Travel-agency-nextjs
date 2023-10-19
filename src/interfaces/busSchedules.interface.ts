export interface BusSchedule {
  startingPoint: string;
  bookedSit: number;
  id: string;
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  endPoint: string;
  dayOfWeek: string;
  busFare: number;
  availableSit: number;
  status: string;
  bus: {
    busType: string;
    busNumber: string;
    totalSit: number;
  };
}
