import "./App.css";
import Menu from "./components/menu/Menu.component";
import Main from "./components/main/Main.component";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Menu></Menu>
          <Main></Main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
