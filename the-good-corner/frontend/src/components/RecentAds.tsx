import { useState, useEffect } from "react";
import axios from "axios";
import AdCard, { AdCardProps } from "./AdCard";

const RecentAds = () => {
  const [total, setTotal] = useState(0);
  const [recentAds, setRecentAds] = useState<AdCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<AdCardProps[]>(
          "http://localhost:4000/ad"
        );
        console.log(result.data);
        setRecentAds(result.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Annonces récentes</h2>
      <p>Total : {total} €</p>
      <section className="recent-ads">
        {recentAds.map((ad) => (
          <div key={ad.id}>
            <AdCard
              imageUrl={ad.imageUrl}
              link={ad.link}
              title={ad.title}
              price={ad.price}
            />
            <button
              onClick={() => {
                setTotal(total + ad.price);
              }}
              className="button"
            >
              Add to total
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default RecentAds;
