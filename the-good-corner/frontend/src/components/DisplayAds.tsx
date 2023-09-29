import Link from "next/link";
import axios from "axios";
import AdCard, { AdCardProps } from "./AdCard";

type DisplayAdsType = {
  ads: AdCardProps[];
  title: string;
};

const DisplayAds = ({ ads, title }: DisplayAdsType) => {
  return (
    <>
      <h2>{title}</h2>
      <section className="recent-ads">
        {ads.map((ad) => (
          <div key={ad.id}>
            <Link href={`/ad/${ad.id}`}>
              <AdCard
                imageUrl={ad.imageUrl}
                link={ad.link}
                title={ad.title}
                price={ad.price}
                category={ad.category}
                description={ad.description}
                location={ad.location}
                owner={ad.owner}
              />
            </Link>
            <button
              onClick={() => {
                console.log("delete");
                axios.delete(`http://localhost:4000/ad/${ad.id}`);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default DisplayAds;
