import React from "react";
import { useState } from "react";

import product from "../../data/product";
import "./Cashier.css";

const Cashier = () => {
  const [inputValue, setinputValue] = useState("");
  const [suggestProduct, setSuggestProduct] = useState([]);
  const [productSelected, setProductSelected] = useState([]);

  const getSuggestItem = (inputText) => {
    if (inputText.length > 0) {
      const suggestItem = product.filter((item) => item.name.toLowerCase().includes(inputText.toLowerCase()));

      setSuggestProduct(suggestItem);
    } else {
      setSuggestProduct([]);
    }
  };

  const inputChangeHandler = (event) => {
    let currentValue = event.target.value;
    setinputValue(currentValue);

    getSuggestItem(currentValue);
  };

  const selectedValue = (event) => {
    let elementTarget = event.target.innerText;

    setinputValue(elementTarget);
    setSuggestProduct([]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let choosenProduct = inputValue;

    let searchItem = product.filter((item) => item.name.toLowerCase() === choosenProduct.toLowerCase());

    if (searchItem.length === 1) {
      const quantity = 1;
      const newItem = { quantity, ...searchItem[0] };

      setProductSelected([...productSelected, newItem]);
    } else {
      console.log("Not Found");
    }

    setinputValue("");
  };

  const cetakList = () => {
    let list = document.querySelectorAll(".list-item");

    list.forEach((item) => {
      let a = item.getElementsByClassName("name")[0];
      console.log(a.innerText);
    });
  };

  return (
    <div className="cashier">
      <div className="search-item">
        <form action="" className="form-control" autoComplete="off" onSubmit={submitHandler}>
          <div className="form-input">
            <input type="text" placeholder="Search Item" id="item-name" onChange={inputChangeHandler} value={inputValue} autoComplete="off" />
            <input type="submit" value="Submit" id="submit-btn" />
          </div>
          {suggestProduct.length > 0 && (
            <div className="suggested-item">
              {suggestProduct.map((item) => (
                <div className="suggested-list" key={item.id} onClick={selectedValue}>
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </form>
      </div>
      <div className="cashier-table">
        <div className="list-header">
          <div className="name">Product</div>
          <div className="qty">Qty</div>
          <div className="price">Price</div>
          <div className="subtotal">Subtotal</div>
        </div>

        <div className="cashier-table-content">
          {productSelected.map((item, index) => (
            <div className="list-item" key={index}>
              <div className="name">{item.name}</div>
              <div className="qty">{item.quantity}</div>
              <div className="price">{item.price}</div>
              <div className="subtotal">{item.quantity * item.price}</div>
            </div>
          ))}
        </div>

        <div className="list-total">
          <div className="total-header">Total</div>
          <div className="total-content">16500</div>
        </div>
      </div>

      <div className="btn-bayar" onClick={cetakList}>
        Cetak
      </div>
    </div>
  );
};

export default Cashier;
