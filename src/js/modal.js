
var modal1 = document.getElementById('modal-location');
var btn1 = document.getElementById("btn-modal-location");
var video = document.getElementById("video");
var span1 = document.getElementsByClassName("location-close")[0];
btn1.onclick = function() {
 video.play()
    modal1.style.display = "block";
    let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    video.style.display = "none";

    if (timePassed > 9000) clearInterval(timer);

  }, 6000);
}
span1.onclick = function() {
    modal1.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

var modal = document.getElementById('modal-franchise');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
