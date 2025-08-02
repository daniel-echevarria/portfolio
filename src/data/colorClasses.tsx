type ColorDetails = {
  borderColor: string;
  textColor: string;
  hoverColor: string;
  bgColor: string;
};

type ColorClass = {
  [key: string]: ColorDetails;
};

const colorClasses: ColorClass = {
  indigo: {
    borderColor: "border-indigo-700",
    textColor: "text-indigo-700",
    hoverColor: "hover:bg-indigo-700",
    bgColor: "bg-indigo-700",
  },
  red: {
    borderColor: "border-red-500",
    textColor: "text-red-500",
    hoverColor: "hover:bg-red-500",
    bgColor: "bg-red-500",
  },
  purple: {
    borderColor: "border-purple-900",
    textColor: "text-purple-900",
    hoverColor: "hover:bg-purple-900",
    bgColor: "bg-purple-900",
  },
  orange: {
    borderColor: "border-orange-600",
    textColor: "text-orange-600",
    hoverColor: "hover:bg-orange-600",
    bgColor: "bg-orange-600",
  },
  teal: {
    borderColor: "border-teal-600",
    textColor: "text-teal-600",
    hoverColor: "hover:bg-teal-600",
    bgColor: "bg-teal-600",
  },
};

export default colorClasses;
