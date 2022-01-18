
var modal = document.getElementById('modal-location');
var btn = document.getElementById("btn-modal-location");
var video = document.getElementById("video");
var span = document.getElementsByClassName("modal-location-close")[0];
btn.onclick = function() {
 video.play()
    modal.style.display = "block";
    let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    video.style.display = "none";

    if (timePassed > 9000) clearInterval(timer);

  }, 6000);
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('myModal');
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
