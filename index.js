var listProduct = [
    {
        id: "0",
        name: "Đồng hồ Rolex min",
        imageUrl : "./img/sanpham/4-dong-ho-rolex-min.jpg",
        price: 11233412,
        type: "rolex",
        category: "Đồng hồ Nữ, Sale"
    },
    {
        id: "1",
        name: "Apple watch series 7 ",
        imageUrl : "./img/sanpham/apple-watch-series-7-lte-45mm-vien-nhom-xanh-duong.jpg",
        price: 20233412,
        type: "apple",
        category: "Đồng hồ nam, Sale"
    },
    {
        id: "2",
        name: "Đồng hồ thông minh xiaomi watch nâu",
        imageUrl : "./img/sanpham/dong-ho-thong-minh-xiaomi-watch-s1-nau-.jpg",
        price: 10000000,
        type: "xiaomi",
        category: "Đồng hồ nam, Sale"
    },
    {
        id: "3",
        name: "Rolex Datejust",
        imageUrl : "./img/sanpham/rolex-datejust-36.jpg",
        price: 12000000,
        type: "rolex",
        category: "Đồng hồ Nữ, Đồng hồ nam"
    },
    {
        id: "4",
        name: "Samsung Galaxy Watch 5",
        imageUrl : "./img/sanpham/samsung-galaxy-watch-5-40.jpg",
        price: 9000000,
        type: "samsung",
        category: "Đồng hồ Nữ, Sale"
    },
    {
        id: "5",
        name: "Samsung Galaxy Watch 6",
        imageUrl : "./img/sanpham/samsung-galaxy-watch-5.jpg",
        price: 9000000,
        type: "samsung",
        category: "Đồng hồ nam, Đồng hồ Nữ"
    },
    {
        id: "6",
        name: "Apple Watch Ultra ",
        imageUrl : "./img/sanpham/apple-watch-ultra-cao-su-den-xanh-thumbn-600x600.jpg",
        price: 9000000,
        type: "apple",
        category: "Đồng hồ nam, Sale"
    },
    {
        id: "7",
        name: "Beu Active 1 Thumbnew ",
        imageUrl : "./img/sanpham/dong-ho-beu-active-1-thumbnew-600x600.jpeg",
        price: 8000000,
        type: "beu",
        category: "Đồng hồ nam, Sale"
    },
    {
        id: "8",
        name: "Đồng Hồ Thông Minh Garmin Vivosmart ",
        imageUrl : "./img/sanpham/dong-ho-thong-minh-garmin-vivosmart-5-thumbn-600x600.jpg",
        price: 5000000,
        type: "garmin",
        category: "Đồng hồ nam, Sale"
    },
    {
        id: "9",
        name: "Garmin Forerunner 995 ",
        imageUrl : "./img/sanpham/garmin-forerunner-955-day-silicone-den-600x600.jpg",
        price: 6000000,
        type: "garmin",
        category: "Đồng hồ nam, Sale"
    },
    {
        id: "10",
        name: "Sunto 7 Day ",
        imageUrl : "./img/sanpham/suunto-7-day-silicon-xam-600x600.jpg",
        price: 6000000,
        type: "sunto",
        category: "Đồng hồ nam, Sale"
    },
    {
        id: "11",
        name: "Vong tay thông minh mi bard 7 pro",
        imageUrl : "./img/sanpham/vong-tay-thong-minh-mi-band-7-pro-trang-1.jpeg",
        price: 6000000,
        type: "xiaomi",
        category: "Đồng hồ nam, Sale"

    }

]












var headerNavItem = document.querySelectorAll(".header-nav-item")


// handle click vao btn search

headerNavItem[0].onclick = function() {
    document.querySelector(".header-nav-item-search").classList.add("show")
}

document.querySelector(".header-nav-item-search").onmouseout = function() {
    document.querySelector(".header-nav-item-search").classList.remove("show")
}


// handle modal login 


var modal = document.querySelector(".modal")

var headerNavItemUser = document.querySelector(".header-nav-item-user")

headerNavItemUser.addEventListener('click',function() {
    modal.classList.add("show")
})

var formExit = document.querySelector(".form-exit")

formExit.addEventListener("click", function() {
    modal.classList.remove("show")
})

var product= document.querySelector(".product")

product.addEventListener("mouseover", function() {
    
    document.querySelector(".product-click").classList.add("show")
})
product.addEventListener("mouseout", function() {
    document.querySelector(".product-click").classList.remove("show")
})


var productClickLeft = document.querySelector(".product-click-left")
var productClickRight = document.querySelector(".product-click-right")

var productItem = product.querySelector(".product-item")
var productImg = productItem.querySelector(".product-img").firstElementChild
var productInfo = productItem.querySelector(".product-info")
var productInfoTitle = productInfo.querySelector(".product-info-title")
var productInfoPrice = productInfo.querySelector(".product-info-price")
var productInfoAddress =  productInfo.querySelector(".product-info-address")
var productInfoAddressId = productInfoAddress.querySelector(".product-info-address-id")
var productInfoAddressIdSpan = productInfoAddressId.lastChild
var productInfoAddressCategory = productInfoAddress.querySelector(".product-info-address-category")

var productInfoAddressType= productInfoAddress.querySelector(".product-info-address-type")

productClickLeft.addEventListener("click", function() {
    var index = parseInt(productInfoAddressIdSpan.innerHTML) - 2;
    
    if (index < 0) {
        index = listProduct.length - 5;
    }
    
    productImg.src = listProduct[index].imageUrl
    productInfoAddressIdSpan.innerHTML = parseInt(listProduct[index].id) +1
    productInfoTitle.innerHTML = listProduct[index].name
    
    
    var million = parseInt(listProduct[index].price / 1000000)
    
    var hundreds = listProduct[index].price % 1000000 == 0 ? "000" : parseInt(listProduct[index].price % 1000000 / 1000)
    var unit = listProduct[index].price % 1000000 % 1000 == 0  ? "000" : listProduct[index].price % 1000000 % 1000
    productInfoPrice.firstElementChild.innerHTML =`${million},${hundreds},${unit}đ`
    

    var price = parseInt(listProduct[index].price * 0.8)
    
    var million = parseInt(price / 1000000)
    
    var hundreds = price % 1000000 == 0 ? "000" : parseInt(price % 1000000 / 1000)
    var unit = price % 1000000 % 1000 == 0  ? "000" : price % 1000000 % 1000
    productInfoPrice.lastElementChild.innerHTML = `${million},${hundreds},${unit}đ`
    
    productInfoAddressCategory.innerHTML ="Danh mục: "+ listProduct[index].category
    productInfoAddressType.innerHTML ="Từ khóa: " + listProduct[index].type
    productItem.classList.add("fadeinleft")
    setTimeout(function() {
        productItem.classList.remove("fadeinleft")
    },300)
})

productClickRight.addEventListener("click", function() {
    var index = parseInt(productInfoAddressIdSpan.innerHTML) ;
    
    if (index == listProduct.length - 4) {
        index = 0;
    }
    
    productImg.src = listProduct[index].imageUrl
    productInfoAddressIdSpan.innerHTML = index + 1
    productInfoTitle.innerHTML = listProduct[index].name
    
    
    var million = parseInt(listProduct[index].price / 1000000)
    
    var hundreds = listProduct[index].price % 1000000 == 0 ? "000" : parseInt(listProduct[index].price % 1000000 / 1000)
    var unit = listProduct[index].price % 1000000 % 1000 == 0  ? "000" : listProduct[index].price % 1000000 % 1000
    productInfoPrice.firstElementChild.innerHTML =`${million},${hundreds},${unit}đ`
    

    var price = parseInt(listProduct[index].price * 0.8)
    
    var million = parseInt(price / 1000000)
    
    var hundreds = price % 1000000 == 0 ? "000" : parseInt(price % 1000000 / 1000)
    var unit = price % 1000000 % 1000 == 0  ? "000" : price % 1000000 % 1000
    productInfoPrice.lastElementChild.innerHTML = `${million},${hundreds},${unit}đ`
    productItem.classList.add("fadeinright")
    setTimeout(function() {
        productItem.classList.remove("fadeinright")
    },300)
})

