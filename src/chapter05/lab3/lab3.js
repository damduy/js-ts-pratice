console.log("Lab 3")

const product1 = {
    name: "iphone",
    price: 3000,
    inStock: true
}

const product2 = {
    name: "figure",
    price: 500,
    inStock: false
}

const product3 = {
    name: "gundam",
    price: 250,
    inStock: true
}

const product4 = {
    name: "rtx3060",
    price: 3000,
    inStock: false
}

const product5 = {
    name: "dmc",
    price: 60,
    inStock: true
}

const products = [product1, product2, product3, product4, product5];

console.log("First product name: ",products[0].name);

products[1].price = 150;

console.log("List product after changing second product price: ", products);

products.push(product6 = {
    name: "food",
    price: 2,
    inStock: true
})

console.log("List product after add last product: ", products);

products.pop();

console.log("List product after remove last product: ", products);


products.forEach((item, index) => {
    console.log("Product ", index," name: ", item.name);
})

//Create new array has only price of product
const productPrice = products.map((item, index) => {
    return item.price;
})

//Create new array has product in stock only
const inStockProduct = products.filter((item, index) => {
    return item.inStock;
})



console.log(inStockProduct);

for (let key in products[0]) {
    console.log(key, products[0][key]);
}
