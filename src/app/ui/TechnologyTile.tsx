import { IconType } from "react-icons";

type ColorDetails = {
  border: string;
  text: string;
  hover: string;
};

export type ColorClassKey = "red" | "indigo" | "purple" | "orange";

type ColorClass = {
  [key in ColorClassKey]: ColorDetails;
};

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
  color: ColorClassKey;
}) => {
  const colorClasses: ColorClass = {
    red: {
      border: "border-red-600",
      text: "text-red-600",
      hover: "hover:bg-red-600",
    },
    indigo: {
      border: "border-indigo-600",
      text: "text-indigo-600",
      hover: "hover:bg-indigo-600",
    },
    purple: {
      border: "border-purple-600",
      text: "text-purple-600",
      hover: "hover:bg-purple-600",
    },
    orange: {
      border: "border-orange-600",
      text: "text-orange-600",
      hover: "hover:bg-orange-600",
    },
  };

  const borderColor = colorClasses[color].border;
  const textColor = colorClasses[color].text;
  const hoverColor = colorClasses[color].hover;

  return (
    <span
      className={`flex items-center gap-2 text-sm border p-2 rounded-3xl ${borderColor} ${textColor} ${hoverColor} hover:text-white`}
    >
      <technology.icon size={size} /> {technology.name}
    </span>
  );
};

export default TechnologyTile;
