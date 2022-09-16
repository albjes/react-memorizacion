import { memo, useMemo } from "react";

const ContadorHijo = ({ contador, sumar, restar }) => {
  /* let superNumero = 0;

  for (let i = 0; i < 1000000000; i++) {
    superNumero++;
  } */

  const superNumero = useMemo(() => {
    let numero = 0;

    for (let i = 0; i < 1000000000; i++) {
      numero++;
    }

    return numero;
  }, []);

  console.log("Contador Hijo se renderiza");

  return (
    <div className="mb-11 text-center mt-4">
      <h2 className="text-3xl">Contador Hijo</h2>
      <nav className="mt-4 flex items-baseline space-x-2 justify-evenly">
        <button onClick={restar} className="text-4xl">
          -
        </button>
        <span className="font-bold text-3xl text-red-400">{contador}</span>
        <button onClick={sumar} className="text-4xl">
          +
        </button>
      </nav>
      <h2 className="text-3xl">{superNumero}</h2>
    </div>
  );
};

export default memo(ContadorHijo);
