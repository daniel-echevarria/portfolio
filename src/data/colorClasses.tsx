export type ColorClassKey = "amber" | "red" | "yellow" | "orange";

type ColorDetails = {
  borderColor: string;
  textColor: string;
  hoverColor: string;
  bgColor: string;
};

type ColorClass = {
  [key in ColorClassKey]: ColorDetails;
};

const colorClasses: ColorClass = {
  red: {
    borderColor: "border-red-600",
    textColor: "text-red-600",
    hoverColor: "hover:bg-red-600",
    bgColor: "bg-red-600",
  },
  amber: {
    borderColor: "border-amber-400",
    textColor: "text-amber-400",
    hoverColor: "hover:bg-amber-400",
    bgColor: "bg-amber-400",
  },
  yellow: {
    borderColor: "border-yellow-600",
    textColor: "text-yellow-600",
    hoverColor: "hover:bg-yellow-600",
    bgColor: "bg-yellow-600",
  },
  orange: {
    borderColor: "border-orange-600",
    textColor: "text-orange-600",
    hoverColor: "hover:bg-orange-600",
    bgColor: "bg-orange-600",
  },
};

export default colorClasses;
