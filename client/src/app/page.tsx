import React from "react";
import TrainList from "./components/TrainList";

interface Train {
  trainNumber: string;
  trainName: string;
  departureTime: {
    Hours: number;
    Minutes: number;
  };
  // Add more train details
}

interface HomeProps {
  trains: Train[];
}

const Home: React.FC<HomeProps> = ({ trains }) => {
  console.log(trains);
  return (
    <div className="container mx-auto p-4">
      <TrainList trains={trains} />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:8000/trains");

    console.log("first");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const trains: Train[] = await response.json();
    console.log("response:", trains);

    return {
      props: {
        trains,
      },
    };
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      props: {
        trains: [],
      },
    };
  }
}

export default Home;
