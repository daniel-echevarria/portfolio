import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const SocialMediaIcons = ({
  desktopIconSize,
  mobileIconSize,
}: {
  desktopIconSize: number;
  mobileIconSize: number;
}) => {
  const socialIcons = [
    {
      href: "https://www.linkedin.com/in/daniel-e-772683335",
      icon: FaLinkedin,
    },
    {
      href: "https://github.com/daniel-echevarria",
      icon: FaGithub,
    },
    {
      href: "mailto:dan.echevarri@gmail.com",
      icon: FaEnvelope,
    },
  ];

  const desktopIcons = socialIcons.map((icon) => (
    <a href={icon.href}>
      <icon.icon
        size={desktopIconSize}
        className="hover:-translate-y-0.5"
      ></icon.icon>
    </a>
  ));

  const mobileIcons = socialIcons.map((icon) => (
    <a href={icon.href}>
      <icon.icon size={mobileIconSize}></icon.icon>
    </a>
  ));

  return (
    <>
      <div className="hidden lg:flex gap-3 mt-5 ">{desktopIcons}</div>

      <div className="flex gap-5 mt-5 lg:hidden justify-center">
        {mobileIcons}
      </div>
    </>
  );
};

export default SocialMediaIcons;
