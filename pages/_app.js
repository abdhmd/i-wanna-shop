import "../styles/globals.css";
import { StateContext } from "../context/State";
import Layout from "../components/Layout";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <main className="px-4 md:px-12 lg:px-32 bg-zinc-50 overflow-hidden" >
      <StateContext>
        <Layout>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </StateContext>
    </main>
  );
}
