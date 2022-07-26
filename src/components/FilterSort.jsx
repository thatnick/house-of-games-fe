import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api";

function FilterSort({ category, setCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
  }, []);

  return (
    <div>
      <div>
        <h2>{category ? category.slug : "All games"}</h2>
      </div>
      <ul>
        <li>
          <Link to={`/`}>All games</Link>
        </li>
        {categories.map((category) => (
          <li key={category.slug}>
            <Link to={`/categories/${category.slug}`}>{category.slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterSort;
