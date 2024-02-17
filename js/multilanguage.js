window.onload = translate(localStorage.getItem("index")); /* Call translate(index) with each page load (retrieved save index)*/

$(document).ready(function () { /*Call translate() on menu (flags) selection*/

    $("#eng").click(function(){
        translate(0) /*Call translate() method with selected index 0*/
        localStorage.setItem("index",0); /*Save selected index for the next loaded pages*/
    })

    $("#sve").click(function(){
        translate(1)
        localStorage.setItem("index",1);      
    })

    $("#ita").click(function(){
        translate(2)
        localStorage.setItem("index",2);
    })

    $("#esp").click(function(){
        translate(3)
        localStorage.setItem("index",3);
    })
})
