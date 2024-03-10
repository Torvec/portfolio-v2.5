import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 border-b-4 border-stone-900 bg-stone-300 py-20 text-5xl font-bold text-stone-100 md:text-6xl lg:text-8xl">
      <motion.span
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: "-10vw",
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0,
        }}
        exit={{}}
        className="bg-stone-900 p-5"
      >
        Edward
      </motion.span>
      <motion.span
        initial={{
          x: "100vw",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.25,
        }}
        exit={{}}
        className="bg-stone-900 p-5"
      >
        Vonschondorf
      </motion.span>
      <motion.span
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: "-4vw",
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.5,
        }}
        exit={{}}
        className="bg-orange-500 p-5"
      >
        Full Stack
      </motion.span>
      <motion.span
        initial={{
          x: "100vw",
        }}
        animate={{
          x: "5vw",
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.75,
        }}
        exit={{}}
        className="bg-orange-500 p-5"
      >
        Web Developer
      </motion.span>
    </section>
  );
}

export default HeroSection;
