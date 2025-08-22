import Image from "next/image";
import styles from "./coming-soon.module.scss";

export function ComingSoon() {
  return (
    <section className={`${styles["coming-soon"]}`}>
      {/* limits to 1920px */}
      <div
        className={`${styles["coming-soon__container--fluid"]} container--fluid`}
      >
        {/* limits to 1574px */}
        <div className={`${styles["coming-soon__container"]} container`}>
          <div className={`${styles["coming-soon__text-box"]}`}>
            <h2 className={`${styles["coming-soon__title"]}`}>
              Tokners is coming
            </h2>
            <div className={`${styles["coming-soon__description"]}`}>
              <p
                className={`${styles["coming-soon__paragraph"]} ${styles["coming-soon__paragraph--highlight"]}`}
              >
                Cryptocurrency adoption is at less than 1% of the global world
                population with some countries and entities actively fighting
                against its mass adoption and the smartest developers and nerds
                holding the fort.
              </p>
              <p className={`${styles["coming-soon__paragraph"]}`}>
                Bitcoin was the first, and it has since grown to thousands of
                tokens launched all aiming to fix one problem or the other with
                some quite simply FOMOing the moment. Our goal is to bring mass
                adoption to the cryptocurrency space by dumbing it down. How far
                down? So down that even a celebrity can explain it in simple
                words to their followers and have them download an app, buy into
                the social currency of their favourite person and watch their
                investment as is with other cryptocurrency project.
              </p>
              <p className={`${styles["coming-soon__paragraph"]}`}>
                We are trying to do to this space what investment apps did for
                the &quot;nonexistent retail investors&quot;. We are gamefying
                digital currency, bringing in popular faces instead of hard to
                understand projects to make it the norm and inadvertently being
                the &quot;gateway drug&quot; for a lot of people to finally give
                this space a real look.
              </p>
              <br />
              <p
                className={`${styles["coming-soon__paragraph"]} ${styles["coming-soon__paragraph--highlight"]}`}
              >
                A new digital economy is coming. People would be just as
                powerful as countries and creators would be paid beyond the
                peanuts that conventional social media platforms can offer.
              </p>
              <p className={`${styles["coming-soon__paragraph"]}`}>
                There would be new markets and advertisers with little to offer
                would not find home there. Like Kanye said, &quot;Personalities
                would become the new currency, and services would be built on
                top of them&quot;. Well, Kanye didn&apos;t exactly say that, but
                it sounds like something we hope he would say.
              </p>
              <p className={`${styles["coming-soon__paragraph"]}`}>
                Currency is digital, it has been that way for a while now, but
                this time there would be no dead presidents on the money, there
                would people like you on the money, and you would own it because
                it would make the most sense in the world.
              </p>
            </div>
          </div>

          <div className={`${styles["coming-soon__image-box"]}`}>
            <Image
              src="/cloud-vector.svg"
              alt="3d cloud illustration"
              width={230}
              height={147}
              className={`${styles["coming-soon__cloud-image--short"]}`}
            />

            <Image
              src="/rocket-vector.svg"
              alt="3d rocket illustration"
              width={312.6216377161147}
              height={646.3189586652845}
              className={`${styles["coming-soon__rocket-image"]}`}
            />

            <Image
              src="/cloud-vector.svg"
              alt="3d cloud illustration"
              width={371}
              height={237}
              className={`${styles["coming-soon__cloud-image--long"]}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
