var myAudio = document.getElementById("song1");
var isPlaying = false;

function PlayandPause() {
//   isPlaying ? myAudio.pause() : myAudio.play();
if(isPlaying===true){
    myAudio.pause();
}else{
    myAudio.play();
  }
};

myAudio.onplaying = function() {
  isPlaying = true;
  document.getElementById("Infected").innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
};
myAudio.onpause = function() {
  isPlaying = false;
  document.getElementById("Infected").innerHTML = '<i class="fa-solid fa-play"></i> Play';
};


var song2 = document.getElementById("song2");
 isPlaying = false;

function playandpause2() {
//   isPlaying ? myAudio.pause() : myAudio.play();
if(isPlaying===true){
    song2.pause();
}else{
    song2.play();
  }
};

song2.onplaying = function() {
  isPlaying = true;
  document.getElementById("starboy").innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
};
song2.onpause = function() {
  isPlaying = false;
  document.getElementById("starboy").innerHTML = '<i class="fa-solid fa-play"></i> Play';
};

