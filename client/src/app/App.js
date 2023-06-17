import "../styles/reset.scss"
import "./App.scss";
import Form from "../components/form/Form";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Dejfakturu.cz</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
