export type ColorClassKey = "red" | "indigo" | "purple" | "orange";

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
  indigo: {
    borderColor: "border-indigo-600",
    textColor: "text-indigo-600",
    hoverColor: "hover:bg-indigo-600",
    bgColor: "bg-indigo-600",
  },
  purple: {
    borderColor: "border-purple-600",
    textColor: "text-purple-600",
    hoverColor: "hover:bg-purple-600",
    bgColor: "bg-purple-600",
  },
  orange: {
    borderColor: "border-orange-600",
    textColor: "text-orange-600",
    hoverColor: "hover:bg-orange-600",
    bgColor: "bg-orange-600",
  },
};

export default colorClasses;
