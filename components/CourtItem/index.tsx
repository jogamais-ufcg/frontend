import Link from 'next/link';
import styles from './styles.module.css';

interface CourtItemProps {
  index: number;
  title: string;
  description: string;
  href: string;
}

function CourtItem({ index, title, description, href }: CourtItemProps) {
  const sideBarColor =
    index % 2 === 0 ? styles.sideBarBlue : styles.sideBarBlueAlternative;
  const descriptionReduced =
    description.length > 100
      ? `${description.substring(0, 100).trim()}...`
      : description;

  return (
    <Link href={href} className={styles.container}>
      <div className={sideBarColor} />

      <div className={styles.infos}>
        <h3>{title}</h3>

        <p>{descriptionReduced}</p>
      </div>
    </Link>
  );
}

export default CourtItem;
