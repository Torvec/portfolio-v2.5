// TODO: Make this page look better

import { useRouteError, Link } from "react-router-dom";

export default function ProjectsError() {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="flex flex-grow flex-col items-center text-stone-800">
      <h1 className="text-center text-9xl font-black uppercase">
        Project
        <br /> Not
        <br /> Found
      </h1>
      <p className="my-20 text-2xl">
        Now take me to the{" "}
        <Link
          to={"/projects"}
          className="font-black uppercase text-orange-500 transition-all duration-300 ease-in-out hover:border-b-2 hover:border-stone-500 hover:text-stone-500"
        >
          Projects Page
        </Link>{" "}
        please.
      </p>
    </section>
  );
}
