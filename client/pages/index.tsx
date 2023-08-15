import React from "react";
import TrainList from "../components/TrainList";

const trains: any[] = []; // Fetch train data from your API

const AllTrainsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">All Trains Schedule</h1>
      <TrainList trains={trains} />
    </div>
  );
};

export default AllTrainsPage;
