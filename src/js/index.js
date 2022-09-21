$(document).ready(function() {
    // ================== HEADER =========================
    //toggle header searchBar
    const searchButton = $(".searchItems")
    const header = $("#header")[0]
    const searchbarMAin =$(".searchBar .searchBar--main")
    const searchExitButton = $(".searchBar .searchBar--exit")
    const bgSearchBar =$(".searchBar .bgSearchBar")
    const body = $("BODY")[0]
    searchButton.on ("click",function(){
        header.style.marginTop = "522px"
        searchbarMAin.toggleClass('active')
        bgSearchBar.toggleClass('active')
        $(body).toggleClass("activeBody")
    })
    searchExitButton.on ("click",function(){
        searchbarMAin.toggleClass('active')
        header.style.marginTop = "0"
        bgSearchBar.toggleClass('active')
        $(body).toggleClass("activeBody")

    })
    //toggle header cartBar
    const cartButton = $(".cartItems")
    const cartBar =$(".cartBar")
    const bgcartBar= $(".bgcartBar")
    const cartExit = $(".cartBar .cartBar_head--exit")

    cartButton.on("click",function(){
        cartBar.toggleClass('contentActive')
        bgcartBar.toggleClass('bgactive')
    })
    cartExit.on("click",function(){
        cartBar.toggleClass('contentActive')
        bgcartBar.toggleClass('bgactive')
    })
    //toggle  headBar
    const wishButton = $(".wishItems")
    const wishBar =$(".wishBar")
    const bgwishBar= $(".bgwishBar")
    const wishExit = $(".wishBar .wishBar_head--exit")

    wishButton.on("click",function(){
        wishBar.toggleClass('contentActive')
        bgwishBar.toggleClass('bgactive')
    })
    wishExit.on("click",function(){
        wishBar.toggleClass('contentActive')
        bgwishBar.toggleClass('bgactive')
    })

    // toggle menu responsive Mobile
    const opButton = $(".menuMoblie .menuMobile_left")
    const clButton =$(".logoMenu")
    const navMobile =$(".navMobile")
    const overlayMenu = $(".menu_overlay")
    opButton.on("click",toggleNavMenu)
    opButton.on("click",toggleOverlay)
    clButton.on("click",toggleNavMenu)
    clButton.on("click",toggleOverlay)
    function toggleNavMenu(){
        navMobile.toggleClass('active')
    }
    function toggleOverlay(){
        overlayMenu.toggleClass('active')
    }

    // toggle menu Click outside
    overlayMenu.on ("click",romeveActive)
    bgwishBar.on("click",romeveActive)
    bgcartBar.on("click",romeveActive)
    bgSearchBar.on("click",romeveActive)
    
    function romeveActive(e) {
        if(e.target== e.currentTarget)
        {
            navMobile.removeClass( 'active')
            overlayMenu.removeClass( 'active')
            wishBar.removeClass( 'contentActive')
            bgwishBar.removeClass( 'bgactive')
            cartBar.removeClass( 'contentActive')
            bgcartBar.removeClass( 'bgactive')
            bgSearchBar.removeClass( 'active')
            searchbarMAin.removeClass( 'active')
            header.style.marginTop = "0px"
            $(body).removeClass("activeBody")
        }
    }
})
