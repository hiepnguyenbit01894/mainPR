$(document).ready(function () {
 
  let Cart = JSON.parse(localStorage.getItem("Cart"))
  for (let i = 0; i < Cart.length; i++) {
    let productImage = Cart[i][0]
    let productName = Cart[i][1]
    let productPrice = parseInt(Cart[i][2].slice(1, 3))
    let productquantity = Cart[i][3]

    showCartPage(productImage, productName, productPrice, productquantity)
  }
  function showCartPage(productImage, productName, productPrice, productquantity) {
    let cartTable = document.querySelector("#mycart")
    let totalPrs = 0
    let priceProduct = productPrice * productquantity
    totalPrs += priceProduct
    if (productName != undefined) {
      cartTable.innerHTML += ` 
      <tr class ="cart-item">
      <td data-label="Product Name" class="product-thumbnail">
                        <a href="">
                        <img src="${productImage}" alt="">
                        </a>
                      </td>
                      <td class="product-name-thumb" data-title="Product">
                        <a href="#!">${productName}</a>
                        </td>
                        <td data-label="Product Price" class="product-price" data-title="Price">
                        <span class="amount">$${productPrice}.00</span>
                        </td>
                        <td data-label="Quantity" class="product-quantity" data-title="Quantity">
                        <div class="input-group--main w-auto ">
                        <input type="number" step="1" min ="0" max="10" value="${productquantity}" name="quantity"
                        class="quantity-field border-0 text-center">
                        </div>
                        </td>
                        <td data-label="Sub Total" class="product-subtotal" data-title="Total">
                        <span class="amountProduct">${priceProduct}</span>
                        </td>
                        <td class="product-remove">
                        <a class="removeProduct"  >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-trash" viewBox="0 0 16 16">
                            <path
                              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                          </svg></a>
                          </td>
                          </tr>`
    }
    else {
      return
    }
    document.getElementById("amountPrs").innerHTML = `$${totalPrs}.00`;
    cartTotal()
    deleteCart()
  }
  //  =====
  function cartTotal() {
    let cartItem = document.querySelectorAll("#mycart .cart-item")
    let total1PR = 0
    let totalProduct = 0
    for (let i = 0; i < cartItem.length; i++) {
      let inputValue = parseInt(cartItem[i].querySelector("input").value)
      let priceProduct = parseInt(cartItem[i].querySelector(".amount").innerHTML.slice(1, 3))
      total1PR = priceProduct * inputValue
      cartItem[i].querySelector(".amountProduct").innerHTML = `$${total1PR}.00`
      totalProduct += total1PR
    }
    document.getElementById("amountPrs").innerHTML = `$${totalProduct}.00`
    inputChange()
  }
  function inputChange() {
    let cartItem = document.querySelectorAll("#mycart .cart-item")
    for (let i = 0; i < cartItem.length; i++) {
      let inputValue = cartItem[i].querySelector("input")
      console.log(parseInt(inputValue.value));
      inputValue.addEventListener("change", function () {
        Cart[i][3] = parseInt(inputValue.value)
        localStorage.setItem("Cart",JSON.stringify(Cart))
        cartTotal()
      })
    }
  }
  function deleteCart() {
    let cartItem = document.querySelectorAll("#mycart .cart-item")
    let productDel = document.querySelectorAll(".removeProduct")
    for (let i = 0; i < cartItem.length; i++) {
      productDel[i].addEventListener("click", function (e) {
          e.preventDefault()
          if(Cart[i][1] === cartItem[i].children[1].children[0].textContent)
          {
            cartItem[i].remove()
            localStorage.removeItem(Cart[i])
            delete Cart[i]
          }
          localStorage.setItem("Cart",JSON.stringify(Cart)) 
          cartTotal()
      })
    }
  }
})