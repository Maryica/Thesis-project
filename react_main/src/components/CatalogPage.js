import React, { useState } from "react";

import Header from "./Header";
import ProductItem from "./ProductItem";
import { HandySvg } from "handy-svg";
import drop_down_arrow from "../img/drop-down_arrow.svg";

import products from "./productsData";



function pagination(array, pageType, pageNumber) {
  return array.slice((pageNumber - 1) * pageType, pageNumber * pageType);
}

function CatalogPage() {

  const [currentPage, setCurrentPage] = useState(1);
  const pageType = 9;
  const [selectedTypes, setSelectedTypes] = useState([]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((s) => s !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };


  const displayedProducts = pagination(
    products.filter(
      (product) =>
        selectedTypes.length === 0 || selectedTypes.includes(product.type)
    ),
    pageType,
    currentPage
  );


  const totalPages = Math.ceil(
    products.filter(
      (product) =>
        selectedTypes.length === 0 || selectedTypes.includes(product.type)
    ).length / pageType
  );

  return (
    <div className="box-content">
      <Header />
      <content className="content">
        <div className="head center">
          <h1 className="head_title">Корма</h1>
          <nav className="breadcrums">
            <a href="/" className="breadcrums__link">
              Главная
            </a>
            <a
              href="/catalog"
              className="breadcrums__link breadcrums__link__highlight"
            >
              Корма
            </a>
          </nav>
        </div>
        <div className="filter-sorter center">

          <div className="sorter">

            <details className="sorter__details">
              <summary className="sorter__summary">
                <span className="sorter__title">Фильтр</span>
                <HandySvg src={drop_down_arrow} width="11" height="6" />
              </summary>
              <div className="sorter__content">
                <div className="sorter__item">
                  <input
                    type="checkbox"
                    className="sorter__checkbox"
                    id="sorter__type-dog"
                    defaultChecked="true"
                    onChange={() => handleTypeChange("dog")}
                    checked={selectedTypes.includes("dog")}
                  />
                  <label className="sorter__label" htmlFor="sorter__type-dog">
                    Собаки
                  </label>
                </div>
                <div className="sorter__item">
                  <input
                    type="checkbox"
                    className="sorter__checkbox"
                    id="sorter__type-cat"
                    defaultChecked="true"
                    onChange={() => handleTypeChange("cat")}
                    checked={selectedTypes.includes("cat")}
                  />
                  <label className="sorter__label" htmlFor="sorter__type-cat">
                    Кошки
                  </label>
                </div>
                <div className="sorter__item">
                  <input
                    type="checkbox"
                    className="sorter__checkbox"
                    id="sorter__type-baby"
                    defaultChecked="true"
                    onChange={() => handleTypeChange("baby")}
                    checked={selectedTypes.includes("baby")}
                  />
                  <label className="sorter__label" htmlFor="sorter__type-baby">
                    Малыши
                  </label>
                </div>

              </div>
            </details>

          </div>
        </div>
        <div className="products spec_catalog center">
          <div className="product_items product_items_spec">
            {displayedProducts.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>

          <div className="catalog_nav">
            <nav className="catalog_nav__box">
              <div className="catalog_nav__pagination">
                {Array.from(
                  { length: totalPages },
                  (_, index) => (
                    <a
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className="catalog_nav__link"
                    >
                      {index + 1}
                    </a>
                  )
                )}
              </div>
            </nav>
          </div>
        </div>
      </content>

    </div>
  );
}

export default CatalogPage;
