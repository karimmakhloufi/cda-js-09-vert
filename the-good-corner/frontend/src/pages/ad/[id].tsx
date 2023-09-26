import { useRouter } from "next/router";

const AdDetails = () => {
  const router = useRouter();
  console.log(router);
  return <p>Displaying details of ad with id: {router.query.id}</p>;
};

export default AdDetails;
