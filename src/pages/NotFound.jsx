// TODO: Make this page look better

import { useRouteError, Link } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="flex flex-grow flex-col items-center text-stone-800">
      <h1 className="text-[16rem] font-black">404</h1>
      <p className="text-center text-9xl font-black uppercase">
        Page
        <br /> Not
        <br /> Found
      </p>
      <p className="my-20 text-2xl">
        Now take me back{" "}
        <Link
          to={"/"}
          className="font-black uppercase text-orange-500 transition-all duration-300 ease-in-out hover:text-stone-500 hover:border-b-2 hover:border-stone-500"
        >
          Home
        </Link>{" "}
        please.
      </p>
    </section>
  );
}
