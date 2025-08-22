import Image from "next/image";
import styles from "./features.module.scss";

export function Features() {
  return (
    <div className={`${styles["features"]}`}>
      <div className={`${styles["features__container"]} container`}>
        <div className={`${styles["features__card"]}`}>
          <div className={`${styles["features__card-body"]}`}>
            <div className={`${styles["features__card-count"]}`}>01</div>
            <h2 className={`${styles["features__card-title"]}`}>
              For{" "}
              <span className={`${styles["features__card-title--primary"]}`}>
                Creators
              </span>
            </h2>
            <p className={`${styles["features__card-description"]}`}>
              Creators can gain independence through a decentralised digital
              currency system that is dependent on growing and engaging with the
              community and also their star power. They own 10-15% of the total
              value of the tokens minted.
            </p>
          </div>
          <div className={`${styles["features__card-image-wrapper"]}`}>
            <Image
              src="/creators-illustration.svg"
              alt="3d mockup for creators"
              width={600}
              height={600}
              className={`${styles["features__card-image"]}`}
            />
          </div>
        </div>

        <div className={`${styles["features__card"]}`}>
          <div className={`${styles["features__card-body"]}`}>
            <div className={`${styles["features__card-count"]}`}>02</div>
            <h2 className={`${styles["features__card-title"]}`}>
              For{" "}
              <span className={`${styles["features__card-title--secondary"]}`}>
                Hodlers
              </span>
            </h2>
            <p className={`${styles["features__card-description"]}`}>
              Holding social tokens allows the individual to gain access to
              benefits including unreleased content, private communities, direct
              access to celebrity, early-access to tickets and more as well as
              the ability to trade with other communities in order to gain
              access to more creator content with early token buyers being the
              biggest winners as the value of the token increases with more
              buyers.
            </p>
          </div>
          <div className={`${styles["features__card-image-wrapper"]}`}>
            <Image
              src="/hodlers-illustration.svg"
              alt="3d mockup for hodlers"
              width={600}
              height={600}
              className={`${styles["features__card-image"]}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
