import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import RecentAds from "@/components/RecentAds";

export default function Home() {
  return (
    <>
      <body>
        <main className="main-content">
          <Header />
          <RecentAds />
        </main>
      </body>
    </>
  );
}
