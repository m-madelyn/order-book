function reconcileOrder(existingBook, incomingOrder) {
  let updatedBook = []
  let unemptyBook = existingBook.length > 0
  let exOrderType = existingBook.map(function (order) {
    return order.type
  })
  let exOrderQuantity = existingBook.map(function (order) {
    return order.quantity
  })
  let exOrderPrice = existingBook.map(function (order) {
    return order.price
  })
  let orderTypeMatch = incomingOrder.type == exOrderType
  let orderQuantitiesMatch = incomingOrder.quantity == exOrderQuantity
  let orderPricesMatch = incomingOrder.price == exOrderPrice
  if (!unemptyBook ||
    //(2)adds an order to the book when the book has orders of the corresponding type (i.e. a sell with no buys
    unemptyBook && orderTypeMatch ||
    //(3)adds an order to the book when the book has a corresponding order type but it does not match
    unemptyBook && !orderTypeMatch &&
    !orderQuantitiesMatch &&
    !orderPricesMatch) {
    updatedBook = existingBook.concat(incomingOrder)
    console.log({updatedBook})
  }
  //(4)fulfills an order and removes the matching order when the book contains a matching order of the same quantity
  if (unemptyBook &&
    !orderTypeMatch &&
    orderQuantitiesMatch) {
    updatedBook = existingBook.splice(1, 1)
    console.log({updatedBook})
  }
  // line 49 Test 5 fulfills an order and reduces the matching order when the book contains a matching order of a larger quantity:
  if (unemptyBook &&
    !orderTypeMatch &&
    incomingOrder.quantity < exOrderQuantity &&
    orderPricesMatch) {
    for (var i = 0; i < existingBook.length; i++) {
      existingBook[i].quantity = existingBook[i].quantity - incomingOrder.quantity
      i = existingBook.length
    }
    updatedBook = existingBook
    console.log({updatedBook})
  }
  //Test 6 'partially fulfills an order, removes the matching order and adds the remainder of the order to the book when the book contains a matching order of a smaller quantity'
  if (unemptyBook &&
    !orderTypeMatch &&
    incomingOrder.quantity > exOrderQuantity &&
    orderPricesMatch) {
    for (i = 0; i < existingBook.length; i++) {
      incomingOrder.quantity = incomingOrder.quantity - existingBook[i].quantity
      existingBook.splice([i], 1)
      existingBook.push(incomingOrder)
      return existingBook
    }
    updatedBook = existingBook
    console.log({updatedBook})
  }
  return updatedBook
}
module.exports = reconcileOrder