import styles from "./timeline.module.scss";

interface TimelineItem {
  quarter?: number;
  year?: number;
  chores?: string[];
}

const timeline: TimelineItem[] = [
  {
    quarter: 1,
    year: 2021,
    chores: ["Team set-up", "Launch of informational website"],
  },
  {
    quarter: 2,
    year: 2021,
    chores: [
      "Presale and exchange listings",
      "Blockchain development and launch",
      "Launch of our MVP",
      "Influencer agency partnerships",
      "Marketing and promotion",
    ],
  },
  {
    quarter: 3,
    year: 2021,
    chores: [
      "Celebrity, Creator and Influencer partnerships",
      "Expansion of creator communities on our platform",
      "More Marketing and promotion",
    ],
  },
  {
    quarter: 4,
    year: 2021,
    chores: [
      "Mainstream partnerships",
      "500 active creator communities",
      "2Million active community members",
      "More Marketing and promotion",
    ],
  },
];

export function Timeline() {
  return (
    <section className={`${styles["timeline"]}`}>
      {/* limits to 1920px */}
      <div
        className={`${styles["timeline__container--fluid"]} container--fluid`}
      >
        {/* limits to 1574px */}
        <div className={`${styles["timeline__container"]} container`}>
          <ul className={`${styles["timeline__list"]}`}>
            {timeline?.map((quarter) => (
              <li
                key={quarter?.quarter}
                className={`${styles["timeline__card"]}`}
              >
                <div className={`${styles["timeline__card-head"]}`}>
                  <p className={`${styles["timeline__card-quarter"]}`}>
                    Q{quarter?.quarter}
                  </p>
                  <p className={`${styles["timeline__card-year"]}`}>
                    {quarter?.year}
                  </p>
                </div>
                {/* decorators */}
                <div
                  className={`${styles["timeline__card-decoration"]}`}
                  aria-hidden="true"
                >
                  <div
                    className={`${styles["timeline__card-decoration--point"]}`}
                  ></div>
                  <div
                    className={`${styles["timeline__card-decoration--circle"]}`}
                  ></div>
                  <div
                    className={`${styles["timeline__card-decoration--line-front"]}`}
                  ></div>
                  <div
                    className={`${styles["timeline__card-decoration--line-back"]}`}
                  ></div>
                </div>
                <ul
                  className={`${styles["timeline__card-body"]} ${styles["timeline__card-list"]}`}
                >
                  {quarter?.chores?.map((chore, index) => (
                    <li
                      key={index}
                      className={`${styles["timeline__card-list-item"]}`}
                    >
                      {chore}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
