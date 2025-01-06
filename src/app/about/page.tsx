import Image from "next/image";
import SocialMediaIcons from "../ui/SocialMediaIcons";

export default function Page() {
  return (
    <main
      className="flex flex-col-reverse lg:grid lg:grid-cols-[2fr_3fr] p-8 gap-10 sm:p-20 animate-fade-in-up"
      aria-label="About Daniel Echevarria"
    >
      <div>
        <Image
          className="hidden lg:block rounded-lg"
          src="/fun-me.jpg"
          alt="Daniel Echevarria thinking"
          width={3060}
          height={4080}
          priority
        />
        <p className="mt-4 text-center">
          <a
            href="mailto:dan.echevarri@gmail.com"
            className=" lg:w-full inline-block px-6 py-4 text-xl bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Let’s Connect!
          </a>
        </p>
      </div>

      <section className="text-sm md:text-xl lg:text-lg ">
        <h2 className="text-center text-2xl font-bold">About Me</h2>

        <div className="px-0 md:px-8">
          <p className="mt-5">Hello there 👋</p>

          <p className="mt-5">
            I’m Daniel Echevarria, a passionate full-stack web developer based
            in Berlin. I specialize in building dynamic, user-friendly websites
            and applications using modern technologies like React, Rails, and
            Next.js. With a keen eye for detail and a collaborative mindset, I
            thrive on turning ideas into functional, beautifully designed
            digital experiences.
          </p>

          <p className="hidden sm:block mt-5">
            When I’m not coding, you’ll probably find me playing chess or
            tackling a new bouldering route. I love the mental challenge of
            strategy games and the physical problem-solving of climbing, both of
            which shape my approach to complex tasks and projects. I’m also
            interested in UX design and always looking for creative ways to make
            things more intuitive and engaging for users.
          </p>

          <p className="mt-5">
            Feel free to explore my portfolio and connect with me to collaborate
            on exciting projects!
          </p>

          <SocialMediaIcons desktopIconSize={28} mobileIconSize={32} />
        </div>
      </section>
    </main>
  );
}
