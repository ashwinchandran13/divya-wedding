/**
 * @author Ashwin Chandran <ashwinchandran13@gmail.com>
 */

(function ($) {
    "use strict";
      $('.sakura-falling').sakura('start', {
        blowAnimations: [
            'blow-soft-left'
        
        ],                   // Horizontal movement animation names
        className: 'sakura', // Class name to use
        fallSpeed: 2.7,        // Factor for petal fall speed
        maxSize: 12,         // Maximum petal size
        minSize: 9,          // Minimum petal size
        newOn: 200,          // Interval after which a new petal is added
        
    });

})(jQuery);

$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Kalyanathinu Verane!');
});
var audio = document.getElementById("my_audio");
audio.volume = 0.05;

function handleVisibilityChange() {
    const myAudio = document.getElementById("my_audio");
    const element = document.getElementById("audio-id");
    if (document.visibilityState === 'hidden') {
      // Pause the audio when the tab becomes hidden
      element.classList.replace("fa-volume-up", "fa-volume-off");
      myAudio.pause();
    }
  }

document.addEventListener('visibilitychange', handleVisibilityChange, false);

function toggleAudio() { 
    const element = document.getElementById("audio-id");
    if (document.getElementById("my_audio").paused) {
        document.getElementById("my_audio").play();
        element.classList.replace("fa-volume-off", "fa-volume-up");
    } else {
        document.getElementById("my_audio").pause();
        element.classList.replace("fa-volume-up", "fa-volume-off");
    }
    console.log('Kalyanathinu Verane!');
    event.stopPropagation();
};

// Set the date we're counting down to
var countDownDate = new Date("May 16, 2024 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Wedding Completed !!";
        // document.getElementById("time").innerHTML = " See The best Captured Moments ";
        // document.getElementById("time").href = "https://photos.app.goo.gl/Wn9PRK7FMpxBKF5s6/";
        // document.getElementById("time").target = "_blank";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 16th May, 2024', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Ashwin Chandran', styles1, styles2);

console.log(
    `%c Please Join Us for the wedding \n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)
