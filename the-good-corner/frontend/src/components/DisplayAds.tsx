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
            <AdCard
              imageUrl={ad.imageUrl}
              link={ad.link}
              title={ad.title}
              price={ad.price}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default DisplayAds;
