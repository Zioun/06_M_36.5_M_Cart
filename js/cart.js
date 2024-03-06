const addProduct = () =>{
    const inputProduct = document.getElementById("input-product");
    const inputQuantity = document.getElementById("input-quantity");
    const productValue = inputProduct.value;
    const quantityValue = inputQuantity.value;
    displayProduct(productValue,quantityValue);
    saveLocalStorage(productValue,quantityValue);
}

const displayProduct = (product, quantity) =>{
    const itemsArea = document.getElementById("items-area");
    const li = document.createElement("li");
    li.innerText = `${product}:${quantity}`;
    itemsArea.appendChild(li);
}

const getStoredShoppingCart = () =>{
    let cart = {}
    const storedCart = localStorage.getItem("cart");
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified =  JSON.stringify(cart);
    localStorage.setItem("cart",cartStringified);
}


const displayProductFromLocalStorage = () =>{
    const savedCart = getStoredShoppingCart();
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product, quantity);
        displayProduct(product, quantity);
    }
}

displayProductFromLocalStorage()