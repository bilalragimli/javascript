var btn=document.getElementById("btn1")
var div=document.getElementById("all")

btn.onclick=function(){
    var newTag=document.createElement("p")
    var input=document.getElementById("item")
    newTag.innerText=input
    div.appendChild(newTag)
}