function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 border-b-2 border-stone-900 bg-stone-300 py-20 text-5xl font-bold text-stone-100 md:text-6xl lg:text-8xl">
      <span className="bg-stone-900 p-5 md:-translate-x-48">Edward</span>
      <span className="bg-stone-900 p-5 md:translate-x-16">Vonschondorf</span>
      <span className="bg-orange-500 p-5 md:translate-x-16">Full Stack</span>
      <span className="bg-orange-500 p-5">Web Developer</span>
    </section>
  );
}

export default HeroSection;
