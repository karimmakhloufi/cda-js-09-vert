import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { AdCardProps } from "@/components/AdCard";

const AdDetails = () => {
  const router = useRouter();
  console.log(router);
  const [adDetails, setAdDetails] = useState<AdCardProps>();
  useEffect(() => {
    const fetchAdData = async () => {
      const result = await axios.get(
        `http://localhost:4000/ad/${router.query.id}`
      );
      console.log(result);
      setAdDetails(result.data);
    };
    fetchAdData();
  }, [router.query.id]);
  return (
    <>
      <h2 className="ad-details-title">{adDetails?.title}</h2>
      <section className="ad-details">
        <div className="ad-details-image-container">
          <img className="ad-details-image" src={adDetails?.imageUrl} />
        </div>
        <div className="ad-details-info">
          <div className="ad-details-price">{adDetails?.price} €</div>
          <div className="ad-details-description">{adDetails?.description}</div>
          <hr className="separator" />
          <div className="ad-details-owner">
            Annoncée publiée par <b>{adDetails?.owner}</b> aujourd&apos;hui
            (9:32).
          </div>
          <a
            href={`mailto:${adDetails?.owner}`}
            className="button button-primary link-button"
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="styled__BaseIcon-sc-1jsm4qr-0 llmHhT"
              stroke="currentcolor"
              strokeWidth="2.5"
              fill="none"
            >
              <path d="M25 4H7a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h18a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5ZM7 6h18a3 3 0 0 1 2.4 1.22s0 0-.08 0L18 15.79a3 3 0 0 1-4.06 0L4.68 7.26H4.6A3 3 0 0 1 7 6Zm18 20H7a3 3 0 0 1-3-3V9.36l8.62 7.9a5 5 0 0 0 6.76 0L28 9.36V23a3 3 0 0 1-3 3Z"></path>
            </svg>
            Envoyer un email
          </a>
        </div>
      </section>
    </>
  );
};

export default AdDetails;
