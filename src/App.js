import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NewBlog } from "./components/NewBlog";
import { BlogList } from "./components/BlogList";


function App() {
  return (
    <Routes>
      <Route element={<BlogList />} path="/" />;
      <Route element={<NewBlog />} path="/add" />;
    </Routes>
  );
}

export default App;
