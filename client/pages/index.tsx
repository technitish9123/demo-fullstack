import React from "react";
import Layout from "../components/Layout";
import TrainCard from "../components/TrainCard";
import axios from "axios";

interface HomeProps {
  trains: any[];
}

const Home: React.FC<HomeProps> = ({ trains }) => {
  return (
    <Layout>
      <div className="p-6 rounded-xl bg-white shadow-md">
        <h1 className="text-2xl font-bold mb-4">All Trains</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trains?.map((train) => (
            <TrainCard key={train?.trainNumber} train={train} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:8000/trains");
  const trains: any[] = response.data;
  return { props: { trains } };
}

export default Home;
