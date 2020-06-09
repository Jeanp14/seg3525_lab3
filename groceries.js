// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli  (1.99)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread  (2.35)",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon  (10.00)",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "orange  (1.99)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "cereal  (8.49)",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 8.49
	},
	{
		name: "eggs  (3.99)",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 3.99
	},
	{
		name: "banana  (1.99)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
		img: document.getElementById("banana").src
	},
	{
		name: "cake  (8.99)",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 8.99
	},
	{
		name: "milk  (2.49)",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 2.49
	},
	{
		name: "rice  (8.99)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 8.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		prods.sort(function(a, b){return a.price - b.price}); //sort product list by price
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}