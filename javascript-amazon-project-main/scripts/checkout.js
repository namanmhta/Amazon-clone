import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts, loadProductsfetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// import "../data/backend-practice.js";
// import "../data/cart-oop.js";

async function loadPage(){
    try{
        await loadProductsfetch();
        
        const value = await new Promise((resolve)=>{
            loadCart(()=>{
            resolve('value3');
        });
        });
    } catch (error){
        console.log('Unexpected error. Please try again');
    }

    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();


/*
Promise.all([
    loadProductsfetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
    });
    })
]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})

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

*/

// loadProducts( ()=>{
//     loadCart(()=>{
//         renderPaymentSummary();
//         renderOrderSummary();
//     });
// });