import "../style/App.scss";
import Header from "./Header.js";
import Main from "./Main.js";
import CharacterChoose from "./CharacterChoose.js";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <CharacterChoose />
    </div>
  );
}

export default App;
