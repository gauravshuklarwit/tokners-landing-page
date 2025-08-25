import Link from "next/link";
import { Icons } from "@/components/icons";
import styles from "./social-links.module.scss";

interface SocialLink {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  platform?: string;
  link?: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: Icons.twitter,
    platform: "Twitter",
    link: "/",
  },
  {
    icon: Icons.telegram,
    platform: "Telegram",
    link: "/",
  },
  {
    icon: Icons.instagram,
    platform: "Instagram",
    link: "/",
  },
  {
    icon: Icons.medium,
    platform: "Medium",
    link: "/",
  },
  {
    icon: Icons.github,
    platform: "GitHub",
    link: "/",
  },
  {
    icon: Icons.reddit,
    platform: "Reddit",
    link: "/",
  },
];

export function SocialLinks() {
  return (
    <ul className={`${styles["social-links"]}`}>
      {socialLinks.map((social) => {
        const Icon = social?.icon;

        return (
          <li
            key={social?.platform}
            className={`${styles["social-links__item"]}`}
          >
            <Link
              href={social?.link || "/#"}
              aria-label={`Visit our ${social?.platform} profile`}
              className={`${styles["social-links__link"]}`}
            >
              {Icon && <Icon className={`${styles["social-links__icon"]}`} />}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
