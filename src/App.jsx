import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FilterSort from "./components/FilterSort";
import ReviewList from "./components/ReviewList";
import Review from "./components/Review";
import ErrorToast from "./components/ErrorToast";
import { ErrorContext } from "./contexts/ErrorContext";
import { useState } from "react";

function App() {
  const [error, setError] = useState(null);
  return (
    <div>
      <h1>House of Games</h1>
      <ErrorContext.Provider value={{ error, setError }}>
        <main>
          <BrowserRouter>
            <FilterSort />
            <Routes>
              <Route path="/" element={<ReviewList />} />
              <Route path="/:categorySlug" element={<ReviewList />} />
              <Route
                path="/:categorySlug/:reviewId/:gameTitle"
                element={<Review />}
              />
            </Routes>
          </BrowserRouter>
        </main>
        <ErrorToast />
      </ErrorContext.Provider>
    </div>
  );
}

export default App;
