const button = document.querySelector('button')
const img = document.querySelector("img")
const quote = document.querySelector(".quote")
const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"



let images = ["ron1.jpg", "ron2.jpg", "ron3.jpg", "ron4.jpg", "ron5.jpg", "ron6.jpg", "ron7.jpg", "ron8.jpg", "ron1.jpg"]


button.addEventListener("click", function(){
var randomNum = Math.round(Math.random()*8)
img.src = images[randomNum] 


console.log(randomNum)
axios.get(url)
.then(function(res){

    quote.innerHTML = '<span>"</span>' +   res.data + '<span>"</span>'
    

    
})


})

axios.get(url)
.then(function(res){


    

    
})