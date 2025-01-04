// Sample video data
const videos = 

const container = document.querySelector(".video-container");

videos.forEach(video => {
    const videoItem = document.createElement("div");
    videoItem.classList.add("video-item");

    videoItem.innerHTML = `
        <img src="${video.thumbnail}" alt="Video Thumbnail" class="thumbnail">
        <h2>${video.title}</h2>
        <a href="${video.videoUrl}" class="download-btn" download>Download</a>
        <a href="${video.creditUrl}" class="credit-btn" target="_blank">Credit</a>
    `;

    container.appendChild(videoItem);
});
