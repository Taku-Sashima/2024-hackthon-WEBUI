import './App.css';
import Detail from './components/Detail';
import Result from './components/Result.js';
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";

function App() {
  return (   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Result />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
