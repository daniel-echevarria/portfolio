import { IconType } from "react-icons";
import colorClasses from "@/data/colorClasses";

type Technology = {
  name: string;
  icon: IconType;
};

const TechnologyTile = ({
  technology,
  size,
  color,
}: {
  technology: Technology;
  size: number;
  color: string;
}) => {
  const { borderColor, textColor, hoverColor } = colorClasses[color];
  return (
    <span
      className={`flex items-center gap-2 text-sm border p-2 rounded-3xl ${borderColor} ${textColor} ${hoverColor} hover:text-white`}
    >
      <technology.icon size={size} /> {technology.name}
    </span>
  );
};

export default TechnologyTile;
