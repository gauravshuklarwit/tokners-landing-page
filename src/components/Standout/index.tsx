import Image from "next/image";
import styles from "./standout.module.scss";

export function Standout() {
  return (
    <section className={`${styles["standout"]}`}>
      <div
        className={`${styles["standout__container--fluid"]} container--fluid`}
      >
        <div className={`${styles["standout__container"]} container`}>
          <div className={`${styles["standout__logo"]}`}>
            <Image
              src="/brand-logo.svg"
              alt="brand logo"
              width={56}
              height={35}
              className={`${styles["standout__logo-image"]}`}
            />
          </div>
          <h2 className={`${styles["standout__title"]}`}>
            What makes us different?
          </h2>
          <div className={`${styles["standout__description"]}`}>
            <p
              className={`${styles["standout__description-paragraph"]} ${styles["standout__description-paragraph--highlight"]}`}
            >
              We would only launch tokens with the express permission of the
              creators.
            </p>
            <p className={`${styles["standout__description-paragraph"]}`}>
              There are several thousand celebrities and creators on twitter,
              tiktok, Instagram and YouTube with followings in the millions who
              we would be <b>actively engaging</b> before we go viral.
            </p>
            <p className={`${styles["standout__description-paragraph"]}`}>
              We would get them on our platform and they would see the
              opportunity to create a fan driven digital economy where their
              digital content can be traded as NFTs and their most loyal fans
              can have the monetary value of their creator's currency increase
              <b> significantly</b> as they promote their digital currency
              across their channels while our native token holders benefit from
              the Tokners popularity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
