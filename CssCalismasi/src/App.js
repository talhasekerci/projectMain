import { Route, Routes } from "react-router-dom";
import Main from "./components/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
