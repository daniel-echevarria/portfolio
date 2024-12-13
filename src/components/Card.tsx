import Image from "next/image";

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
};

const Card: React.FC<CardProps> = ({ image, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl relative overflow-hidden">
      <div className="border transition-transform hover:scale-90 overflow-hidden duration-500 rounded-3xl">
        <Image
          className="p-10 bg-black transition-transform hover:scale-125 hover:cursor-pointer  duration-500 object-center object-cover border rounded-3xl"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </div>
      <p className="font-semibold text-xl mt-10">{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;
