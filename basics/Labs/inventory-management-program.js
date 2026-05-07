/**
 * Lab: Build an Inventory Management Program
 * 
 * Description: In this lab, you will build an inventory management program that will
 *              allow you to add, update, find and remove products from the inventory.
 *              You will use an array of objects to represent your inventory
 *              where each object will have name and quantity as the keys.
 */

const inventory = [];

function findProductIndex(productName) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName.toLowerCase())
      return i;
  }
  return -1;
}

function addProduct(product) {
  // in case of product already exist update it's quantity
  let index = findProductIndex(product.name);
  if (index !== -1) {
      inventory[index].quantity += product.quantity;
      console.log(`${inventory[index].name} quantity updated`);
  } else {
    // in case of product doesn't exist push it to inventory array
    product.name = product.name.toLowerCase();
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }

}

function removeProduct(productName, productQuantity) {
  let index = findProductIndex(productName);
  if (index === -1) {
    console.log(`${productName.toLowerCase()} not found`);
  }
  else {
    const foundedProduct = inventory[index];
    let subtractedQuantity = foundedProduct.quantity - productQuantity;
    if (subtractedQuantity === 0) {
      inventory.splice(index, 1);
    } else if (subtractedQuantity < 0) {
      console.log(`Not enough ${foundedProduct.name} available, remaining pieces: ${foundedProduct.quantity}`);
    } else {
      foundedProduct.quantity = subtractedQuantity;
      console.log(`Remaining ${foundedProduct.name} pieces: ${foundedProduct.quantity}`);
    }
  }
}

addProduct({name: "FLOUR", quantity: 5}); // flour added to inventory
addProduct({name: "FLOUR", quantity: 5}); // flour quantity updated
removeProduct("FLOUR", 5); // Remaining flour pieces: 5