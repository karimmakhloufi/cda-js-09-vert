export type AdCardProps = {
  link: string;
  imageUrl: string;
  title: string;
  price: number;
};

const AdCard = ({ link, imageUrl, title, price }: AdCardProps) => {
  return (
    <div className="ad-card-container">
      <a className="ad-card-link" href={link}>
        <img className="ad-card-image" src={imageUrl} />
        <div className="ad-card-text">
          <div className="ad-card-title">{title}</div>
          <div className="ad-card-price">{price} €</div>
        </div>
      </a>
    </div>
  );
};

export default AdCard;
