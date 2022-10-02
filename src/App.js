import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotFound from "./component/NotFound";
import Budget from "./component/Budget";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Budget />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
