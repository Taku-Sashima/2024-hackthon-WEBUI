import './App.css';
import Detail from './pages/Detail/Detail.js';
import Result from './pages/Result/Result.js';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Result />} />
        <Route path="/detail/:userScentId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
