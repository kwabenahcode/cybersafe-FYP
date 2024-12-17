import "./App.css";
import Courses from "./Pages/Courses/Courses";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resources from "./Pages/Resources/Resources";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import PrivateRoute from "./Components/ProtectedRoute/PrivateRoute";
import Tips from "./Pages/Tips/Tips";
import Header from "./Components/Navbar/Header";
import RiskAssessment from "./Pages/RiskAssess/RiskAssessment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/resources"
          element={
            <PrivateRoute>
              <Resources />
            </PrivateRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <PrivateRoute>
              <Courses />
            </PrivateRoute>
          }
        />
        <Route
          path="/tips"
          element={
            <PrivateRoute>
              <Tips />
            </PrivateRoute>
          }
        />
        <Route
          path="/assessment"
          element={
            <PrivateRoute>
              <RiskAssessment />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
