import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// import "../data/backend-practice.js";
// import "../data/cart-oop.js";

new Promise((resolve) => {
    loadProducts(()=>{
        resolve();
    });
}).then(()=>{
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    }).then(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    })
});

// loadProducts( ()=>{
//     loadCart(()=>{
//         renderPaymentSummary();
//         renderOrderSummary();
//     });
// });