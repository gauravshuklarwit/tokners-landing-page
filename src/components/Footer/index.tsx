import Image from "next/image";
import Link from "next/link";

import { SocialLinks } from "@/components/SocialLinks";
import styles from "./footer.module.scss";

interface siteLink {
  label: string;
  link: string;
}

const siteLinks: siteLink[] = [
  { label: "Our team", link: "/" },
  { label: "Tokens", link: "/" },
  { label: "Connect Wallet", link: "/" },
  { label: "Lightpaper", link: "/" },
];

export function Footer() {
  return (
    <footer className={`${styles["footer"]}`}>
      <div className={`${styles["footer__container--fluid"]} container--fluid`}>
        <div className={`${styles["footer__container"]} container`}>
          <ul className={`${styles["footer__site-links"]}`}>
            {siteLinks?.map((item) => (
              <li
                key={item?.label}
                className={`${styles["footer__site-link-item"]}`}
              >
                <Link
                  href={item?.link}
                  className={`${styles["footer__site-link"]}`}
                >
                  {item?.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={`${styles["footer__bottom-bar"]}`}>
            <Link
              href="/"
              className={`${styles["footer__logo"]}`}
              aria-label="Home"
            >
              <Image
                src="/brand-logo-light.svg"
                alt="Tokners logo"
                width={219}
                height={35}
                className={`${styles["footer__logo-image"]}`}
              />
            </Link>

            <SocialLinks />

            <p className={`${styles["footer__copyright"]}`}>
              © 2021 Tokners. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
