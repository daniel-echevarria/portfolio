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
    <>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      <p>{title}</p>
      <p>{subtitle}</p>
    </>
  );
};

export default Card;
