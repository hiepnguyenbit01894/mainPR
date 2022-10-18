$(document).ready(function () {
    // ================== HEADER =========================
    //toggle header searchBar
    const searchButton = $(".searchItems")
    const header = $("#header")[0]
    const searchbarMAin = $(".searchBar .searchBar--main")
    const searchExitButton = $(".searchBar .searchBar--exit")
    const bgSearchBar = $(".searchBar .bgSearchBar")
    const body = $("BODY")[0]
    searchButton.on("click", function () {
        header.style.opacity = "0"
        searchbarMAin.toggleClass('active')
        bgSearchBar.toggleClass('active')
        $(body).toggleClass("activeBody")
    })
    searchExitButton.on("click", function () {
        searchbarMAin.removeClass('active')
        header.style.opacity = "1"
        bgSearchBar.removeClass('active')
        $(body).removeClass("activeBody")
    })
    // Header CartBar
    const cartButton = $(".cartItems")
    const cartBar = $(".cartBar")
    const bgcartBar = $(".bgcartBar")
    const cartExit = $(".cartBar .cartBar_head--exit")
    cartButton.on("click", function () {
        cartBar.toggleClass('contentActive')
        bgcartBar.toggleClass('bgactive')
    })
    cartExit.on("click", function () {
        cartBar.toggleClass('contentActive')
        bgcartBar.toggleClass('bgactive')
    })

    let btnAddtoCart = document.getElementsByClassName("addtocart")
    let Cart = new Array()
    for (let i = 0; i < btnAddtoCart.length; i++) {
        btnAddtoCart[i].addEventListener("click", (e) => {
            let image= e.target.parentElement.parentElement.parentElement.children[0].children[0].src
            let name = e.target.parentElement.parentElement.parentElement.children[1].children[0].children[0].innerText
            let price = e.target.parentElement.parentElement.parentElement.children[1].children[1].innerText
            let quantity =parseInt(e.target.parentElement.parentElement.parentElement.children[1].children[3].children[0].children[1].value)
            let item = new Array(image,name,price,quantity )
            
            let check = 0 //flag to check 
            for(let i = 0; i < Cart.length;i++)
            {
                console.log(name);
                if(Cart[i][1] == name)
                {
                    check = 1
                    quantity += parseInt(Cart[i][3])
                    Cart[i][3] = quantity
                    break
                }
                
            }
            if(check == 0)
            {
                Cart.push(item)
            }
            showCart()
            // save product to sessionStorage
            sessionStorage.setItem("Cart", JSON.stringify(Cart))

        })
    }
    function showCart(){
        let html = ''
        let totalPrs = 0
        for(let i =0; i< Cart.length;i++)
        {
            let priceProduct =  parseInt(Cart[i][2].slice(1,3)) *  Cart[i][3]
            totalPrs += priceProduct
            html  += `<div class="cart_body--product d-flex">
                            <div class="cart_product--image">
                            <img src="${Cart[i][0]}" alt="">
                            </div>   
                            <div class="cart_product--infor">
                            <h3 class="product_infor--name iitem">
                                <a href="products/Banana.html">
                                ${Cart[i][1]}
                                </a>
                            </h3>
                            <div class="product_infor--quantity iitem">
                                Qty: ${Cart[i][3]}
                            </div>
                            <div class="product_infor--price iitem">
                                <span> ${Cart[i][2]}</span>
                            </div>
                            <div class="product_infor--totalPrice iitem">
                            <span> Total :$${priceProduct}.00 USD</span>
                            </div>
                            </div>
                            <div class="cart_product--remove">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                            </div>
                        </div>`
                        console.log();
        }
        document.querySelector('.cartBar_main--total .float-right').innerText = `$${totalPrs}.00`
        document.querySelector('.cart_body--show').innerHTML = html
    }
    

    // =======================
    //toggle  headBar

    const wishButton = $(".wishItems")
    const wishBar = $(".wishBar")
    const bgwishBar = $(".bgwishBar")
    const wishExit = $(".wishBar .wishBar_head--exit")

    wishButton.on("click", function () {
        wishBar.toggleClass('contentActive')
        bgwishBar.toggleClass('bgactive')
    })
    wishExit.on("click", function () {
        wishBar.toggleClass('contentActive')
        bgwishBar.toggleClass('bgactive')
    })

    // toggle menu responsive Mobile
    const opButton = $(".menuMoblie .menuMobile_left")
    const clButton = $(".logoMenu")
    const navMobile = $(".navMobile")
    const overlayMenu = $(".menu_overlay")
    opButton.on("click", toggleNavMenu)
    opButton.on("click", toggleOverlay)
    clButton.on("click", toggleNavMenu)
    clButton.on("click", toggleOverlay)
    function toggleNavMenu() {
        navMobile.toggleClass('active')
    }
    function toggleOverlay() {
        overlayMenu.toggleClass('active')
    }

    // toggle menu Click outside
    overlayMenu.on("click", romeveActive)
    bgwishBar.on("click", romeveActive)
    bgcartBar.on("click", romeveActive)
    bgSearchBar.on("click", romeveActive)

    function romeveActive(e) {
        if (e.target == e.currentTarget) {
            navMobile.removeClass('active')
            overlayMenu.removeClass('active')
            wishBar.removeClass('contentActive')
            bgwishBar.removeClass('bgactive')
            cartBar.removeClass('contentActive')
            bgcartBar.removeClass('bgactive')
            bgSearchBar.removeClass('active')
            searchbarMAin.removeClass('active')
            header.style.marginTop = "0px"
            header.style.opacity = 1
            $(body).removeClass("activeBody")
        }
    }
    // toggle bestSeller part
    $('.bestSeller_options li').click(function () {
        let tab_id = $(this).attr('data-tab')
        $('.bestSeller_options li').removeClass('activeBtnTab')
        $('.tabContent li').removeClass('activeTab')
        $(this).addClass('activeBtnTab')
        $("#" + tab_id).toggleClass('activeTab')
    })
    // dropdown shoProducts
    //change title of sorting
    // ==================== Sorting Price & ID
    function sort(val, param) {
        let itemsShop = $(".shopItemsList")
        itemsShop.sort(function (a, b) {
            if (param == "") {
                return (
                    $(".tabContent_item--price", a).data(`${val}`) - $(".tabContent_item--price", b).data(`${val}`)
                )
            }
            else {
                return (
                    $(".tabContent_item--price", b).data(`${val}`) - $(".tabContent_item--price", a).data(`${val}`)
                )
            }
        })
        $(".shopContent_list .row").append(itemsShop)
    }

    // ==========================
    function sortAlpha(val) {
        let itemsShop = $(".shopItemsList")
        itemsShop.sort((a, b) => {
            const nameA = $(".tabContent_item--name", a).data("name").toUpperCase(); // ignore upper and lowercase
            const nameB = $(".tabContent_item--name", b).data("name").toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) return val == "a2z" ? -1 : 1;
            if (nameA > nameB) return val == "a2z" ? 1 : -1;
            // names must be equal
            return 0;
        })
        $(".shopContent_list .row").append(itemsShop)
    }
    // ==========================
    function main() {
        let sorting = $("#sort").val()
        if (sorting == "h2l") {
            sort('price', "hyhy")
        }
        else if (sorting == "l2h") {
            sort('price', "")
        }
        else if (sorting == "default") {
            sort('id', "")
        }
        else if (sorting == "a2z") {
            sortAlpha("a2z")
        }
        else if (sorting == "z2a") {
            sortAlpha("z2a")
        }
    }
    $("#sort").click(function () {
        main()
    })
    //spinner quickview
    $('input[type="number"]').bootstrapNumber({
        // default, danger, success , warning, info, primary
        upClass: 'default',
        downClass: 'default',
        center: true
    });
    // quickview Product
    let quickView = document.querySelector('#quick_view')
    let quickviewItems = document.querySelectorAll('.quick_view--item')
    let productItemview = document.querySelectorAll('.bestSeller_tabContent--item .viewPr')
    productItemview.forEach(product => {
        product.onclick = (e) => {
            e.preventDefault()
            quickView.style.opacity = '1'
            quickView.style.visibility = 'visible'
            quickviewItems.forEach(item => {
                let name = product.parentElement.parentElement.parentElement.getAttribute('data-name')
                let target = item.getAttribute('data-target')
                if (name == target) {
                    item.classList.add('activeQv')
                }
            })
        }
    })

    quickviewItems.forEach(close => {
        close.querySelector('.bi-x-lg').onclick = (e) => {
            close.classList.remove('activeQv')
            quickView.style.opacity = '0'
            quickView.style.visibility = 'hidden'
        }
    })
    // progesbar 
    $(".progess_bar--main").each(function () {
        $(this)
            .data("ori", $(this).width())
            .width(0)
            .animate({
                width: $(this).data("ori")
            }, 1000)
    })


})
