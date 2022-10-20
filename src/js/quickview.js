$(document).ready(function(){
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
