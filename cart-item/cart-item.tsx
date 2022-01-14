import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link, useHistory } from "react-router-dom";
import { proccessStep1Txt } from "../../static";
import "./cart-item.scss";

type Props = {
  orderDetails?: any;
  isDelivery?: boolean;
};

function CartItem(props: Props) {
  const history = useHistory();

  const [showLoader, setShowLoader] = useState(false);

  const handleRemoveItem = (orderNo: number) => {
    setShowLoader(true);
    props.orderDetails.forEach((order: any, index: number) => {
      if (order.orderNo == orderNo) {
        props.orderDetails.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(props.orderDetails));
        if (props.orderDetails && props.orderDetails.length == 0) {
          history.push({ pathname: "/products" });
        } else {
          window.location.reload();
        }
      }
    });
  };

  return props.orderDetails.map((order: any) => (
    <div className="cartItemMainCont">
      {showLoader && (
        <div className="centered">
          <Loader type="TailSpin" color="#ff6a02" height={100} width={100} />
        </div>
      )}
      <img className="cartImg" src={order.productDetails.imageURL} />
      <div className="cartItemDespCont">
        <h2 className="mb-3">{order.productDetails.productTitle}</h2>
        <div className="cartDetailItem">
          <p className="gray">Production Time</p>
          <p className="ml10">
            {order.productDetails.productProductionTime * order.quantity} hours
          </p>
        </div>
        <div className="cartDetailItem">
          <p className="gray">Quantity</p>
          <p className="ml10">{order.quantity}</p>
        </div>
        <div className="cartDetailItem">
          <p className="gray">Size</p>
          <p className="ml10">{order.size}</p>
        </div>
        <div className="cartDetailItem">
          <p className="gray">Lamination</p>
          <p className="ml10">{order.lamination}</p>
        </div>
        <div className="cartDetailItem">
          <p className="gray">Printing</p>
          <p className="ml10">{order.prinitng}</p>
        </div>
        <div className="cartDetailItem">
          <p className="gray">Eyelets</p>
          <p className="ml10">{order.eyeletQL}</p>
        </div>
      </div>
      <div className="cartRightItemCont">
        {props.isDelivery ? (
          <h3 className="mb-3">
            {" "}
            $
            {(
              order.productDetails.productPrice * order.quantity +
              order.productDetails.productPrice * order.quantity * 0.1
            ).toFixed(2)}
          </h3>
        ) : (
          <h3 className="mb-3">
            {" "}
            ${(order.productDetails.productPrice * order.quantity).toFixed(2)}
          </h3>
        )}
        <button
          className="btn primaryBtn"
          onClick={() => handleRemoveItem(order.orderNo)}
        >
          Remove From Cart
        </button>
        <Link to="/products">
          <button className="btn primaryBtn">Continue Shopping</button>
        </Link>

        {/* <p className="small pointer secondary">Remove From Cart</p> */}
      </div>
    </div>
  ));
}

export default CartItem;
