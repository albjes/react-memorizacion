import { useCallback, useState } from "react";

import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");

  //const sumar = () => setContador(contador + 1);
  //const restar = () => setContador(contador - 1);

  const sumar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  const restar = useCallback(() => {
    setContador(contador - 1);
  }, [contador]);

  const handleInput = (e) => setInput(e.target.value);

  return (
    <div className="mb-11">
      <h2 className="text-3xl text-center">Contador Padre</h2>
      <nav className="mt-4 flex items-baseline space-x-2 justify-evenly">
        <button onClick={restar} className="text-4xl">
          -
        </button>
        <span className="font-bold text-3xl">{contador}</span>
        <button onClick={sumar} className="text-4xl">
          +
        </button>
      </nav>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="text"
        onChange={handleInput}
        value={input}
      />
      <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
    </div>
  );
};

export default Contador;
