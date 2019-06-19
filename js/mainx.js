

prodPrices = {
    "Modern Lamp": 360,
    "Chair": 400,
    "Stool":200,
    "Modern Chair": 500, 
    "Set of Lamps": 800,
    "Table":1000
}


const getCatalogue = () => {
    fetch("http://127.0.0.1:5000/catalogue")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return transform(data)
        });
};


const transform = (data) => {

    let result = [];
    for (var i in data)
        result.push([i, data[i]]);

    result.forEach(result => {
        addProduct(result);
    });
};

const addProduct = (result) => {
    let catalogue = document.querySelector(".amado-pro-catagory ");
    let product = document.createElement("div");
    product.classList.add("single-products-catagory");
    //product.setAttribute('style', 'width: 18rem;')
    catalogue.appendChild(product);

    let link = document.createElement("a");
    link.setAttribute('href', `product-details.html`);
    product.appendChild(link);
    

    let image = document.createElement("img");
//    image.classList.add("card-img-top");
    image.setAttribute('src', `img/product-img/${result[0]}.jpg`);
    image.setAttribute('alt', 'Image not found');
    link.appendChild(image);

    


    let productInfoHover = document.createElement("div");
    productInfoHover.classList.add("hover-content");
    link.appendChild(productInfoHover);

    let productInfo = document.createElement("div");
    productInfo.classList.add("line");
    productInfoHover.appendChild(productInfo);
    
    let productTitle = document.createElement("h4");
    productTitle.innerHTML = result[0];
    productInfoHover.appendChild(productTitle);

    let price = document.createElement("p");
    price.innerHTML = "$" + result[1];
    productInfoHover.appendChild(price);

    let button = document.createElement("a");
    button.classList.add("amado-btn");
    button.classList.add("btn");
    button.setAttribute('onclick', `addToCart("${result[0]}")`)
    button.innerHTML = "add to cart";
    product.appendChild(button);    

};


const addToCart = (product) => {
    fetch(
        `http://127.0.0.1:5000/shoppingcart/${product}`, {
            method: "POST"
        })

    window.alert(product + " is added to your cart");
    console.log(product + " added")
}


const getShoppingCart = () => {
    fetch("http://127.0.0.1:5000/shoppinsgcart")
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            return transformShopping(data)
        });
};


const transformShopping = (data) => {

    let result = [];
    for (var i in data)
        result.push([i, data[i]]);

    result.forEach(result => {
        addProductToCart(result);
    });
};

totalPrice = 0; 

const addProductToCart = (result) => {
    let cart = document.querySelector(".amado-pro-catagory ");
    let table = document.createElement("div");
    cart.appendChild(table); 

    let product = document.createElement("ul");
    product.classList.add("list-group");
    product.classList.add("list-group-horizontal-xl");
    table.appendChild(product);

    let imageBox = document.createElement("li");
    imageBox.classList.add("list-group-item");
    product.appendChild(imageBox); 

    let productImg = document.createElement("img");
    productImg.classList.add("img");
    productImg.setAttribute('src', `img/cart-img/${result[0]}.jpg`);
    imageBox.appendChild(productImg);

    let productName = document.createElement("li"); 
    productName.classList.add("list-group-item");
    productName.classList.add("flex-fill");
    productName.innerHTML = result[0];
    product.appendChild(productName); 

    let productPrice = document.createElement("li"); 
    productPrice.classList.add("list-group-item");
    productPrice.innerHTML = "$ " + prodPrices[result[0]]; 
    product.appendChild(productPrice); 


    let productQuantity = document.createElement("li"); 
    productQuantity.classList.add("list-group-item");
    productQuantity.innerHTML = "Amount: " + result[1];
    product.appendChild(productQuantity); 

    let deleteBox = document.createElement("li");
    deleteBox.classList.add("list-group-item");
    product.appendChild(deleteBox); 

    let deleter = document.createElement("li");
    deleter.classList.add("btn-warning");
    deleter.classList.add("btn");
    deleter.classList.add("d-flex");
    deleter.classList.add("justify-content-between")
    deleter.setAttribute('onclick', `deleteFromCart("${result[0]}")`);
    deleteBox.appendChild(deleter);
    deleter.innerHTML = "delete";

    totalPrice = totalPrice + (result[1]* prodPrices[result[0]]); 
    


}; 

// window.setTimeout(getTotal, 1000); 

const getTotal = () => {
    let totalHeader = document.querySelector("#totalcost");
    let total = document.createElement("span"); 
    total.classList.add("badge");
    total.classList.add("badge-secondary");
    total.innerHTML = "$ " + totalPrice; 
    totalHeader.appendChild(total); 
}; 



const deleteFromCart = (product) => {
    fetch(
        `http://127.0.0.1:5000/shoppingcart/${product}`, {
            method: "DELETE"
        })

    console.log(product + " deleted")
    window.alert(product + " has been deleted from your cart");
    document.location.reload(true); 
}; 



