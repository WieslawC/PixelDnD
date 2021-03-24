import "../style/App.scss";
import Header from "./Header.js";
import Main from "./Main.js";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <div className="others">Hello There</div>
    </div>
  );
}

export default App;
