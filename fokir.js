let allImg = document.querySelector('.controlImg')
let btnAll =document.querySelector('.all')
let btnGraphic =document.querySelector('.graphic')
let btnDesign =document.querySelector('.design')
let btnBrand =document.querySelector('.brand')


btnAll.addEventListener('click', function(){
    allImg.innerHTML=`
    <div class="col-md-4 position-relative">
    <img class="w-100" src="img/1.jpg" alt="watch img">
    <div class="layerPortfolio"></div>
</div>
<div class="col-md-4 position-relative">
    <img class="w-100" src="img/2.jpg" alt="watch img">
    <div class="layerPortfolio"></div>
</div>
<div class="col-md-4 position-relative">
    <img class="w-100" src="img/3.jpg" alt="watch img">
    <div class="layerPortfolio"></div>
</div>
<div class="col-md-4 position-relative">
    <img class="w-100" src="img/4.jpg" alt="watch img">
    <div class="layerPortfolio"></div>
</div>
<div class="col-md-4 position-relative">
    <img class="w-100" src="img/5.jpg" alt="watch img">
    <div class="layerPortfolio"></div>
</div>
<div class="col-md-4 position-relative">
    <img class="w-100" src="img/6.jpg" alt="watch img">
    <div class="layerPortfolio"></div>
</div>
    
    `
})
btnGraphic.addEventListener('click', function(){
    allImg.innerHTML=`
<div class="col-md-4 position-relative">
    <img class="w-100" src="img/2.jpg" alt="watch img">
    <div class="layerPortfolio"></div>
</div>
<div class="col-md-4 position-relative">
    <img class="w-100" src="img/3.jpg" alt="watch img">
    <div class="layerPortfolio"></div>
</div>
<div class="col-md-4 position-relative">
    <img class="w-100" src="img/4.jpg" alt="watch img">
    <div class="layerPortfolio"></div>
</div>
<div class="col-md-4 position-relative">
    <img class="w-100" src="img/5.jpg" alt="watch img">
    <div class="layerPortfolio"></div>
</div>
<div class="col-md-4 position-relative">
    <img class="w-100" src="img/6.jpg" alt="watch img">
    <div class="layerPortfolio"></div>
</div>
    
    `
})
btnDesign.addEventListener('click', function(){
    allImg.innerHTML=`
    <div class="col-md-4 position-relative">
    <img class="w-100" src="img/1.jpg" alt="">
    <div class="layerPortfolio"></div>
</div>
<div class="col-md-4 position-relative">
    <img class="w-100" src="img/4.jpg" alt="">
    <div class="layerPortfolio"></div>
</div>
<div class="col-md-4 position-relative">
    <img class="w-100" src="img/5.jpg" alt="">
    <div class="layerPortfolio"></div>
</div>
    `
})


btnBrand.addEventListener('click', function(){
    allImg.innerHTML=`
    <div class="col-md-4 position-relative">
    <img class="w-100" src="img/2.jpg" alt="">
    <div class="layerPortfolio"></div>
</div>
<div class="col-md-4 position-relative">
    <img class="w-100" src="img/6.jpg" alt="">
    <div class="layerPortfolio"></div>
</div>

    `
})


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1 ,
        loop:true
    });
});