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
  title: string;
  subtitle: string;
  page: string;
};

const Card: React.FC<CardProps> = ({ image, page, title, subtitle }) => {
  return (
    <div className="focus:shadow-outline focus:outline-none flex flex-col items-center justify-center rounded-3xl relative">
      <Link
        href={`projects/${page}`}
        className="border transition-transform lg:hover:scale-90 overflow-hidden duration-700 rounded-3xl"
      >
        <Image
          className="md:p-10 overflow-hidden bg-black transition-transform lg:hover:scale-125 hover:cursor-pointer duration-700 object-center object-cover rounded-3xl"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </Link>
      <p className="font-semibold text-xl mt-3 md:mt-8">{title}</p>
      <p className="text-center max-w-xs text-gray-600 md:mt-4 text-sm tracking-wide">
        {subtitle}
      </p>
    </div>
  );
};

export default Card;
