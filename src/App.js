import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <Router>
    <Routes>
      <Route>
        <Route path="/*" element={<Home/>} caseSensitive  />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
