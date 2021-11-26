import React from "react";

const Categories = ({ category, filterCategories }) => {
  return (
    <button className="filter-btn" onClick={() => filterCategories(category)}>
      {category}
    </button>
  );
};

export default Categories;
