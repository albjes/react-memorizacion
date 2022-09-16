import "./App.css";

import Contador from "./components/Contador";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NewExercise from "./components/NewExercise";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <NewExercise msg="Memorización con REACT MEMO">
        <div className="w-1/2">
          <a
            href="https://es.reactjs.org/docs/react-api.html#reactmemo"
            target="_blank"
            rel="noreferrer"
          >
            Memo
          </a>
          <ul className="list-disc mb-4">
            <li>Se encargará de memorizar un componente,</li>
            <li>
              Lo vuelve a memorizar al momento de que su <b>props</b> cambian.
            </li>
            <li>Evita re-renderizado.</li>
            <li>
              Hay que evitarlo en la medida de lo posible, pues pordría ser más
              costos la tarea de memorización que el re-renderizado del
              componente.
            </li>
            <li>Úsalo, cuando:</li>
            <ul className="list-decimal">
              <li>Tenemos muchos elementos renderizados en una lista.</li>
              <li>Llamamos datos de APIs.</li>
              <li>Un componente se vuelve muy pesado.</li>
            </ul>
          </ul>
          <a
            href="https://es.reactjs.org/docs/hooks-reference.html#usecallback"
            target="_blank"
            rel="noreferrer"
          >
            useCallback
          </a>
          <ul className="list-disc mb-4">
            <li>
              Memoriza una función, para no volver a definir en cada render.
            </li>
            <li>
              Úsalo siempre que se pase una función como <b>prop</b> a un
              componente memorizad.
            </li>
            <li>
              Úsalo siempre que se pase una función como parametro de un efecto.
            </li>
          </ul>
          <a
            href="https://es.reactjs.org/docs/hooks-reference.html#usememo"
            target="_blank"
            rel="noreferrer"
          >
            useMemo
          </a>
          <ul className="list-disc mb-4">
            <li>
              Memoriza un valor calculado, es decir, el resultado de una
              función.
            </li>
            <li>Genera propiedades computadas.</li>
            <li>Úsalo en procesos pesados.</li>
          </ul>
        </div>
        <Contador />
      </NewExercise>
    </div>
  );
}

export default App;
