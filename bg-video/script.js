document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.back-video');

    // Pause video on click
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
