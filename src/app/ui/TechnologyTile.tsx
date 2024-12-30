const TechnologyTile = ({ technology, size, color }) => {
  const colorClasses = {
    red: "border-red-500",
  };

  const border = colorClasses[color];

  return (
    <span
      className={`flex items-center gap-2 text-sm border p-2 rounded-3xl ${border}`}
    >
      <technology.icon size={size} color={color} /> {technology.name}
    </span>
  );
};

export default TechnologyTile;
