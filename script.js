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
    let existingMedia = document.getElementById("mediaContainer");
    if (existingMedia) {
        existingMedia.innerHTML = "";
    }
}

function showVideo(videoSrc) {
    let container = getOrCreateMediaContainer();

    let video = document.createElement("video");
    video.src = videoSrc;
    video.autoplay = true;
    video.loop = true;
    video.controls = true;
    video.style.width = "600px"; 
    video.style.maxWidth = "100%"; 

    container.appendChild(video);
}

function showGif(gifSrc) {
    let container = getOrCreateMediaContainer();

    let img = document.createElement("img");
    img.src = gifSrc;
    img.style.width = "600px"; 
    img.style.maxWidth = "100%";

    container.appendChild(img);
}

function getOrCreateMediaContainer() {
    let container = document.getElementById("mediaContainer");
    if (!container) {
        container = document.createElement("div");
        container.id = "mediaContainer";
        container.style.textAlign = "center"; 
        container.style.marginTop = "20px"; 

        let inputField = document.getElementById("inputField");
        inputField.parentNode.insertBefore(container, inputField.nextSibling);
    }
    return container;
}
