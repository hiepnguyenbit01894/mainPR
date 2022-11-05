const productNewarrivals = [
  {
    "id": 8,
    "name": "Brinjal",
    "price": 35,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Brinjal.html"
  },
  {
    "id": 9,
    "name": "Capsicum",
    "price": 60,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Capsicum.html"
  },
  {
    "id": 10,
    "name": "Mushroom",
    "price": 75,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Mushroom.html"
  },
  {
    "id": 11,
    "name": "Potato",
    "price": 22,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/potato.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Potato.html"
  },
  {
    "id": 12,
    "name": "Pumpkin",
    "price": 48,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Pumpkin.html"
  },
  {
    "id": 13,
    "name": "Corn",
    "price": 75,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/corn.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Corn.html"
  },
  {
    "id": 14,
    "name": "Onion",
    "price": 16,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Onion.html"
  },
  {
    "id": 15,
    "name": "Apple",
    "price": 72,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Apple.html"
  },
]
renderPrn(productNewarrivals)
function renderPrn(products) {
  let item = ""
  for (let product of products) {
    item += `
    <div class="bestSeller_tabContent--item col-lg-3 col-md-4 col-sm-6 col-6 itemlc" data-name ="p-${product.id}">
    <div class="tabContent_item--image">
    <a href="${product.link}">
    <img src="${product.image}" alt="" class = "imgItem">
    </a>
    </div>
    <div class="tabContent_item--options">
          <ul class="item_options--main">
            <li class="item_options viewPr" >
              <a href="#!" class="item_options--logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </a>
                <span class="item_options--Title viewTitle" >View</span>
                  </li>
                  <li class="item_options addtowish" >
                <a href="#!" class="item_options--logo"> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg>
                </a>
                <span class="item_options--Title wishTitle" >Add to WishList</span>
                  </li>
                  <li class="item_options infor" >
                <a href="#!" class="item_options--logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
              </svg>
                </a>
                <span class="item_options--Title cartTitle">Information</span>
                  </li>
          </ul>
        </div>
        <h3 class="tabContent_item--name" >
        <a href="${product.link}" class = "imgName">${product.name}</a>
        </h3>
        <p class="tabContent_item--price">
        $${product.price}.00
        </p>
        </div>
        `

  }
  $('.bestSeller_tabContent--a1 .row ').html(item)
}
const productBestSeller = [
  {
    "id": 16,
    "name": "Banana",
    "price": 45,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Banana.html"
  },
  {
    "id": 17,
    "name": "Grapes",
    "price": 60,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Grapes.html"
  },
  {
    "id": 18,
    "name": "Mango",
    "price": 75,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Mango.html"
  },
  {
    "id": 19,
    "name": "Musk Melon",
    "price": 36,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Musk%20Melon.html"
  },
  {
    "id": 20,
    "name": "Orange",
    "price": 75,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Orange.html"
  },
  {
    "id": 21,
    "name": "Pears",
    "price": 69,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Pears.html"
  },
  {
    "id": 22,
    "name": "Pomegranate",
    "price": 95,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pomegranate.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Pomegranate.html"
  },
  {
    "id": 23,
    "name": "Raspberry",
    "price": 160,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Raspberry.html"
  },
]
renderPrb(productBestSeller)
function renderPrb(products) {
  let item = ""
  for (let product of products) {
    item += `
    <div class="bestSeller_tabContent--item col-lg-3 col-md-4 col-sm-6 col-6 itemlc" data-name ="p-${product.id}">
    <div class="tabContent_item--image">
    <a href="${product.link}">
    <img src="${product.image}" alt="" class = "imgItem">
    </a>
    </div>
    <div class="tabContent_item--options">
          <ul class="item_options--main">
            <li class="item_options viewPr" >
              <a href="#!" class="item_options--logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </a>
                <span class="item_options--Title viewTitle" >View</span>
                  </li>
                  <li class="item_options addtowish" >
                <a href="#!" class="item_options--logo"> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg>
                </a>
                <span class="item_options--Title wishTitle" >Add to WishList</span>
                  </li>
                  <li class="item_options infor" >
                <a href="#!" class="item_options--logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
              </svg>
                </a>
                <span class="item_options--Title cartTitle">Information</span>
                  </li>
          </ul>
        </div>
        <h3 class="tabContent_item--name" >
        <a href="${product.link}" class = "imgName">${product.name}</a>
        </h3>
        <p class="tabContent_item--price">
        $${product.price}.00
        </p>
        </div>
        `
  }
  $('.bestSeller_tabContent--a2 .row ').html(item)
}
// Render Product Shop Page
const productShopPage = [
  {
    "id": 1,
    "name": "Brocolli",
    "price": 120,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Brocolli.html"
  },
  {
    "id": 2,
    "name": "Cauliflower",
    "price": 60,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Cauliflower.html"
  },
  {
    "id": 3,
    "name": "Cucumber",
    "price": 48,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Cucumber.html"
  },
  {
    "id": 4,
    "name": "Beetroot",
    "price": 32,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Beetroot.html"
  },
  {
    "id": 5,
    "name": "Carrot",
    "price": 56,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Carrot.html"
  },
  {
    "id": 6,
    "name": "Tomato",
    "price": 16,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Tomato.html"
  },
  {
    "id": 7,
    "name": "Beans",
    "price": 82,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Beans.html"
  },
  {
    "id": 8,
    "name": "Brinjal",
    "price": 35,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Brinjal.html"
  },
  {
    "id": 9,
    "name": "Capsicum",
    "price": 60,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Capsicum.html"
  },
  {
    "id": 10,
    "name": "Mushroom",
    "price": 75,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Mushroom.html"
  },
  {
    "id": 11,
    "name": "Potato",
    "price": 22,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/potato.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Potato.html"
  },
  {
    "id": 12,
    "name": "Pumpkin",
    "price": 48,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Pumpkin.html"
  },
  {
    "id": 13,
    "name": "Corn",
    "price": 75,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/corn.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Corn.html"
  },
  {
    "id": 14,
    "name": "Onion",
    "price": 16,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
    "category": "vegetables",
    "link": "http://127.0.0.1:5500/src/html/products/Onion.html"
  },
  {
    "id": 15,
    "name": "Apple",
    "price": 72,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Apple.html"
  },
  {
    "id": 16,
    "name": "Banana",
    "price": 45,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Banana.html"
  },
  {
    "id": 17,
    "name": "Grapes",
    "price": 60,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Grapes.html"
  },
  {
    "id": 18,
    "name": "Mango",
    "price": 75,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Mango.html"
  },
  {
    "id": 19,
    "name": "Musk Melon",
    "price": 36,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Musk%20Melon.html"
  },
  {
    "id": 20,
    "name": "Orange",
    "price": 75,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Orange.html"
  },
  {
    "id": 21,
    "name": "Pears",
    "price": 69,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Pears.html"
  },
  {
    "id": 22,
    "name": "Pomegranate",
    "price": 95,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pomegranate.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Pomegranate.html"
  },
  {
    "id": 23,
    "name": "Raspberry",
    "price": 160,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg",
    "category": "fruits",
    "link": "http://127.0.0.1:5500/src/html/products/Raspberry.html"
  },
]
// next Page
let perPage = 9
let currentPage = 1
let startPage = 0
let endPage = perPage
const totalPages = Math.ceil(productShopPage.length / perPage)
const nextPage = $('.next')
const prevPage = $('.prev')

//  get current PAge
function getCurrentPage(currentPage) {
  startPage = (currentPage - 1) * perPage
  endPage = currentPage * perPage
}
// next Page
nextPage.on("click", function () {
  currentPage++;
  if (currentPage > totalPages) {
    currentPage = totalPages
  }
  $('.pagination .page-items .page-link').removeClass('activePagi')
  $(`.pagination .page-items:eq(${currentPage - 1}) .num`).addClass('activePagi')
  getCurrentPage(currentPage)
  renderPrSb(productShopPage)
})
// Previous Page
prevPage.on("click", function () {
  currentPage--;
  if (currentPage <= 1) {
    currentPage = 1
  }
  renderPrSb(productShopPage)
  $('.pagination .page-items .page-link').removeClass('activePagi')
  $(`.pagination .page-items:eq(${currentPage - 1}) .num`).addClass('activePagi')
  getCurrentPage(currentPage)
})
// Change Page
function changePage() {
  const currentPages = document.querySelectorAll('.page-items')
  for (let i = 0; i < currentPages.length; i++) {
    currentPages[i].addEventListener("click", function () {
      const value = i + 1
      currentPage = value
      $('.pagination .page-items .page-link').removeClass('activePagi')
      currentPages[i].children[0].classList.add('activePagi')
      getCurrentPage(currentPage)
      renderPrSb(productShopPage)
    })
  }
}
// ========================
renderPrSb(productShopPage)
function renderPrSb(products) {
  let item = ""
  for (let product of products) {
    if (product.id > startPage && product.id < endPage) {
      item += `
                    <div class="bestSeller_tabContent--item col-lg-3 col-md-4 col-sm-6 col-6 shopItemsList itemlc"  data-name ="p-${product.id}">
                        <!-- image Product -->
                        <div class="tabContent_item--image">
                          <a href="${product.link}">
                            <img src="${product.image}" alt="">
                          </a>
                        </div>
                        <!-- end of image -->
                        <!-- choose options product -->
                       
                        <!-- end of options -->
                        <!-- name product -->
                        <p class="tabContent_item--name" data-name="${product.name}">
                          ${product.name}
                        </p>
                        <!-- end of name product-->
                        <!-- price product -->
                        <p class="tabContent_item--price" data-price ="${product.price}" data-id="${product.id}">
                          $${product.price}.00
                        </p>
                        <!-- end of price product-->
                      </div>
                        `
    }
  }
  $('.shopContent_list .row ').html(item)
}
changePage()

//slider of Website
$(document).ready(function () {
  $(".slider").owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    slideSpeed: 100,
    items: 1,
    margin: 10,
    autoHeight: true,
    dots: false,
    autoplay: true,
    loop: true,
  });
  $(".featured_body--main").owlCarousel({
    loop: true,
    autoplay: true,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      390: {
        items: 2,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 5,
      },
      1400: {
        items: 5,
      }
    }
  })
  $('.lastNew_posts').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
  $('.testi_post').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })

  $('.instagram_content').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 5
      }
    }
  })
  $('.shopContent_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
})
// search bar
renderSearch(productShopPage)
function renderSearch(searchProduct) {
  document.querySelectorAll('.result_product').innerText = ""
  let item = ''
  for (let product of searchProduct) {
    item += `
      <div class="col-lg-4 col-sm-6 col-md-6 layout">
              <div class="result_product">
                <a href="#!" class="result_product--image">
                  <img src="${product.image}" alt="">
                </a>
                <h4 class="result_product--title">
                  <a href="#!">${product.name}</a>
                </h4>
                <span class="result_product--price">
                  $${product.price}.00 USD
                </span>
              </div>
      </div>
    `
  }
  $('.searchBar-result--main').html(item)
}

let search = document.getElementsByClassName('searchBar-form--input')[0]
search.addEventListener('keyup', () => {
  let filter = search.value.toUpperCase()
  let Product = document.querySelectorAll('.result_product')
  for (let i = 0; i < Product.length; i++) {
    let b = Product[i].querySelectorAll('.result_product--title')[0]
    let namePR = b.querySelectorAll('a')[0]
    let textVal = namePR.textContent || namePR.innerText
    if (textVal.toUpperCase().indexOf(filter) > -1) {
      Product[i].parentElement.style.display = ''
    }
    else {
      Product[i].parentElement.style.display = 'none'

    }
  }
})
