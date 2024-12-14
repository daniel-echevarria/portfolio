import Image from "next/image";
import Link from "next/link";

type ImageObj = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type CardProps = {
  image: ImageObj;
  live: string;
  title: string;
  subtitle: string;
};

const Card: React.FC<CardProps> = ({ image, title, live, subtitle }) => {
  return (
    <div className="focus:shadow-outline focus:outline-none flex flex-col items-center justify-center rounded-3xl relative ">
      <a
        href={`${live}`}
        className="border transition-transform lg:hover:scale-90 overflow-hidden duration-500 rounded-3xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="md:p-10 bg-black transition-transform lg:hover:scale-125 hover:cursor-pointer  duration-500 object-center object-cover border rounded-3xl"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </a>
      <p className="font-semibold text-xl mt-3 md:mt-8">{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;
