var h = document.querySelector("h5");
var btn = document.querySelector("button");
var click = 0;
btn.addEventListener("click",function(){

if(click === 0) {
    h.innerHTML = "Friend";
    h.style.color = "green"
    btn.innerHTML = "UnFriend"
    click = 1 ;
} else {
    h.innerHTML = "Stranger";
    h.style.color = "red"
    btn.innerHTML = "Add Friend"
click = 0;

}



})