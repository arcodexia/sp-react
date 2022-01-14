import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { product } from "../../types/product";
import "./instant-quote-summary.scss";

type Props = {
  instantQuoteVals: any;
  productDetails: product;
};

function GetInstantQuoteSummary(props: Props) {
  return (
    <div>
      <div className="text-center mt-4">
        <p className="font-13 mb-1">Your Affordable Qoute</p>
        <h2 className="pb-2">{props.productDetails.productTitle}</h2>
      </div>
      <div className="summaryItemDetail">
        <div className="singleItem">
          <p className="gray">Quantity</p>
        </div>
        <div className="singleItem">
          <p className="primary">{props.instantQuoteVals.quantity}</p>
        </div>
        {/* <div className="singleItem">
          <p className="gray">No. of Designs</p>
          <p className="primary pl-5 ml-2">3</p>
        </div> */}
      </div>
      <div className="summaryItemDetail">
        <div className="singleItem">
          <p className="gray">Size</p>
        </div>
        <div className="singleItem">
          <p className="primary">{props.instantQuoteVals.size}</p>
        </div>
      </div>
      <div className="summaryItemDetail">
        <div className="singleItem">
          <p className="gray">Lamination</p>
        </div>
        <div className="singleItem">
          <p className="primary">{props.instantQuoteVals.lamination}</p>
        </div>
      </div>
      <div className="summaryItemDetail">
        <div className="singleItem">
          <p className="gray">Printing</p>
        </div>
        <div className="singleItem">
          <p className="primary">{props.instantQuoteVals.printedSides}</p>
        </div>
      </div>
      <div className="summaryItemDetail" style={{ borderBottomColor: "black" }}>
        <div className="singleItem">
          <p className="gray">Eyelet Quantity</p>
        </div>
        <div className="singleItem">
          <p className="primary">{props.instantQuoteVals.eyeletQL}</p>
        </div>
      </div>
      <div className="summaryItemDetail">
        <div className="singleItem">
          <p className="gray">PRICE PER ITEM</p>
        </div>
        <div className="singleItem">
          <p className="primary">${(props.productDetails.productPrice).toFixed(2)}</p>
        </div>
      </div>
      {props.instantQuoteVals.delivery == "D" ? (
        <div className="summaryItemDetail">
          <div className="singleItem">
            <p className="gray">DELIVERY</p>
          </div>
          <div className="singleItem">
            <p className="primary">
              ${(props.productDetails.productPrice * props.instantQuoteVals.quantity * 0.1).toFixed(2)}
            </p>
          </div>
        </div>
      ) : (
        <div className="summaryItemDetail">
          <div className="singleItem">
            <p className="gray">PICKUP</p>
          </div>
          <div className="singleItem">
            <p className="primary">${(0).toFixed(2)}</p>
          </div>
        </div>
      )}
      <div className="summaryItemDetail subTotalRow">
        <div className="singleItem">
          <p className="gray">TOTAL</p>
        </div>
        <div className="singleItem">
          {props.instantQuoteVals.delivery == "D" ? (
            <h4 className="primary my-0">
              $
              {((props.productDetails.productPrice * props.instantQuoteVals.quantity) +
                (props.productDetails.productPrice * props.instantQuoteVals.quantity * 0.1)).toFixed(2)}
            </h4>
          ) : (
            <h4 className="primary my-0">
              $
              {(props.productDetails.productPrice * props.instantQuoteVals.quantity).toFixed(2)}
            </h4>
          )}
        </div>
      </div>
      <div className="saveBtn">
        <Link to={{pathname: "/design-tool", state: {"productDetails": props.productDetails, "instantQuoteVals": props.instantQuoteVals}}}>
          <button className="btn primaryBtn">Start With your Design</button>
        </Link>
      </div>
    </div>
  );
}

export default GetInstantQuoteSummary;
