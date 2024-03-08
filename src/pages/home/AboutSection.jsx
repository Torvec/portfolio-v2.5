import ProfilePicURL from "/assets/img/me.png";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center gap-10 border-b-4 border-stone-900 bg-stone-200 p-10 text-xl md:p-20">
      <motion.img
        src={ProfilePicURL}
        alt="Pic of me at Horseshoe Canyon, Arizona, USA"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-96 w-96 border-4 border-stone-900 object-cover"
      />
      <motion.p
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Hi there! I am a full stack developer with a passion for creating
        beautiful and functional web applications. I have experience in working
        with various technologies, such as HTML, CSS, JavaScript, React,
        Node.js, MongoDB, and more. I enjoy learning new skills and exploring
        new challenges in the web development field.
      </motion.p>
      <motion.p
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        In this portfolio, you can find some of the projects that I have worked
        on, both individually and collaboratively. You can also learn more about
        me, my skills, and my interests. Feel free to{" "}
        <a
          href="mailto:me@edward-vonschondorf.dev"
          className="text-orange-500 hover:underline"
        >
          contact me
        </a>{" "}
        if you have any questions or feedback. I am always open to new
        opportunities and collaborations. Thank you for visiting my website!
      </motion.p>
    </section>
  );
}

export default AboutSection;
