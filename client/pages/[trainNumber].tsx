import React from "react";
import { useRouter } from "next/router";
import TrainDetails from "../components/TrainDetails";

const train = {};

const SingleTrainPage: React.FC = () => {
  const router = useRouter();
  const { trainNumber } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Train Number: {trainNumber}
      </h1>
      <TrainDetails train={train} />
    </div>
  );
};

export default SingleTrainPage;
