import React, { useEffect, useState } from "react";
import "../../assets/admin-css/style.css";
// import {getOrders, getNewsletter, getProduct, getMessages} from "../../server/firebase.config";
import { firstValueFrom } from "rxjs";


const SectionOne = () => {

    // const [Orders, setOrders] = useState(null);
    // const [Products, setProducts] = useState(null);
    // const [Message, setMessage] = useState(null);
    // const [Subscribers, setSubscribers] = useState(null);

    // const effect = useEffect(() => {
    //     firstValueFrom(getOrders())
    //       .then((item) => {
    //         setOrders(item);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    
    //     firstValueFrom(getProduct())
    //       .then((item) => {
    //         setProducts(item);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    
    //     firstValueFrom(getMessages())
    //       .then((item) => {
    //         setMessage(item);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    
    //     firstValueFrom(getNewsletter())
    //       .then((item) => {
    //         setSubscribers(item);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }, []);

  return (
    // <!-- Sale & Revenue Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-line fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Orders</p>
                                <h6 class="mb-0"> </h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-bar fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Subscribers</p>
                                <h6 class="mb-0"> </h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-area fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Products</p>
                                <h6 class="mb-0"> </h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-pie fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Messages</p>
                                <h6 class="mb-0"> </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // <!-- Sale & Revenue End -->

    )
};

export default SectionOne;