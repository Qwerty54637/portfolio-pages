
var i = 0;
// var txt = 'Portfolio Pages'; 
var speed = 80;
var distortion = 30;

function typeWriter(id, txt) {
    if (txt.length == 0){
        return;
    } else {
        random = Math.random() * 2 * distortion - distortion;
        document.getElementById(id).innerHTML += txt.charAt(0);
        setTimeout(function(){typeWriter(id, txt.substring(1))}, speed + random);
    }
}

typeWriter("title", "Portfolio Pages");
setTimeout(function(){typeWriter("tagline", "display your work, with style.")}, 18*speed);


// document.documentElement.onscroll = } ;
// 

// function tagScroll() {
//   if (document.documentElement.scrollTop > 20) {
//     typeWriter("tagline", "display your work, with style.");
//     exit;
//   } 
// }
