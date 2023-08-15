import React from "react";

interface Train {
  trainNumber: string;
  trainName: string;
  departureTime: {
    Hours: number;
    Minutes: number;
  };
  // Add more train details
}

interface TrainDetailsProps {
  train: Train;
}

const TrainDetails: React.FC<TrainDetailsProps> = ({ train }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">{train.trainName}</h2>
      <p>Train Number: {train.trainNumber}</p>
      <p>
        Departure Time: {train.departureTime.Hours}:
        {train.departureTime.Minutes}
      </p>
    </div>
  );
};

export default TrainDetails;
