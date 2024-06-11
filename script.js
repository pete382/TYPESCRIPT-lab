"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moutains = [{
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
var findNameOfTallestMountain = moutains.reduce(function (prev, current) { return (current.height > prev.height) ? current : prev; });
console.log(findNameOfTallestMountain.name);
var products = [
    { name: "record",
        price: 21.50 },
    { name: "amp",
        price: 9999 },
    { name: "preamp",
        price: 6000 },
    { name: "speakers",
        price: 5999 },
    { name: "cd player",
        price: 4999 }
];
var TotalPrice = products.reduce(function (acc, product) { return acc + product.price; }, 0);
var calcAverageProductPrice = TotalPrice / products.length;
console.log(calcAverageProductPrice);
var inventory = [
    { productName: "record",
        productPrice: 21.50,
        quantity: 25 },
    { productName: "amp",
        productPrice: 9999,
        quantity: 5 },
    { productName: "preamp",
        productPrice: 6000,
        quantity: 6 },
    { productName: "speakers",
        productPrice: 5999,
        quantity: 12 },
    { productName: "cd player",
        productPrice: 4999,
        quantity: 3 }
];
var calcInventoryValue = inventory.reduce(function (acc, item) { return acc + item.productPrice * item.quantity; }, 0);
console.log(calcInventoryValue);
