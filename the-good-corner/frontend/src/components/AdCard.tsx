import styles from "../styles/AdCard.module.css";

export type AdCardProps = {
  id?: number;
  link: string;
  imageUrl: string;
  title: string;
  price: number;
};

const AdCard = ({ link, imageUrl, title, price }: AdCardProps) => {
  return (
    <div className={styles.container}>
      <a className={styles.link} href={link}>
        <img className={styles.image} src={imageUrl} />
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div>{price} €</div>
        </div>
      </a>
    </div>
  );
};

export default AdCard;
