import "./App.css";
import Menu from "./components/menu/Menu.component";
import Main from "./components/main/Main.component";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu></Menu>
        <Main></Main>
      </div>
    </BrowserRouter>
  );
};

export default App;
