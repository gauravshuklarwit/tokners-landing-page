import Layout from "@/components/layout";
import { Hero } from "@/components/Hero";
import { Standout } from "@/components/Standout";
import { Timeline } from "@/components/Timeline";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero withFeatures={true} />
        <Standout />
        <Timeline />
      </main>
    </Layout>
  );
}
