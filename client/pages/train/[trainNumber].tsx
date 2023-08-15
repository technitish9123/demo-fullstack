import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/Layout";

const TrainDetailsPage = ({ train }: any) => {
  const router = useRouter();

  return (
    <Layout>
      <div>
        <h1>Train Details</h1>
        <p>Train Number: {router.query.trainNumber}</p>
        <pre>{JSON.stringify(train, null, 2)}</pre>
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
