import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Layout from "./layout";
import Home from "./home";
import Snake from "./Games/snake/container";
import TwoZeroFourEight from "./Games/twoZeroFourEight/container";
import TicTacToe from "./Games/ticTackToe/container";
import NoPage from "./noPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Snake" element={<Snake />} />
            <Route path="TicTacToe" element={<TicTacToe />} />
            <Route path="TwoZeroFourEight" element={<TwoZeroFourEight />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
