import Link from "next/link";
import React from "react";

interface TrainCardProps {
  train: any;
}

const TrainCard: React.FC<TrainCardProps> = ({ train }) => {
  return (
    <Link href={`/train/${train?.trainNumber}`}>
      <div className="bg-white shadow-md p-6 rounded-md transition-transform transform hover:scale-105">
        <h2 className="text-xl font-semibold mb-2">{train?.trainName}</h2>
        <p className="text-gray-600 mb-1">Train Number: {train?.trainNumber}</p>
        <p className="text-gray-600 mb-3">
          Departure Time: {train?.departureTime.Hours}:
          {train?.departureTime.Minutes}
        </p>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="text-gray-700 mr-2">Sleeper:</p>
            <p className="text-gray-900 font-semibold">
              {train?.seatsAvailable.sleeper} Available
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-700 mr-2">AC:</p>
            <p className="text-gray-900 font-semibold">
              {train?.seatsAvailable.AC} Available
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="text-gray-700 mr-2">Sleeper Price:</p>
            <p className="text-gray-900 font-semibold">
              ${train?.price.sleeper}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-700 mr-2">AC Price:</p>
            <p className="text-gray-900 font-semibold">rs {train?.price.AC}</p>
          </div>
        </div>
        <p className="text-gray-600 mb-0">
          Delayed By: {train?.delayedBy}{" "}
          {train?.delayedBy === 1 ? "minute" : "minutes"}
        </p>
      </div>
    </Link>
  );
};

export default TrainCard;
