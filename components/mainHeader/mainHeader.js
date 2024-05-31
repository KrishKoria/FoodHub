import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "@/components/mainHeader/mainHeader.module.css";
import Image from "next/image";
import { MainHeaderBackground } from "@/components/mainHeader/mainHeaderBackground";
import NavLinks from "../navlinks/navlinks";
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
              <NavLinks href="/meals">Browse Meals</NavLinks>
            </li>
            <li>
              <NavLinks href="/community">Join the Community</NavLinks>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
