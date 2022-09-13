import "./App.css";

import Header from "./components/Header";
import Nav from "./components/Nav";
import NewExercise from "./components/NewExercise";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <NewExercise msg="Memorización"></NewExercise>
    </div>
  );
}

export default App;
