function Cart(cartKeyword){
    
    const cart = {
        cartItem: undefined,
        
        loadFromStorage(){
            this.cartItem = JSON.parse(localStorage.getItem(cartKeyword));
            
            if(!cart){
                cart = [{
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 2,
                    deliveryOptionId: '1'
                },{
                    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                    quantity: 1,
                    deliveryOptionId: '2'
                }];
            }
        },
        
        saveToStorage(){
            localStorage.setItem(cartKeyword, JSON.stringify(cart));
        },
    
        addToCart(productId){
            let matchingItem;
            
            this.cartItem.forEach((cartItem)=>{
                if(productId === cartItem.productId){
                    matchingItem=cartItem;
                }
            });
            
            if(matchingItem){
                matchingItem.quantity +=1;
            }
            
            else{
                this.cartItem.cart.push({
                    productId: productId,
                    quantity: 1,
                    deliveryOptions: '1'
                });
            }
        
            this.saveToStorage();
        },
    
        removeFromCart(productId){
            const newCart = [];
            
            this.cartItem.cart.forEach((cartItem)=>{
                if(cartItem.productId !== productId){
                    newCart.push(cartItem);
                }
            });
        
            this.cartItem.cart = newCart;
        
            this.saveToStorage();
        },
    
        updateDeliveryOption(productId, deliveryOptionId){
            let matchingItem;
            
            this.cartItem.cart.forEach((cartItem)=>{
                if(productId === cartItem.productId){
                    matchingItem=cartItem;
                }
            });
            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
        }
    };

    return cart;
}

const businessCart = Cart('cart-business');
const cart = Cart('cart-opp');


cart.loadFromStorage();
businessCart.loadFromStorage();


console.log(cart);
console.log(businessCart);