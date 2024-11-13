import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook Pro",
    imgURL:"https://i.pinimg.com/564x/5b/72/f7/5b72f7dd2b3321aba99251cdf1ea535f.jpg",
    price: 169900,
  },
  {
    id: 2,
    name: "Lenovo Yoga A12",
    imgURL:
           "https://i.pinimg.com/564x/7c/02/b6/7c02b696c8ac36f9f80df51b3b68d85d.jpg",
    price: 84720,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:"https://i.pinimg.com/564x/a6/16/ec/a616ec335ccffd8ff8dfd25b5a19e104.jpg",
    price: 162139,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL: "https://i.pinimg.com/564x/0c/7d/47/0c7d474370050426eefd3924372a7dbd.jpg",
    price: 105999,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:"https://i.pinimg.com/474x/0f/1b/87/0f1b87c179f81f1d8a40a258ea22cc31.jpg",
    price: 55900,
  },
  {
    id: 6,
    name: "Asus NoteBooks",
    imgURL:"https://i.pinimg.com/474x/9e/43/74/9e43741b918c20995dd69dde654a85c4.jpg",
    price: 169200,
  },
  {
    id: 7,
    name: "Xiaomi NoteBook",
    imgURL:"https://i.pinimg.com/564x/55/9a/e6/559ae63bc24e3ccb7639a9399da9c91a.jpg",
    price: 75460,
  },
  {
    id: 8,
    name: "Honor MagicBook",
    imgURL:"https://i.pinimg.com/564x/16/6a/bd/166abd4338f95599a3f9f2f73a8a6e17.jpg",
    price: 135842,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
