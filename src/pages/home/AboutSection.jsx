function AboutSection() {
  return (
    <section className="p-10">
      <div className="flex flex-col gap-10 lg:flex-row">
        <div>
          <h2 className="mb-5 text-center text-6xl md:text-left">
            About Me
          </h2>
          <p className="mb-5 px-5 text-lg md:px-0 md:text-xl">
            Hi there! I am a full stack developer with a passion for creating
            beautiful and functional web applications. I have experience in
            working with various technologies, such as HTML, CSS, JavaScript,
            React, Node.js, MongoDB, and more. I enjoy learning new skills and
            exploring new challenges in the web development field.
          </p>
          <p className="mb-5 px-5 text-lg md:px-0 md:text-xl">
            In this portfolio, you can find some of the projects that I have
            worked on, both individually and collaboratively. You can also learn
            more about me, my skills, and my interests. Feel free to{" "}
            <a
              href="mailto:me@edward-vonschondorf.dev"
              className="text-orange-500 hover:underline"
            >
              contact me
            </a>{" "}
            if you have any questions or feedback. I am always open to new
            opportunities and collaborations. Thank you for visiting my website!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
