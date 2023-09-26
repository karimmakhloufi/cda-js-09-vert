import { useState, useEffect } from "react";
import axios from "axios";
import AdCard, { AdCardProps } from "./AdCard";

const RecentAds = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:4000/ad");
        console.log(result);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchData();
  }, []);

  const ads: AdCardProps[] = [
    {
      title: "Table",
      price: 120,
      link: "/ads/table",
      imageUrl: "/images/table.webp",
    },
    {
      title: "Bougie",
      price: 4,
      link: "/ads/bougie",
      imageUrl: "/images/bougie.webp",
    },
    {
      title: "Dame-Jeanne",
      price: 80,
      link: "/ads/dame-jeanne",
      imageUrl: "/images/dame-jeanne.webp",
    },
    {
      title: "Vide-Poche",
      price: 15,
      link: "/ads/vide-poche",
      imageUrl: "/images/vide-poche.webp",
    },
    {
      title: "Porte-Magazine",
      price: 120,
      link: "/ads/porte-magazine",
      imageUrl: "/images/porte-magazine.webp",
    },
    {
      title: "Vaisselier",
      price: 450,
      link: "/ads/vaisselier",
      imageUrl: "/images/vaisselier.webp",
    },
  ];
  return (
    <>
      <h2>Annonces récentes</h2>
      <p>Total : {total} €</p>
      <section className="recent-ads">
        {ads.map((ad) => (
          <div key={ad.title}>
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
