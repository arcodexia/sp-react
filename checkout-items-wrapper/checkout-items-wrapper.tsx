import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CartItem from "../cart-item/cart-item";
import DeliveryMethod from "../delivery-methods/delivery-method";
import OrderSummaryCont from "../order-summary-cont/order-summary-cont";
import PaymentMethod from "../payment-method/payment-method";
import OrderSuccessModal from "../order-successfully-placed/order-successfully-placed";
import "./checkout-items-wrapper.scss";
import ShippingAddress from "../shipping-address/shipping-address";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

function CheckoutItemsWrapper() {
  let history = useHistory();
  const [isCheckout, setCheckout] = useState(false);
  const [orderDetails, setOrderDetails] = useState<Array<any>>(
    JSON.parse(localStorage.getItem("cart")!)
  );
  const [isDelivery, setisDelivery] = useState<boolean>(
    orderDetails.filter((order) => order.deliveryMethod == "D") ? true : false
  );
  const shippingAddressRef = React.useRef<HTMLDivElement>(null);

  const getShippingAddress = () => {
    if (Cookies.get("uid")) {
      setCheckout(true);
      shippingAddressRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    else{
      $("#logInBtn").trigger("click");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      var order = JSON.parse(localStorage.getItem("cart")!);
      setOrderDetails(order);
      if(order.length <= 0){
        history.push({ pathname: "/products" });
      }
    } else {
      history.push({ pathname: "/products" });
    }
  }, []);

  return (
    <div className="row checkoutMainCont">
      <div className="col-sm-11 px-0">
        <h2 className="secondary mt-3">Check Out</h2>
        <CartItem orderDetails={orderDetails} isDelivery={isDelivery} />
        <h5 className="secondary mt-5">How do you want to get your order?</h5>
        <DeliveryMethod isDelivery={isDelivery} setIsDelivery={setisDelivery} />
        <div className="row justify-content-end">
          {isCheckout && (
            <div ref={shippingAddressRef} className="col-sm-8 pl-0">
              <h5 className="secondary mt-5">Your Information</h5>
              <ShippingAddress isCheckout={isCheckout} orderDetails={orderDetails} />
            </div>
          )}
          <div className="col-sm-4 pr-0">
            <h5 className="secondary mt-5 text-right">Order Summary</h5>
            <OrderSummaryCont
              orderDetails={orderDetails}
              isDelivery={isDelivery}
            />
            <div className="text-center mt-5">
              {!isCheckout && (
                <button
                  onClick={() => getShippingAddress()}
                  className="btn primaryBtn submitBtn"
                >
                  Proceed to Checkout
                </button>
              )}
            </div>
            {/* {isCheckout && (
              <h5 className="secondary mt-5 text-right">
                Payment Information
              </h5>
            )} */}
            {/* {isCheckout && <PaymentMethod />} */}
            {/* {isCheckout && (
              <div className="text-center mt-5">
                {orderSuccess == true && (
                  <button
                    onClick={() => setActive(false)}
                    data-toggle="modal"
                    data-target="#orderSuccessModal"
                    className="btn primaryBtn submitBtn"
                  >
                    Submit Order
                  </button>
                )}
                {orderSuccess == false && (
                  <button
                    onClick={() => setActive(true)}
                    data-toggle="modal"
                    data-target="#orderFailureModal"
                    className="btn primaryBtn submitBtn"
                  >
                    Submit Order
                  </button>
                )}
              </div>
            )} */}
          </div>
        </div>
      </div>
      {/* <OrderSuccessModal /> */}
    </div>
  );
}

export default CheckoutItemsWrapper;
