import { Routes, Route } from "react-router-dom";
import Breeds from "./breeds/Breeds.component";
import Home from "./home/Home.component";
import NotFound from "./not-found/NotFound.component";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/breeds" element={<Breeds />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Main;
