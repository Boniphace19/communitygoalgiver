"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";
import { useSelectedLayoutSegment } from "next/navigation";
export default function NavLink({ href, children }) {
  let segment = useSelectedLayoutSegment();
  let router = useRouter();

  let active = href === `/${segment}`;

  return (
    <Link
      className={active ? styles.navlinksActive : styles.navlinks}
      href={href}
    >
      {children}
    </Link>
  );
}
