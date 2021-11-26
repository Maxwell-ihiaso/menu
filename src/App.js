import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [categories, setCategories] = useState([]);
  const [menus, setMenus] = useState(items);

  const getCategories = () => {
    const uniqueCategories = [...new Set(items.map((item) => item.category))];
    setCategories(["all", ...uniqueCategories]);
  };

  const filterCategories = (category) => {
    category === "all"
      ? setMenus(items)
      : setMenus(items.filter((item) => item.category === category));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <main className="section">
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <section className="btn-container">
          {categories.map((category, i) => {
            return (
              <Categories
                key={i}
                category={category}
                filterCategories={filterCategories}
              />
            );
          })}
        </section>
        <section className="section-center">
          {menus.map((menu) => {
            return <Menu key={menu.id} {...menu} />;
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
