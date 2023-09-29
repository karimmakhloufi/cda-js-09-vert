import styles from "../styles/AdCard.module.css";

export type AdCardProps = {
  id?: number;
  link: string;
  imageUrl: string;
  title: string;
  price: number;
  description: string;
  owner: string;
  location: string;
  category: {
    id: number;
    name: string;
  };
};

const AdCard = ({
  link,
  imageUrl,
  title,
  price,
  description,
  owner,
}: AdCardProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageUrl} />
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div>{price} €</div>
      </div>
    </div>
  );
};

export default AdCard;
