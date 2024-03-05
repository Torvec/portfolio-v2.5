import ProfilePicURL from "/assets/img/me.png";

function HeroSection() {
  return (
    <section className="bg-heroPattern flex justify-center border-b-2 border-stone-500 bg-stone-100 bg-fixed px-2 py-36 text-5xl font-bold text-stone-100 md:text-6xl lg:text-7xl">
      <div className="flex flex-col border-4 border-stone-950 bg-stone-950 md:flex-row">
        <div>
          <img
            src={ProfilePicURL}
            alt="Pic of me at Horseshoe Canyon in Arizona"
            className="max-h-96 min-h-full min-w-full border-x-stone-950 object-cover md:border-r-4"
          />
        </div>
        <div className="flex flex-col">
          <h1>
            <span className="block bg-stone-800 px-5 py-3">Edward</span>
            <span className="block bg-stone-800 px-5 py-3">Vonschondorf</span>
          </h1>
          <h2>
            <span className="block bg-orange-500 px-5 py-3">Full Stack</span>
            <span className="block bg-orange-500 px-5 py-3">Web Developer</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
