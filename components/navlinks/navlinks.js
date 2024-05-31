"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/navlinks/navlinks.module.css";

export default function NavLinks({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </Link>
  );
}
