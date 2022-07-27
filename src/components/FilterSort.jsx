import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api";

function FilterSort() {
  const ALL_CATEGORIES = "all games";
  const [category, setCategory] = useState(ALL_CATEGORIES);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
  }, []);

  return (
    <div>
      <div>
        <h2>{category}</h2>
      </div>
      <ul>
        <li>
          <Link to={`/`} onClick={() => setCategory(ALL_CATEGORIES)}>
            all games
          </Link>
        </li>
        {categories.map(({ slug }) => (
          <li key={slug}>
            <Link to={`/categories/${slug}`} onClick={() => setCategory(slug)}>
              {slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterSort;
