import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "@/components/mainHeader.module.css";
import Image from "next/image";
export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="Website Icon" priority />
        FoodHub
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Join the Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
