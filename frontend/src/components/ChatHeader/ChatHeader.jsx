import { ChevronDown } from 'lucide-react';
import styles from './ChatHeader.module.css';

export default function ChatHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <span>ChatGPT</span>
        <ChevronDown size={16} />
      </div>
      <div className={styles.right}>
        <span className={styles.userName}>Natnael Tsegaye Chat </span>
        <div className={styles.avatar}>NT</div>
      </div>
    </header>
  );
}
