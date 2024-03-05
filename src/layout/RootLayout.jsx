import "../styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header />
      <main className="bg-stone-50 font-sans text-stone-800">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
