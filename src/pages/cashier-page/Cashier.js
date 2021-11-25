import React from "react";
import { useState, useEffect } from "react";

import product from "../../data/product";
import "./Cashier.css";

const Cashier = () => {
  const [inputValue, setinputValue] = useState("");
  const [suggestProduct, setSuggestProduct] = useState([]);
  const [productSelected, setProductSelected] = useState([]);

  const [productUpt, setProductUpt] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [updateValue, setUpdateValue] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);

  const updateTotalHarga = () => {
    let total = 0;

    productSelected.forEach((item) => (total += item.quantity * item.price));

    setTotalHarga(total);
  };

  useEffect(() => {
    updateTotalHarga();
  }, [productSelected]);

  const updateProduct = (event) => {
    event.preventDefault();

    setShowForm(false);

    setProductSelected(productSelected.filter((item) => (item.id === productUpt.id ? (item.quantity = updateValue) : item)));
  };

  const updateValueHandler = (event) => {
    setUpdateValue(event.target.value);

    console.log(event.target.value);
  };

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
      const id = productSelected.length + 1;
      const newItem = { quantity, ...searchItem[0], id };

      console.log(newItem);

      setProductSelected([...productSelected, newItem]);
    } else {
      console.log("Not Found");
    }

    setinputValue("");
  };

  const cetakList = () => {
    let content = document.getElementById("cashier-table");
    let list = content.querySelectorAll(".list-item");
    let totalEntity = content.querySelectorAll(".list-total")[0];

    let printableArea = window.open("", "", "height=500, width=auto");

    printableArea.document.write("<html>");
    printableArea.document.write("<body > <h1>Sundries Store </h1> <table>");

    printableArea.document.write(`<tr>
      <th witdh="20ch" text-align="left">Product</th>
      <th witdh="4ch">Qty</th>
      <th witdh="10ch">Price</th>
      <th witdh="10ch">Subtotal</th>
    </tr>`);

    list.forEach((item) => {
      printableArea.document.write(`<tr>
        <td witdh="20ch">${item.getElementsByClassName("name")[0].innerText}</td>
        <td witdh="4ch">${item.getElementsByClassName("qty")[0].innerText}</td>
        <td witdh="10ch">${item.getElementsByClassName("price")[0].innerText}</td>
        <td witdh="10ch">${item.getElementsByClassName("subtotal")[0].innerText}</td>
      </tr>`);
    });

    printableArea.document.write(`<tr>
        <td witdh="34ch" colspan=3>${totalEntity.getElementsByClassName("total-header")[0].innerText}</td>
        <td witdh="10ch">${totalEntity.getElementsByClassName("total-content")[0].innerText}</td>
      </tr>`);

    printableArea.document.write("</table></body></html>");
    printableArea.document.close();
    printableArea.print();
  };

  const updateFormHandler = (id) => {
    const productUpdate = productSelected.filter((item) => item.id === id);

    setProductUpt(productUpdate[0]);
    setUpdateValue(productUpdate[0].quantity);
    setShowForm(true);
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

      {showForm && (
        <div className="form-udpate-quantity">
          <form action="" onSubmit={updateProduct}>
            <input type="number" value={updateValue} onChange={updateValueHandler} />
            <input type="submit" value="Change" />
          </form>
        </div>
      )}
      <div className="cashier-table" id="cashier-table">
        <div className="list-header">
          <div className="name">Product</div>
          <div className="qty">Qty</div>
          <div className="price">Price</div>
          <div className="subtotal">Subtotal</div>
        </div>

        <div className="cashier-table-content">
          {productSelected.map((item) => (
            <div className="list-item" key={item.id}>
              <div className="name">{item.name}</div>
              <div className="qty" onClick={() => updateFormHandler(item.id)}>
                {item.quantity}
              </div>
              <div className="price">{item.price}</div>
              <div className="subtotal">{item.quantity * item.price}</div>
            </div>
          ))}
        </div>

        <div className="list-total">
          <div className="total-header">Total</div>
          <div className="total-content">{totalHarga}</div>
        </div>
      </div>

      <div className="btn-bayar" onClick={cetakList}>
        Cetak
      </div>
    </div>
  );
};

export default Cashier;
