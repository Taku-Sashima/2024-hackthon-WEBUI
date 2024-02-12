import './App.css';
import Detail from './components/Detail';
import Result from './components/Result.js';
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";

function App() {
  return (   
    <Result />
    // <Routes>
    //   <Route path="/" element={<Result />} />
    // </Routes>
  );
}

export default App;
