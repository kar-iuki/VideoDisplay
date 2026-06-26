const video = document.getElementById("video");
const btn   = document.getElementById("toggleBtn");
const status = document.getElementById("status");

function toggleVideo() {
  if (video.style.display === "none") {
    // Hidden → show and play
    video.style.display = "block";
    video.play();
  } else if (video.paused) {
    // Visible + paused → play
    video.play();
  } else {
    // Playing → hide and pause
    video.pause();
    video.style.display = "none";
  }
  updateUI();
}

function updateUI() {
  const hidden  = video.style.display === "none";
  const playing = !video.paused && !hidden;

  btn.innerHTML = hidden    ? "&#9654; Show &amp; Play"
                : playing   ? "&#9646;&#9646; Hide Video"
                :             "&#9654; Play Video";

  status.textContent = hidden ? "Hidden" : playing ? "Playing" : "Paused";
}

video.addEventListener("play",  updateUI);
video.addEventListener("pause", updateUI);
video.addEventListener("ended", updateUI);