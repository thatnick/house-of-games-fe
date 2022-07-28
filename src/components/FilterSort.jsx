import { useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api";
import useApi from "../hooks/useApi";

function FilterSort() {
  const ALL_CATEGORIES = "all games";
  const [category, setCategory] = useState(ALL_CATEGORIES);

  const [isLoading, categories] = useApi({
    apiCall: getCategories,
  });

  return (
    <div>
      <h2>{category}</h2>
      <ul>
        <li>
          <Link to={`/`} onClick={() => setCategory(ALL_CATEGORIES)}>
            all games
          </Link>
        </li>
        {isLoading
          ? "Loading categories..."
          : categories.map(({ slug }) => (
              <li key={slug}>
                <Link to={`/${slug}`} onClick={() => setCategory(slug)}>
                  {slug}
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default FilterSort;
