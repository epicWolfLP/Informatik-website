document.getElementById("inputField").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let input = this.value.trim().toLowerCase();

        if (input === "party") {
            document.body.classList.add("party-mode");
            removeMedia();
        }

        else if (input === "taco bell") {
            removeMedia();
            showVideo("videos/TACOBELL!!!.mp4");
        }

        else if (input === "backshot") {
            removeMedia();
            showGif("image/backshot.gif");
        }
        else if (input === "perfect") {
            removeMedia();
            showGif("image/perfect.gif");
        }
        else if (input === "stop") {
            removeMedia();
            document.body.classList.remove("party-mode");
        }

        this.value = "";
    }
});
function removeMedia() {
    let existingMedia = document.getElementById("backgroundMedia");
    if (existingMedia) {
        existingMedia.remove();
    }
}

function showVideo(videoSrc) {
    let video = document.createElement("video");
    video.id = "backgroundMedia";
    video.src = videoSrc;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.position = "fixed";
    video.style.top = "0";
    video.style.left = "0";
    video.style.width = "100vw";
    video.style.height = "100vh";
    video.style.objectFit = "cover";
    video.style.zIndex = "-1";
    document.body.appendChild(video);
}

function showGif(gifSrc) {
    let img = document.createElement("img");
    img.id = "backgroundMedia";
    img.src = gifSrc;
    img.style.position = "fixed";
    img.style.top = "0";
    img.style.left = "0";
    img.style.width = "100vw";
    img.style.height = "100vh";
    img.style.objectFit = "cover";
    img.style.zIndex = "-1";
    document.body.appendChild(img);
}
