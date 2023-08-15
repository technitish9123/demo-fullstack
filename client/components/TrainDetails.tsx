import React from "react";

interface Train {
  trainNumber: string;
  departureTime: string;
  arrivalTime: string;
  // ... other train properties
}

interface TrainDetailsProps {
  train: Train;
}

const TrainDetails: React.FC<TrainDetailsProps> = ({ train }: any) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">{train.trainNumber}</h2>
      <p>Departure: {train.departureTime}</p>
      <p>Arrival: {train.arrivalTime}</p>
    </div>
  );
};

export default TrainDetails;
