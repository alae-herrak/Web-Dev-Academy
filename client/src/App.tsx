import { Navbar, Home, Signup, Login } from "./components";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default App;
