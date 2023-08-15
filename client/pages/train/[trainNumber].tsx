import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/Layout";

const TrainDetailsPage = ({ train }: any) => {
  const router = useRouter();

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-md p-8 rounded-lg w-96">
          <h1 className="text-2xl font-semibold mb-4">Train Details</h1>
          <h2 className="text-xl font-semibold mb-2">{train?.trainName}</h2>
          <p className="text-gray-600 mb-1">
            Train Number: {train?.trainNumber}
          </p>
          <p className="text-gray-600 mb-2">
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
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <p className="text-gray-700 mr-2">Sleeper Price:</p>
              <p className="text-gray-900 font-semibold">
                Rs {train?.price.sleeper}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-700 mr-2">AC Price:</p>
              <p className="text-gray-900 font-semibold">
                Rs {train?.price.AC}
              </p>
            </div>
          </div>
          <p className="text-gray-600">
            Delayed By: {train?.delayedBy}{" "}
            {train?.delayedBy === 1 ? "minute" : "minutes"}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default TrainDetailsPage;

export async function getServerSideProps(context: {
  query: { trainNumber: any };
}) {
  const trainNumber = context.query.trainNumber;
  const response = await axios.get(
    `http://localhost:8000/trains/${trainNumber}`
  );

  return {
    props: {
      train: response.data,
    },
  };
}
