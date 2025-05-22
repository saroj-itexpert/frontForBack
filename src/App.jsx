import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import SinglePage from "./pages/SinglePage";
import EditPage from "./pages/EditPage";
import Blank from "./pages/Blank";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blank-page" element={<Blank />} />
          <Route path="/create-page" element={<CreatePage />} />
          <Route path="/single-page/:id" element={<SinglePage />} />
          <Route path="/edit-page" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
