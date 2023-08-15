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

interface TrainListProps {
  trains: Train[];
}

const TrainList: React.FC<TrainListProps> = ({ trains }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">All Trains</h2>
      <ul>
        {trains?.map((train) => (
          <li key={train.trainNumber}>{train.trainName}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
