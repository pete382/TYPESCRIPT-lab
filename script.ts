export {}

//Mountains

interface mountain {

name:string
height:number

}

let moutains: mountain[] = [{
name: "Kilimanjaro",
height: 19341
} , 
{
    name: "Everest",
    height: 29029
 
    } , 
    {
        name: "Denali",
        height: 20310
      
        } 
]



let  findNameOfTallestMountain:mountain = moutains.reduce((prev, current) => (current.height > prev.height) ? current : prev);
console.log(findNameOfTallestMountain.name)



//Products

interface product{

    name: string
    price: number   

}


let products: product[]=[
{name: "record",
 price: 21.50},

{name: "amp",
price: 9999},

{name: "preamp",
    price:6000},

{name: "speakers",
    price: 5999},
{name: "cd player",
    price: 4999}

]

let TotalPrice = products.reduce((acc,product)=> acc + product.price,0)

let calcAverageProductPrice = TotalPrice/products.length

console.log(calcAverageProductPrice)


//Inventory


interface inventoryItem{

    productName: string
    productPrice:number
    quantity: number   

}



let inventory: inventoryItem[] = [
    
 {productName: "record",
 productPrice:21.50,
    quantity: 25 },
 {productName:"amp",
 productPrice: 9999,
    quantity: 5},
 {productName:"preamp",
 productPrice:6000,
    quantity: 6},
 {productName: "speakers",
 productPrice: 5999,
    quantity:12 },
 {productName: "cd player",
 productPrice:4999,
    quantity: 3}]


  let calcInventoryValue = inventory.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);

  console.log(calcInventoryValue)