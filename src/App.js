import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Account from "./Pages/Account";
import ProtectedRoute from "./Pages/ProtectedRoute";


function App() {
  return (
    <div className="text-3xl font-bold underline">
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<LogIn />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>}/>
     </Routes>
    </div>
  );
}

export default App;
