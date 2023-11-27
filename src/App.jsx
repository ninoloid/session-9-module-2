import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<></>}></Route>
        <Route path="/tweets" element={<></>}></Route>
      </Routes>
    </>
  );
}

export default App;
