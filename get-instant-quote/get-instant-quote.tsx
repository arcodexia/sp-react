import React, { useState } from "react";
import "./get-instant-quote.scss";
import { selectArrow } from "../../static";
import { product } from "../../types/product";

type Props = {
  setActive: React.Dispatch<React.SetStateAction<string>>;
  setInstantQuoteVals: React.Dispatch<React.SetStateAction<any>>;
};

function GetInstantQuote(props: Props) {
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("S900mm W x 600mm H");
  const [lamination, setLamination] = useState("High Quality Vinyl with Gloss Lamination");
  const [printedSides, setPrintedSides] = useState("Single Sided");
  const [eyeletQL, setEyeletQL] = useState("No Eyelets");
  const [artSupply, setArtSupply] = useState("PR");
  const [delivery, setDelivery] = useState("D");

  const handleSubmit = () => {
    props.setActive("GIQS");

    const vals = {
      quantity,
      size,
      lamination,
      printedSides,
      eyeletQL,
      artSupply,
      delivery,
    };

    props.setInstantQuoteVals(vals);
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="row px-3">
      <div className="col-sm-6">
        <div className="form-group custInput">
          <label>Quantity </label>
          <input
            type="number"
            min="1"
            className="form-control"
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group custInput">
          <label>Size </label>
          <select
            className="form-control"
            onChange={(e) => setSize(e.target.value)}
            style={selectArrow}
            required
          >
            {/* <option disabled selected> Select a size </option> */}
            <option>S900mm W x 600mm H</option>
            <option>1200mm W x 900mm H</option>
            <option>1800mm W x 1200mm H</option>
            <option>2400mm W x 1200mm H</option>
          </select>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group custInput">
          <label>Lamination</label>
          <select
            className="form-control"
            onChange={(e) => setLamination(e.target.value)}
            style={selectArrow}
            required
          >
            {/* <option disabled selected> Select lamination type </option> */}
            <option>High Quality Vinyl with Gloss Lamination</option>
            <option>High Quality Vinyl with Matte Lamination</option>
            <option>High Quality Vinyl with Anti-Graffiti Lamination</option>
          </select>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group custInput">
          <label>Sides Printed</label>
          <select
            className="form-control"
            onChange={(e) => setPrintedSides(e.target.value)}
            style={selectArrow}
            required
          >
            {/* <option disabled selected> Select printing sides </option> */}
            <option>Single Sided</option>
            <option>Double Sided</option>
          </select>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group custInput">
          <label>Eyelet Quantity & Location</label>
          <select
            className="form-control"
            onChange={(e) => setEyeletQL(e.target.value)}
            style={selectArrow}
            required
          >
            <option>No Eyelets</option>
            <option>2 x 6mm Diameter Holes (top corners)</option>
            <option>2 x 6mm Diameter Holes (middle of each side)</option>
            <option>2 x 6mm Diameter Holes (middle of top and bottom)</option>
            <option>4 x 6mm Diameter Holes (corners)</option>
            <option>
              6mm Diameter Holes every 1000mm (max distance apart)
            </option>
            <option>6mm Diameter Holes every 500mm (max distance apart)</option>
          </select>
        </div>
      </div>
      {/* <div className="col-sm-12">
        <p className="getInstantHeading">
          How will your print ready artwork be supplied?
        </p>
      </div>
      <div className="col-sm-4 col-6 pr-2">
        <div className={artSupply == "PR" ? "workTypeCont selected" : "workTypeCont"}>
          <input
          defaultChecked={true}
            type="radio"
            name="radioFilter"
            value="PR"
            className="custom-control-input"
            id="printReady"
            onChange={(e) => setArtSupply(e.target.value)}
            required
          />
          <label className="custom-control-label" htmlFor="printReady">
            I have my
            <br />
            Print Ready Files
          </label>
        </div>
      </div>
      <div className="col-sm-4 col-6 px-2">
      <div className={artSupply == "DA" ? "workTypeCont selected" : "workTypeCont"}>
          <input
            type="radio"
            name="radioFilter"
            value="DA"
            className="custom-control-input"
            id="designAssistance"
            onChange={(e) => setArtSupply(e.target.value)}
          />
          <label className="custom-control-label" htmlFor="designAssistance">
            I need Design
            <br />
            Assistance
          </label>
        </div>
      </div>
      <div className="col-sm-4 col-6 pl-2">
      <div className={artSupply == "DO" ? "workTypeCont selected" : "workTypeCont"}>
          {" "}
          <input
            type="radio"
            name="radioFilter"
            value="DO"
            className="custom-control-input"
            id="designOnline"
            onChange={(e) => setArtSupply(e.target.value)}
          />
          <label className="custom-control-label" htmlFor="designOnline">
            I will <br />
            Design Online
          </label>
        </div>
      </div> */}
      <div className="col-sm-12">
        <p className="getInstantHeading">How do you want to get your order?</p>
      </div>
      <div className="col-sm-4 col-6 pr-2">
      <div className={delivery == "D" ? "workTypeCont selected" : "workTypeCont"}>
          <input
          defaultChecked={true}
            type="radio"
            name="radioFilterA"
            value="D"
            className="custom-control-input"
            id="delivery"
            onChange={(e) => setDelivery(e.target.value)}
            required
          />
          <label className="custom-control-label" htmlFor="delivery">
            Delivery
          </label>
        </div>
      </div>
      <div className="col-sm-4 col-6 px-2">
      <div className={delivery == "P" ? "workTypeCont selected" : "workTypeCont"}>
          <input
            type="radio"
            name="radioFilterA"
            value="P"
            className="custom-control-input"
            id="pickup"
            onChange={(e) => setDelivery(e.target.value)}
          />
          <label className="custom-control-label" htmlFor="pickup">
            Pickup
          </label>
        </div>
      </div>
      <div className="saveBtn">
        <button
          id="gettheQuoteBtn"
          className="btn primaryBtn"
          type="submit"
        >
          Get the qoute
        </button>
      </div>
    </div>
    </form>
  );
}

export default GetInstantQuote;
