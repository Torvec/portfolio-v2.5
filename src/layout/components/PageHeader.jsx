import PropTypes from "prop-types";

export default function PageHeader({ children }) {
  return (
    <div className="border-b-2 border-stone-900 bg-stone-200 bg-fixed py-20">
      <h1 className="orangeShadow m-auto w-fit bg-stone-800 p-4 text-center text-5xl font-bold text-stone-100 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:-translate-y-2 md:text-6xl lg:text-7xl">
        {children}
      </h1>
    </div>
  );
}

PageHeader.propTypes = {
  children: PropTypes.string.isRequired,
};
