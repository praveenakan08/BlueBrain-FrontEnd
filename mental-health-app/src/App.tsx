import { Routes, Route } from "react-router-dom";
import Login from "./container/Login";
import Home from "./container/Home";
import Dashboard from "./container/Dashboard";
import Registration from "./container/Registration";

const App = () => {
  return (
    <Routes>
      <Route path="signup" element={<Registration />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
