import "../styles/globals.css";
import { StateContext } from "../context/State";
import Layout from "../components/Layout";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Meta from "../components/Meta"

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const showNavbar = router.pathname === "/checkout" ? false : true;

  return (
    <main className="px-4 md:px-12 lg:px-32 bg-zinc-50 overflow-hidden">
      <StateContext>

        <Layout>
          <Meta />
          {showNavbar && <Navbar />}
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </StateContext>
    </main>
  );
}
