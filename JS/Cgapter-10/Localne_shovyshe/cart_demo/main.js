//как с помощью локалсторидж сделать карзину

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://cdn.shopify.com/s/files/1/0022/1393/7252/articles/Benefits-of-Drinking-Black-Tea-thumbnail.jpg?v=1660832924'
    },
];
let productsDiv = document.getElementsByClassName("products")[0];
for (const product of products) {
    let productBlock = document.createElement("div");
    productsDiv.appendChild(productBlock);
    let h2 = document.createElement("h2");
    h2.innerText = `${product.title} ${product.price} UAN`;
    let img = document.createElement("img");
    img.src = product.image;
    let buttonElement = document.createElement("button");
    buttonElement.innerText = "add to cart";
    productBlock.append(h2,img, buttonElement);
    buttonElement.onclick = function (){
           let cart = JSON.parse(localStorage.getItem("cart")) || [];
           cart.push(product);
           localStorage.setItem("cart",JSON.stringify(cart));

    }
}


// let productDiv = document.createElement("div");