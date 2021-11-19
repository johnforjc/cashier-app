import React from "react";
import "./Cashier.css";

const Cashier = () => {
  const cetakList = () => {
    let list = document.querySelectorAll(".list-item");

    list.forEach((item) => {
      let a = item.getElementsByClassName("name")[0];
      console.log(a.innerText);
    });
  };

  return (
    <div className="cashier">
      <div className="cashier-table">
        <div className="list-header">
          <div className="name">Product</div>
          <div className="qty">Qty</div>
          <div className="price">Price</div>
          <div className="subtotal">Subtotal</div>
        </div>

        <div className="cashier-table-content">
          <div className="list-item">
            <div className="name">Yoyo Tail</div>
            <div className="qty">3</div>
            <div className="price">4500</div>
            <div className="subtotal">13500</div>
          </div>
          <div className="list-item">
            <div className="name">Monkey Tail</div>
            <div className="qty">2</div>
            <div className="price">1500</div>
            <div className="subtotal">3000</div>
          </div>
          <div className="list-item">
            <div className="name">Monkey Tail</div>
            <div className="qty">2</div>
            <div className="price">1500</div>
            <div className="subtotal">10003000</div>
          </div>
          <div className="list-item">
            <div className="name">Monkey Tail</div>
            <div className="qty">2</div>
            <div className="price">1500</div>
            <div className="subtotal">10003000</div>
          </div>
          <div className="list-item">
            <div className="name">Monkey Tail</div>
            <div className="qty">2</div>
            <div className="price">1500</div>
            <div className="subtotal">10003000</div>
          </div>
          <div className="list-item">
            <div className="name">Monkey Tail</div>
            <div className="qty">2</div>
            <div className="price">1500</div>
            <div className="subtotal">10003000</div>
          </div>
          <div className="list-item">
            <div className="name">Monkey Tail</div>
            <div className="qty">2</div>
            <div className="price">1500</div>
            <div className="subtotal">10003000</div>
          </div>
          <div className="list-item">
            <div className="name">Monkey Tail</div>
            <div className="qty">2</div>
            <div className="price">1500</div>
            <div className="subtotal">10003000</div>
          </div>
          <div className="list-item">
            <div className="name"></div>
            <div className="qty"></div>
            <div className="price"></div>
            <div className="subtotal"></div>
          </div>
          <div className="list-item">
            <div className="name"></div>
            <div className="qty"></div>
            <div className="price"></div>
            <div className="subtotal"></div>
          </div>
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
