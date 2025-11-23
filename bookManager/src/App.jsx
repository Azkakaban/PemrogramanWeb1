import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import DetailBook from "./pages/DetailBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/detail/:id" element={<DetailBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
