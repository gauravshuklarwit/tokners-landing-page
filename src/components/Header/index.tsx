"use client";

import { motion } from "motion/react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/icons";
import styles from "./header.module.scss";

interface NavLink {
  label?: string;
  link?: string;
}

const navlinks: NavLink[] = [
  { label: "Our team", link: "/" },
  { label: "Tokens", link: "/" },
  { label: "Connect wallet", link: "/" },
  { label: "Lightpaper", link: "/" },
];

export function Header({ className }: { className?: string }) {
  const [isMenuToggled, setIsmMenuToggled] = useState(false);

  const handleMobileNav = () => {
    setIsmMenuToggled((prev) => !prev);
  };

  return (
    <header className={`${styles.header} ${className}`}>
      <div
        className={`${styles["header__container"]} container container--fluid`}
      >
        {/* logo */}
        <Link href="/" aria-label="Home" className={styles["header__logo"]}>
          <Image
            src="/brand-logo-wordmark.svg"
            alt="brand logo"
            width={219}
            height={35}
            className={styles["header__logo-image"]}
          />
        </Link>

        {/* mobile nav opener */}
        <button
          className={`${styles["header__nav-opener"]} button button--icon`}
          onClick={handleMobileNav}
        >
          <span className="visually-hidden">Open Menu</span>
          <Icons.menu className="button__icon" />
        </button>

        {/* mobile nav */}
        <motion.nav
          initial={{
            opacity: 0,
            y: 50,
            display: "none",
          }}
          animate={{
            opacity: isMenuToggled ? 1 : 0,
            y: isMenuToggled ? 0 : 50,
            display: isMenuToggled ? "grid" : "none",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`${styles["header__mobile-nav"]} container`}
        >
          <button
            className={`${styles["header__nav-closer"]} button button--icon`}
            onClick={handleMobileNav}
          >
            <span className="visually-hidden">Close Menu</span>
            <Icons.cross className="button__icon" />
          </button>

          <ul className={styles["header__mobile-menu"]}>
            {navlinks.map((navLink, idx) => (
              <motion.li
                key={navLink?.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isMenuToggled ? 1 : 0,
                  y: isMenuToggled ? 0 : 20,
                }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className={styles["header__mobile-menu-item"]}
              >
                {navLink?.label && (
                  <Link
                    href={navLink?.link || "/"}
                    className={styles["header__mobile-menu-link"]}
                    onClick={handleMobileNav}
                  >
                    {navLink?.label}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>

          <div className={styles["header__button-group"]}>
            <button
              className={`${styles["header__sign-in-button"]} button button--link`}
            >
              Sign In
            </button>
            <button className={`${styles["header__sign-up-button"]} button`}>
              Sign Up
            </button>
          </div>
        </motion.nav>

        {/* default nav */}
        <nav className={styles["header__nav"]}>
          <ul className={styles["header__menu"]}>
            {navlinks.map((navLink) => (
              <li key={navLink?.label} className={styles["header__menu-item"]}>
                {navLink?.label && (
                  <Link
                    href={navLink?.link || "/"}
                    className={styles["header__menu-link"]}
                  >
                    {navLink?.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className={styles["header__button-group"]}>
            <button
              className={`${styles["header__sign-in-button"]} button button--link`}
            >
              Sign In
            </button>
            <button className={`${styles["header__sign-up-button"]} button`}>
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
