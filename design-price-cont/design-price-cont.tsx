import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./design-price-cont.scss";

type Props = {
  productAndQuoteDetails: any;
};

function DesignPriceCont(props: Props) {
  let history = useHistory();
  const [productProductionTime, setProductProductionTime] = useState<number>(
    props.productAndQuoteDetails.productDetails.productProductionTime *
      props.productAndQuoteDetails.instantQuoteVals.quantity
  );
  const [quantity, setQuantity] = useState<number>(
    props.productAndQuoteDetails.instantQuoteVals.quantity
  );
  const [size, setSize] = useState<number>(
    props.productAndQuoteDetails.instantQuoteVals.size
  );
  const [lamination, setLamination] = useState<number>(
    props.productAndQuoteDetails.instantQuoteVals.lamination
  );
  const [prinitng, setPrinting] = useState<number>(
    props.productAndQuoteDetails.instantQuoteVals.printedSides
  );
  const [eyeletQL, setEyeletQL] = useState<number>(
    props.productAndQuoteDetails.instantQuoteVals.eyeletQL
  );
  const [deliveryMethod, setDeliveryMethod] = useState<string>(
    props.productAndQuoteDetails.instantQuoteVals.delivery
  );
  const [totalDeliveryCharges, setTotalDeliveryCharges] = useState<string>(
    props.productAndQuoteDetails.instantQuoteVals.delivery == "D"
      ? (
          props.productAndQuoteDetails.productDetails.productPrice *
          props.productAndQuoteDetails.instantQuoteVals.quantity *
          0.1
        ).toFixed(2)
      : (0).toFixed(2)
  );
  const [totalCharges, setTotalCharges] = useState<string>(
    props.productAndQuoteDetails.productDetails.productPrice.toFixed(2)
  );

  const orderNow = () => {
    if (localStorage.getItem("cart")) {
      var cart = JSON.parse(localStorage.getItem("cart")!);
      var orderDetails = {
        orderNo: cart.length + 1,
        productProductionTime: productProductionTime,
        quantity: quantity,
        size: size,
        lamination: lamination,
        prinitng: prinitng,
        eyeletQL: eyeletQL,
        totalCharges: totalCharges,
        totalDeliveryCharges: totalDeliveryCharges,
        deliveryMethod: deliveryMethod,
        productDetails: props.productAndQuoteDetails.productDetails,
      };

      cart.push(orderDetails);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      var myCart = new Array();
      var firstOrderDetails = {
        orderNo: 1,
        productProductionTime: productProductionTime,
        quantity: quantity,
        size: size,
        lamination: lamination,
        prinitng: prinitng,
        eyeletQL: eyeletQL,
        totalCharges: totalCharges,
        totalDeliveryCharges: totalDeliveryCharges,
        deliveryMethod: deliveryMethod,
        productDetails: props.productAndQuoteDetails.productDetails,
      };

      myCart.push(firstOrderDetails);
      localStorage.setItem("cart", JSON.stringify(myCart));
    }

    history.push({
      pathname: "/checkout",
      state: { productAndQuoteDetails: props.productAndQuoteDetails },
    });
  };

  return (
    <div className="row designPriceMainCont">
      <div className="col-sm-11 px-0">
        <div className="designPriceCont">
          <div className="cartItemDespCont">
            <h2 className="mb-3">
              {props.productAndQuoteDetails.productDetails.productTitle}
            </h2>
            <div className="cartDetailItem">
              <p className="gray">Production Time</p>
              <p className="ml10">{productProductionTime} hours</p>
            </div>
            <div className="cartDetailItem">
              <p className="gray">Quantity</p>
              <p className="ml10">{quantity}</p>
            </div>
            <div className="cartDetailItem">
              <p className="gray">Size</p>
              <p className="ml10">{size}</p>
            </div>
            <div className="cartDetailItem">
              <p className="gray">Lamination</p>
              <p className="ml10">{lamination}</p>
            </div>
            <div className="cartDetailItem">
              <p className="gray">Printing</p>
              <p className="ml10">{prinitng}</p>
            </div>
            <div className="cartDetailItem">
              <p className="gray">Eyelets</p>
              <p className="ml10">{eyeletQL}</p>
            </div>
          </div>
          <div className="cartRightItemCont">
          {deliveryMethod == "D" ? (
            <h3 className="mb-3" style={{color: "#FF6A02"}}> $
            {((props.productAndQuoteDetails.productDetails.productPrice * props.productAndQuoteDetails.instantQuoteVals.quantity) +
              (props.productAndQuoteDetails.productDetails.productPrice * props.productAndQuoteDetails.instantQuoteVals.quantity * 0.1)).toFixed(2)}</h3>
          ) : 
          (
            <h3 className="mb-3" style={{color: "#FF6A02"}}> $
            {(props.productAndQuoteDetails.productDetails.productPrice * props.productAndQuoteDetails.instantQuoteVals.quantity).toFixed(2)}</h3>
          )
          }
            {/* <button className="btn btn-outline-secondary">Add to Cart</button> */}
            {/* <Link to={{pathname: "/checkout", state: {"productAndQuoteDetails": props.productAndQuoteDetails}}}><button className="btn primaryBtn">Order Now</button></Link> */}
            {/* <button className="btn primaryBtn" onClick={orderNow}>
              Order Now
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignPriceCont;
