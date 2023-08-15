import React from "react";
import Link from "next/link";

interface Train {
  trainNumber: string;
  departureTime: string;
  arrivalTime: string;
}

interface TrainListProps {
  trains: Train[];
}

const TrainList: React.FC<TrainListProps> = ({ trains }) => {
  return (
    <div>
      {trains.map((train) => (
        <div key={train.trainNumber} className="mb-4">
          <h2 className="text-xl font-semibold">{train.trainNumber}</h2>
          <p>Departure: {train.departureTime}</p>
          <p>Arrival: {train.arrivalTime}</p>
          <Link href={`/trains/${train.trainNumber}`}>
            <a className="text-blue-500 hover:underline">View Details</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TrainList;
