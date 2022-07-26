import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FilterSort from "./components/FilterSort";
import ReviewList from "./components/ReviewList";

function App() {
  const [category, setCategory] = useState();
  return (
    <div>
      <h1>House of Games</h1>

      <main>
        <BrowserRouter>
          <FilterSort setCategory={(category, setCategory)} />
          <Routes>
            <Route path="/" element={<ReviewList />} />
            <Route path="/categories/:categorySlug" element={<ReviewList />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
