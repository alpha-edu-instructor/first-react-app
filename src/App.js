import Counter from "./components/Counter";
import "./css/style.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Counter title="Первый счетчик" />
        <Counter title="Второй счетчик" />
        <Counter title="Третий счетчик" />
        <Counter title="Четвертый счетчик" />
        <Counter title="Пятый счетчик" />
        <Counter title="Шестой счетчик" />
      </div>
    </div>
  );
}

export default App;
