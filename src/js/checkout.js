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
    let cartTable = document.querySelector(".product_table--body")
    let totalPrs = 0
    let priceProduct = productPrice * productquantity
    totalPrs += priceProduct
    let taxes = (totalPrs * 10)/100 
    if (productName != null) {
      cartTable.innerHTML += ` 
      <tr class="product_item">
                                <td class="product_image">
                                    <div class="product-thumbnail">
                                        <div class="product-thumbnail__wrapper">
                                            <img alt="Kiwi - S" class="product-thumbnail__image"
                                                src="${productImage}">
                                        </div>
                                        <span class="product-thumbnail_quantity">${productquantity}</span>
                                    </div>
                                </td>
                                <th class="product__description">
                                    <span class="product__description__name">${productName}</span>
                                </th>
                                <td class="product_quantity">
                                    <span class="hidden">
                                        1
                                    </span>
                                </td>
                                <td class="product_price">
                                    <span class="PricePr">$${productPrice}.00</span>
                                </td>
                            </tr>`

    }
    else {
      return
    }
    document.getElementById("PriceMount").innerHTML = `$${totalPrs}.00`
    document.getElementById("PriceTaxes").innerHTML = `$${taxes}`
    document.getElementById("PriceSum").innerHTML = `$${taxes + totalPrs}0`
    cartTotal()
    function cartTotal() {
        let cartItem = document.querySelectorAll(".product_table--body .product_item")
        let total1PR = 0
        let totalProduct = 0
        for (let i = 0; i < cartItem.length; i++) {
            let quantityItem = parseInt(cartItem[i].querySelector(".product_image .product-thumbnail .product-thumbnail_quantity").innerHTML)
            let priceProduct = parseInt(cartItem[i].querySelector(".product_price .PricePr").innerHTML.slice(1, 3))
            console.log(priceProduct);
            total1PR = priceProduct * quantityItem
            totalProduct += total1PR
        }
        document.getElementById("PriceMount").innerHTML = `$${totalProduct}.00`
        document.getElementById("PriceTaxes").innerHTML = `$${(totalProduct* 10)/100}`
        document.getElementById("PriceSum").innerHTML = `$${(totalProduct* 10)/100 + totalProduct}0`
      }
}})