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
        header.style.marginTop = "522px"
        searchbarMAin.toggleClass('active')
        bgSearchBar.toggleClass('active')
        $(body).toggleClass("activeBody")
    })
    searchExitButton.on("click", function () {
        searchbarMAin.removeClass('active')
        header.style.marginTop = "0"
        bgSearchBar.removeClass('active')
        $(body).removeClass("activeBody")
    })
    //toggle header cartBar
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
            else{
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
            sort('price',"hyhy")
        }
        else if (sorting == "l2h") {
            sort('price',"")
        }
        else if (sorting == "default") {
            sort('id',"")
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
    let productItemview = document.querySelectorAll('.bestSeller_tabContent--item #view')
    productItemview.forEach(product =>{
            product.onclick =(e) =>{
                e.preventDefault()
                quickView.style.opacity = '1'
                quickView.style.visibility = 'visible'
                quickviewItems.forEach(item =>{
                    let name = product.parentElement.parentElement.parentElement.getAttribute('data-name')
                    let target = item.getAttribute('data-target')
                    if(name == target)
                        {
                            item.classList.add('activeQv')   
                        }
                })
            }
    })
    
    quickviewItems.forEach(close =>{
        close.querySelector('.bi-x-lg').onclick =(e)=>{
                close.classList.remove('activeQv')
                quickView.style.opacity = '0'
                quickView.style.visibility = 'hidden'
        }
    })
    // progesbar 
    $(".progess_bar--main").each(function(){
        $(this)
        .data("ori",$(this).width())
        .width(0)
        .animate({
            width:$(this).data("ori")
        },1000)
    })
})
