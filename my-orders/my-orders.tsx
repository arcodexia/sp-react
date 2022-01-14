import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import OrderWrapper from "../order-wrapper/order-wrapper";
import ViewSubmittedReview from "../view-submitted-review/view-submitted-review";
import SubmitReview from "../submit-review/submit-review";
import "./my-orders.scss";
import fire from "../../fire";
import Loader from "react-loader-spinner";
import Cookies from "js-cookie";
import OrderSuccessModal from "../order-successfully-placed/order-successfully-placed";
import { useHistory } from "react-router-dom";

const PER_PAGE = 6;

type Props = {
  selected: number;
};

function MyOrders() {
  let history : any = useHistory();
  const [currentPage, setCurrentPage] = useState(0);

  const [showLoader, setShowLoader] = useState(false);
  const [currentPageData, setCurrentPageData] = useState<any>();
  const [pageCount, setPageCount] = useState<any>();
  //const [ordersData, setOrdersData] = useState<any>();

  useEffect(() => {
    setShowLoader(true);

    const uid : any = Cookies.get("uid");
    var db = fire.database();

    db.ref("orders")
          .orderByChild("uid")
          .equalTo(uid)
          .once("value", (snapshot) => {
            debugger;
            var result = snapshot.val();
            var orderList = [];
            for(var key in result){
              orderList.push(result[key]);
            }
            //setOrdersData(orderList);

            const offset = currentPage * PER_PAGE;
            const pageData = orderList.slice(
              offset,
              offset + PER_PAGE
            ).map((orderData : any, index : any) => <OrderWrapper key={index} order={orderData} />);
          
            setPageCount(Math.ceil(orderList.length / PER_PAGE));

            setCurrentPageData(pageData);

            setShowLoader(false);
          });
          debugger;

          if (history?.location?.state?.order) {
            $("#orderStatusBtn").trigger("click");
          }
  }, []);

  function handlePageClick({ selected: selectedPage }: Props) {
    setCurrentPage(selectedPage);
  }

  return (
    <div className="row justify-content-center myOrderMainCont">
      {showLoader && (
        <div className="centered">
          <Loader type="TailSpin" color="#FF9F24" height={100} width={100} />
        </div>
      )}
      <div className="col-sm-11">
        <h2 className="mb-4 pb-2 bold">My Orders</h2>
        {/* <div className="row mb-4">
          <div className="col-sm-4 pl-0">
            <div className="card orderssummaryCard shadow">
              <div className="d-flex justify-content-between">
                <div className="txt">
                  <h3 className="primary my-0 pb-1">15</h3>
                  <p className="my-0 font-13">Total Orders</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 px-2">
            <div className="card orderssummaryCard shadow">
              <div className="d-flex justify-content-between">
                <div className="txt">
                  <h3 className="primary my-0 pb-1">12</h3>
                  <p className="my-0 font-13">Pending Orders</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 pr-0">
            <div className="card orderssummaryCard shadow">
              <div className="d-flex justify-content-between">
                <div className="txt">
                  <h3 className="primary my-0 pb-1">2</h3>
                  <p className="my-0 font-13">Completed Orders</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <table className="table table-responsive-sm orderTable table-hover mb-0">
          <thead className="thead-dark">
            <tr>
              {/* <th>Date</th> */}
              <th>Name</th>
              <th>Order No</th>
              <th>Delivery Time</th>
              <th>Total Charges</th>
              <th>Status</th>
              {/* <th>Quantity</th>
              <th>Amount</th> */}
              
              {/* <th>Review</th>
              <th>Status</th> */}
            </tr>
          </thead>
          <tbody>{currentPageData}</tbody>
        </table>
        <ReactPaginate
          previousLabel={<i className="fas fa-angle-left contrlBtn"></i>}
          nextLabel={<i className="fas fa-angle-right contrlBtn"></i>}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
      <ViewSubmittedReview />
      <SubmitReview />
      <OrderSuccessModal />
      <button id="orderStatusBtn"
              data-toggle="modal"
              data-backdrop="static"
              data-keyboard="false"
              data-target="#orderSuccessModal"
              style={{display: "none"}}
            >
              Order Success
            </button>
    </div>
  );
}

export default MyOrders;
