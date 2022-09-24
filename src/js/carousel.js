const productNewarrivals =[
  {
    "id": 8,
    "name": "Brinjal",
    "price": 35,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg",
    "category": "vegetables"
  },
  {
    "id": 9,
    "name": "Capsicum",
    "price": 60,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg",
    "category": "vegetables"
  },
  {
    "id": 10,
    "name": "Mushroom",
    "price": 75,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg",
    "category": "vegetables"
  },
  {
    "id": 11,
    "name": "Potato",
    "price": 22,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/potato.jpg",
    "category": "vegetables"
  },
  {
    "id": 12,
    "name": "Pumpkin",
    "price": 48,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg",
    "category": "vegetables"
  },
  {
    "id": 13,
    "name": "Corn",
    "price": 75,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/corn.jpg",
    "category": "vegetables"
  },
  {
    "id": 14,
    "name": "Onion",
    "price": 16,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
    "category": "vegetables"
  },
  {
    "id": 15,
    "name": "Apple",
    "price": 72,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg",
    "category": "fruits"
  },
]

renderPrn(productNewarrivals)
function renderPrn(products){
    let item =""
    for(let product of products){
        item += `
        <div class="bestSeller_tabContent--item col-lg-3 col-md-4 col-sm-6 col-6">
        <div class="tabContent_item--image">
        <a href="#">
        <img src="${product.image}" alt="">
        </a>
        </div>
        <div class="tabContent_item--options">
              <ul class="item_options--main">
                <li class="item_options" id="view">
                  <a href="#" class="item_options--logo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                    </a>
                    <span class="item_options--Title" id="viewTitle">View</span>
                      </li>
                      <li class="item_options" id="wish">
                    <a href="#" class="item_options--logo"> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                      </svg>
                    </a>
                    <span class="item_options--Title" id = "wishTitle">Add to WishList</span>
                      </li>
                      <li class="item_options" id="cart">
                    <a href="#" class="item_options--logo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                    </a>
                    <span class="item_options--Title" id = "cartTitle">Add to Cart</span>
                      </li>
              </ul>
            </div>
            <h3 class="tabContent_item--name">
            <a href="#">${product.name}</a>
            </h3>
            <p class="tabContent_item--price">
            $${product.price}.00
            </p>
            </div>
            `
    }
    $('.bestSeller_tabContent--a1 .row ').html(item)
}
const productBestSeller =[
  {
    "id": 16,
    "name": "Banana",
    "price": 45,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",
    "category": "fruits"
  },
  {
    "id": 17,
    "name": "Grapes",
    "price": 60,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
    "category": "fruits"
  },
  {
    "id": 18,
    "name": "Mango",
    "price": 75,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
    "category": "fruits"
  },
  {
    "id": 19,
    "name": "Musk Melon",
    "price": 36,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
    "category": "fruits"
  },
  {
    "id": 20,
    "name": "Orange",
    "price": 75,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg",
    "category": "fruits"
  },
  {
    "id": 21,
    "name": "Pears",
    "price": 69,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",
    "category": "fruits"
  },
  {
    "id": 22,
    "name": "Pomegranate",
    "price": 95,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pomegranate.jpg",
    "category": "fruits"
  },
  {
    "id": 23,
    "name": "Raspberry",
    "price": 160,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg",
    "category": "fruits"
  },
]
renderPrb(productBestSeller)
function renderPrb(products){
    let item =""
    for(let product of products){
        item += `
        <div class="bestSeller_tabContent--item col-lg-3 col-md-4 col-sm-6 col-6">
        <div class="tabContent_item--image">
        <a href="#">
        <img src="${product.image}" alt="">
        </a>
        </div>
        <div class="tabContent_item--options">
              <ul class="item_options--main">
                <li class="item_options" id="view">
                  <a href="#" class="item_options--logo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                    </a>
                    <span class="item_options--Title" id="viewTitle">View</span>
                      </li>
                      <li class="item_options" id="wish">
                    <a href="#" class="item_options--logo"> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                      </svg>
                    </a>
                    <span class="item_options--Title" id = "wishTitle">Add to WishList</span>
                      </li>
                      <li class="item_options" id="cart">
                    <a href="#" class="item_options--logo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                    </a>
                    <span class="item_options--Title" id = "cartTitle">Add to Cart</span>
                      </li>
              </ul>
            </div>
            <h3 class="tabContent_item--name">
            <a href="#">${product.name}</a>
            </h3>
            <p class="tabContent_item--price">
            $${product.price}.00
            </p>
            </div>
            `
    }
    $('.bestSeller_tabContent--a2 .row ').html(item)
}


$(document).ready(function(){
    $(".slider").owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        slideSpeed: 100,
        items:1,
        margin:10,
        autoHeight:true,
        dots:false,
        autoplay: true,
        loop: true,
    });
    $(".featured_body--main").owlCarousel({
      loop:true,
      autoplay: true,
      responsiveClass:true,
      dots:false,
      responsive:{
          0:{
              items:1,
          },
          390:{
            items: 2,
          },
          400:{
            items :3,
          },
          600:{
              items:3,
          },
          1000:{
              items:5,
          },
          1200:{
              items:5,
          },
          1400:{
              items:5,
          }
      }
  })
})
