import React, { useEffect } from "react";
import "./delivery-method.scss";

type Props = {
  isDelivery?: boolean,
  setIsDelivery?: React.Dispatch<React.SetStateAction<boolean>>
}

function DeliveryMethod(props: Props) {
  return (
    <div className="deliveryMethodCont">
      <div className="row">
        <div className="col-sm-6">
          <p>Delivery</p>
          <div className="custom-control custom-radio">
            <input
              defaultChecked={props.isDelivery}
              type="radio"
              className="custom-control-input"
              id="customRadio11"
              name="example1"
              onClick={() => props.setIsDelivery!(true)}
            />
            <label className="custom-control-label" htmlFor="customRadio11">
              <div>Proceed to Checkout</div>
            </label>
          </div>
        </div>
        <div className="col-sm-6">
          <p>Pickup</p>
          <div className="custom-control custom-radio">
            <input
              defaultChecked={false}
              type="radio"
              className="custom-control-input"
              id="customRadio"
              name="example1"
              onClick={() => props.setIsDelivery!(false)}
            />
            <label className="custom-control-label" htmlFor="customRadio">
              <div>1025 E Mansfield, Salt Lake City, UT 84106</div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryMethod;
