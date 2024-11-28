import {useEffect, useState} from "react";
import Pokemon from "./Pokemon.jsx";

function Random() {
  const [random, setRandom] = useState(0);

  useEffect(() => {
      setRandom(Math.floor(Math.random() * 898) + 1);
  }, []);

  return (
    <Pokemon id={random} />
  );
}

export default Random;
