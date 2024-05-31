import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "@/components/mainHeader/mainHeader.module.css";
import Image from "next/image";
import { MainHeaderBackground } from "@/components/mainHeader/mainHeaderBackground";
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
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
    </>
  );
}
