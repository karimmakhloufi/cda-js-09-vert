import AdCard, { AdCardProps } from "./AdCard";

const RecentAds = () => {
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
      <section className="recent-ads">
        {ads.map((ad) => (
          <AdCard
            imageUrl={ad.imageUrl}
            key={ad.title}
            link={ad.link}
            title={ad.title}
            price={ad.price}
          />
        ))}
      </section>
    </>
  );
};

export default RecentAds;
