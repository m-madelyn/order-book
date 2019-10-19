//WORKING FOR TESTS 1,  2 & 3////////////////////////////////////////////////////////////////////////////////////////
// function reconcileOrder (existingBook, incomingOrder) {
//   let updatedBook = []
//   let existingBookOrderType = existingBook.map(function (order) { return order.type })
//   let existingBookOrderQuantity = existingBook.map(function (order) { return order.quantity })
//   let existingBookOrderPrice = existingBook.map(function (order) { return order.price })

//   if (existingBook.length == 0){
//     updatedBook = existingBook.concat(incomingOrder)
//   } else if (incomingOrder.type == existingBookOrderType){ //doesn't need "existingBook.length > 0 &&"
//     updatedBook = existingBook.concat(incomingOrder)
//   } else if (incomingOrder.type !== existingBookOrderType &&
//     incomingOrder.quantity !== existingBookOrderQuantity &&
//     incomingOrder.price !== existingBookOrderPrice){
//     updatedBook = existingBook.concat(incomingOrder)
//   }
  
//   return updatedBook
// }
//const updatedBook = reconcileOrder(existingBook, incomingOrder)



//WORKING FOR TESTS 1, 2 & 3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//                               *Pick up from test 4*




//                 Test 1 adds an order to the book when the book is empty and thus cannot fulfill the order
// const existingBook = []
// const incomingOrder = {  type: 'sell', quantity: 10, price: 6150  }

// function reconcileOrder (existingBook, incomingOrder) {
//   let updatedBook = []
    
//   if (existingBook.length == 0){
//     updatedBook = existingBook.concat(incomingOrder)
//   }     
//   return updatedBook
// }
// const updatedBook = reconcileOrder(existingBook, incomingOrder)

//                                               \Test 1\passing//


//               Test 2 adds an order to the book when the book has orders of the corresponding type (i.e. a sell with no buys

// const existingBook = [{ type: 'sell', quantity: 10, price: 6150 }]
// const incomingOrder = { type: 'sell', quantity: 12, price: 6000 }

// function reconcileOrder (existingBook, incomingOrder) {
//   let updatedBook = []
//   let existingBookOrderType = existingBook.map(function (order) { return order.type })
    
//   if (incomingOrder.type == existingBookOrderType){
//     updatedBook = existingBook.concat(incomingOrder)
//   } 
    
//   return updatedBook
// }
// const updatedBook = reconcileOrder(existingBook, incomingOrder)

//                                                 \Test 2\passing//

//                Test 3 adds an order to the book when the book has a corresponding order type but it does not match

const existingBook = [{ type: 'buy', quantity: 10, price: 6150 }, {
                        type: 'buy', quantity: 11, price: 1111 }]    //how do we loop through this array to check ALL existing orders?

const incomingOrder = { type: 'sell', quantity: 12, price: 6000 }


function reconcileOrder (existingBook, incomingOrder) {
  let updatedBook = []
  let existingBookOrderType = existingBook.map(function (order) { return order.type })
  let existingBookOrderQuantity = existingBook.map(function (order) { return order.quantity })
  let existingBookOrderPrice = existingBook.map(function (order) { return order.price })

  if (incomingOrder.type !== existingBookOrderType &&
    incomingOrder.quantity !== existingBookOrderQuantity &&
    incomingOrder.price !== existingBookOrderPrice){
    updatedBook = existingBook.concat(incomingOrder)
  }
    
  return updatedBook
}
const updatedBook = reconcileOrder(existingBook, incomingOrder)

//                                                \Test 3\passing//



//          Test 4 fulfills an order and removes the matching order when the book contains a matching order of the same quantity

// const existingBook = [{ type: 'buy', quantity: 10, price: 6150 }]
// const incomingOrder = { type: 'sell', quantity: 10, price: 6150 }

// function reconcileOrder (existingBook, incomingOrder) {
//   let updatedBook = []
//   let existingBookOrderType = existingBook.map(function (order) { return order.type })
//   let existingBookOrderQuantity = existingBook.map(function (order) { return order.quantity })
//   let existingBookOrderPrice = existingBook.map(function (order) { return order.price })

//   if (existingBook.length > 0 
//     && incomingOrder.type !== existingBookOrderType 
//     && incomingOrder.quantity == existingBookOrderQuantity 
//     && incomingOrder.price == existingBookOrderPrice){
//     updatedBook = existingBook.filter                                       //how do I delete everything in the existingBook?
//   }
  
//   return updatedBook
// }


const updatedBook = reconcileOrder(existingBook, incomingOrder)

let existingBookOrderType = existingBook.map(function (order) { return order.type })
let existingBookOrderQuantity = existingBook.map(function (order) { return order.quantity })
let existingBookOrderPrice = existingBook.map(function (order) { return order.price })
console.log('existing book values')
console.log(existingBookOrderType)
console.log(existingBookOrderQuantity)
console.log(existingBookOrderPrice)

console.log('evaluates order values')
console.log(incomingOrder.type !== existingBookOrderType)
console.log(incomingOrder.quantity == existingBookOrderQuantity)
console.log(incomingOrder.price == existingBookOrderPrice)


console.log('incoming order values')
console.log(incomingOrder.type) 
console.log(incomingOrder.quantity)
console.log(incomingOrder.price) 

//test 4\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



//                               Pick up from test 4


console.log('Updated Book')
//console.log(updatedBook)

module.exports = reconcileOrder