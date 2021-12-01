import NavBar from "./Components/NavBar";
import CrudX from "./Components/Crudx";
import AllUsers from "./Components/AllUsers";
import AddUsers from "./Components/AddUsers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<CrudX />} />
        <Route exact path="/all" element={<AllUsers />} />
        <Route exact path="/add" element={<AddUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
