import styles from "./AnnouncementTicker.module.css";

export default function AnnouncementTicker({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <div className={styles.ticker} role="status">
      <div className={styles.track}>
        {[...items, ...items].map((item, index) => (
          <span key={index} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
