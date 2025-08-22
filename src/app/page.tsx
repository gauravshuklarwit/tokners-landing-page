import Layout from "@/components/layout";
import { Hero } from "@/components/Hero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero withFeatures={true} />
      </main>
    </Layout>
  );
}
