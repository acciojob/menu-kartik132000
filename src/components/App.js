import React from "react";
import { useState } from "react";
import "./styles.css";

const MENU_DATA = [
  { id: 1, title: "Buttermilk Pancakes", category: "breakfast", price: "$15.99", img: "./images/item-1.jpeg", desc: "Delicious buttermilk pancakes with syrup." },
  { id: 2, title: "Diner Double", category: "lunch", price: "$13.99", img: "./images/item-2.jpeg", desc: "Classic double-stacked burger with fries." },
  { id: 3, title: "Godzilla Milkshake", category: "shakes", price: "$6.99", img: "./images/item-3.jpeg", desc: "A monstrous milkshake with chocolate drizzle." },
  { id: 4, title: "Country Delight", category: "breakfast", price: "$20.99", img: "./images/item-4.jpeg", desc: "A hearty country-style breakfast plate." },
  { id: 5, title: "Egg Attack", category: "lunch", price: "$22.99", img: "./images/item-5.jpeg", desc: "Savory egg sandwich with cheese and bacon." },
  { id: 6, title: "Oreo Dream", category: "shakes", price: "$18.99", img: "./images/item-6.jpeg", desc: "Creamy Oreo milkshake with whipped cream." },
  { id: 7, title: "Bacon Overflow", category: "breakfast", price: "$8.99", img: "./images/item-7.jpeg", desc: "Bacon-lovers' dream breakfast plate." },
  { id: 8, title: "American Classic", category: "lunch", price: "$12.99", img: "./images/item-8.jpeg", desc: "A traditional American-style cheeseburger." },
  { id: 9, title: "Quarantine Buddy", category: "shakes", price: "$16.99", img: "./images/item-9.jpeg", desc: "A comforting milkshake with a twist." },
];

const categories = ["All", "Breakfast", "Lunch", "Shakes"];

const Menu = () => {
  const [list, setList] = useState(MENU_DATA);
  const [activeCategory, setActiveCategory] = useState("All");

  const onFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setList(MENU_DATA);
    } else {
      setList(MENU_DATA.filter((item) => item.category.toLowerCase() === category.toLowerCase()));
    }
  };

  return (
    <div id="main" className="container">
      <h1>Our Menu</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <button
            key={category}
            id={`filter-btn-${index}`}
            className={activeCategory === category ? "active" : ""}
            onClick={() => onFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu">
        {list.map((item) => (
          <div
            className="menu-item"
            key={item.id}
            data-test-id={`menu-item-${item.category.toLowerCase()}`}
          >
            <img src={item.img} alt={item.title} />
            <div className="menu-content">
              <h3>{item.title} <span className="price">{item.price}</span></h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
