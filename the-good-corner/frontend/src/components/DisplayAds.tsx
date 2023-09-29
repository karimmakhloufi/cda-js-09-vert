import Link from "next/link";
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
          <Link href={`/ad/${ad.id}`} key={ad.id}>
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
        ))}
      </section>
    </>
  );
};

export default DisplayAds;
