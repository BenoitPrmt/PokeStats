const StrenghtWeakness = ({ item }) => {
  return (
    <li
      key={item.name}
      className="text-gray-500 font-medium text-lg">
      {item.name}
    </li>
  );
};

export default StrenghtWeakness;
