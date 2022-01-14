import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fire from "../../fire";
import { product } from "../../types/product";
import Product from "../product/product";
import "./home-products.scss";

function Homeproducts() {
  const [allProducts, setAllProducts] = useState<Array<product>>([]);

  useEffect(() => {
    fire
      .database()
      .ref("allproducts")
      .limitToFirst(4)
      .once("value", (snapshot) => {
        var products = snapshot.val();
        var allProductsData = [];
        for (var key in products) {
          allProductsData.push(products[key]);
        }
        setAllProducts(allProductsData);
      });
  }, []);

  return (
    <div className="row productsCont" style={{ padding: "60px 0px" }}>
      <div className="col-sm-11 px-0">
        <div className="amazingProdheading">
          <h2 className="secondary my-0">Our Amazing Products</h2>
          <div className="borderedItem"></div>
        </div>
        <div className="row">
          {allProducts.map((product) => (
            <div key={product.productId} className="col-sm-3">
              <Link to={{pathname: "/product-detail", state: {product}}}>
                <Product ProductInfo={product} />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link to="/products">
            <button className="btn primaryBtn">View All Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homeproducts;
