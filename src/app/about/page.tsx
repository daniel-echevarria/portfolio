import Image from "next/image";

export default function Page() {
  return (
    <main
      className="grid lg:grid-cols-[2fr_3fr] items-center text-sm md:text-xl lg:text-lg p-8 gap-10 sm:p-20 animate-fade-in-up "
      aria-label="About Daniel Echevarria"
    >
      <Image
        className="hidden lg:block "
        src="/fun-me.jpg"
        alt="Daniel Echevarria thinking"
        width={3060}
        height={4080}
        priority
      />

      <section className="">
        <h2 className="text-center text-2xl font-bold">About Me</h2>

        <div className="px-8">
          <p className="mt-5">Hello there 👋</p>

          <p className="mt-5">
            Thank you for stopping by and taking the time to learn more about
            me!
          </p>

          <p className="mt-5">
            I’m Daniel Echevarria, a passionate full-stack web developer based
            in Berlin. I specialize in building dynamic, user-friendly websites
            and applications using modern technologies like React, Rails, and
            Next.js. With a keen eye for detail and a collaborative mindset, I
            thrive on turning ideas into functional, beautifully designed
            digital experiences.
          </p>

          <p className="mt-5">
            When I’m not coding, you’ll probably find me playing chess or
            tackling a new bouldering route. I love the mental challenge of
            strategy games and the physical problem-solving of climbing, both of
            which shape my approach to complex tasks and projects. I’m also
            interested in UX design and always looking for creative ways to make
            things more intuitive and engaging for users.
          </p>
        </div>

        <p className="px-8 mt-8 text-center">
          <a
            href="mailto:dan.echevarri@gmail.com"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Let’s Connect!
          </a>
        </p>
      </section>
    </main>
  );
}
