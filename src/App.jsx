import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ReviewList from "./components/ReviewList";

function App() {
  return (
    <div>
      <h1>House of Games</h1>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ReviewList />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
