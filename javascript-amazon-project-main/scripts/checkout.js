import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";

// import "../data/backend-practice.js";
// import "../data/cart-oop.js";

loadProducts( ()=>{
    renderPaymentSummary();
    renderOrderSummary();
});