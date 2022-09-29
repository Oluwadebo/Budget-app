import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./component/Signup";
import NotFound from "./component/NotFound";
import Signin from "./component/Signin";
import Dashboard from "./component/Dashboard";
import Budget from "./component/Budget";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Signup" element={<Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
