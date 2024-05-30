import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import Dashboard from "./components/Dashboard";
import Registration from "./components/Registration";
import Questionnaire from "./components/Questionnaire";

const App = () => {
  return (
    <Routes>
      <Route path="signup" element={<Registration />} />
      <Route path="questionnaire" element={<Questionnaire />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
