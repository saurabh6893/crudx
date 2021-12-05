import NavBar from "./Components/NavBar";
import CrudX from "./Components/Crudx";
import AllUsers from "./Components/AllUsers";
import NotFound from "./Components/NotFound";
import AddUser from "./Components/AddUser";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<CrudX />} />
        <Route exact path="/all" element={<AllUsers />} />
        <Route exact path="/add" element={<AddUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
