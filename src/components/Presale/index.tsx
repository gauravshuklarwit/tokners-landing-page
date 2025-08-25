import { FormattedDate } from "@/components/formatted-date";
import styles from "./presale.module.scss";

interface presaleItem {
  phaseName: string;
  startDate: Date;
  endDate: Date;
  softCap: number;
  hardCap: number;
}

const presaleData: presaleItem[] = [
  {
    phaseName: "Phase One",
    startDate: new Date("2021-04-01"),
    endDate: new Date("2021-04-16"),
    softCap: 5000,
    hardCap: 10000,
  },
  {
    phaseName: "Phase Two",
    startDate: new Date("2021-04-01"),
    endDate: new Date("2021-04-16"),
    softCap: 5000,
    hardCap: 10000,
  },
  {
    phaseName: "Phase Three",
    startDate: new Date("2021-04-01"),
    endDate: new Date("2021-04-16"),
    softCap: 5000,
    hardCap: 10000,
  },
];

const buyingSteps: string[] = [
  'First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.',
  "Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale wallet",
  "Then after you will received your $Tokners to your address within 24hours.",
];

export function Presale() {
  return (
    <section className={`${styles["presale"]}`}>
      {/* limits to 1920px */}
      <div
        className={`${styles["presale__container--fluid"]} container--fluid`}
      >
        {/* limits to 1574px */}
        <div className={`${styles["presale__container"]} container`}>
          {/* section title */}
          <h2 className={`${styles["presale__title"]}`}>Presale Details</h2>

          {/* cards list */}
          <div className={`${styles["presale__cards-list"]}`}>
            {presaleData?.map((item) => (
              <article
                key={item?.phaseName}
                className={`${styles["presale__card"]}`}
              >
                {/* card head */}
                <div className={`${styles["presale__card-head"]}`}>
                  <h3 className={`${styles["presale__card-title"]}`}>
                    {item?.phaseName}
                  </h3>
                  <div className={`${styles["presale__card-dates"]}`}>
                    <FormattedDate
                      date={item?.startDate}
                      className={styles["presale__card-date"]}
                    />
                    {" - "}
                    <FormattedDate
                      date={item?.endDate}
                      className={styles["presale__card-date"]}
                    />
                  </div>
                </div>

                {/* card body */}
                <div className={`${styles["presale__card-body"]}`}>
                  <p className={`${styles["presale__card-bnb-price"]}`}>
                    1 BNB = 100000 Tokners
                  </p>
                  <p className={`${styles["presale__card-soft-cap"]}`}>
                    Soft cap: <span>{item?.softCap} BNB</span>
                  </p>
                  <p className={`${styles["presale__card-hard-cap"]}`}>
                    Hard cap: <span>{item?.hardCap} BNB</span>
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* how to buy section */}
          <div className={`${styles["presale__buy"]}`}>
            <h3 className={`${styles["presale__buy-title"]}`}>How to buy</h3>
            <div className={`${styles["presale__buying-steps"]}`}>
              {buyingSteps?.map((step, idx) => (
                <p key={idx} className={`${styles["presale__buying-step"]}`}>
                  {step}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
