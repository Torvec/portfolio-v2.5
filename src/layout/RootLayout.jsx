import "../styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <section className="flex justify-center border-b-4 border-stone-900 bg-yellow-300 font-bold">
        CURRENTLY UNDER DEVELOPMENT
      </section>
      <Header />
      <main className="overflow-x-hidden bg-stone-100 font-sans text-stone-800">
        <Outlet />
      </main>
      <Footer />
      <section className="flex justify-center bg-yellow-300 font-bold">
        CURRENTLY UNDER DEVELOPMENT
      </section>
    </>
  );
}
