import Image from "next/image";

import { Features } from "@/components/Features";
import styles from "./hero.module.scss";

export function Hero({ withFeatures }: { withFeatures?: boolean }) {
  return (
    <section className={`${styles["hero"]}`}>
      {/* limits to 1920px */}
      <div className={`${styles["hero__container--fluid"]} container--fluid`}>
        <div className={`${styles["hero__wrapper"]}`}>
          {/* limits to 1574px */}
          <div className={`${styles["hero__container"]} container`}>
            <div className={`${styles["hero__text-box"]}`}>
              <span className={`${styles["hero__label"]}`}>At Tokners are</span>
              <h1 className={`${styles["hero__heading"]}`}>
                Reimagining social media through the power of the blockchain.
              </h1>
              <p className={`${styles["hero__description"]}`}>
                We are creating social media 3.0 with influencers, celebrities
                and creators being able to launch their own digital currency by
                simply creating a profile with media content posted as Non
                fungible Tokens that can be owned and traded on the Tokners
                network
              </p>
              <button
                className={`${styles["hero__cta"]} button button--primary`}
              >
                Learn More
              </button>
            </div>

            <div className={`${styles["hero__image-box"]}`}>
              <Image
                src="/hero-mobile.svg"
                alt="Hero mockup image"
                width={582}
                height={817}
                className={`${styles["hero__image-mobile"]}`}
              />
              <Image
                src="/hero-desktop.svg"
                alt="Hero mockup image"
                fill
                className={`${styles["hero__image-desktop"]}`}
              />
            </div>
          </div>
        </div>
        {withFeatures && <Features />}
      </div>
    </section>
  );
}
