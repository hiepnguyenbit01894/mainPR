$(document).ready(function(){
    function showCartPage(){
        let Cart = JSON.parse(sessionStorage.getItem("Cart"))
        let html = ''
        let totalPrs = 0
        for(let i =0; i< Cart.length;i++)
        {

            let priceProduct =  parseInt(Cart[i][2].slice(1,3)) *  Cart[i][3]
            totalPrs += priceProduct
            html  += `
                        <tr class="cart-item">
                      <td data-label="Product Name" class="product-thumbnail">
                        <a href="">
                          <img src="${Cart[i][0]}" alt="">
                        </a>
                      </td>
                      <td class="product-name-thumb" data-title="Product">
                        <a href="#!">${Cart[i][1]}</a>
                      </td>
                      <td data-label="Product Price" class="product-price" data-title="Price">
                        <span class="amount">${Cart[i][2]}</span>
                      </td>
                      <td data-label="Quantity" class="product-quantity" data-title="Quantity">
                      <div class="input-group--main w-auto ">
                            <input type="number" step="1" max="10" value="${Cart[i][3]}" name="quantity"
                                class="quantity-field border-0 text-center">
                                </div>
                      </td>
                      <td data-label="Sub Total" class="product-subtotal" data-title="Total">
                        <span class="amount">${priceProduct}</span>
                      </td>
                      <td class="product-remove">
                        <a class="remove " href="">
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
                document.getElementById("amount").innerHTML = `$${totalPrs}.00`; 
                document.getElementById("mycart").innerHTML = html
        }
     showCartPage()
    //  ======
    
     function updateCart(){
         let buttonUpdate = document.getElementsByClassName("cart-update")[0]
         buttonUpdate.addEventListener()
     }
})